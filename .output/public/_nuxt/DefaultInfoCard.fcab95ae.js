import{o as s,b as a,e as t,B as c,t as n}from"./entry.5a09969b.js";const i={class:"card"},o={class:"p-3 mx-4 text-center card-header d-flex justify-content-center"},r={class:"p-3 pt-0 text-center card-body"},d={class:"mb-0 text-center"},l={class:"text-xs"},u=t("hr",{class:"my-3 horizontal dark"},null,-1),h={class:"mb-0"},y={__name:"DefaultInfoCard",props:{icon:{type:[String,Object],required:!0,component:{type:String},background:{type:String},default:()=>({background:"bg-gradient-success"})},title:{type:String,required:!0},description:{type:String,default:""},value:{type:[String,Number],default:""}},setup(e){return(g,m)=>(s(),a("div",i,[t("div",o,[t("div",{class:c(`icon icon-shape icon-lg shadow text-center border-radius-lg ${e.icon.background}`)},[t("i",{class:c(["opacity-10",typeof e.icon=="string"?e.icon:e.icon.component]),"aria-hidden":"true"},null,2)],2)]),t("div",r,[t("h6",d,n(e.title),1),t("span",l,n(e.description),1),u,t("h5",h,n(e.value),1)])]))}};export{y as _};
