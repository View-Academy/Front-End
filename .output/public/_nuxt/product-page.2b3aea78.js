import{a as y,o as g,b,e as t,q as w,_ as x,h as I}from"./entry.5a09969b.js";import{C}from"./choices.b66eef54.js";/*!
  * PhotoSwipe Lightbox 5.3.3 - https://photoswipe.com
  * (c) 2022 Dmytro Semenov
  */function h(a,e,s){const i=document.createElement(e||"div");return a&&(i.className=a),s&&s.appendChild(i),i}function S(a,e,s){let i="translate3d("+a+"px,"+(e||0)+"px,0)";return s!==void 0&&(i+=" scale3d("+s+","+s+",1)"),i}function u(a,e,s){a.style.width=typeof e=="number"?e+"px":e,a.style.height=typeof s=="number"?s+"px":s}const n={IDLE:"idle",LOADING:"loading",LOADED:"loaded",ERROR:"error"};function E(a){if(a.which===2||a.ctrlKey||a.metaKey||a.altKey||a.shiftKey)return!0}function p(a,e,s=document){let i=[];if(a instanceof Element)i=[a];else if(a instanceof NodeList||Array.isArray(a))i=Array.from(a);else{const r=typeof a=="string"?a:e;r&&(i=Array.from(s.querySelectorAll(r)))}return i}function D(a){return typeof a=="function"&&a.prototype&&a.prototype.goTo}function m(){return!!(navigator.vendor&&navigator.vendor.match(/apple/i))}class P{constructor(e,s){this.type=e,s&&Object.assign(this,s)}preventDefault(){this.defaultPrevented=!0}}class A{constructor(){this._listeners={},this._filters={},this.pswp=void 0,this.options=void 0}addFilter(e,s,i=100){this._filters[e]||(this._filters[e]=[]),this._filters[e].push({fn:s,priority:i}),this._filters[e].sort((r,l)=>r.priority-l.priority),this.pswp&&this.pswp.addFilter(e,s,i)}removeFilter(e,s){this._filters[e]&&(this._filters[e]=this._filters[e].filter(i=>i.fn!==s)),this.pswp&&this.pswp.removeFilter(e,s)}applyFilters(e,...s){return this._filters[e]&&this._filters[e].forEach(i=>{s[0]=i.fn.apply(this,s)}),s[0]}on(e,s){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(s),this.pswp&&this.pswp.on(e,s)}off(e,s){this._listeners[e]&&(this._listeners[e]=this._listeners[e].filter(i=>s!==i)),this.pswp&&this.pswp.off(e,s)}dispatch(e,s){if(this.pswp)return this.pswp.dispatch(e,s);const i=new P(e,s);return this._listeners&&this._listeners[e]&&this._listeners[e].forEach(r=>{r.call(this,i)}),i}}class z{constructor(e,s){this.element=h("pswp__img pswp__img--placeholder",e?"img":"",s),e&&(this.element.decoding="async",this.element.alt="",this.element.src=e,this.element.setAttribute("role","presentation")),this.element.setAttribute("aria-hidden","true")}setDisplayedSize(e,s){!this.element||(this.element.tagName==="IMG"?(u(this.element,250,"auto"),this.element.style.transformOrigin="0 0",this.element.style.transform=S(0,0,e/250)):u(this.element,e,s))}destroy(){this.element.parentNode&&this.element.remove(),this.element=null}}class L{constructor(e,s,i){this.instance=s,this.data=e,this.index=i,this.element=void 0,this.displayedImageWidth=0,this.displayedImageHeight=0,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.hasSlide=!1,this.state=n.IDLE,this.data.type?this.type=this.data.type:this.data.src?this.type="image":this.type="html",this.instance.dispatch("contentInit",{content:this})}removePlaceholder(){this.placeholder&&!this.keepPlaceholder()&&setTimeout(()=>{this.placeholder&&(this.placeholder.destroy(),this.placeholder=null)},1e3)}load(e,s){if(this.slide&&this.usePlaceholder())if(this.placeholder){const i=this.placeholder.element;i&&!i.parentElement&&this.slide.container.prepend(i)}else{const i=this.instance.applyFilters("placeholderSrc",this.data.msrc&&this.slide.isFirstSlide?this.data.msrc:!1,this);this.placeholder=new z(i,this.slide.container)}this.element&&!s||this.instance.dispatch("contentLoad",{content:this,isLazy:e}).defaultPrevented||(this.isImageContent()?(this.element=h("pswp__img","img"),this.displayedImageWidth&&this.loadImage(e)):(this.element=h("pswp__content"),this.element.innerHTML=this.data.html||""),s&&this.slide&&this.slide.updateContentSize(!0))}loadImage(e){const s=this.element;this.instance.dispatch("contentLoadImage",{content:this,isLazy:e}).defaultPrevented||(this.updateSrcsetSizes(),this.data.srcset&&(s.srcset=this.data.srcset),s.src=this.data.src,s.alt=this.data.alt||"",this.state=n.LOADING,s.complete?this.onLoaded():(s.onload=()=>{this.onLoaded()},s.onerror=()=>{this.onError()}))}setSlide(e){this.slide=e,this.hasSlide=!0,this.instance=e.pswp}onLoaded(){this.state=n.LOADED,this.slide&&(this.instance.dispatch("loadComplete",{slide:this.slide,content:this}),this.slide.isActive&&this.slide.heavyAppended&&!this.element.parentNode&&(this.append(),this.slide.updateContentSize(!0)),(this.state===n.LOADED||this.state===n.ERROR)&&this.removePlaceholder())}onError(){this.state=n.ERROR,this.slide&&(this.displayError(),this.instance.dispatch("loadComplete",{slide:this.slide,isError:!0,content:this}),this.instance.dispatch("loadError",{slide:this.slide,content:this}))}isLoading(){return this.instance.applyFilters("isContentLoading",this.state===n.LOADING,this)}isError(){return this.state===n.ERROR}isImageContent(){return this.type==="image"}setDisplayedSize(e,s){if(!!this.element&&(this.placeholder&&this.placeholder.setDisplayedSize(e,s),!this.instance.dispatch("contentResize",{content:this,width:e,height:s}).defaultPrevented&&(u(this.element,e,s),this.isImageContent()&&!this.isError()))){const i=!this.displayedImageWidth&&e;this.displayedImageWidth=e,this.displayedImageHeight=s,i?this.loadImage(!1):this.updateSrcsetSizes(),this.slide&&this.instance.dispatch("imageSizeChange",{slide:this.slide,width:e,height:s,content:this})}}isZoomable(){return this.instance.applyFilters("isContentZoomable",this.isImageContent()&&this.state!==n.ERROR,this)}updateSrcsetSizes(){if(this.data.srcset){const e=this.element,s=this.instance.applyFilters("srcsetSizesWidth",this.displayedImageWidth,this);(!e.dataset.largestUsedSize||s>parseInt(e.dataset.largestUsedSize,10))&&(e.sizes=s+"px",e.dataset.largestUsedSize=String(s))}}usePlaceholder(){return this.instance.applyFilters("useContentPlaceholder",this.isImageContent(),this)}lazyLoad(){this.instance.dispatch("contentLazyLoad",{content:this}).defaultPrevented||this.load(!0)}keepPlaceholder(){return this.instance.applyFilters("isKeepingPlaceholder",this.isLoading(),this)}destroy(){this.hasSlide=!1,this.slide=null,!this.instance.dispatch("contentDestroy",{content:this}).defaultPrevented&&(this.remove(),this.placeholder&&(this.placeholder.destroy(),this.placeholder=null),this.isImageContent()&&this.element&&(this.element.onload=null,this.element.onerror=null,this.element=null))}displayError(){if(this.slide){let e=h("pswp__error-msg");e.innerText=this.instance.options.errorMsg,e=this.instance.applyFilters("contentErrorElement",e,this),this.element=h("pswp__content pswp__error-msg-container"),this.element.appendChild(e),this.slide.container.innerText="",this.slide.container.appendChild(this.element),this.slide.updateContentSize(!0),this.removePlaceholder()}}append(){if(this.isAttached)return;if(this.isAttached=!0,this.state===n.ERROR){this.displayError();return}if(this.instance.dispatch("contentAppend",{content:this}).defaultPrevented)return;const e="decode"in this.element;this.isImageContent()?e&&this.slide&&(!this.slide.isActive||m())?(this.isDecoding=!0,this.element.decode().catch(()=>{}).finally(()=>{this.isDecoding=!1,this.appendImage()})):this.appendImage():this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element)}activate(){this.instance.dispatch("contentActivate",{content:this}).defaultPrevented||this.slide&&(this.isImageContent()&&this.isDecoding&&!m()?this.appendImage():this.isError()&&this.load(!1,!0))}deactivate(){this.instance.dispatch("contentDeactivate",{content:this})}remove(){this.isAttached=!1,!this.instance.dispatch("contentRemove",{content:this}).defaultPrevented&&(this.element&&this.element.parentNode&&this.element.remove(),this.placeholder&&this.placeholder.element&&this.placeholder.element.remove())}appendImage(){!this.isAttached||this.instance.dispatch("contentAppendImage",{content:this}).defaultPrevented||(this.slide&&this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element),(this.state===n.LOADED||this.state===n.ERROR)&&this.removePlaceholder())}}function O(a,e){if(a.getViewportSizeFn){const s=a.getViewportSizeFn(a,e);if(s)return s}return{x:document.documentElement.clientWidth,y:window.innerHeight}}function d(a,e,s,i,r){let l;if(e.paddingFn)l=e.paddingFn(s,i,r)[a];else if(e.padding)l=e.padding[a];else{const o="padding"+a[0].toUpperCase()+a.slice(1);e[o]&&(l=e[o])}return l||0}function M(a,e,s,i){return{x:e.x-d("left",a,e,s,i)-d("right",a,e,s,i),y:e.y-d("top",a,e,s,i)-d("bottom",a,e,s,i)}}const f=4e3;class F{constructor(e,s,i,r){this.pswp=r,this.options=e,this.itemData=s,this.index=i}update(e,s,i){this.elementSize={x:e,y:s},this.panAreaSize=i;const r=this.panAreaSize.x/this.elementSize.x,l=this.panAreaSize.y/this.elementSize.y;this.fit=Math.min(1,r<l?r:l),this.fill=Math.min(1,r>l?r:l),this.vFill=Math.min(1,l),this.initial=this._getInitial(),this.secondary=this._getSecondary(),this.max=Math.max(this.initial,this.secondary,this._getMax()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}_parseZoomLevelOption(e){const s=e+"ZoomLevel",i=this.options[s];if(!!i)return typeof i=="function"?i(this):i==="fill"?this.fill:i==="fit"?this.fit:Number(i)}_getSecondary(){let e=this._parseZoomLevelOption("secondary");return e||(e=Math.min(1,this.fit*3),e*this.elementSize.x>f&&(e=f/this.elementSize.x),e)}_getInitial(){return this._parseZoomLevelOption("initial")||this.fit}_getMax(){const e=this._parseZoomLevelOption("max");return e||Math.max(1,this.fit*4)}}function v(a,e,s){const i=e.createContentFromData(a,s);if(!i||!i.lazyLoad)return;const{options:r}=e,l=e.viewportSize||O(r,e),o=M(r,l,a,s),c=new F(r,a,-1);return c.update(i.width,i.height,o),i.lazyLoad(),i.setDisplayedSize(Math.ceil(i.width*c.initial),Math.ceil(i.height*c.initial)),i}function j(a,e){const s=e.getItemData(a);if(!e.dispatch("lazyLoadSlide",{index:a,itemData:s}).defaultPrevented)return v(s,e,a)}class R extends A{getNumItems(){let e;const{dataSource:s}=this.options;s?"length"in s?e=s.length:"gallery"in s&&(s.items||(s.items=this._getGalleryDOMElements(s.gallery)),s.items&&(e=s.items.length)):e=0;const i=this.dispatch("numItems",{dataSource:s,numItems:e});return this.applyFilters("numItems",i.numItems,s)}createContentFromData(e,s){return new L(e,this,s)}getItemData(e){const{dataSource:s}=this.options;let i;Array.isArray(s)?i=s[e]:s&&s.gallery&&(s.items||(s.items=this._getGalleryDOMElements(s.gallery)),i=s.items[e]);let r=i;r instanceof Element&&(r=this._domElementToItemData(r));const l=this.dispatch("itemData",{itemData:r||{},index:e});return this.applyFilters("itemData",l.itemData,e)}_getGalleryDOMElements(e){return this.options.children||this.options.childSelector?p(this.options.children,this.options.childSelector,e)||[]:[e]}_domElementToItemData(e){const s={element:e},i=e.tagName==="A"?e:e.querySelector("a");if(i){s.src=i.dataset.pswpSrc||i.href,i.dataset.pswpSrcset&&(s.srcset=i.dataset.pswpSrcset),s.width=parseInt(i.dataset.pswpWidth,10),s.height=parseInt(i.dataset.pswpHeight,10),s.w=s.width,s.h=s.height,i.dataset.pswpType&&(s.type=i.dataset.pswpType);const r=e.querySelector("img");r&&(s.msrc=r.currentSrc||r.src,s.alt=r.getAttribute("alt")),(i.dataset.pswpCropped||i.dataset.cropped)&&(s.thumbCropped=!0)}return this.applyFilters("domItemData",s,e,i)}lazyLoadData(e,s){return v(e,this,s)}}class k extends R{constructor(e){super(),this.options=e||{},this._uid=0}init(){this.onThumbnailsClick=this.onThumbnailsClick.bind(this),p(this.options.gallery,this.options.gallerySelector).forEach(e=>{e.addEventListener("click",this.onThumbnailsClick,!1)})}onThumbnailsClick(e){if(E(e)||window.pswp||window.navigator.onLine===!1)return;let s={x:e.clientX,y:e.clientY};!s.x&&!s.y&&(s=null);let i=this.getClickedIndex(e);i=this.applyFilters("clickedIndex",i,e,this);const r={gallery:e.currentTarget};i>=0&&(e.preventDefault(),this.loadAndOpen(i,r,s))}getClickedIndex(e){if(this.options.getClickedIndexFn)return this.options.getClickedIndexFn.call(this,e);const s=e.target,r=p(this.options.children,this.options.childSelector,e.currentTarget).findIndex(l=>l===s||l.contains(s));return r!==-1?r:this.options.children||this.options.childSelector?-1:0}loadAndOpen(e,s,i){return window.pswp?!1:(this.options.index=e,this.options.initialPointerPos=i,this.shouldOpen=!0,this.preload(e,s),!0)}preload(e,s){const{options:i}=this;s&&(i.dataSource=s);const r=[],l=typeof i.pswpModule;if(D(i.pswpModule))r.push(Promise.resolve(i.pswpModule));else{if(l==="string")throw new Error("pswpModule as string is no longer supported");if(l==="function")r.push(i.pswpModule());else throw new Error("pswpModule is not valid")}typeof i.openPromise=="function"&&r.push(i.openPromise()),i.preloadFirstSlide!==!1&&e>=0&&(this._preloadedContent=j(e,this));const o=++this._uid;Promise.all(r).then(c=>{if(this.shouldOpen){const _=c[0];this._openPhotoswipe(_,o)}})}_openPhotoswipe(e,s){if(s!==this._uid&&this.shouldOpen||(this.shouldOpen=!1,window.pswp))return;const i=typeof e=="object"?new e.default(this.options):new e(this.options);this.pswp=i,window.pswp=i,Object.keys(this._listeners).forEach(r=>{this._listeners[r].forEach(l=>{i.on(r,l)})}),Object.keys(this._filters).forEach(r=>{this._filters[r].forEach(l=>{i.addFilter(r,l.fn,l.priority)})}),this._preloadedContent&&(i.contentLoader.addToCache(this._preloadedContent),this._preloadedContent=null),i.on("destroy",()=>{this.pswp=null,window.pswp=null}),i.init()}destroy(){this.pswp&&this.pswp.destroy(),this.shouldOpen=!1,this._listeners=null,p(this.options.gallery,this.options.gallerySelector).forEach(e=>{e.removeEventListener("click",this.onThumbnailsClick,!1)})}}const T={},N={class:"col-12"},W=t("h5",{class:"ms-3"},"Other Products",-1),U=t("div",{class:"table table-responsive"},[t("table",{class:"table align-items-center mb-0"},[t("thead",null,[t("tr",null,[t("th",{class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Product "),t("th",{class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"}," Price "),t("th",{class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"}," Review "),t("th",{class:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Availability "),t("th",{class:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Id ")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("div",{class:"d-flex px-2 py-1"},[t("div",null,[t("img",{src:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-1.jpg",class:"avatar avatar-md me-3",alt:"table image"})]),t("div",{class:"d-flex flex-column justify-content-center"},[t("h6",{class:"mb-0 text-sm"},"Christopher Knight Home")])])]),t("td",null,[t("p",{class:"text-sm text-secondary mb-0"},"$89.53")]),t("td",null,[t("div",{class:"rating ms-lg-n4"},[t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star-half-alt","aria-hidden":"true"})])]),t("td",{class:"align-middle text-sm"},[t("div",{class:"progress mx-auto"},[t("div",{class:"progress-bar bg-gradient-success",role:"progressbar",style:{width:"80%"},"aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"})])]),t("td",{class:"align-middle text-center"},[t("span",{class:"text-secondary text-sm"},"230019")])]),t("tr",null,[t("td",null,[t("div",{class:"d-flex px-2 py-1"},[t("div",null,[t("img",{src:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-2.jpg",class:"avatar avatar-md me-3",alt:"table image"})]),t("div",{class:"d-flex flex-column justify-content-center"},[t("h6",{class:"mb-0 text-sm"},"Bar Height Swivel Barstool")])])]),t("td",null,[t("p",{class:"text-sm text-secondary mb-0"},"$99.99")]),t("td",null,[t("div",{class:"rating ms-lg-n4"},[t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"})])]),t("td",{class:"align-middle text-sm"},[t("div",{class:"progress mx-auto"},[t("div",{class:"progress-bar bg-gradient-success",role:"progressbar",style:{width:"90%"},"aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100"})])]),t("td",{class:"align-middle text-center"},[t("span",{class:"text-secondary text-sm"},"87120")])]),t("tr",null,[t("td",null,[t("div",{class:"d-flex px-2 py-1"},[t("div",null,[t("img",{src:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-3.jpg",class:"avatar avatar-md me-3",alt:"table image"})]),t("div",{class:"d-flex flex-column justify-content-center"},[t("h6",{class:"mb-0 text-sm"},"Signature Design by Ashley")])])]),t("td",null,[t("p",{class:"text-sm text-secondary mb-0"},"$129.00")]),t("td",null,[t("div",{class:"rating ms-lg-n4"},[t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star-half-alt","aria-hidden":"true"})])]),t("td",{class:"align-middle text-sm"},[t("div",{class:"progress mx-auto"},[t("div",{class:"progress-bar bg-gradient-warning",role:"progressbar",style:{width:"60%"},"aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100"})])]),t("td",{class:"align-middle text-center"},[t("span",{class:"text-secondary text-sm"},"412301")])]),t("tr",null,[t("td",null,[t("div",{class:"d-flex px-2 py-1"},[t("div",null,[t("img",{src:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-4.jpg",class:"avatar avatar-md me-3",alt:"table image"})]),t("div",{class:"d-flex flex-column justify-content-center"},[t("h6",{class:"mb-0 text-sm"},"Modern Square")])])]),t("td",null,[t("p",{class:"text-sm text-secondary mb-0"},"$59.99")]),t("td",null,[t("div",{class:"rating ms-lg-n4"},[t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star-half-alt","aria-hidden":"true"})])]),t("td",{class:"align-middle text-sm"},[t("div",{class:"progress mx-auto"},[t("div",{class:"progress-bar bg-gradient-warning",role:"progressbar",style:{width:"40%"},"aria-valuenow":"40","aria-valuemin":"0","aria-valuemax":"100"})])]),t("td",{class:"align-middle text-center"},[t("span",{class:"text-secondary text-sm"},"001992")])])])])],-1),B=[W,U];function G(a,e){return g(),b("div",N,B)}const V=y(T,[["render",G]]);const Z={class:"py-4 container-fluid"},$={class:"row"},q={class:"col-12"},H={class:"card"},K={class:"card-body"},X=t("h5",{class:"mb-4"},"Product Details",-1),Q=t("div",{class:"row"},[t("div",{class:"text-center col-xl-5 col-lg-6"},[t("img",{class:"mx-auto shadow-lg w-100 border-radius-lg",src:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb.jpg",alt:"chair"}),t("div",{class:"my-gallery d-flex mt-4 pt-2",itemscope:"",itemtype:"http://schema.org/ImageGallery"},[t("figure",{class:"ms-2 me-3",itemprop:"associatedMedia",itemscope:"",itemtype:"http://schema.org/ImageObject"},[t("a",{href:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-1.jpg",itemprop:"contentUrl","data-size":"500x600"},[t("img",{class:"w-100 min-height-100 max-height-100 border-radius-lg shadow",src:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-1.jpg",alt:"Image description"})])]),t("figure",{class:"me-3",itemprop:"associatedMedia",itemscope:"",itemtype:"http://schema.org/ImageObject"},[t("a",{href:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-2.jpg",itemprop:"contentUrl","data-size":"500x600"},[t("img",{class:"w-100 min-height-100 max-height-100 border-radius-lg shadow",src:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-2.jpg",itemprop:"thumbnail",alt:"Image description"})])]),t("figure",{class:"me-3",itemprop:"associatedMedia",itemscope:"",itemtype:"http://schema.org/ImageObject"},[t("a",{href:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-3.jpg",itemprop:"contentUrl","data-size":"500x600"},[t("img",{class:"w-100 min-height-100 max-height-100 border-radius-lg shadow",src:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-3.jpg",itemprop:"thumbnail",alt:"Image description"})])]),t("figure",{class:"me-3",itemprop:"associatedMedia",itemscope:"",itemtype:"http://schema.org/ImageObject"},[t("a",{href:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-4.jpg",itemprop:"contentUrl","data-size":"500x600"},[t("img",{class:"w-100 min-height-100 max-height-100 border-radius-lg shadow",src:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-4.jpg",itemprop:"thumbnail",alt:"Image description"})])]),t("figure",{itemprop:"associatedMedia",itemscope:"",itemtype:"http://schema.org/ImageObject"},[t("a",{href:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-5.jpg",itemprop:"contentUrl","data-size":"500x600"},[t("img",{class:"w-100 min-height-100 max-height-100 border-radius-lg shadow",src:"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-5.jpg",itemprop:"thumbnail",alt:"Image description"})])])]),t("div",{class:"pswp",tabindex:"-1",role:"dialog","aria-hidden":"true"},[t("div",{class:"pswp__bg"}),t("div",{class:"pswp__scroll-wrap"},[t("div",{class:"pswp__container"},[t("div",{class:"pswp__item"}),t("div",{class:"pswp__item"}),t("div",{class:"pswp__item"})]),t("div",{class:"pswp__ui pswp__ui--hidden"},[t("div",{class:"pswp__top-bar"},[t("div",{class:"pswp__counter"}),t("button",{class:"me-2 btn btn-white btn-sm pswp__button pswp__button--close"}," Close (Esc) "),t("button",{class:"me-2 btn btn-white btn-sm pswp__button pswp__button--fs"}," Fullscreen "),t("button",{class:"me-2 btn btn-white btn-sm pswp__button pswp__button--arrow--left"}," Prev "),t("button",{class:"btn btn-white btn-sm pswp__button pswp__button--arrow--right"}," Next "),t("div",{class:"pswp__preloader"},[t("div",{class:"pswp__preloader__icn"},[t("div",{class:"pswp__preloader__cut"},[t("div",{class:"pswp__preloader__donut"})])])])]),t("div",{class:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[t("div",{class:"pswp__share-tooltip"})]),t("div",{class:"pswp__caption"},[t("div",{class:"pswp__caption__center"})])])])])]),t("div",{class:"mx-auto col-lg-5"},[t("h3",{class:"mt-4 mt-lg-0"},"Apple Bundle"),t("div",{class:"rating"},[t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star","aria-hidden":"true"}),t("i",{class:"fas fa-star-half-alt","aria-hidden":"true"})]),t("br"),t("h6",{class:"mt-3 mb-0"},"Price"),t("h5",null,"$1,419"),t("span",{class:"badge badge-success"},"In Stock"),t("br"),t("label",{class:"mt-4"},"Description"),t("ul",null,[t("li",null," The most beautiful curves of this swivel stool adds an elegant touch to any environment "),t("li",null,"Memory swivel seat returns to original seat position"),t("li",null," Comfortable integrated layered chair seat cushion design "),t("li",null,"Fully assembled! No assembly required")]),t("div",{class:"mt-4 row"},[t("div",{class:"mt-2 col-lg-5 mt-lg-0"},[t("label",null,"Frame Material"),t("select",{id:"choices-material",class:"form-control",name:"choices-material"},[t("option",{value:"Choice 1",selected:""},"Wood"),t("option",{value:"Choice 2"},"Steel"),t("option",{value:"Choice 3"},"Aluminium"),t("option",{value:"Choice 4"},"Carbon")])]),t("div",{class:"mt-2 col-lg-5 mt-lg-0"},[t("label",null,"Color"),t("select",{id:"choices-colors",class:"form-control",name:"choices-colors"},[t("option",{value:"Choice 1",selected:""},"White"),t("option",{value:"Choice 2"},"Gray"),t("option",{value:"Choice 3"},"Black"),t("option",{value:"Choice 4"},"Blue"),t("option",{value:"Choice 5"},"Red"),t("option",{value:"Choice 6"},"Pink")])]),t("div",{class:"col-lg-2"},[t("label",null,"Quantity"),t("select",{id:"choices-quantity",class:"form-control",name:"choices-quantity"},[t("option",{value:"Choice 1",selected:""},"1"),t("option",{value:"Choice 2"},"2"),t("option",{value:"Choice 3"},"3"),t("option",{value:"Choice 4"},"4"),t("option",{value:"Choice 5"},"5"),t("option",{value:"Choice 6"},"6"),t("option",{value:"Choice 7"},"7"),t("option",{value:"Choice 8"},"8"),t("option",{value:"Choice 9"},"9"),t("option",{value:"Choice 10"},"10")])])]),t("div",{class:"mt-4 row"},[t("div",{class:"col-lg-5"},[t("button",{class:"mb-0 btn bg-gradient-success mt-lg-auto w-100",type:"button",name:"button"}," Add to cart ")])])])],-1),Y={class:"mt-5 row"},et={__name:"product-page",setup(a){w(()=>{e("choices-quantity"),e("choices-material"),e("choices-colors"),new k({gallery:".my-gallery",children:"figure",pswpModule:()=>x(()=>import("./photoswipe.esm.6ea007dd.js"),[],import.meta.url)}).init()});const e=s=>{const i=document.getElementById(s);if(i)return new C(i,{searchEnabled:!1})};return(s,i)=>(g(),b("div",Z,[t("div",$,[t("div",q,[t("div",H,[t("div",K,[X,Q,t("div",Y,[I(V)])])])])])]))}};export{et as default};
