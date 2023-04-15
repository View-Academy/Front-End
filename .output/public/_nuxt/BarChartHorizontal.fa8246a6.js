import{q as s,A as r,i as o,o as i,c as n}from"./entry.5a09969b.js";const h={__name:"PieChart",props:{chartOptions:{type:Object,default:()=>({colors:["#17c1e8","#4BB543","#3A416F","#a8b8d8"],labels:["Facebook","Direct","Organic","Referral"],legend:{show:!1},dataLabels:{enabled:!1},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]})},series:{type:Array,default:()=>[15,20,12,60]},width:{type:[Number,String],default:400}},setup(e){return s(()=>{r(()=>{window.dispatchEvent(new Event("resize"))})}),(a,c)=>{const t=o("apexchart");return i(),n(t,{type:"pie",width:e.width,options:e.chartOptions,series:e.series},null,8,["width","options","series"])}}},p={__name:"GradientLineChart",props:{height:{type:[Number,String],default:290},chartOptions:{type:Object,default:()=>({colors:["#4BB543","#3A416F"],labels:["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},legend:{show:!1}})},series:{type:Array,default:()=>[{name:"Mobile Apps",data:[50,40,300,220,500,250,400,230,500]},{name:"Websites",data:[30,90,40,140,290,290,340,230,400]}]}},setup(e){return s(()=>{r(()=>{window.dispatchEvent(new Event("resize"))})}),(a,c)=>{const t=o("apexchart");return i(),n(t,{type:"area",height:e.height,options:e.chartOptions,series:e.series},null,8,["height","options","series"])}}},d={__name:"BarChartHorizontal",props:{height:{type:[Number,String],default:300},chartOptions:{type:Object,default:()=>({chart:{type:"bar"},colors:["#f0b52b"],fill:{type:"solid"},plotOptions:{bar:{borderRadius:4,horizontal:!0}},dataLabels:{enabled:!0},xaxis:{categories:["Microbiology","Embryology","Pathology","Behavioral science","OBGYN","Surgery","Immunology","Anatomy & Histology","Surgery"]}})},series:{type:Array,default:()=>[{name:"Sales by age",data:[15,20,12,60,20,15]}]}},setup(e){return s(()=>{r(()=>{window.dispatchEvent(new Event("resize"))})}),(a,c)=>{const t=o("apexchart");return i(),n(t,{height:e.height,options:e.chartOptions,series:e.series,xaxis:a.categories},null,8,["height","options","series","xaxis"])}}};export{d as _,h as a,p as b};