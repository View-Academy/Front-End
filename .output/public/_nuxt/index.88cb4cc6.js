import{U as g,q as x,x as u,o as f,b as h,e as a,h as l,u as e,V as d,B as t,E as _,t as b,T as w,C as r,O as k,D as y}from"./entry.5a09969b.js";import{_ as M}from"./team-2.9e1259be.js";import{_ as L}from"./logo-spotify.c101dc3d.js";import{_ as C}from"./index.5fc4e5ca.js";import{u as F}from"./NavStore.e1323869.js";const S={class:"px-3 py-1 container-fluid"},N={class:"sidenav-toggler sidenav-toggler-inner d-xl-block d-none"},B=["onClick"],j={class:"sidenav-toggler-inner"},V={id:"navbar",class:"mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"},$=r('<div class="pe-md-3 d-flex align-items-center ms-md-auto"><div class="input-group"><span class="input-group-text text-body"><i class="fas fa-search"></i></span><input type="text" class="form-control" placeholder="Type here..."></div></div>',1),T={class:"navbar-nav justify-content-end"},Z={class:"nav-item d-flex align-items-center"},z=a("i",{class:"fas fa-user me-sm-1"},null,-1),E={class:"d-sm-inline d-none"},D={class:"nav-item d-xl-none ps-3 d-flex align-items-center"},P=["onClick"],q={class:"sidenav-toggler-inner"},O={class:"px-3 nav-item d-flex align-items-center"},U={class:"nav-item dropdown d-flex align-items-center pe-2"},A=r('<li class="mb-2"><a class="dropdown-item border-radius-md" href="javascript:;"><div class="py-1 d-flex"><div class="my-auto"><img src="'+M+'" class="avatar avatar-sm me-3" alt="user image"></div><div class="d-flex flex-column justify-content-center"><h6 class="mb-1 text-sm font-weight-normal"><span class="font-weight-bold">New message</span> from Laur </h6><p class="mb-0 text-xs text-secondary"><i class="fa fa-clock me-1"></i> 13 minutes ago </p></div></div></a></li><li class="mb-2"><a class="dropdown-item border-radius-md" href="javascript:;"><div class="py-1 d-flex"><div class="my-auto"><img src="'+L+'" class="avatar avatar-sm bg-gradient-dark me-3" alt="logo spotify"></div><div class="d-flex flex-column justify-content-center"><h6 class="mb-1 text-sm font-weight-normal"><span class="font-weight-bold">New album</span> by Travis Scott </h6><p class="mb-0 text-xs text-secondary"><i class="fa fa-clock me-1"></i> 1 day </p></div></div></a></li>',2),G=a("li",null,[a("a",{class:"dropdown-item border-radius-md",href:"javascript:;"},[a("div",{class:"py-1 d-flex"},[a("div",{class:"my-auto avatar avatar-sm bg-gradient-secondary me-3"},[a("svg",{width:"12px",height:"12px",viewBox:"0 0 43 36",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[a("title",null,"credit-card"),a("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[a("g",{transform:"translate(-2169.000000, -745.000000)",fill:"#FFFFFF","fill-rule":"nonzero"},[a("g",{transform:"translate(1716.000000, 291.000000)"},[a("g",{transform:"translate(453.000000, 454.000000)"},[a("path",{class:"color-background",d:"M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z",opacity:"0.593633743"}),a("path",{class:"color-background",d:"M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"})])])])])])]),a("div",{class:"d-flex flex-column justify-content-center"},[a("h6",{class:"mb-1 text-sm font-weight-normal"}," Payment successfully completed "),a("p",{class:"mb-0 text-xs text-secondary"},[a("i",{class:"fa fa-clock me-1"}),y(" 2 days ")])])])])],-1),H=[A,G],aa={__name:"index",setup(I){const s=F();var c=g().getters.getEmail;x(()=>{});function o(){s.toggleSidenavCollapsing()}function m(){s.toggleShowConfig()}const n=u(!1);return(p,i)=>{const v=k;return f(),h("nav",w({id:"navbarBlur",class:e(s).navFixed?`navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none position-sticky left-auto top-2 z-index-sticky ${e(s).darkMode?"bg-default":"bg-white"}`:"navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none"},p.$attrs,{"data-scroll":"true"}),[a("div",S,[l(e(C)),a("div",N,[a("a",{href:"#",class:"p-0 nav-link text-body",onClick:d(o,["prevent"])},[a("div",j,[a("i",{class:t(["sidenav-toggler-line",e(s).navFixed&&!e(s).darkMode?"opacity-8 bg-dark":"bg-white"])},null,2),a("i",{class:t(["sidenav-toggler-line",e(s).navFixed&&!e(s).darkMode?"opacity-8 bg-dark":"bg-white"])},null,2),a("i",{class:t(["sidenav-toggler-line",e(s).navFixed&&!e(s).darkMode?"opacity-8 bg-dark":"bg-white"])},null,2)])],8,B)]),a("div",V,[$,a("ul",T,[a("li",Z,[l(v,{to:"/authentication/signin/basic",class:t(["px-0 nav-link font-weight-bold",e(s).navFixed&&!e(s).darkMode?"opacity-8 text-dark":"text-white"]),target:"_blank"},{default:_(()=>[z,a("span",E,b(e(c)),1)]),_:1},8,["class"])]),a("li",D,[a("a",{id:"iconNavbarSidenav",href:"#",class:"p-0 nav-link text-white",onClick:d(o,["prevent"])},[a("div",q,[a("i",{class:t(["sidenav-toggler-line",e(s).navFixed&&!e(s).darkMode?"opacity-8 bg-dark":"bg-white"])},null,2),a("i",{class:t(["sidenav-toggler-line",e(s).navFixed&&!e(s).darkMode?"opacity-8 bg-dark":"bg-white"])},null,2),a("i",{class:t(["sidenav-toggler-line",e(s).navFixed&&!e(s).darkMode?"opacity-8 bg-dark":"bg-white"])},null,2)])],8,P)]),a("li",O,[a("a",{class:"p-0 nav-link",onClick:m},[a("i",{class:t(["fas fa-cog pe-2 cursor-pointer fixed-plugin-button-nav",e(s).darkMode||!e(s).navFixed?"text-white":"text-dark opacity-8"])},null,2)])]),a("li",U,[a("a",{id:"dropdownMenuButton",href:"#",class:t(`p-0 nav-link text-white ${e(n)?"show":""}`),"data-bs-toggle":"dropdown","aria-expanded":"false",onClick:i[0]||(i[0]=K=>n.value=!e(n))},[a("i",{class:t(["fas fa-bell cursor-pointer",e(s).darkMode||!e(s).navFixed?"text-white":"text-dark opacity-8"])},null,2)],2),a("ul",{class:t(["px-2 py-3 dropdown-menu dropdown-menu-end me-sm-n4",e(n)?"show":""]),"aria-labelledby":"dropdownMenuButton"},H,2)])])])])],16)}}};export{aa as _};