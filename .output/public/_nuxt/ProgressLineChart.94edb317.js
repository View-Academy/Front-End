import{q as i,A as r,i as n,o as c,b as l,e,B as t,t as a,h as d}from"./entry.5a09969b.js";const h={class:"overflow-hidden card"},u={class:"p-3 pb-0 card-header"},g={class:"d-flex align-items-center"},p={class:"text-center shadow icon icon-shape border-radius-md bg-gradient-success"},m={class:"mb-0 text-sm text-capitalize font-weight-bold"},v={class:"mb-0 font-weight-bolder"},b={class:"progress-info"},f={class:"progress-j"},w={class:"text-xs font-weight-bold"},y={class:"progress"},_=["aria-valuenow"],x={class:"p-0 mt-3 card-body"},L={class:"chart"},S={__name:"ProgressLineChart",props:{title:{type:String,default:"Progress Line Chart"},icon:{type:String,default:"calendar-grid-58"},count:{type:Number,default:0},progress:{type:Number,default:0},height:{type:[String,Number],default:100},isRTL:{type:Boolean,default:!1},chartOptions:{type:Object,default:()=>({chart:{type:"area",zoom:{enabled:!1}},colors:["#2dce89"],labels:["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1},yaxis:{show:!1}})},series:{type:Array,default:()=>[{name:"Tasks",data:[40,45,42,41,40,43,40,42,39]}]}},setup(s){return i(()=>{r(()=>{window.dispatchEvent(new Event("resize"))})}),(N,k)=>{const o=n("apexchart");return c(),l("div",h,[e("div",u,[e("div",g,[e("div",p,[e("i",{class:t(["text-lg ni opacity-10",`ni-${s.icon}`]),"aria-hidden":"true"},null,2)]),e("div",{class:t(s.isRTL?"me-3":"ms-3")},[e("p",m,a(s.title),1),e("h5",v,a(s.count),1)],2),e("div",{class:t(["progress-wrapper w-25",s.isRTL?"me-auto":"ms-auto"])},[e("div",b,[e("div",f,[e("span",w,a(s.progress)+"%",1)])]),e("div",y,[e("div",{class:t(["progress-bar bg-success",`w-${s.progress}`]),role:"progressbar","aria-valuenow":s.progress,"aria-valuemin":"0","aria-valuemax":"100"},null,10,_)])],2)])]),e("div",x,[e("div",L,[d(o,{height:s.height,options:s.chartOptions,series:s.series},null,8,["height","options","series"])])])])}}};export{S as _};