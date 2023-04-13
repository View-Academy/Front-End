import{b}from"./BarChartHorizontal.fa8246a6.js";import{o,b as n,e,h as p,C as m,x as h,t as s,B as c,D as g,u as r,F as _,r as f}from"./entry.5a09969b.js";const x={class:"card"},v=m('<div class="p-3 pb-0 card-header"><div class="d-flex justify-content-between"><h6 class="mb-0">Revenue</h6><button type="button" class="mb-0 btn btn-icon-only btn-rounded btn-outline-secondary ms-2 btn-sm d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="bottom" title data-bs-original-title="See which ads perform better"><i class="fas fa-info" aria-hidden="true"></i></button></div><div class="d-flex align-items-center"><span class="badge badge-md badge-dot me-4"><i class="bg-success"></i><span class="text-xs text-dark">Facebook Ads</span></span><span class="badge badge-md badge-dot me-4"><i class="bg-dark"></i><span class="text-xs text-dark">Google Ads</span></span></div></div>',1),y={class:"p-3 card-body"},w={class:"chart"},M={__name:"RevenueCard",setup(t){return(a,i)=>(o(),n("div",x,[v,e("div",y,[e("div",w,[p(b,{"chart-options":{colors:["#4BB543","#3A416F"],labels:["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1}},series:[{name:"Facebook Ads",data:[50,100,200,190,400,350,500,450,700]},{name:"Google Ads",data:[10,30,40,120,150,220,280,250,280]}]})])])]))}},S={class:"mt-4 col-sm-4 mt-sm-0"},k={class:"card"},A={class:"p-3 card-body position-relative"},$={class:"row"},B={class:"col-7 text-start"},C={class:"text-sm mb-1 text-uppercase font-weight-bold"},D={class:"mb-0 font-weight-bolder"},F={class:"font-weight-normal text-secondary"},N={class:"col-5"},j={class:"dropdown text-end"},V={class:"text-xs text-secondary"},G=["href"],O={__name:"DefaultStatisticsCard",props:{title:{type:String,default:"Default Statistics Card"},count:{type:String,default:""},menu:{type:String,default:""},percentage:{type:Object,default:()=>{},color:String,value:String,label:String},dropdown:{type:Array,default:()=>[],label:String,route:String}},setup(t){const a=h(!1);return(i,l)=>(o(),n("div",S,[e("div",k,[e("div",A,[e("div",$,[e("div",B,[e("p",C,s(t.title),1),e("h5",D,s(t.count),1),e("span",{class:c([`text-${t.percentage.color}`,"mt-auto mb-0 text-sm text-end font-weight-bolder"])},[g(s(t.percentage.value)+" ",1),e("span",F,s(t.percentage.label),1)],2)]),e("div",N,[e("div",j,[e("a",{id:"dropdownUsers1",href:"javascript:;",class:c(["cursor-pointer text-secondary",{show:r(a)}]),"data-bs-toggle":"dropdown","aria-expanded":"false",onClick:l[0]||(l[0]=d=>a.value=!r(a))},[e("span",V,s(t.menu),1)],2),e("ul",{class:c(["px-2 py-3 dropdown-menu dropdown-menu-end",{show:r(a)}]),"aria-labelledby":"dropdownUsers1"},[(o(!0),n(_,null,f(t.dropdown,(d,u)=>(o(),n("li",{key:u},[e("a",{class:"dropdown-item border-radius-md",href:d.route},s(d.label),9,G)]))),128))],2)])])])])])]))}};export{M as _,O as a};
