import{o as s,b as a,t as n,G as d,e as t,F as c,r as b,B as i,h as f,H as y}from"./entry.5a09969b.js";const x={key:0,class:"text-uppercase text-body text-xs font-weight-bolder mb-3 pt-2"},k={class:"list-group"},S={class:"d-flex"},$={class:"d-flex align-items-center"},v={class:"d-flex flex-column"},p={class:"mb-1 text-sm text-dark"},B={class:"text-xs"},z={key:0,class:"mt-3 mb-2 horizontal dark"},j={key:1,class:"mt-3 mb-2"},w={__name:"RankingList",props:{title:{type:String,default:""},items:{type:Array,default:()=>{},title:String,date:String,amount:String,icon:String,color:String},horizontalBreak:{type:Boolean,default:!0}},setup(e){return(l,m)=>(s(),a(c,null,[e.title?(s(),a("h6",x,n(e.title),1)):d("",!0),t("ul",k,[(s(!0),a(c,null,b(e.items,({icon:u,title:h,date:g,color:o,amount:_},r)=>(s(),a("li",{key:r,class:"pb-0 border-0 list-group-item justify-content-between ps-0 border-radius-lg"},[t("div",S,[t("div",$,[t("button",{class:i(["p-3 mb-0 btn btn-icon-only btn-rounded me-3 btn-sm d-flex align-items-center justify-content-center",`btn-outline-${o}`])},[t("i",{class:i(["fas",u])},null,2)],2),t("div",v,[t("h6",p,n(h),1),t("span",B,n(g),1)])]),t("div",{class:i(["text-sm d-flex align-items-center text-gradient font-weight-bold ms-auto",`text-${o}`])},n(_),3)]),e.horizontalBreak&&r!==e.items.length-1?(s(),a("hr",z)):(s(),a("div",j))]))),128))])],64))}},C={class:"card h-100"},L={class:"p-3 pb-0 card-header"},N={class:"row"},V={class:"col-md-6"},A={class:"mb-0"},F={key:0,class:"col-md-6 d-flex justify-content-end align-items-center"},R=t("i",{class:"far fa-calendar-alt me-2"},null,-1),D={class:"p-3 card-body"},G={__name:"RankingListCard",props:{card:{type:Object,title:String,subtitle:String,date:String,default:()=>{}},items:{type:Array,default:()=>{},title:String,date:String,amount:String,icon:String,color:String},horizontalBreak:{type:Boolean,default:!0}},setup(e){return(l,m)=>(s(),a("div",C,[t("div",L,[t("div",N,[t("div",V,[t("h6",A,n(e.card.title),1)]),e.card.date?(s(),a("div",F,[R,t("small",null,n(e.card.date),1)])):d("",!0)])]),t("div",D,[f(w,{title:e.card.subtitle,items:e.items,"horizontal-break":e.horizontalBreak},null,8,["title","items","horizontal-break"]),y(l.$slots,"default")])]))}};export{G as _,w as a};
