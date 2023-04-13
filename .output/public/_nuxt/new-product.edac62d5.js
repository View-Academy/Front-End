import{_}from"./ArgonButton.a37ff266.js";import{Q as L}from"./vue-quill.esm-bundler.6ccc9f7c.js";import{C as u}from"./choices.b66eef54.js";import{q as f,o as d,b as p,e as t,h as l,u as S,E as a,D as c,C as v,a as C,B as n,i as m}from"./entry.5a09969b.js";import{$ as b}from"./dropzone.ec2618c5.js";import{_ as $}from"./ArgonInput.fa6336e4.js";import{s as P}from"./nav-pills.dce9dffc.js";import{i as F}from"./team-1.ea0a9766.js";const I={class:"p-3 bg-white card multisteps-form__panel border-radius-xl","data-animation":"FadeIn"},B=t("h5",{class:"font-weight-bolder"},"Product Information",-1),M={class:"multisteps-form__content"},E=v('<div class="mt-3 row"><div class="col-12 col-sm-6"><label>Name</label><input class="multisteps-form__input form-control" type="text" placeholder="eg. Off-White"></div><div class="mt-3 col-12 col-sm-6 mt-sm-0"><label>Weight</label><input class="multisteps-form__input form-control" type="text" placeholder="eg. 42"></div></div>',1),N={class:"row"},z={class:"col-sm-6"},j=t("label",{class:"mt-4"},"Description",-1),Z=t("p",{class:"text-xs form-text text-muted ms-1 d-inline"},"(optional)",-1),A={id:"edit-description",class:"h-50"},T=v('<div class="mt-4 col-sm-6 mt-sm-0"><label class="mt-4">Category</label><select id="choices-category" class="form-control" name="choices-category"><option value="Choice 1" selected="">Clothing</option><option value="Choice 2">Real Estate</option><option value="Choice 3">Electronics</option><option value="Choice 4">Furniture</option><option value="Choice 5">Others</option></select><label>Sizes</label><select id="choices-sizes" class="form-control" name="choices-sizes"><option value="Choice 1" selected="">Medium</option><option value="Choice 2">Small</option><option value="Choice 3">Large</option><option value="Choice 4">Extra Large</option><option value="Choice 5">Extra Small</option></select></div>',1),O={class:"mt-4 button-row d-flex col-12"},R={__name:"ProductInfo",setup(r){f(()=>{if(document.getElementById("choices-category")){const s=document.getElementById("choices-category");new u(s,{searchEnabled:!1})}if(document.getElementById("choices-sizes")){const s=document.getElementById("choices-sizes");new u(s,{searchEnabled:!1})}});const e="<p>Some initial <strong>bold</strong> text</p>";return(s,i)=>{const o=_;return d(),p("div",I,[B,t("div",M,[E,t("div",N,[t("div",z,[j,Z,t("div",A,[l(S(L),{theme:"snow",content:e,"onUpdate:content":i[0]||(i[0]=g=>e=g),contentType:"html"})])]),T]),t("div",O,[l(o,{type:"button",color:"dark",variant:"gradient",class:"mb-0 ms-auto js-btn-next",title:"Next",onClick:s.$parent.nextStep},{default:a(()=>[c(" Next ")]),_:1},8,["onClick"])])])])}}},D={class:"p-3 bg-white card multisteps-form__panel border-radius-xl","data-animation":"FadeIn"},U=t("h5",{class:"font-weight-bolder"},"Media",-1),V={class:"multisteps-form__content"},H=v('<div class="mt-3 row"><div class="col-12"><label>Product images</label><form id="dropzone" action="/file-upload" class="form-control dropzone"><div class="fallback"><input name="file" type="file" multiple></div></form></div></div>',1),q={class:"mt-4 button-row d-flex col-12"},K={__name:"Media",setup(r){return f(()=>{if(b.autoDiscover=!1,document.getElementById("dropzone")){const e=document.getElementById("dropzone");new b(e,{url:"/file/post",addRemoveLinks:!0})}}),(e,s)=>{const i=_;return d(),p("div",D,[U,t("div",V,[H,t("div",q,[l(i,{color:"secondary",variant:"gradient",class:"mb-0 js-btn-prev",title:"Prev",onClick:e.$parent.prevStep},{default:a(()=>[c(" Prev ")]),_:1},8,["onClick"]),l(i,{type:"button",color:"dark",variant:"gradient",class:"mb-0 ms-auto js-btn-next",title:"Next",onClick:this.$parent.nextStep},{default:a(()=>[c("Next ")]),_:1},8,["onClick"])])])])}}},Q={},W={class:"p-3 bg-white card multisteps-form__panel border-radius-xl","data-animation":"FadeIn"},G=t("h5",{class:"font-weight-bolder"},"Socials",-1),Y={class:"multisteps-form__content"},J={class:"mt-3 row"},X={class:"col-12"},tt=t("label",null,"Shoppify Handle",-1),et={class:"mt-3 col-12"},ot=t("label",null,"Facebook Account",-1),st={class:"mt-3 col-12"},lt=t("label",null,"Instagram Account",-1),it={class:"row"},nt={class:"mt-4 button-row d-flex col-12"};function at(r,e){const s=$,i=_;return d(),p("div",W,[G,t("div",Y,[t("div",J,[t("div",X,[tt,l(s,{class:"multisteps-form__input",type:"text",placeholder:"@argon"})]),t("div",et,[ot,l(s,{class:"multisteps-form__input",type:"text",placeholder:"https://..."})]),t("div",st,[lt,l(s,{class:"multisteps-form__input",type:"text",placeholder:"https://..."})])]),t("div",it,[t("div",nt,[l(i,{color:"secondary",variant:"gradient",class:"mb-0 js-btn-prev",title:"Prev",onClick:r.$parent.prevStep},{default:a(()=>[c(" Prev ")]),_:1},8,["onClick"]),l(i,{type:"button",color:"dark",variant:"gradient",class:"mb-0 ms-auto js-btn-next",title:"Next",onClick:r.$parent.nextStep},{default:a(()=>[c(" Next ")]),_:1},8,["onClick"])])])])])}const ct=C(Q,[["render",at]]),rt={class:"p-3 bg-white card multisteps-form__panel border-radius-xl","data-animation":"FadeIn"},dt=t("h5",{class:"font-weight-bolder"},"Pricing",-1),pt={class:"mt-3 multisteps-form__content"},mt=v('<div class="row"><div class="col-3"><label>Price</label><input class="multisteps-form__input form-control" type="text" placeholder="99.00"></div><div class="col-4"><label>Currency</label><select id="choices-currency" class="form-control" name="choices-sizes"><option value="Choice 1" selected="">USD</option><option value="Choice 2">EUR</option><option value="Choice 3">GBP</option><option value="Choice 4">CNY</option><option value="Choice 5">INR</option><option value="Choice 6">BTC</option></select></div><div class="col-5"><label>SKU</label><input class="multisteps-form__input form-control" type="text" placeholder="71283476591"></div></div><div class="row"><div class="col-12"><label class="mt-4 form-label">Tags</label><select id="choices-tags" class="form-control" name="choices-tags" multiple><option value="Choice 1" selected>In Stock</option><option value="Choice 2">Out of Stock</option><option value="Choice 3">Sale</option><option value="Choice 4">Black Friday</option></select></div></div>',2),ut={class:"mt-4 button-row d-flex col-12"},_t={__name:"Pricing",setup(r){return f(()=>{try{const e=document.getElementById("choices-currency");e&&new u(e,{searchEnabled:!1,allowHTML:!0});const s=document.getElementById("choices-tags");s&&new u(s,{removeItemButton:!0,allowHTML:!0}).setChoices([{value:"One",label:"Expired",disabled:!0},{value:"Two",label:"Out of Stock",selected:!0}],"value","label",!1)}catch{}}),(e,s)=>{const i=_;return d(),p("div",rt,[dt,t("div",pt,[mt,t("div",ut,[l(i,{type:"button",color:"secondary",variant:"gradient",class:"mb-0 js-btn-prev",title:"Prev",onClick:e.$parent.prevStep},{default:a(()=>[c(" Prev ")]),_:1},8,["onClick"]),l(i,{type:"button",color:"dark",variant:"gradient",class:"mb-0 ms-auto js-btn-next",title:"Next"},{default:a(()=>[c(" Next ")]),_:1})])])])}}},vt={components:{ProductInfo:R,Media:K,Socials:ct,Pricing:_t},data(){return{showMenu:!1,activeClass:"js-active position-relative",activeStep:0,formSteps:3}},mounted(){P()},methods:{nextStep(){this.activeStep<this.formSteps?this.activeStep+=1:this.activeStep-=1},prevStep(){this.activeStep>0&&(this.activeStep-=1)}}},ht=t("div",{class:"card shadow-lg mx-4 card-profile-bottom"},[t("div",{class:"card-body p-3"},[t("div",{class:"row gx-4"},[t("div",{class:"col-auto"},[t("div",{class:"avatar avatar-xl position-relative"},[t("img",{src:F,alt:"profile_image",class:"shadow-sm w-100 border-radius-lg"})])]),t("div",{class:"col-auto my-auto"},[t("div",{class:"h-100"},[t("h5",{class:"mb-1"},"Sayo Kravits"),t("p",{class:"mb-0 text-sm font-weight-bold"},"Public Relations")])]),t("div",{class:"mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"},[t("div",{class:"nav-wrapper position-relative end-0"},[t("ul",{class:"p-1 bg-transparent nav nav-pills nav-fill",role:"tablist"},[t("li",{class:"nav-item"},[t("a",{class:"px-0 py-1 mb-0 nav-link active","data-bs-toggle":"tab",href:"javascript:;",role:"tab","aria-selected":"true"},[t("svg",{class:"text-dark",width:"16px",height:"16px",viewBox:"0 0 42 42",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[t("g",{transform:"translate(-2319.000000, -291.000000)",fill:"#FFFFFF","fill-rule":"nonzero"},[t("g",{transform:"translate(1716.000000, 291.000000)"},[t("g",{transform:"translate(603.000000, 0.000000)"},[t("path",{class:"color-background",d:"M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"}),t("path",{class:"color-background",d:"M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z",opacity:"0.7"}),t("path",{class:"color-background",d:"M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z",opacity:"0.7"})])])])])]),t("span",{class:"ms-1"},"App")])]),t("li",{class:"nav-item"},[t("a",{class:"px-0 py-1 mb-0 nav-link","data-bs-toggle":"tab",href:"javascript:;",role:"tab","aria-selected":"false"},[t("svg",{class:"text-dark",width:"16px",height:"16px",viewBox:"0 0 40 44",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[t("title",null,"document"),t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[t("g",{transform:"translate(-1870.000000, -591.000000)",fill:"#FFFFFF","fill-rule":"nonzero"},[t("g",{transform:"translate(1716.000000, 291.000000)"},[t("g",{transform:"translate(154.000000, 300.000000)"},[t("path",{class:"color-background",d:"M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z",opacity:"0.603585379"}),t("path",{class:"color-background",d:"M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"})])])])])]),t("span",{class:"ms-1"},"Messages")])]),t("li",{class:"nav-item"},[t("a",{class:"px-0 py-1 mb-0 nav-link","data-bs-toggle":"tab",href:"javascript:;",role:"tab","aria-selected":"false"},[t("svg",{class:"text-dark",width:"16px",height:"16px",viewBox:"0 0 40 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[t("title",null,"settings"),t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[t("g",{transform:"translate(-2020.000000, -442.000000)",fill:"#FFFFFF","fill-rule":"nonzero"},[t("g",{transform:"translate(1716.000000, 291.000000)"},[t("g",{transform:"translate(304.000000, 151.000000)"},[t("polygon",{class:"color-background",opacity:"0.596981957",points:"18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"}),t("path",{class:"color-background",d:"M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z",opacity:"0.596981957"}),t("path",{class:"color-background",d:"M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"})])])])])]),t("span",{class:"ms-1"},"Settings")])])])])])])])],-1),ft={class:"py-4 container-fluid"},gt={class:"row"},bt={class:"col-12"},Ct={class:"multisteps-form"},xt={class:"row"},wt={class:"mx-auto mt-4 mb-3 col-12 col-lg-8 mb-sm-5"},kt={class:"multisteps-form__progress"},yt=t("span",null,"1. Product Info",-1),Lt=[yt],St={class:"row"},$t={class:"m-auto col-12 col-lg-8"},Pt={class:"mb-8 multisteps-form__form"};function Ft(r,e,s,i,o,g){const x=m("ProductInfo"),w=m("Media"),k=m("Socials"),y=m("Pricing");return d(),p("div",null,[ht,t("div",ft,[t("div",gt,[t("div",bt,[t("div",Ct,[t("div",xt,[t("div",wt,[t("div",kt,[t("button",{class:n(["multisteps-form__progress-btn js-active",o.activeStep>=0?o.activeClass:""]),type:"button",title:"Product Info",onClick:e[0]||(e[0]=h=>o.activeStep=0)},Lt,2),t("button",{class:n(["multisteps-form__progress-btn",o.activeStep>=1?o.activeClass:""]),type:"button",title:"Media",onClick:e[1]||(e[1]=h=>o.activeStep=1)}," 2. Media ",2),t("button",{class:n(["multisteps-form__progress-btn",o.activeStep>=2?o.activeClass:""]),type:"button",title:"Socials",onClick:e[2]||(e[2]=h=>o.activeStep=2)}," 3. Socials ",2),t("button",{class:n(["multisteps-form__progress-btn",o.activeStep>=3?o.activeClass:""]),type:"button",title:"Pricing",onClick:e[3]||(e[3]=h=>o.activeStep=3)}," 4. Pricing ",2)])])]),t("div",St,[t("div",$t,[t("form",Pt,[l(x,{class:n(o.activeStep===0?o.activeClass:"")},null,8,["class"]),l(w,{class:n(o.activeStep===1?o.activeClass:"")},null,8,["class"]),l(k,{class:n(o.activeStep===2?o.activeClass:"")},null,8,["class"]),l(y,{class:n(o.activeStep===3?o.activeClass:"")},null,8,["class"])])])])])])])])])}const At=C(vt,[["render",Ft]]);export{At as default};
