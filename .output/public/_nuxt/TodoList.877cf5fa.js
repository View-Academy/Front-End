import{_ as y}from"./ArgonCheckbox.935e1c17.js";import{x as v,o as e,b as o,e as t,t as s,F as r,r as _,h as k,B as w,u as h}from"./entry.5a09969b.js";const S={class:"card"},B={class:"p-3 card-header"},C={class:"row"},j={class:"col-md-6"},z={class:"mb-0"},A={class:"col-md-6 d-flex justify-content-end align-items-center"},T=t("hr",{class:"mb-0 horizontal dark"},null,-1),q={class:"p-3 pt-0 card-body"},D={class:"list-group list-group-flush","data-toggle":"checklist"},F={class:"checklist-item checklist-item-primary ps-2 ms-3"},L={class:"d-flex align-items-center"},N={class:"mb-0 text-sm text-dark font-weight-bold"},V={class:"dropdown float-lg-end ms-auto pe-4"},E=["id"],M=t("i",{class:"fa fa-ellipsis-h text-secondary","aria-hidden":"true"},null,-1),O=[M],P=["aria-labelledby"],$=["href"],G={class:"mt-3 d-flex align-items-center ms-4 ps-1"},H=t("p",{class:"mb-0 text-xs text-secondary font-weight-bold"},"Date",-1),I={class:"text-xs font-weight-bolder"},J={class:"ms-auto"},K=t("p",{class:"mb-0 text-xs text-secondary font-weight-bold"}," Project ",-1),Q={class:"text-xs font-weight-bolder"},R={class:"mx-auto"},U=t("p",{class:"mb-0 text-xs text-secondary font-weight-bold"}," Company ",-1),W={class:"text-xs font-weight-bolder"},X=t("hr",{class:"mt-4 mb-0 horizontal dark"},null,-1),st={__name:"TodoList",props:{header:{type:Object,title:String,dateTime:String,required:!0},todos:{type:Array,required:!0,todo:String,date:String,id:String,company:String,action:{type:Array,route:String,label:String}}},setup(a){const i=v(!1);return(Y,d)=>{const m=y;return e(),o("div",S,[t("div",B,[t("div",C,[t("div",j,[t("h6",z,s(a.header.title),1)]),t("div",A,[t("small",null,s(a.header.dateTime),1)])]),T]),t("div",q,[t("ul",D,[(e(!0),o(r,null,_(a.todos,({todo:l,date:u,id:n,company:p,isComplete:g},x)=>(e(),o("li",{key:x,class:"py-0 mb-3 border-0 list-group-item flex-column align-items-start ps-0"},[t("div",F,[t("div",L,[k(m,{id:n,name:l,checked:g},null,8,["id","name","checked"]),t("h6",N,s(l),1),t("div",V,[t("a",{id:n,href:"#",class:w(["cursor-pointer",{show:h(i)}]),"data-bs-toggle":"dropdown","aria-expanded":"false",onClick:d[0]||(d[0]=c=>i.value=!h(i))},O,10,E),t("ul",{class:"px-2 py-3 dropdown-menu ms-sm-n4 ms-n5","aria-labelledby":n},[(e(!0),o(r,null,_(a.todos,({action:{route:c,label:b}},f)=>(e(),o("li",{key:f},[t("a",{class:"dropdown-item border-radius-md",href:c},s(b),9,$)]))),128))],8,P)])]),t("div",G,[t("div",null,[H,t("span",I,s(u),1)]),t("div",J,[K,t("span",Q,s(n),1)]),t("div",R,[U,t("span",W,s(p),1)])])]),X]))),128))])])])}}};export{st as _};
