import{_ as o}from"./ArgonAvatar.15e71eb6.js";import{_ as i}from"./mastercard.8028bf89.js";import{o as n,b as d,e,B as c,t as a,h as l,u as s,M as m}from"./entry.5a09969b.js";const h=""+new URL("card-visa.6f652bc2.jpg",import.meta.url).href,_={class:"card bg-transparent shadow-xl"},x={class:"card-body position-relative z-index-1 p-3"},u=e("i",{class:"fas fa-wifi text-white p-2","aria-hidden":"true"},null,-1),g={class:"text-white mt-4 mb-5 pb-2"},p={class:"d-flex"},b={class:"d-flex"},f={class:"me-4"},y={class:"text-white text-sm opacity-8 mb-0"},v={class:"text-white mb-0"},w={class:"text-white text-sm opacity-8 mb-0"},k={class:"text-white mb-0"},S={class:"w-20 d-flex align-items-end justify-content-end ms-auto"},z={__name:"MasterCard",props:{card:{type:Object,number:String,holderName:String,expiryDate:String,holderText:String,expiryText:String,background:String,default:()=>({number:"4562 1122 4594 7852",holderName:"Jack Peterson",expiryDate:"11/22",holderText:"Card Holder",expiryText:"Expires",background:"dark"})}},setup(t){return(T,N)=>{const r=o;return n(),d("div",_,[e("div",{class:"overflow-hidden position-relative border-radius-xl",style:m({backgroundImage:"url("+s(h)+")"})},[e("span",{class:c(["mask",`bg-gradient-${t.card.background}`])},null,2),e("div",x,[u,e("h5",g,a(t.card.number),1),e("div",p,[e("div",b,[e("div",f,[e("p",y,a(t.card.holderText),1),e("h6",v,a(t.card.holderName),1)]),e("div",null,[e("p",w,a(t.card.expiryText),1),e("h6",k,a(t.card.expiryDate),1)])]),e("div",S,[l(r,{class:"w-60 mt-2",image:s(i),alt:"logo"},null,8,["image"])])])])],4)])}}};export{z as _};
