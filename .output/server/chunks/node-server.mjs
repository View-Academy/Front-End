globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.png": {
    "type": "image/png",
    "etag": "\"329-yW8j+67g8QEQPNgZMCT6h566tBo\"",
    "mtime": "2022-12-06T10:57:04.000Z",
    "size": 809,
    "path": "../public/favicon.png"
  },
  "/nuxt-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"256-m072qY8PEH/FCq0Fml093yclAew\"",
    "mtime": "2022-11-21T08:00:24.000Z",
    "size": 598,
    "path": "../public/nuxt-logo.svg"
  },
  "/_nuxt/404.22455772.svg": {
    "type": "image/svg+xml",
    "etag": "\"c0d08-QJDN7ccYVqayaynTa1GPljuaseM\"",
    "mtime": "2023-04-15T00:46:21.759Z",
    "size": 789768,
    "path": "../public/_nuxt/404.22455772.svg"
  },
  "/_nuxt/Address.8af310cf.js": {
    "type": "application/javascript",
    "etag": "\"2cd7-SbSTeDpPJpWE0ilV3yyhtcHcTUc\"",
    "mtime": "2023-04-15T00:46:21.758Z",
    "size": 11479,
    "path": "../public/_nuxt/Address.8af310cf.js"
  },
  "/_nuxt/all-projects.5a731c73.js": {
    "type": "application/javascript",
    "etag": "\"2d88-5lRcSp90izUAndj/lolsJKywKyE\"",
    "mtime": "2023-04-15T00:46:21.811Z",
    "size": 11656,
    "path": "../public/_nuxt/all-projects.5a731c73.js"
  },
  "/_nuxt/analytics.7f0b44b0.js": {
    "type": "application/javascript",
    "etag": "\"2bf9-Mw6UetpkF6fn3suIgKvI0TDT8TM\"",
    "mtime": "2023-04-15T00:46:21.741Z",
    "size": 11257,
    "path": "../public/_nuxt/analytics.7f0b44b0.js"
  },
  "/_nuxt/ArgonAvatar.15e71eb6.js": {
    "type": "application/javascript",
    "etag": "\"2f0-isuun0Xr+qfkN4zop0IbVhQemWo\"",
    "mtime": "2023-04-15T00:46:21.738Z",
    "size": 752,
    "path": "../public/_nuxt/ArgonAvatar.15e71eb6.js"
  },
  "/_nuxt/ArgonBadge.a94b3751.js": {
    "type": "application/javascript",
    "etag": "\"2a0-viC3QM6hqOeVchyJNxHIAgYrK5k\"",
    "mtime": "2023-04-15T00:46:21.790Z",
    "size": 672,
    "path": "../public/_nuxt/ArgonBadge.a94b3751.js"
  },
  "/_nuxt/ArgonButton.a37ff266.js": {
    "type": "application/javascript",
    "etag": "\"2b4-UGNvCasKdhsShUpySYNm/d+SJ5U\"",
    "mtime": "2023-04-15T00:46:21.738Z",
    "size": 692,
    "path": "../public/_nuxt/ArgonButton.a37ff266.js"
  },
  "/_nuxt/ArgonCheckbox.935e1c17.js": {
    "type": "application/javascript",
    "etag": "\"224-I2CAOp43Cd/kY5uodqTOwFhTmaA\"",
    "mtime": "2023-04-15T00:46:21.774Z",
    "size": 548,
    "path": "../public/_nuxt/ArgonCheckbox.935e1c17.js"
  },
  "/_nuxt/ArgonInput.fa6336e4.js": {
    "type": "application/javascript",
    "etag": "\"594-DRjm+EJa0jyX9nb4UjJAPu2auHc\"",
    "mtime": "2023-04-15T00:46:21.770Z",
    "size": 1428,
    "path": "../public/_nuxt/ArgonInput.fa6336e4.js"
  },
  "/_nuxt/ArgonSnackbar.3b69b965.js": {
    "type": "application/javascript",
    "etag": "\"578-ggqLpinge0ksjLjdzPekh7bA8sM\"",
    "mtime": "2023-04-15T00:46:21.771Z",
    "size": 1400,
    "path": "../public/_nuxt/ArgonSnackbar.3b69b965.js"
  },
  "/_nuxt/ArgonSwitch.7c91444c.js": {
    "type": "application/javascript",
    "etag": "\"299-aKVqVPTfCz2Sl/zxEc2vBXFR2vI\"",
    "mtime": "2023-04-15T00:46:21.772Z",
    "size": 665,
    "path": "../public/_nuxt/ArgonSwitch.7c91444c.js"
  },
  "/_nuxt/AU.dd96c865.js": {
    "type": "application/javascript",
    "etag": "\"1f65-DekQX93W1hGZVfSOr+pEN4qPRW8\"",
    "mtime": "2023-04-15T00:46:21.784Z",
    "size": 8037,
    "path": "../public/_nuxt/AU.dd96c865.js"
  },
  "/_nuxt/authentication.ea860608.js": {
    "type": "application/javascript",
    "etag": "\"19d-lzkBwGWuPI9lgIeRi4IPeS3yr8A\"",
    "mtime": "2023-04-15T00:46:21.821Z",
    "size": 413,
    "path": "../public/_nuxt/authentication.ea860608.js"
  },
  "/_nuxt/automotive.22b24dec.png": {
    "type": "image/png",
    "etag": "\"2137b1-jX4go5woiHh6vifgPsRUihfHCEY\"",
    "mtime": "2023-04-15T00:46:21.857Z",
    "size": 2176945,
    "path": "../public/_nuxt/automotive.22b24dec.png"
  },
  "/_nuxt/automotive.a1c72ebe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3aa7-DNZfneGIlyhjX9PtmfrULJ/wNDw\"",
    "mtime": "2023-04-15T00:46:21.848Z",
    "size": 15015,
    "path": "../public/_nuxt/automotive.a1c72ebe.css"
  },
  "/_nuxt/automotive.e7e803eb.js": {
    "type": "application/javascript",
    "etag": "\"261f7-M0A1mQ3uXGFsrq1Fqz85NU5wh74\"",
    "mtime": "2023-04-15T00:46:21.789Z",
    "size": 156151,
    "path": "../public/_nuxt/automotive.e7e803eb.js"
  },
  "/_nuxt/BarChartHorizontal.fa8246a6.js": {
    "type": "application/javascript",
    "etag": "\"83e-m+SpEkT0/z5pKaw247ok1SpZTZU\"",
    "mtime": "2023-04-15T00:46:21.731Z",
    "size": 2110,
    "path": "../public/_nuxt/BarChartHorizontal.fa8246a6.js"
  },
  "/_nuxt/basic.0ed6d0e1.js": {
    "type": "application/javascript",
    "etag": "\"b7d-+B3cMiDAJ3m7ov0TVK4wmt/le1I\"",
    "mtime": "2023-04-15T00:46:21.774Z",
    "size": 2941,
    "path": "../public/_nuxt/basic.0ed6d0e1.js"
  },
  "/_nuxt/basic.34815638.js": {
    "type": "application/javascript",
    "etag": "\"d01-oB6JBJgSGGN7Mjw1fjm3R4tu/N4\"",
    "mtime": "2023-04-15T00:46:21.770Z",
    "size": 3329,
    "path": "../public/_nuxt/basic.34815638.js"
  },
  "/_nuxt/basic.69f1d2de.js": {
    "type": "application/javascript",
    "etag": "\"5bc-0BIB5ZWgII9af+/6daf13pK8fvU\"",
    "mtime": "2023-04-15T00:46:21.768Z",
    "size": 1468,
    "path": "../public/_nuxt/basic.69f1d2de.js"
  },
  "/_nuxt/basic.853b23bc.js": {
    "type": "application/javascript",
    "etag": "\"11d9-bT7N305uC9MsdHWeBwzLkDUzzXY\"",
    "mtime": "2023-04-15T00:46:21.776Z",
    "size": 4569,
    "path": "../public/_nuxt/basic.853b23bc.js"
  },
  "/_nuxt/basic.88c43b7c.js": {
    "type": "application/javascript",
    "etag": "\"5e2-zLT/Jl1MrZo4SQDQ41tIWK1rpgE\"",
    "mtime": "2023-04-15T00:46:21.770Z",
    "size": 1506,
    "path": "../public/_nuxt/basic.88c43b7c.js"
  },
  "/_nuxt/billing.8b7aa919.js": {
    "type": "application/javascript",
    "etag": "\"21f3-QxrM3FMgawOdsQ7RNDlq0aPQgFY\"",
    "mtime": "2023-04-15T00:46:21.806Z",
    "size": 8691,
    "path": "../public/_nuxt/billing.8b7aa919.js"
  },
  "/_nuxt/bootstrap.5ec8f604.svg": {
    "type": "image/svg+xml",
    "etag": "\"908-oJsryPft73X96y1Q6AxEfISkyaA\"",
    "mtime": "2023-04-15T00:46:21.685Z",
    "size": 2312,
    "path": "../public/_nuxt/bootstrap.5ec8f604.svg"
  },
  "/_nuxt/bruce-mars.0070d242.jpg": {
    "type": "image/jpeg",
    "etag": "\"1330a-cYTEiExSbIYVWjODsstjzE9tABo\"",
    "mtime": "2023-04-15T00:46:21.710Z",
    "size": 78602,
    "path": "../public/_nuxt/bruce-mars.0070d242.jpg"
  },
  "/_nuxt/bruce-mars.755404aa.js": {
    "type": "application/javascript",
    "etag": "\"53-DNIuyJOnwOsxkF1xH8vbv6vRvY4\"",
    "mtime": "2023-04-15T00:46:21.760Z",
    "size": 83,
    "path": "../public/_nuxt/bruce-mars.755404aa.js"
  },
  "/_nuxt/Calendar.0fa79e80.js": {
    "type": "application/javascript",
    "etag": "\"3661b-VZkTFXqNwb0j2jtgS/SSWgWqEkA\"",
    "mtime": "2023-04-15T00:46:21.773Z",
    "size": 222747,
    "path": "../public/_nuxt/Calendar.0fa79e80.js"
  },
  "/_nuxt/calendar.1c2715e9.js": {
    "type": "application/javascript",
    "etag": "\"1145-EUfGbA9eCy+BqgXTwtCqm1ZRrZg\"",
    "mtime": "2023-04-15T00:46:21.750Z",
    "size": 4421,
    "path": "../public/_nuxt/calendar.1c2715e9.js"
  },
  "/_nuxt/Calendar.ff8b6f1a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"45e9-76ZLp8c9X/EVfGBIVyBfdhXpTOc\"",
    "mtime": "2023-04-15T00:46:21.849Z",
    "size": 17897,
    "path": "../public/_nuxt/Calendar.ff8b6f1a.css"
  },
  "/_nuxt/card-visa.6f652bc2.jpg": {
    "type": "image/jpeg",
    "etag": "\"3ba7f-d+1fQwRb1eCRYrk0lWLKZFCUABA\"",
    "mtime": "2023-04-15T00:46:21.728Z",
    "size": 244351,
    "path": "../public/_nuxt/card-visa.6f652bc2.jpg"
  },
  "/_nuxt/CategoriesList.10f33913.js": {
    "type": "application/javascript",
    "etag": "\"586-jcn0fnr0YfeexJR2juGcsJuva/8\"",
    "mtime": "2023-04-15T00:46:21.780Z",
    "size": 1414,
    "path": "../public/_nuxt/CategoriesList.10f33913.js"
  },
  "/_nuxt/Centered.c56314f4.js": {
    "type": "application/javascript",
    "etag": "\"720-Yr2yhP71x7+VgczahxhFMIpqBew\"",
    "mtime": "2023-04-15T00:46:21.763Z",
    "size": 1824,
    "path": "../public/_nuxt/Centered.c56314f4.js"
  },
  "/_nuxt/ChannelsCard.490da952.js": {
    "type": "application/javascript",
    "etag": "\"68e-vawzYcUiIr4vjXo46NQB7LCBel8\"",
    "mtime": "2023-04-15T00:46:21.731Z",
    "size": 1678,
    "path": "../public/_nuxt/ChannelsCard.490da952.js"
  },
  "/_nuxt/charts.2b107f27.js": {
    "type": "application/javascript",
    "etag": "\"19df-HbX1zVPOr46zLyN+0mB5/EhTkcc\"",
    "mtime": "2023-04-15T00:46:21.810Z",
    "size": 6623,
    "path": "../public/_nuxt/charts.2b107f27.js"
  },
  "/_nuxt/choices.b66eef54.js": {
    "type": "application/javascript",
    "etag": "\"15f4e-DjoH0KHtIKA9bs0T0N1wnPuaD2k\"",
    "mtime": "2023-04-15T00:46:21.733Z",
    "size": 89934,
    "path": "../public/_nuxt/choices.b66eef54.js"
  },
  "/_nuxt/ComplexBackgroundCard.8124fe04.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d-mWVjMAIqSJj7TcRxzfJfG5feDew\"",
    "mtime": "2023-04-15T00:46:21.838Z",
    "size": 45,
    "path": "../public/_nuxt/ComplexBackgroundCard.8124fe04.css"
  },
  "/_nuxt/ComplexBackgroundCard.9bd1dc62.js": {
    "type": "application/javascript",
    "etag": "\"58f-yvBK4umMVUKLQ8rATqpszB5tzGI\"",
    "mtime": "2023-04-15T00:46:21.778Z",
    "size": 1423,
    "path": "../public/_nuxt/ComplexBackgroundCard.9bd1dc62.js"
  },
  "/_nuxt/composables.954782f3.js": {
    "type": "application/javascript",
    "etag": "\"61-heiPnSgdgF/KvKeLAkUkygmLvb8\"",
    "mtime": "2023-04-15T00:46:21.760Z",
    "size": 97,
    "path": "../public/_nuxt/composables.954782f3.js"
  },
  "/_nuxt/courses.43f917ef.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a-grvW/9XQChV8zhYP13MT7GnHT08\"",
    "mtime": "2023-04-15T00:46:21.831Z",
    "size": 90,
    "path": "../public/_nuxt/courses.43f917ef.css"
  },
  "/_nuxt/courses.db3cca84.js": {
    "type": "application/javascript",
    "etag": "\"d12-pXui2Drh/Z66+uLnnxHiY51FNFM\"",
    "mtime": "2023-04-15T00:46:21.776Z",
    "size": 3346,
    "path": "../public/_nuxt/courses.db3cca84.js"
  },
  "/_nuxt/cover.3e9cec96.js": {
    "type": "application/javascript",
    "etag": "\"653-K50O/pJCDfgnED/bY6DeSgmeNLo\"",
    "mtime": "2023-04-15T00:46:21.769Z",
    "size": 1619,
    "path": "../public/_nuxt/cover.3e9cec96.js"
  },
  "/_nuxt/cover.3f287769.js": {
    "type": "application/javascript",
    "etag": "\"1b6c-UMHrvg8yqDr5GnXeaP/MhDdkjGc\"",
    "mtime": "2023-04-15T00:46:21.775Z",
    "size": 7020,
    "path": "../public/_nuxt/cover.3f287769.js"
  },
  "/_nuxt/cover.45156876.js": {
    "type": "application/javascript",
    "etag": "\"9f2-AV4uEgqjkbmFmQQ3iVTOOca94us\"",
    "mtime": "2023-04-15T00:46:21.776Z",
    "size": 2546,
    "path": "../public/_nuxt/cover.45156876.js"
  },
  "/_nuxt/cover.540f6f3e.js": {
    "type": "application/javascript",
    "etag": "\"8a2-oB0MmbEs2Rzb5GdQHMnXWJTakJ0\"",
    "mtime": "2023-04-15T00:46:21.769Z",
    "size": 2210,
    "path": "../public/_nuxt/cover.540f6f3e.js"
  },
  "/_nuxt/cover.5aaf140d.js": {
    "type": "application/javascript",
    "etag": "\"936-Sj1tKoEj1DAXaGvMBGks/hjpLfw\"",
    "mtime": "2023-04-15T00:46:21.772Z",
    "size": 2358,
    "path": "../public/_nuxt/cover.5aaf140d.js"
  },
  "/_nuxt/crm.7c334f05.js": {
    "type": "application/javascript",
    "etag": "\"15ac-ti/ICbehjrb/cWe4hTx+UQ3M09A\"",
    "mtime": "2023-04-15T00:46:21.779Z",
    "size": 5548,
    "path": "../public/_nuxt/crm.7c334f05.js"
  },
  "/_nuxt/crm.dc9ce44b.png": {
    "type": "image/png",
    "etag": "\"1487b4-kCtT38B5reAVllqFNhprs2JL9g4\"",
    "mtime": "2023-04-15T00:46:21.831Z",
    "size": 1345460,
    "path": "../public/_nuxt/crm.dc9ce44b.png"
  },
  "/_nuxt/curved8.d64060e7.jpg": {
    "type": "image/jpeg",
    "etag": "\"40069-9WEi9c2Los+OeZnZNiQCyeXtMzk\"",
    "mtime": "2023-04-15T00:46:21.730Z",
    "size": 262249,
    "path": "../public/_nuxt/curved8.d64060e7.jpg"
  },
  "/_nuxt/data-tables.23ce9d3e.js": {
    "type": "application/javascript",
    "etag": "\"9b45-OWm/5c5AfgZor4ySKlq7DOGoCl8\"",
    "mtime": "2023-04-15T00:46:21.760Z",
    "size": 39749,
    "path": "../public/_nuxt/data-tables.23ce9d3e.js"
  },
  "/_nuxt/datatable.00d336d1.js": {
    "type": "application/javascript",
    "etag": "\"6d62-hlAA72mIDkk+Z2Chqhb68my96hk\"",
    "mtime": "2023-04-15T00:46:21.759Z",
    "size": 28002,
    "path": "../public/_nuxt/datatable.00d336d1.js"
  },
  "/_nuxt/date.5164edae.js": {
    "type": "application/javascript",
    "etag": "\"28d3-pv+F8LYJPuxrHMfWlyXr031hKcs\"",
    "mtime": "2023-04-15T00:46:21.829Z",
    "size": 10451,
    "path": "../public/_nuxt/date.5164edae.js"
  },
  "/_nuxt/default.110ac93d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"39-K8DReF3tYHYXQ8iV3QL8XCkG4oQ\"",
    "mtime": "2023-04-15T00:46:21.836Z",
    "size": 57,
    "path": "../public/_nuxt/default.110ac93d.css"
  },
  "/_nuxt/default.2c3c63cf.png": {
    "type": "image/png",
    "etag": "\"20a7c0-FiEKAgUaWfK6X9CEeEPROPlBg7c\"",
    "mtime": "2023-04-15T00:46:21.857Z",
    "size": 2140096,
    "path": "../public/_nuxt/default.2c3c63cf.png"
  },
  "/_nuxt/default.2fda8dac.js": {
    "type": "application/javascript",
    "etag": "\"f75-s2dsULBR7WR3CMHMEUum4/1FovA\"",
    "mtime": "2023-04-15T00:46:21.783Z",
    "size": 3957,
    "path": "../public/_nuxt/default.2fda8dac.js"
  },
  "/_nuxt/default.a0b4e26d.js": {
    "type": "application/javascript",
    "etag": "\"47c-wGZCR0GabBwYU+BLBg3SfF9QMEA\"",
    "mtime": "2023-04-15T00:46:21.821Z",
    "size": 1148,
    "path": "../public/_nuxt/default.a0b4e26d.js"
  },
  "/_nuxt/DefaultInfoCard.fcab95ae.js": {
    "type": "application/javascript",
    "etag": "\"3db-0Ikx0/IDSyDNVXBNGezmNq+htbw\"",
    "mtime": "2023-04-15T00:46:21.789Z",
    "size": 987,
    "path": "../public/_nuxt/DefaultInfoCard.fcab95ae.js"
  },
  "/_nuxt/DefaultItem.619f9c7e.js": {
    "type": "application/javascript",
    "etag": "\"2d2-zXHbJqs9ZFW/UBYYdE1oDGMbfMU\"",
    "mtime": "2023-04-15T00:46:21.757Z",
    "size": 722,
    "path": "../public/_nuxt/DefaultItem.619f9c7e.js"
  },
  "/_nuxt/DefaultLineChart.566fd09d.js": {
    "type": "application/javascript",
    "etag": "\"48a-63UTXB7ToyC23wM8BoT3ymIyCaU\"",
    "mtime": "2023-04-15T00:46:21.743Z",
    "size": 1162,
    "path": "../public/_nuxt/DefaultLineChart.566fd09d.js"
  },
  "/_nuxt/DefaultStatisticsCard.1f8b6f6d.js": {
    "type": "application/javascript",
    "etag": "\"b56-7WkYUSC1eqJyq7qFYXLOjpcU7Cg\"",
    "mtime": "2023-04-15T00:46:21.731Z",
    "size": 2902,
    "path": "../public/_nuxt/DefaultStatisticsCard.1f8b6f6d.js"
  },
  "/_nuxt/DoughnutChart.cb6f18d4.js": {
    "type": "application/javascript",
    "etag": "\"2ce-qgcmWAIDAvMJv5edjwNE1tnBgjQ\"",
    "mtime": "2023-04-15T00:46:21.745Z",
    "size": 718,
    "path": "../public/_nuxt/DoughnutChart.cb6f18d4.js"
  },
  "/_nuxt/down-arrow-dark.13d4c70e.svg": {
    "type": "image/svg+xml",
    "etag": "\"44c-Yg6nMEKri9IeRZXCLAG0b5TWCHM\"",
    "mtime": "2023-04-15T00:46:21.707Z",
    "size": 1100,
    "path": "../public/_nuxt/down-arrow-dark.13d4c70e.svg"
  },
  "/_nuxt/down-arrow-white.e66846bd.svg": {
    "type": "image/svg+xml",
    "etag": "\"22e-z6kR+v4SkcHcGX2EQb3fVdtGMY0\"",
    "mtime": "2023-04-15T00:46:21.707Z",
    "size": 558,
    "path": "../public/_nuxt/down-arrow-white.e66846bd.svg"
  },
  "/_nuxt/down-arrow.90145daf.svg": {
    "type": "image/svg+xml",
    "etag": "\"44b-cD7HpZmCe46owrWf35a7d8P1tlQ\"",
    "mtime": "2023-04-15T00:46:21.708Z",
    "size": 1099,
    "path": "../public/_nuxt/down-arrow.90145daf.svg"
  },
  "/_nuxt/dropzone.ec2618c5.js": {
    "type": "application/javascript",
    "etag": "\"90b1-VhQYNPpi5OqCr98wh/xHd3q7Tk0\"",
    "mtime": "2023-04-15T00:46:21.741Z",
    "size": 37041,
    "path": "../public/_nuxt/dropzone.ec2618c5.js"
  },
  "/_nuxt/edit-cuorses.2c0fffaf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43-s87czNjXwMHvHYffCPqDE9oxVd0\"",
    "mtime": "2023-04-15T00:46:21.830Z",
    "size": 67,
    "path": "../public/_nuxt/edit-cuorses.2c0fffaf.css"
  },
  "/_nuxt/edit-cuorses.872b0351.js": {
    "type": "application/javascript",
    "etag": "\"1023-llGKiESW3alTCNuw+xCfAGqpROE\"",
    "mtime": "2023-04-15T00:46:21.726Z",
    "size": 4131,
    "path": "../public/_nuxt/edit-cuorses.872b0351.js"
  },
  "/_nuxt/edit-product.2cfca620.js": {
    "type": "application/javascript",
    "etag": "\"15a0-p0HH/5/I5DSHu6+v4P2EGKtcTuk\"",
    "mtime": "2023-04-15T00:46:21.800Z",
    "size": 5536,
    "path": "../public/_nuxt/edit-product.2cfca620.js"
  },
  "/_nuxt/entry.2447e9b1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"74933-uFpYrqyxRhgZ9LbAx8FM8+s/o3A\"",
    "mtime": "2023-04-15T00:46:21.854Z",
    "size": 477491,
    "path": "../public/_nuxt/entry.2447e9b1.css"
  },
  "/_nuxt/entry.5a09969b.js": {
    "type": "application/javascript",
    "etag": "\"bce44-cARll90puXrEMr/XShFKhmIvKRg\"",
    "mtime": "2023-04-15T00:46:21.784Z",
    "size": 773700,
    "path": "../public/_nuxt/entry.5a09969b.js"
  },
  "/_nuxt/error-404.16f48349.js": {
    "type": "application/javascript",
    "etag": "\"8ca-5xMi/rb1EtU6TqfEQms+iKptwPU\"",
    "mtime": "2023-04-15T00:46:21.828Z",
    "size": 2250,
    "path": "../public/_nuxt/error-404.16f48349.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-04-15T00:46:21.838Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-500.52586e7b.js": {
    "type": "application/javascript",
    "etag": "\"773-LZkSeWL9mufykPbDeRvy2HO5h0k\"",
    "mtime": "2023-04-15T00:46:21.829Z",
    "size": 1907,
    "path": "../public/_nuxt/error-500.52586e7b.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-04-15T00:46:21.838Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.deb5608f.js": {
    "type": "application/javascript",
    "etag": "\"4ad-wn5YuG9Ejp4K14VV4+TDpFGTGc8\"",
    "mtime": "2023-04-15T00:46:21.725Z",
    "size": 1197,
    "path": "../public/_nuxt/error-component.deb5608f.js"
  },
  "/_nuxt/error404.8f58f50e.js": {
    "type": "application/javascript",
    "etag": "\"4ac-g5Js86dRqAtOQYHWxriUcleCYTY\"",
    "mtime": "2023-04-15T00:46:21.760Z",
    "size": 1196,
    "path": "../public/_nuxt/error404.8f58f50e.js"
  },
  "/_nuxt/error500.609b83f8.js": {
    "type": "application/javascript",
    "etag": "\"571-bKm0Hsly874JqPEhyGtPh5tAHoM\"",
    "mtime": "2023-04-15T00:46:21.766Z",
    "size": 1393,
    "path": "../public/_nuxt/error500.609b83f8.js"
  },
  "/_nuxt/flash-card.7895acb6.js": {
    "type": "application/javascript",
    "etag": "\"129c-vmCJ349IaxqL37fKSDJ9vY/nq9o\"",
    "mtime": "2023-04-15T00:46:21.784Z",
    "size": 4764,
    "path": "../public/_nuxt/flash-card.7895acb6.js"
  },
  "/_nuxt/general.c7169ed7.js": {
    "type": "application/javascript",
    "etag": "\"1df3-cyi1+hNOj3/KIE4vnCT6SRBbPpw\"",
    "mtime": "2023-04-15T00:46:21.815Z",
    "size": 7667,
    "path": "../public/_nuxt/general.c7169ed7.js"
  },
  "/_nuxt/generate-quiz.cb08da4b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2a-5vc2z96oQ8OhjC4iwbXZQgJ89gU\"",
    "mtime": "2023-04-15T00:46:21.837Z",
    "size": 42,
    "path": "../public/_nuxt/generate-quiz.cb08da4b.css"
  },
  "/_nuxt/generate-quiz.f9052387.js": {
    "type": "application/javascript",
    "etag": "\"3171-9DHxWyWgnjW+mcQCuYMhjLRO1sQ\"",
    "mtime": "2023-04-15T00:46:21.785Z",
    "size": 12657,
    "path": "../public/_nuxt/generate-quiz.f9052387.js"
  },
  "/_nuxt/home-decor-1.d2582b58.jpg": {
    "type": "image/jpeg",
    "etag": "\"1110c-P2pHBx+flKBm2aG757z9BOaguHk\"",
    "mtime": "2023-04-15T00:46:21.710Z",
    "size": 69900,
    "path": "../public/_nuxt/home-decor-1.d2582b58.jpg"
  },
  "/_nuxt/home-decor-2.71914f6c.jpg": {
    "type": "image/jpeg",
    "etag": "\"159eb-5yHhAFDPr9x8+8LQR2sF5kxi7c8\"",
    "mtime": "2023-04-15T00:46:21.711Z",
    "size": 88555,
    "path": "../public/_nuxt/home-decor-2.71914f6c.jpg"
  },
  "/_nuxt/home-decor-3.098e36fb.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e6c3-ba6iK5/4WprmV7YRlT+z2LdOReE\"",
    "mtime": "2023-04-15T00:46:21.713Z",
    "size": 124611,
    "path": "../public/_nuxt/home-decor-3.098e36fb.jpg"
  },
  "/_nuxt/icon-bulb.a047fb9e.js": {
    "type": "application/javascript",
    "etag": "\"ca5-mmw49TJx4xIUepLyI1lubLaAQrc\"",
    "mtime": "2023-04-15T00:46:21.817Z",
    "size": 3237,
    "path": "../public/_nuxt/icon-bulb.a047fb9e.js"
  },
  "/_nuxt/icon-bulb.eca7e868.svg": {
    "type": "image/svg+xml",
    "etag": "\"10ea-Q1hNdY7bMU+Mf4Gx8Kie28KriC8\"",
    "mtime": "2023-04-15T00:46:21.699Z",
    "size": 4330,
    "path": "../public/_nuxt/icon-bulb.eca7e868.svg"
  },
  "/_nuxt/icon-documentation.afe845de.svg": {
    "type": "image/svg+xml",
    "etag": "\"8550-gMqjn6EYU8QuiAPuUyyCd+GDiNg\"",
    "mtime": "2023-04-15T00:46:21.698Z",
    "size": 34128,
    "path": "../public/_nuxt/icon-documentation.afe845de.svg"
  },
  "/_nuxt/icon-sun-cloud.c04aa6ea.js": {
    "type": "application/javascript",
    "etag": "\"57-ahVu7FdibrqWTpV7VqgcU6CAA8Y\"",
    "mtime": "2023-04-15T00:46:21.795Z",
    "size": 87,
    "path": "../public/_nuxt/icon-sun-cloud.c04aa6ea.js"
  },
  "/_nuxt/icon-sun-cloud.eadb0268.png": {
    "type": "image/png",
    "etag": "\"17a84-H50EA1f9HaOOFUvrpQJR3ZYN1Ww\"",
    "mtime": "2023-04-15T00:46:21.699Z",
    "size": 96900,
    "path": "../public/_nuxt/icon-sun-cloud.eadb0268.png"
  },
  "/_nuxt/illustration.0411358b.js": {
    "type": "application/javascript",
    "etag": "\"9ce-OQea6rUbIPdQd0M7P1lenUrqZEQ\"",
    "mtime": "2023-04-15T00:46:21.773Z",
    "size": 2510,
    "path": "../public/_nuxt/illustration.0411358b.js"
  },
  "/_nuxt/illustration.123378a4.js": {
    "type": "application/javascript",
    "etag": "\"ab1-ov48mkbnC8et/AOrdKUs7Zjf+XI\"",
    "mtime": "2023-04-15T00:46:21.775Z",
    "size": 2737,
    "path": "../public/_nuxt/illustration.123378a4.js"
  },
  "/_nuxt/illustration.4142d657.js": {
    "type": "application/javascript",
    "etag": "\"85a-ClS91tPH0h9YNwqJoYixK9XjQs0\"",
    "mtime": "2023-04-15T00:46:21.770Z",
    "size": 2138,
    "path": "../public/_nuxt/illustration.4142d657.js"
  },
  "/_nuxt/illustration.4d8d5dca.js": {
    "type": "application/javascript",
    "etag": "\"ab5-jYmEMe8o7T130RhfDy3Rg3/Ngd0\"",
    "mtime": "2023-04-15T00:46:21.776Z",
    "size": 2741,
    "path": "../public/_nuxt/illustration.4d8d5dca.js"
  },
  "/_nuxt/illustration.54dabd93.js": {
    "type": "application/javascript",
    "etag": "\"7bd-jbBGI4o+jCmT04f8uzfUn9e4mEU\"",
    "mtime": "2023-04-15T00:46:21.768Z",
    "size": 1981,
    "path": "../public/_nuxt/illustration.54dabd93.js"
  },
  "/_nuxt/img-1-1200x1000.ecbd3773.jpg": {
    "type": "image/jpeg",
    "etag": "\"2e941-77asvKDtV/w+qufrKo7XOO/dZv8\"",
    "mtime": "2023-04-15T00:46:21.728Z",
    "size": 190785,
    "path": "../public/_nuxt/img-1-1200x1000.ecbd3773.jpg"
  },
  "/_nuxt/img-1.5f18a75e.jpg": {
    "type": "image/jpeg",
    "etag": "\"55844-p5yfUVfpIm+uwqOXh5+O9SjVZJI\"",
    "mtime": "2023-04-15T00:46:21.719Z",
    "size": 350276,
    "path": "../public/_nuxt/img-1.5f18a75e.jpg"
  },
  "/_nuxt/img-2.3c2dffc1.jpg": {
    "type": "image/jpeg",
    "etag": "\"59545-YGvwqetPI804MAcrgui7eMHIw+0\"",
    "mtime": "2023-04-15T00:46:21.723Z",
    "size": 365893,
    "path": "../public/_nuxt/img-2.3c2dffc1.jpg"
  },
  "/_nuxt/img-3.30443530.jpg": {
    "type": "image/jpeg",
    "etag": "\"454fb-JuZ71EMFv2Ecw49aJK3K/EzpafM\"",
    "mtime": "2023-04-15T00:46:21.715Z",
    "size": 283899,
    "path": "../public/_nuxt/img-3.30443530.jpg"
  },
  "/_nuxt/index.15f27ee0.js": {
    "type": "application/javascript",
    "etag": "\"2797-hEgQhpm3TXA68ayM5s5J0c+tOLg\"",
    "mtime": "2023-04-15T00:46:21.821Z",
    "size": 10135,
    "path": "../public/_nuxt/index.15f27ee0.js"
  },
  "/_nuxt/index.5cdd8fb1.js": {
    "type": "application/javascript",
    "etag": "\"be-dH2SSWBIro6DDnP69AWFTi+DEdw\"",
    "mtime": "2023-04-15T00:46:21.804Z",
    "size": 190,
    "path": "../public/_nuxt/index.5cdd8fb1.js"
  },
  "/_nuxt/index.5fc4e5ca.js": {
    "type": "application/javascript",
    "etag": "\"53f-yR9v09uZgM3PqFDc/qkr+XoaFuM\"",
    "mtime": "2023-04-15T00:46:21.791Z",
    "size": 1343,
    "path": "../public/_nuxt/index.5fc4e5ca.js"
  },
  "/_nuxt/index.88cb4cc6.js": {
    "type": "application/javascript",
    "etag": "\"17e1-XpGZxfOkFfXFR7ljDA3M9aEYNfI\"",
    "mtime": "2023-04-15T00:46:21.789Z",
    "size": 6113,
    "path": "../public/_nuxt/index.88cb4cc6.js"
  },
  "/_nuxt/index.9c0a9230.js": {
    "type": "application/javascript",
    "etag": "\"51e-PrbnuYMLsIpzm3HAAER6mXtmBCQ\"",
    "mtime": "2023-04-15T00:46:21.826Z",
    "size": 1310,
    "path": "../public/_nuxt/index.9c0a9230.js"
  },
  "/_nuxt/index.c4c254ae.js": {
    "type": "application/javascript",
    "etag": "\"40a-MzGpc5LFnEC0XsNwMBCC4pKD3rw\"",
    "mtime": "2023-04-15T00:46:21.821Z",
    "size": 1034,
    "path": "../public/_nuxt/index.c4c254ae.js"
  },
  "/_nuxt/index.fbbfaaa8.js": {
    "type": "application/javascript",
    "etag": "\"d2d-mC5bFnc8G0zsBo45maKCIOQWNAA\"",
    "mtime": "2023-04-15T00:46:21.792Z",
    "size": 3373,
    "path": "../public/_nuxt/index.fbbfaaa8.js"
  },
  "/_nuxt/index.fd33b88b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36-xAXb79J9dNYFqyeCtqtNddW77og\"",
    "mtime": "2023-04-15T00:46:21.832Z",
    "size": 54,
    "path": "../public/_nuxt/index.fd33b88b.css"
  },
  "/_nuxt/InfoCard.87e72536.js": {
    "type": "application/javascript",
    "etag": "\"2cd-fiTbQBwoQqMdKZZqZe2KzRy460c\"",
    "mtime": "2023-04-15T00:46:21.786Z",
    "size": 717,
    "path": "../public/_nuxt/InfoCard.87e72536.js"
  },
  "/_nuxt/invoice.34c44226.js": {
    "type": "application/javascript",
    "etag": "\"d86-R5NuawzdxYh5Enteyk81BY6ab1U\"",
    "mtime": "2023-04-15T00:46:21.810Z",
    "size": 3462,
    "path": "../public/_nuxt/invoice.34c44226.js"
  },
  "/_nuxt/ivana-square.1d328be0.jpg": {
    "type": "image/jpeg",
    "etag": "\"36fa6-ItrRSNW6jJrYqp84jyS20ty0tRE\"",
    "mtime": "2023-04-15T00:46:21.718Z",
    "size": 225190,
    "path": "../public/_nuxt/ivana-square.1d328be0.jpg"
  },
  "/_nuxt/ivana-square.3a8331da.js": {
    "type": "application/javascript",
    "etag": "\"94-2M91pSCXr3uO0EKk/AlpOqwCA/k\"",
    "mtime": "2023-04-15T00:46:21.811Z",
    "size": 148,
    "path": "../public/_nuxt/ivana-square.3a8331da.js"
  },
  "/_nuxt/ivana-squares.18a26617.jpg": {
    "type": "image/jpeg",
    "etag": "\"1cf1d-Vpisw2tC5p12zYuOs5VOyjmruCs\"",
    "mtime": "2023-04-15T00:46:21.698Z",
    "size": 118557,
    "path": "../public/_nuxt/ivana-squares.18a26617.jpg"
  },
  "/_nuxt/ivana-squares.e98d8db2.js": {
    "type": "application/javascript",
    "etag": "\"56-cE4ZQQahBYkzYOvoeP5pq2Fq908\"",
    "mtime": "2023-04-15T00:46:21.792Z",
    "size": 86,
    "path": "../public/_nuxt/ivana-squares.e98d8db2.js"
  },
  "/_nuxt/ivancik.e8656254.jpg": {
    "type": "image/jpeg",
    "etag": "\"fc5f-NXrx0I7o3id21T2C+vHmXj43jKQ\"",
    "mtime": "2023-04-15T00:46:21.688Z",
    "size": 64607,
    "path": "../public/_nuxt/ivancik.e8656254.jpg"
  },
  "/_nuxt/kal-visuals-square.237e0532.js": {
    "type": "application/javascript",
    "etag": "\"5b-SJkF3Czh7theRReTtQMdz1DC4Ps\"",
    "mtime": "2023-04-15T00:46:21.780Z",
    "size": 91,
    "path": "../public/_nuxt/kal-visuals-square.237e0532.js"
  },
  "/_nuxt/kal-visuals-square.505e0ef8.jpg": {
    "type": "image/jpeg",
    "etag": "\"250ca-Nk+gDCmC8usIwU4DphBlfkl0kpU\"",
    "mtime": "2023-04-15T00:46:21.699Z",
    "size": 151754,
    "path": "../public/_nuxt/kal-visuals-square.505e0ef8.jpg"
  },
  "/_nuxt/landing.68654161.js": {
    "type": "application/javascript",
    "etag": "\"23f-fjyZXpy5k646BbCUtLl9O3s9ljk\"",
    "mtime": "2023-04-15T00:46:21.825Z",
    "size": 575,
    "path": "../public/_nuxt/landing.68654161.js"
  },
  "/_nuxt/landing.e2f8d461.js": {
    "type": "application/javascript",
    "etag": "\"7a9-aTEgaR/mpR2DKHQcVsgPLcY5vt0\"",
    "mtime": "2023-04-15T00:46:21.792Z",
    "size": 1961,
    "path": "../public/_nuxt/landing.e2f8d461.js"
  },
  "/_nuxt/logo-asana.05d0fec7.js": {
    "type": "application/javascript",
    "etag": "\"4e-BIgDbetSWyEOx6OWqYAU77oeI58\"",
    "mtime": "2023-04-15T00:46:21.798Z",
    "size": 78,
    "path": "../public/_nuxt/logo-asana.05d0fec7.js"
  },
  "/_nuxt/logo-asana.db376a5f.svg": {
    "type": "image/svg+xml",
    "etag": "\"6f5-CZ5XjbFPBbhkXVw4gBuZAVfO2aU\"",
    "mtime": "2023-04-15T00:46:21.685Z",
    "size": 1781,
    "path": "../public/_nuxt/logo-asana.db376a5f.svg"
  },
  "/_nuxt/logo-atlassian.42a1ed0f.js": {
    "type": "application/javascript",
    "etag": "\"57-kyuJyl+bIqZtSlb9PbIoqQB8dPw\"",
    "mtime": "2023-04-15T00:46:21.747Z",
    "size": 87,
    "path": "../public/_nuxt/logo-atlassian.42a1ed0f.js"
  },
  "/_nuxt/logo-atlassian.e07e30c9.svg": {
    "type": "image/svg+xml",
    "etag": "\"714-yxPVw8dFx38RIyIihLHSe16APrA\"",
    "mtime": "2023-04-15T00:46:21.707Z",
    "size": 1812,
    "path": "../public/_nuxt/logo-atlassian.e07e30c9.svg"
  },
  "/_nuxt/logo-coinbase.29c26b7e.svg": {
    "type": "image/svg+xml",
    "etag": "\"16f6-qRSCcTKK0GdEiDHG9IyEzEIJKH8\"",
    "mtime": "2023-04-15T00:46:21.695Z",
    "size": 5878,
    "path": "../public/_nuxt/logo-coinbase.29c26b7e.svg"
  },
  "/_nuxt/logo-ct.f238fc34.png": {
    "type": "image/png",
    "etag": "\"167c-/E7PEJ0UjGanhi58VCx7g3wEl80\"",
    "mtime": "2023-04-15T00:46:21.695Z",
    "size": 5756,
    "path": "../public/_nuxt/logo-ct.f238fc34.png"
  },
  "/_nuxt/logo-invision.190bba67.js": {
    "type": "application/javascript",
    "etag": "\"56-L9vjvHlzUnN4wDQdxHT9JrMCKJc\"",
    "mtime": "2023-04-15T00:46:21.798Z",
    "size": 86,
    "path": "../public/_nuxt/logo-invision.190bba67.js"
  },
  "/_nuxt/logo-invision.932e5beb.svg": {
    "type": "image/svg+xml",
    "etag": "\"a11-DXfWKVA+dZKljCeW6GM2FvaUiXE\"",
    "mtime": "2023-04-15T00:46:21.686Z",
    "size": 2577,
    "path": "../public/_nuxt/logo-invision.932e5beb.svg"
  },
  "/_nuxt/logo-jira.aad6820e.js": {
    "type": "application/javascript",
    "etag": "\"52-MBbxflIhDkztF7BOpFhW9oGge10\"",
    "mtime": "2023-04-15T00:46:21.749Z",
    "size": 82,
    "path": "../public/_nuxt/logo-jira.aad6820e.js"
  },
  "/_nuxt/logo-jira.f24fc0c2.svg": {
    "type": "image/svg+xml",
    "etag": "\"75e-t2WzutnMbRNoleI+xHf64/Qwqjo\"",
    "mtime": "2023-04-15T00:46:21.685Z",
    "size": 1886,
    "path": "../public/_nuxt/logo-jira.f24fc0c2.svg"
  },
  "/_nuxt/logo-nasa.41bb4f42.svg": {
    "type": "image/svg+xml",
    "etag": "\"1043-UDtSeQnS83CCIOXGQyLw69bMShw\"",
    "mtime": "2023-04-15T00:46:21.696Z",
    "size": 4163,
    "path": "../public/_nuxt/logo-nasa.41bb4f42.svg"
  },
  "/_nuxt/logo-netflix.e505e6be.svg": {
    "type": "image/svg+xml",
    "etag": "\"97b-I6z8ufzQK/Lm7ARkBK/MIBJjE4o\"",
    "mtime": "2023-04-15T00:46:21.696Z",
    "size": 2427,
    "path": "../public/_nuxt/logo-netflix.e505e6be.svg"
  },
  "/_nuxt/logo-pinterest.952f04bb.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b58-CDkspgV8GtipCC6omikdMM5Ip/E\"",
    "mtime": "2023-04-15T00:46:21.696Z",
    "size": 11096,
    "path": "../public/_nuxt/logo-pinterest.952f04bb.svg"
  },
  "/_nuxt/logo-slack.3a704a07.svg": {
    "type": "image/svg+xml",
    "etag": "\"c7e-VsqXsb2cjYOYonN9kpkHvR4BpQA\"",
    "mtime": "2023-04-15T00:46:21.686Z",
    "size": 3198,
    "path": "../public/_nuxt/logo-slack.3a704a07.svg"
  },
  "/_nuxt/logo-slack.868d68c7.js": {
    "type": "application/javascript",
    "etag": "\"53-5ICl2XOx2qKxFzLEqHP0QKs9DuQ\"",
    "mtime": "2023-04-15T00:46:21.748Z",
    "size": 83,
    "path": "../public/_nuxt/logo-slack.868d68c7.js"
  },
  "/_nuxt/logo-spotify.37f3657f.svg": {
    "type": "image/svg+xml",
    "etag": "\"790-N3mnGWBiBW8akaAQTcAHHkDl3Os\"",
    "mtime": "2023-04-15T00:46:21.685Z",
    "size": 1936,
    "path": "../public/_nuxt/logo-spotify.37f3657f.svg"
  },
  "/_nuxt/logo-spotify.8eab26b9.svg": {
    "type": "image/svg+xml",
    "etag": "\"2179-qTzTVPwjEGLsnTsfxY5Wj/4Mq7k\"",
    "mtime": "2023-04-15T00:46:21.696Z",
    "size": 8569,
    "path": "../public/_nuxt/logo-spotify.8eab26b9.svg"
  },
  "/_nuxt/logo-spotify.c101dc3d.js": {
    "type": "application/javascript",
    "etag": "\"55-3nYnucQVGyz9B1WREcfAXjah59s\"",
    "mtime": "2023-04-15T00:46:21.748Z",
    "size": 85,
    "path": "../public/_nuxt/logo-spotify.c101dc3d.js"
  },
  "/_nuxt/logo-vodafone.dca6e8b8.svg": {
    "type": "image/svg+xml",
    "etag": "\"285f-F9bXTITjJRRXYeC/HzIKyzUj64I\"",
    "mtime": "2023-04-15T00:46:21.696Z",
    "size": 10335,
    "path": "../public/_nuxt/logo-vodafone.dca6e8b8.svg"
  },
  "/_nuxt/logo-xd.3b4d8cb5.js": {
    "type": "application/javascript",
    "etag": "\"50-zD2/PJIvpCHUtNkH4hcazOzQPtY\"",
    "mtime": "2023-04-15T00:46:21.744Z",
    "size": 80,
    "path": "../public/_nuxt/logo-xd.3b4d8cb5.js"
  },
  "/_nuxt/logo-xd.f4f4a605.svg": {
    "type": "image/svg+xml",
    "etag": "\"c00-eeLgrW58L9/bIvUJIAGmM75HsEg\"",
    "mtime": "2023-04-15T00:46:21.686Z",
    "size": 3072,
    "path": "../public/_nuxt/logo-xd.f4f4a605.svg"
  },
  "/_nuxt/logo.b3e473c9.svg": {
    "type": "image/svg+xml",
    "etag": "\"8f3-F7dabifLDCSRPVn1QhscmDc8+Q8\"",
    "mtime": "2023-04-15T00:46:21.718Z",
    "size": 2291,
    "path": "../public/_nuxt/logo.b3e473c9.svg"
  },
  "/_nuxt/marie.864e6ea1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e73e-7htKT6FjYem/kwVQRItPcRdoXyg\"",
    "mtime": "2023-04-15T00:46:21.713Z",
    "size": 124734,
    "path": "../public/_nuxt/marie.864e6ea1.jpg"
  },
  "/_nuxt/mastercard.8028bf89.js": {
    "type": "application/javascript",
    "etag": "\"53-3zDbVlbZ1Mjhnm06x1H/8YznsTM\"",
    "mtime": "2023-04-15T00:46:21.800Z",
    "size": 83,
    "path": "../public/_nuxt/mastercard.8028bf89.js"
  },
  "/_nuxt/mastercard.aaf95d69.png": {
    "type": "image/png",
    "etag": "\"a3f2-tnF3me5no+OeXbsdnQkeNsvPuAI\"",
    "mtime": "2023-04-15T00:46:21.697Z",
    "size": 41970,
    "path": "../public/_nuxt/mastercard.aaf95d69.png"
  },
  "/_nuxt/MasterCard.e44d5711.js": {
    "type": "application/javascript",
    "etag": "\"641-BT940Iy9ZEYynfP8p033/VEZTFQ\"",
    "mtime": "2023-04-15T00:46:21.809Z",
    "size": 1601,
    "path": "../public/_nuxt/MasterCard.e44d5711.js"
  },
  "/_nuxt/MiniGradientLineChart.cf442fca.js": {
    "type": "application/javascript",
    "etag": "\"2cc-ZjutTt3nsoyhWWVmnQLxSa4228M\"",
    "mtime": "2023-04-15T00:46:21.757Z",
    "size": 716,
    "path": "../public/_nuxt/MiniGradientLineChart.cf442fca.js"
  },
  "/_nuxt/MiniPlayerCard.f784a0f2.js": {
    "type": "application/javascript",
    "etag": "\"5a5-yyhOnZsj/2kpWYs8YSLuCIpArlw\"",
    "mtime": "2023-04-15T00:46:21.799Z",
    "size": 1445,
    "path": "../public/_nuxt/MiniPlayerCard.f784a0f2.js"
  },
  "/_nuxt/MiniStatisticsCard.53a60dae.js": {
    "type": "application/javascript",
    "etag": "\"79f-KMBiyTNvyYUGGMNVK37FZ3Y643M\"",
    "mtime": "2023-04-15T00:46:21.742Z",
    "size": 1951,
    "path": "../public/_nuxt/MiniStatisticsCard.53a60dae.js"
  },
  "/_nuxt/nav-pills.dce9dffc.js": {
    "type": "application/javascript",
    "etag": "\"dce-33NJH9zDfvpxGgQ9tTPnbJIxeH8\"",
    "mtime": "2023-04-15T00:46:21.795Z",
    "size": 3534,
    "path": "../public/_nuxt/nav-pills.dce9dffc.js"
  },
  "/_nuxt/NavPill.dc577732.js": {
    "type": "application/javascript",
    "etag": "\"394-5SPudmRb56wXHVXeF19jmAo0yXQ\"",
    "mtime": "2023-04-15T00:46:21.809Z",
    "size": 916,
    "path": "../public/_nuxt/NavPill.dc577732.js"
  },
  "/_nuxt/NavStore.e1323869.js": {
    "type": "application/javascript",
    "etag": "\"13e77-flwH68Bdkly86y53aH0We2Tj2zI\"",
    "mtime": "2023-04-15T00:46:21.749Z",
    "size": 81527,
    "path": "../public/_nuxt/NavStore.e1323869.js"
  },
  "/_nuxt/new-cuorses.234f0a42.js": {
    "type": "application/javascript",
    "etag": "\"cf3-n5AqAZ5E4L+HEiWhe3giL8xtfMw\"",
    "mtime": "2023-04-15T00:46:21.726Z",
    "size": 3315,
    "path": "../public/_nuxt/new-cuorses.234f0a42.js"
  },
  "/_nuxt/new-product.edac62d5.js": {
    "type": "application/javascript",
    "etag": "\"3bfc-wZ+bSxdUHQo27jQXEp0Cnv8099I\"",
    "mtime": "2023-04-15T00:46:21.801Z",
    "size": 15356,
    "path": "../public/_nuxt/new-product.edac62d5.js"
  },
  "/_nuxt/new-project.37fb6fa1.js": {
    "type": "application/javascript",
    "etag": "\"e47f-NBMYzbpdtimZE36+thgsLIbABvM\"",
    "mtime": "2023-04-15T00:46:21.820Z",
    "size": 58495,
    "path": "../public/_nuxt/new-project.37fb6fa1.js"
  },
  "/_nuxt/new-user.edfa6135.js": {
    "type": "application/javascript",
    "etag": "\"2078-SUGly8XwDICio6ZNWpkNKYcm79s\"",
    "mtime": "2023-04-15T00:46:21.820Z",
    "size": 8312,
    "path": "../public/_nuxt/new-user.edfa6135.js"
  },
  "/_nuxt/notes.37756270.js": {
    "type": "application/javascript",
    "etag": "\"17c0-8o08iPBXGlfYLI5WUBmMZ/8R3Tk\"",
    "mtime": "2023-04-15T00:46:21.792Z",
    "size": 6080,
    "path": "../public/_nuxt/notes.37756270.js"
  },
  "/_nuxt/notes.5347799a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a2-Q4rmwYNsVfhOUwckxUkCSJZY8LA\"",
    "mtime": "2023-04-15T00:46:21.830Z",
    "size": 162,
    "path": "../public/_nuxt/notes.5347799a.css"
  },
  "/_nuxt/notifications.c31f817e.js": {
    "type": "application/javascript",
    "etag": "\"16ea-wUJjsczD3t6sJ1rwJN6pdYUPT4M\"",
    "mtime": "2023-04-15T00:46:21.810Z",
    "size": 5866,
    "path": "../public/_nuxt/notifications.c31f817e.js"
  },
  "/_nuxt/nucleo-icons.3180896c.woff2": {
    "type": "font/woff2",
    "etag": "\"2184-ZLqjKT6QYx1SV9YFawiboRUQ0PQ\"",
    "mtime": "2023-04-15T00:46:21.684Z",
    "size": 8580,
    "path": "../public/_nuxt/nucleo-icons.3180896c.woff2"
  },
  "/_nuxt/nucleo-icons.655956cd.ttf": {
    "type": "font/ttf",
    "etag": "\"4774-4lG2sCEdrfiA24ooHH4PhrFIiSo\"",
    "mtime": "2023-04-15T00:46:21.685Z",
    "size": 18292,
    "path": "../public/_nuxt/nucleo-icons.655956cd.ttf"
  },
  "/_nuxt/nucleo-icons.be977573.svg": {
    "type": "image/svg+xml",
    "etag": "\"1ec92-C9TkBEnCOdNL9KGwp3CuORQP8fQ\"",
    "mtime": "2023-04-15T00:46:21.696Z",
    "size": 126098,
    "path": "../public/_nuxt/nucleo-icons.be977573.svg"
  },
  "/_nuxt/nucleo-icons.daa807b2.woff": {
    "type": "font/woff",
    "etag": "\"27ec-MezSkKclV8xk+aso7l19CkF6Nrw\"",
    "mtime": "2023-04-15T00:46:21.684Z",
    "size": 10220,
    "path": "../public/_nuxt/nucleo-icons.daa807b2.woff"
  },
  "/_nuxt/nucleo-icons.f899f875.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"4854-st7gAZgeY1wqZwn5f3B7f3mXA8U\"",
    "mtime": "2023-04-15T00:46:21.685Z",
    "size": 18516,
    "path": "../public/_nuxt/nucleo-icons.f899f875.eot"
  },
  "/_nuxt/order-details.26c22244.js": {
    "type": "application/javascript",
    "etag": "\"1503-c8f0r2IsyV3lwnAb5OjbPmp1QBk\"",
    "mtime": "2023-04-15T00:46:21.800Z",
    "size": 5379,
    "path": "../public/_nuxt/order-details.26c22244.js"
  },
  "/_nuxt/order-list.a43eebb0.js": {
    "type": "application/javascript",
    "etag": "\"3c9c-cPYlcn4lqsWe8bD0+wZ5r7SWC84\"",
    "mtime": "2023-04-15T00:46:21.801Z",
    "size": 15516,
    "path": "../public/_nuxt/order-list.a43eebb0.js"
  },
  "/_nuxt/orderList.0407f878.js": {
    "type": "application/javascript",
    "etag": "\"1019-4er0J2oypnTNWkcOSLO8oceKPWI\"",
    "mtime": "2023-04-15T00:46:21.730Z",
    "size": 4121,
    "path": "../public/_nuxt/orderList.0407f878.js"
  },
  "/_nuxt/OrdersListCard.5805428e.js": {
    "type": "application/javascript",
    "etag": "\"90e-9glzbNZnqGVTSyCGB8yRt3hwmgo\"",
    "mtime": "2023-04-15T00:46:21.734Z",
    "size": 2318,
    "path": "../public/_nuxt/OrdersListCard.5805428e.js"
  },
  "/_nuxt/OutlinedCounterCard.ae0b000f.js": {
    "type": "application/javascript",
    "etag": "\"340-g2HfKOW1BV6U8PXaFYRtpO4mjRs\"",
    "mtime": "2023-04-15T00:46:21.789Z",
    "size": 832,
    "path": "../public/_nuxt/OutlinedCounterCard.ae0b000f.js"
  },
  "/_nuxt/overall-performance.693743be.js": {
    "type": "application/javascript",
    "etag": "\"94b-krKqfRZ1+MIHNmJLuKc/gelNfYw\"",
    "mtime": "2023-04-15T00:46:21.792Z",
    "size": 2379,
    "path": "../public/_nuxt/overall-performance.693743be.js"
  },
  "/_nuxt/overview.95a8dac0.js": {
    "type": "application/javascript",
    "etag": "\"1434-xdZUUiCMVEKY/NJdGtYqV+aoeko\"",
    "mtime": "2023-04-15T00:46:21.800Z",
    "size": 5172,
    "path": "../public/_nuxt/overview.95a8dac0.js"
  },
  "/_nuxt/pattern-left.d9775a94.png": {
    "type": "image/png",
    "etag": "\"20d74-RvXyrulJu7Jh2zs7pZNSiGDiRHo\"",
    "mtime": "2023-04-15T00:46:21.716Z",
    "size": 134516,
    "path": "../public/_nuxt/pattern-left.d9775a94.png"
  },
  "/_nuxt/pattern-right.6b782324.png": {
    "type": "image/png",
    "etag": "\"20d29-IdUF1eQnyPPRxlhX2/giLEo1/QY\"",
    "mtime": "2023-04-15T00:46:21.716Z",
    "size": 134441,
    "path": "../public/_nuxt/pattern-right.6b782324.png"
  },
  "/_nuxt/photoswipe.esm.6ea007dd.js": {
    "type": "application/javascript",
    "etag": "\"db0b-d/5ISMMqoz26Zd4Enna8GlI4QDo\"",
    "mtime": "2023-04-15T00:46:21.836Z",
    "size": 56075,
    "path": "../public/_nuxt/photoswipe.esm.6ea007dd.js"
  },
  "/_nuxt/PlaceholderCard.4dc2c4c8.js": {
    "type": "application/javascript",
    "etag": "\"2ef-gBEaE82jzRAeSn7eTRZj6UNlQEI\"",
    "mtime": "2023-04-15T00:46:21.783Z",
    "size": 751,
    "path": "../public/_nuxt/PlaceholderCard.4dc2c4c8.js"
  },
  "/_nuxt/previous-test.d1e6e605.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"65-McmGClDLuGWGxo01y7yvgLK1lI0\"",
    "mtime": "2023-04-15T00:46:21.831Z",
    "size": 101,
    "path": "../public/_nuxt/previous-test.d1e6e605.css"
  },
  "/_nuxt/previous-test.dc8a0fde.js": {
    "type": "application/javascript",
    "etag": "\"10c6-jbXjmiQ+d6DKMtncbjhEn25QMvQ\"",
    "mtime": "2023-04-15T00:46:21.793Z",
    "size": 4294,
    "path": "../public/_nuxt/previous-test.dc8a0fde.js"
  },
  "/_nuxt/pricing-header-bg.7497d320.jpg": {
    "type": "image/jpeg",
    "etag": "\"3d0b4-qEZsydjAm8p/cWSkvjgN5edDjNw\"",
    "mtime": "2023-04-15T00:46:21.713Z",
    "size": 250036,
    "path": "../public/_nuxt/pricing-header-bg.7497d320.jpg"
  },
  "/_nuxt/pricing-header-bg.bd911c66.js": {
    "type": "application/javascript",
    "etag": "\"9e8-2Qc0FgddOqsdGnZmML9L0+iB+Tc\"",
    "mtime": "2023-04-15T00:46:21.777Z",
    "size": 2536,
    "path": "../public/_nuxt/pricing-header-bg.bd911c66.js"
  },
  "/_nuxt/pricing-page.30a1ccbb.js": {
    "type": "application/javascript",
    "etag": "\"262f-P/aPWGu/v1ve75NnhhC2kIDouy4\"",
    "mtime": "2023-04-15T00:46:21.811Z",
    "size": 9775,
    "path": "../public/_nuxt/pricing-page.30a1ccbb.js"
  },
  "/_nuxt/product-list.bd33657d.js": {
    "type": "application/javascript",
    "etag": "\"45f7-/7wK31xtYt7kP+wLQlr01tpdL5I\"",
    "mtime": "2023-04-15T00:46:21.803Z",
    "size": 17911,
    "path": "../public/_nuxt/product-list.bd33657d.js"
  },
  "/_nuxt/product-page.2b3aea78.js": {
    "type": "application/javascript",
    "etag": "\"664e-2qkY+LbLPQz5bXHmlgnDvB7Z4FE\"",
    "mtime": "2023-04-15T00:46:21.804Z",
    "size": 26190,
    "path": "../public/_nuxt/product-page.2b3aea78.js"
  },
  "/_nuxt/product-page.6b5e5cbe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1114-Oc/odwdCD9Z1KONeTfDxSoBC5wQ\"",
    "mtime": "2023-04-15T00:46:21.848Z",
    "size": 4372,
    "path": "../public/_nuxt/product-page.6b5e5cbe.css"
  },
  "/_nuxt/profile-layout-header.484982ab.jpg": {
    "type": "image/jpeg",
    "etag": "\"955c8-QdZhC5E/rTmVxtu3YvU8rUGLAbo\"",
    "mtime": "2023-04-15T00:46:21.764Z",
    "size": 611784,
    "path": "../public/_nuxt/profile-layout-header.484982ab.jpg"
  },
  "/_nuxt/profile-layout.1e9f8c6d.js": {
    "type": "application/javascript",
    "etag": "\"383-3afGgoXRQKOFt/kQZxWdOcN2vMY\"",
    "mtime": "2023-04-15T00:46:21.826Z",
    "size": 899,
    "path": "../public/_nuxt/profile-layout.1e9f8c6d.js"
  },
  "/_nuxt/profile-overview.bf98501e.js": {
    "type": "application/javascript",
    "etag": "\"4546-xA5nLTrNbp5k4+ZGmMXPCCz4ZN4\"",
    "mtime": "2023-04-15T00:46:21.814Z",
    "size": 17734,
    "path": "../public/_nuxt/profile-overview.bf98501e.js"
  },
  "/_nuxt/ProgressLineChart.94edb317.js": {
    "type": "application/javascript",
    "etag": "\"7a6-WYB1oMGZyA9G2rC96ncpaBvqQ+Y\"",
    "mtime": "2023-04-15T00:46:21.814Z",
    "size": 1958,
    "path": "../public/_nuxt/ProgressLineChart.94edb317.js"
  },
  "/_nuxt/quizeScreen.c4d8c2df.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"39a-4I5vtQ5wg2BGhS1B56ks9l0SpsY\"",
    "mtime": "2023-04-15T00:46:21.838Z",
    "size": 922,
    "path": "../public/_nuxt/quizeScreen.c4d8c2df.css"
  },
  "/_nuxt/quizeScreen.e5fc0510.js": {
    "type": "application/javascript",
    "etag": "\"518e-WxeUy4dlDuR4fP9DxXNE3i1D8KE\"",
    "mtime": "2023-04-15T00:46:21.786Z",
    "size": 20878,
    "path": "../public/_nuxt/quizeScreen.e5fc0510.js"
  },
  "/_nuxt/quizesList.447fa184.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a2-qPTtpK3h0QbgCDpnJEwGh2DrOgk\"",
    "mtime": "2023-04-15T00:46:21.831Z",
    "size": 162,
    "path": "../public/_nuxt/quizesList.447fa184.css"
  },
  "/_nuxt/quizesList.c5464768.js": {
    "type": "application/javascript",
    "etag": "\"1614-QdcgSqeCsNVL8Hp6gZ9osya6MDs\"",
    "mtime": "2023-04-15T00:46:21.738Z",
    "size": 5652,
    "path": "../public/_nuxt/quizesList.c5464768.js"
  },
  "/_nuxt/RankingListCard.c1c428f5.js": {
    "type": "application/javascript",
    "etag": "\"8c8-UcK23wr95mUe4+92pqBnhMk8Pc0\"",
    "mtime": "2023-04-15T00:46:21.782Z",
    "size": 2248,
    "path": "../public/_nuxt/RankingListCard.c1c428f5.js"
  },
  "/_nuxt/referral.45951376.js": {
    "type": "application/javascript",
    "etag": "\"16d6-uzVqkWyQOGIfmJ9N0imUOpRzMeI\"",
    "mtime": "2023-04-15T00:46:21.804Z",
    "size": 5846,
    "path": "../public/_nuxt/referral.45951376.js"
  },
  "/_nuxt/reports.2dd6d3ea.js": {
    "type": "application/javascript",
    "etag": "\"2fce-cdIQaidGPRS6Ku4b1FXOSpIef3s\"",
    "mtime": "2023-04-15T00:46:21.819Z",
    "size": 12238,
    "path": "../public/_nuxt/reports.2dd6d3ea.js"
  },
  "/_nuxt/reports1.42529d18.jpg": {
    "type": "image/jpeg",
    "etag": "\"49e06-yo1zlWkab+GCMpMZbG9Ut5QmR4M\"",
    "mtime": "2023-04-15T00:46:21.729Z",
    "size": 302598,
    "path": "../public/_nuxt/reports1.42529d18.jpg"
  },
  "/_nuxt/reports2.e18fc757.jpg": {
    "type": "image/jpeg",
    "etag": "\"518d7-WSk0VrKRHQghbh3r0J49HVJNnpw\"",
    "mtime": "2023-04-15T00:46:21.733Z",
    "size": 334039,
    "path": "../public/_nuxt/reports2.e18fc757.jpg"
  },
  "/_nuxt/reports3.3687f3b3.jpg": {
    "type": "image/jpeg",
    "etag": "\"426e2-5IbwV64bMkecZmWJPNe42ZA3JQM\"",
    "mtime": "2023-04-15T00:46:21.726Z",
    "size": 272098,
    "path": "../public/_nuxt/reports3.3687f3b3.jpg"
  },
  "/_nuxt/reports4.646bce8b.jpg": {
    "type": "image/jpeg",
    "etag": "\"97421-yLBEULrRKKH/LQ0bng7T71z5LXw\"",
    "mtime": "2023-04-15T00:46:21.761Z",
    "size": 619553,
    "path": "../public/_nuxt/reports4.646bce8b.jpg"
  },
  "/_nuxt/rtl-page.f7a26c84.js": {
    "type": "application/javascript",
    "etag": "\"1f0c-0mO4t2HEchC5mbXC/gshzdCr6NU\"",
    "mtime": "2023-04-15T00:46:21.817Z",
    "size": 7948,
    "path": "../public/_nuxt/rtl-page.f7a26c84.js"
  },
  "/_nuxt/rtl.b9c5cd95.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36-Q9OQvOgi8czZUq9XRM1AkU1y4Jo\"",
    "mtime": "2023-04-15T00:46:21.837Z",
    "size": 54,
    "path": "../public/_nuxt/rtl.b9c5cd95.css"
  },
  "/_nuxt/rtl.fe6dfd05.js": {
    "type": "application/javascript",
    "etag": "\"238d-Kr6bj7C9QauSsazv+YTkyyzXqV4\"",
    "mtime": "2023-04-15T00:46:21.827Z",
    "size": 9101,
    "path": "../public/_nuxt/rtl.fe6dfd05.js"
  },
  "/_nuxt/security.a936efa6.js": {
    "type": "application/javascript",
    "etag": "\"155a-ph2cloDSrXnOLQhxfYVV/n40MtI\"",
    "mtime": "2023-04-15T00:46:21.810Z",
    "size": 5466,
    "path": "../public/_nuxt/security.a936efa6.js"
  },
  "/_nuxt/settings.5b4227cf.js": {
    "type": "application/javascript",
    "etag": "\"493e-m1Qymie18MpfyKy0+Bp5NlvXj/s\"",
    "mtime": "2023-04-15T00:46:21.811Z",
    "size": 18750,
    "path": "../public/_nuxt/settings.5b4227cf.js"
  },
  "/_nuxt/SidenavList.b84379c3.js": {
    "type": "application/javascript",
    "etag": "\"3dd0-f9QkZUi1/jpELWC8//o2D8UOMkg\"",
    "mtime": "2023-04-15T00:46:21.825Z",
    "size": 15824,
    "path": "../public/_nuxt/SidenavList.b84379c3.js"
  },
  "/_nuxt/smart-home.c0eb30b0.js": {
    "type": "application/javascript",
    "etag": "\"317c-6RVoNyoRBP/ANbN7kC9xEXWOfjc\"",
    "mtime": "2023-04-15T00:46:21.795Z",
    "size": 12668,
    "path": "../public/_nuxt/smart-home.c0eb30b0.js"
  },
  "/_nuxt/sweet-alerts.d2326f0a.js": {
    "type": "application/javascript",
    "etag": "\"1c68-JAw5mXYeIoojXTddOZYWUW23o+I\"",
    "mtime": "2023-04-15T00:46:21.818Z",
    "size": 7272,
    "path": "../public/_nuxt/sweet-alerts.d2326f0a.js"
  },
  "/_nuxt/team-1.57039be9.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a50d-1bY2gVdqInk40EHFLD0o5HogBKA\"",
    "mtime": "2023-04-15T00:46:21.699Z",
    "size": 173325,
    "path": "../public/_nuxt/team-1.57039be9.jpg"
  },
  "/_nuxt/team-1.ea0a9766.js": {
    "type": "application/javascript",
    "etag": "\"4f-JUqx3Y8CgT6QqOgO09rA0U3mmDM\"",
    "mtime": "2023-04-15T00:46:21.750Z",
    "size": 79,
    "path": "../public/_nuxt/team-1.ea0a9766.js"
  },
  "/_nuxt/team-2.9e1259be.js": {
    "type": "application/javascript",
    "etag": "\"4f-fFXlBCze5otkE9WEuIfRV/g2Cco\"",
    "mtime": "2023-04-15T00:46:21.751Z",
    "size": 79,
    "path": "../public/_nuxt/team-2.9e1259be.js"
  },
  "/_nuxt/team-2.d149865c.jpg": {
    "type": "image/jpeg",
    "etag": "\"422c-46WN+hNwKafPKx1li/ejRXBLWTo\"",
    "mtime": "2023-04-15T00:46:21.686Z",
    "size": 16940,
    "path": "../public/_nuxt/team-2.d149865c.jpg"
  },
  "/_nuxt/team-3.185e3869.jpg": {
    "type": "image/jpeg",
    "etag": "\"7e74-gTADSbPX7upRp47zBKiOXIMzg3c\"",
    "mtime": "2023-04-15T00:46:21.686Z",
    "size": 32372,
    "path": "../public/_nuxt/team-3.185e3869.jpg"
  },
  "/_nuxt/team-3.fee1766f.js": {
    "type": "application/javascript",
    "etag": "\"4f-pYsbErn9lIrtTiMNlsZ80QBCeVQ\"",
    "mtime": "2023-04-15T00:46:21.751Z",
    "size": 79,
    "path": "../public/_nuxt/team-3.fee1766f.js"
  },
  "/_nuxt/team-4.e09e8de7.js": {
    "type": "application/javascript",
    "etag": "\"4f-7xh28nLmeRQSM81POPs76MSQEhY\"",
    "mtime": "2023-04-15T00:46:21.752Z",
    "size": 79,
    "path": "../public/_nuxt/team-4.e09e8de7.js"
  },
  "/_nuxt/team-4.fdfd85ef.jpg": {
    "type": "image/jpeg",
    "etag": "\"28a24-fzNA2V7q23P/zCl+hW186MMVQOc\"",
    "mtime": "2023-04-15T00:46:21.699Z",
    "size": 166436,
    "path": "../public/_nuxt/team-4.fdfd85ef.jpg"
  },
  "/_nuxt/team-5.7075445f.js": {
    "type": "application/javascript",
    "etag": "\"4a-LHP1CnPdOAAnFq1hOTiXvn1jo8I\"",
    "mtime": "2023-04-15T00:46:21.753Z",
    "size": 74,
    "path": "../public/_nuxt/team-5.7075445f.js"
  },
  "/_nuxt/team-5.ab832d85.jpg": {
    "type": "image/jpeg",
    "etag": "\"78c0-RBG77MnGJA8r0vDM/2mqQYEvvNk\"",
    "mtime": "2023-04-15T00:46:21.686Z",
    "size": 30912,
    "path": "../public/_nuxt/team-5.ab832d85.jpg"
  },
  "/_nuxt/teams.1d944160.js": {
    "type": "application/javascript",
    "etag": "\"912e-mfhE+S/HeNyo3rCNtMqjftnUdX0\"",
    "mtime": "2023-04-15T00:46:21.817Z",
    "size": 37166,
    "path": "../public/_nuxt/teams.1d944160.js"
  },
  "/_nuxt/tesla.890789ba.png": {
    "type": "image/png",
    "etag": "\"1d89f-5fGeI3wOdk6QuQhlMpSQnahzzxo\"",
    "mtime": "2023-04-15T00:46:21.716Z",
    "size": 120991,
    "path": "../public/_nuxt/tesla.890789ba.png"
  },
  "/_nuxt/timeline.45c0d442.js": {
    "type": "application/javascript",
    "etag": "\"15bf-N2ZDcGRsxMgv2lIb+nm9C3d2YQk\"",
    "mtime": "2023-04-15T00:46:21.814Z",
    "size": 5567,
    "path": "../public/_nuxt/timeline.45c0d442.js"
  },
  "/_nuxt/TimelineItem.35818067.js": {
    "type": "application/javascript",
    "etag": "\"709-jYZUkToyXm9L9JCf0bNX55Jw/f4\"",
    "mtime": "2023-04-15T00:46:21.816Z",
    "size": 1801,
    "path": "../public/_nuxt/TimelineItem.35818067.js"
  },
  "/_nuxt/TodoList.7cd0b1f5.js": {
    "type": "application/javascript",
    "etag": "\"421-XmQbjsQ46hdGPKpFt3ecLqRqEaU\"",
    "mtime": "2023-04-15T00:46:21.783Z",
    "size": 1057,
    "path": "../public/_nuxt/TodoList.7cd0b1f5.js"
  },
  "/_nuxt/TodoList.877cf5fa.js": {
    "type": "application/javascript",
    "etag": "\"a03-TwuHUfn10087M19fJ+Cf0dP8BKI\"",
    "mtime": "2023-04-15T00:46:21.786Z",
    "size": 2563,
    "path": "../public/_nuxt/TodoList.877cf5fa.js"
  },
  "/_nuxt/tooltip.6aec660d.js": {
    "type": "application/javascript",
    "etag": "\"97-RLIx7WXZY145IOBsC4f5aEkSobc\"",
    "mtime": "2023-04-15T00:46:21.744Z",
    "size": 151,
    "path": "../public/_nuxt/tooltip.6aec660d.js"
  },
  "/_nuxt/Transparent.8e78394b.js": {
    "type": "application/javascript",
    "etag": "\"7dba-kmb61zshGeM3uwCbP6la/zgst/s\"",
    "mtime": "2023-04-15T00:46:21.762Z",
    "size": 32186,
    "path": "../public/_nuxt/Transparent.8e78394b.js"
  },
  "/_nuxt/TransparentInfoCard.0121d8a7.js": {
    "type": "application/javascript",
    "etag": "\"2f4-LjBE70oS4NTpxISvmfXRl5y7C/Q\"",
    "mtime": "2023-04-15T00:46:21.792Z",
    "size": 756,
    "path": "../public/_nuxt/TransparentInfoCard.0121d8a7.js"
  },
  "/_nuxt/users.d60278c4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e-08MtM1iL8VBqhS1MCy9p7QZy5Jc\"",
    "mtime": "2023-04-15T00:46:21.832Z",
    "size": 126,
    "path": "../public/_nuxt/users.d60278c4.css"
  },
  "/_nuxt/users.d75ccfb6.js": {
    "type": "application/javascript",
    "etag": "\"f50-UbVJCOZ1KrDYjbsKMNICAWlV+Vg\"",
    "mtime": "2023-04-15T00:46:21.741Z",
    "size": 3920,
    "path": "../public/_nuxt/users.d75ccfb6.js"
  },
  "/_nuxt/visa.093b1be3.png": {
    "type": "image/png",
    "etag": "\"b47e-Y7h1L4jUOLnJC/I8BuY4BuJn5zg\"",
    "mtime": "2023-04-15T00:46:21.715Z",
    "size": 46206,
    "path": "../public/_nuxt/visa.093b1be3.png"
  },
  "/_nuxt/viweAcadmy.5e42c01d.png": {
    "type": "image/png",
    "etag": "\"1067c-4QiATy+8KCvo/O6elBnSxpSKgDc\"",
    "mtime": "2023-04-15T00:46:21.724Z",
    "size": 67196,
    "path": "../public/_nuxt/viweAcadmy.5e42c01d.png"
  },
  "/_nuxt/vr-bg.1e3155f0.jpg": {
    "type": "image/jpeg",
    "etag": "\"f7d77-xA36pLkmDIgVzOmF1zCj5quB0uE\"",
    "mtime": "2023-04-15T00:46:21.804Z",
    "size": 1015159,
    "path": "../public/_nuxt/vr-bg.1e3155f0.jpg"
  },
  "/_nuxt/vr-default.6fea7462.js": {
    "type": "application/javascript",
    "etag": "\"1caf-KWu8FxG197orYsgM7qUu66vXO2s\"",
    "mtime": "2023-04-15T00:46:21.798Z",
    "size": 7343,
    "path": "../public/_nuxt/vr-default.6fea7462.js"
  },
  "/_nuxt/vr-info.ed57ccab.js": {
    "type": "application/javascript",
    "etag": "\"16ab-UmNHetk44kwqjTbpb/Dbw1SzlS0\"",
    "mtime": "2023-04-15T00:46:21.799Z",
    "size": 5803,
    "path": "../public/_nuxt/vr-info.ed57ccab.js"
  },
  "/_nuxt/vr-layout.04f580c1.js": {
    "type": "application/javascript",
    "etag": "\"491-yAANBLX7JGYYLWNpWG3I4GBdtR8\"",
    "mtime": "2023-04-15T00:46:21.828Z",
    "size": 1169,
    "path": "../public/_nuxt/vr-layout.04f580c1.js"
  },
  "/_nuxt/vue-quill.1743c732.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4fad-pLUBfmkUejfVe1P3Joch7Dqp6A8\"",
    "mtime": "2023-04-15T00:46:21.849Z",
    "size": 20397,
    "path": "../public/_nuxt/vue-quill.1743c732.css"
  },
  "/_nuxt/vue-quill.esm-bundler.6ccc9f7c.js": {
    "type": "application/javascript",
    "etag": "\"3e870-QlfmUg+KwdB/OBmeEyZjOzTaBKw\"",
    "mtime": "2023-04-15T00:46:21.745Z",
    "size": 256112,
    "path": "../public/_nuxt/vue-quill.esm-bundler.6ccc9f7c.js"
  },
  "/_nuxt/widgets.11130f00.js": {
    "type": "application/javascript",
    "etag": "\"1395-cOJYpO0hTp/PO2628PQeAGikc0g\"",
    "mtime": "2023-04-15T00:46:21.820Z",
    "size": 5013,
    "path": "../public/_nuxt/widgets.11130f00.js"
  },
  "/_nuxt/wizard.1fe550dc.js": {
    "type": "application/javascript",
    "etag": "\"7f1-44lDu714/G5huO38tIzpEKNYB28\"",
    "mtime": "2023-04-15T00:46:21.760Z",
    "size": 2033,
    "path": "../public/_nuxt/wizard.1fe550dc.js"
  },
  "/_nuxt/xlsx.7ecdcb2b.js": {
    "type": "application/javascript",
    "etag": "\"51cb8-yKd404YJrMlsCfnIUK9o2Wn4OJo\"",
    "mtime": "2023-04-15T00:46:21.763Z",
    "size": 335032,
    "path": "../public/_nuxt/xlsx.7ecdcb2b.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_7FDCbd = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_7FDCbd, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_7FDCbd, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
