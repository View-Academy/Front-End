import{o,b as s,e,B as n,t as c}from"./entry.5a09969b.js";const a={class:"col-md-4 col-12"},i={class:"card card-plain text-center"},r={class:"card-body"},d={class:"text-sm font-weight-bold mb-2"},l=["innerHTML"],h={__name:"TransparentInfoCard",props:{icon:{type:Object,required:!0,component:String,color:String},description:{type:String,default:""},value:{type:String,default:""}},setup(t){return(m,p)=>(o(),s("div",a,[e("div",i,[e("div",r,[e("div",{class:n(`icon icon-shape bg-gradient-${t.icon.color} shadow text-center border-radius-md mb-2`)},[e("i",{class:n(`${t.icon.component} text-lg opacity-10`),"aria-hidden":"true"},null,2)],2),e("p",d,c(t.description),1),e("h5",{class:"font-weight-bolder",innerHTML:t.value},null,8,l)])])]))}};export{h as _};
