import{_}from"./ArgonButton.a37ff266.js";import{_ as u}from"./team-2.9e1259be.js";import{i as m}from"./team-1.ea0a9766.js";import{i as h}from"./team-3.fee1766f.js";import{i as p}from"./team-4.e09e8de7.js";import{t as f}from"./team-5.7075445f.js";import{e as v}from"./ivana-squares.e98d8db2.js";import{a as g,m as b,b as r,e as t,h as n,E as i,F as x,r as w,C as y,o as l,D as c,B as S,t as d,p as j,f as k}from"./entry.5a09969b.js";const z={name:"previous-test",data(){return{img1:u,img2:m,img3:h,img4:p,img5:f,img6:v}},computed:{...b(["getUserInfo","getPreviousQuizes"])},mounted(){var e=sessionStorage.getItem("info");this.$store.dispatch("yourAction",JSON.parse(e)),this.$store.dispatch("SetPreviousQuize")}},o=e=>(j("data-v-931c1703"),e=e(),k(),e),A={class:"container-fluid py-4"},I={class:"d-sm-flex justify-content-between"},N={class:"d-flex"},$={class:"dropdown d-inline"},B=y('<ul class="dropdown-menu dropdown-menu-lg-start px-2 py-3" aria-labelledby="navbarDropdownMenuLink2" style data-v-931c1703><li data-v-931c1703><a class="dropdown-item border-radius-md" href="javascript:;" data-v-931c1703>Status: Paid</a></li><li data-v-931c1703><a class="dropdown-item border-radius-md" href="javascript:;" data-v-931c1703>Status: Refunded</a></li><li data-v-931c1703><a class="dropdown-item border-radius-md" href="javascript:;" data-v-931c1703>Status: Canceled</a></li><li data-v-931c1703><hr class="horizontal dark my-2" data-v-931c1703></li><li data-v-931c1703><a class="dropdown-item border-radius-md text-danger" href="javascript:;" data-v-931c1703>Remove Filter</a></li></ul>',1),C=o(()=>t("span",{class:"btn-inner--icon"},[t("i",{class:"ni ni-archive-2"})],-1)),V=o(()=>t("span",{class:"btn-inner--text"},"Export CSV",-1)),D={class:"row"},F={class:"col-12"},P={class:"card mt-4"},E={class:"table-responsive"},L={id:"order-list",class:"table table-flush"},Q=o(()=>t("thead",{class:"thead-light"},[t("tr",null,[t("th",null,"title"),t("th",null,"correct Answer"),t("th",null,"incorrect Answer"),t("th",null,"omitedte"),t("th",null,"date"),t("th",null,"action")])],-1)),T={class:"d-flex align-items-center"},M={class:"text-xs font-weight-bold ms-2 mb-0"},R={class:"font-weight-bold"},G={class:"d-flex align-items-center"},J=o(()=>t("i",{class:"fas fa-check","aria-hidden":"true"},null,-1)),O={class:"text-xs font-weight-bold"},U={class:"d-flex align-items-center"},q=o(()=>t("i",{class:"fas fa-times","aria-hidden":"true"},null,-1)),H={class:"text-xs font-weight-bold"},K={class:"d-flex align-items-center"},W=o(()=>t("i",{class:"fas fa-undo","aria-hidden":"true"},null,-1)),X={class:"text-xs font-weight-bold"},Y={class:"my-2 text-xs"},Z=o(()=>t("td",{class:"text-xs font-weight-bold"},[t("i",{class:"fa fa-eye","aria-hidden":"true"})],-1));function tt(e,et,st,ot,at,nt){const a=_;return l(),r("div",A,[t("div",I,[t("div",null,[n(a,{color:"white",variant:"outline"},{default:i(()=>[c("New order")]),_:1})]),t("div",N,[t("div",$,[n(a,{id:"navbarDropdownMenuLink2",color:"white",variant:"outline",class:"dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},{default:i(()=>[c("Filters")]),_:1}),B]),n(a,{class:"btn-icon ms-2 export",size:"",color:"white",variant:"outline","data-type":"csv"},{default:i(()=>[C,V]),_:1})])]),t("div",D,[t("div",F,[t("div",P,[t("div",E,[t("table",L,[Q,t("tbody",null,[(l(!0),r(x,null,w(e.getPreviousQuizes,s=>(l(),r("tr",{key:s,class:S(s.yourScore>=50?"green":"red")},[t("td",null,[t("div",T,[t("p",M,d(s.title),1)])]),t("td",R,[t("div",G,[n(a,{color:"success",variant:"outline",class:"btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"},{default:i(()=>[J]),_:1}),t("span",null,d(s.correctAnswer),1)])]),t("td",O,[t("div",U,[n(a,{color:"danger",variant:"outline",class:"btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"},{default:i(()=>[q]),_:1}),t("span",null,d(s.incorrectAnswer),1)])]),t("td",H,[t("div",K,[n(a,{color:"info",variant:"outline",class:"btn-icon-only btn-rounded mb-0 me-2 btn-sm d-flex align-items-center justify-content-center"},{default:i(()=>[W]),_:1}),t("span",null,d(s.omitedte),1)])]),t("td",X,[t("span",Y,d(s.data),1)]),Z],2))),128))])])])])])])])}const ht=g(z,[["render",tt],["__scopeId","data-v-931c1703"]]);export{ht as default};
