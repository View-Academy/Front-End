import{_ as v}from"./ArgonInput.fa6336e4.js";import{_ as u}from"./ArgonButton.a37ff266.js";import{a as p,o as _,b as d,e as t,h as e,E as a,D as r,C as f,H as y,q as x,B as i,i as m}from"./entry.5a09969b.js";import{C}from"./choices.b66eef54.js";const k={},A={class:"card multisteps-form__panel p-3 border-radius-xl bg-white","data-animation":"FadeIn"},I=t("h5",{class:"font-weight-bolder mb-0"},"About me",-1),P=t("p",{class:"mb-0 text-sm"},"Mandatory informations",-1),N={class:"multisteps-form__content"},U={class:"row mt-3"},B={class:"col-12 col-sm-6"},j=t("label",null,"First Name",-1),T={class:"col-12 col-sm-6 mt-3 mt-sm-0"},E=t("label",null,"Last Name",-1),F={class:"row"},M={class:"col-12 col-sm-6"},V=t("label",null,"Company",-1),q={class:"col-12 col-sm-6 mt-3 mt-sm-0"},H=t("label",null,"Email Address",-1),z={class:"row"},L={class:"col-12 col-sm-6"},D=t("label",null,"Password",-1),R={class:"col-12 col-sm-6 mt-sm-0"},Z=t("label",null,"Repeat Password",-1),G={class:"button-row d-flex mt-2"};function J(n,o){const l=v,c=u;return _(),d("div",A,[I,P,t("div",N,[t("div",U,[t("div",B,[j,e(l,{id:"firstname",class:"multisteps-form__input",type:"text",placeholder:"eg. Michael"})]),t("div",T,[E,e(l,{id:"lastname",class:"multisteps-form__input",type:"text",placeholder:"eg. Prior"})])]),t("div",F,[t("div",M,[V,e(l,{id:"company",class:"multisteps-form__input",type:"text",placeholder:"eg. Creative Tim"})]),t("div",q,[H,e(l,{id:"email",class:"multisteps-form__input",type:"email",placeholder:"eg. argon@dashboard.com"})])]),t("div",z,[t("div",L,[D,e(l,{id:"password",class:"multisteps-form__input",type:"password",placeholder:"******"})]),t("div",R,[Z,e(l,{id:"repeat-password",class:"multisteps-form__input",type:"password",placeholder:"******"})])]),t("div",G,[e(c,{type:"button",color:"dark",variant:"gradient",class:"ms-auto mb-0 js-btn-next",onClick:n.$parent.nextStep},{default:a(()=>[r("Next")]),_:1},8,["onClick"])])])])}const K=p(k,[["render",J]]),O={},Q={class:"card multisteps-form__panel p-3 border-radius-xl bg-white","data-animation":"FadeIn"},W=t("h5",{class:"font-weight-bolder"},"Socials",-1),X={class:"multisteps-form__content"},Y=f('<div class="row mt-3"><div class="col-12"><label>Twitter Handle</label><input class="multisteps-form__input form-control" type="text" placeholder="@argon"></div><div class="col-12 mt-3"><label>Facebook Account</label><input class="multisteps-form__input form-control" type="text" placeholder="https://..."></div><div class="col-12 mt-3"><label>Instagram Account</label><input class="multisteps-form__input form-control" type="text" placeholder="https://..."></div></div>',1),tt={class:"button-row d-flex mt-4"};function st(n,o){const l=u;return _(),d("div",Q,[W,t("div",X,[Y,t("div",tt,[e(l,{type:"button",color:"light",variant:"gradient",class:"js-btn-prev",onClick:n.$parent.prevStep},{default:a(()=>[r(" Prev ")]),_:1},8,["onClick"]),e(l,{type:"button",color:"dark",variant:"gradient",class:"ms-auto js-btn-next",onClick:n.$parent.nextStep},{default:a(()=>[r(" Next ")]),_:1},8,["onClick"])])])])}const et=p(O,[["render",st]]),ot={name:"ArgonTextarea",props:{id:{type:String,required:!0},placeholder:{type:String,default:""},rows:{type:Number,default:5}}},lt={class:"form-group"},nt=["for"],ct=["id","rows","placeholder"];function it(n,o,l,c,s,b){return _(),d("div",lt,[t("label",{for:l.id},[y(n.$slots,"default")],8,nt),t("textarea",{id:l.id,class:"form-control",rows:l.rows,placeholder:l.placeholder},null,8,ct)])}const at=p(ot,[["render",it]]),rt={},_t={class:"card multisteps-form__panel p-3 border-radius-xl bg-white","data-animation":"FadeIn"},dt=t("h5",{class:"font-weight-bolder mb-0"},"Profile",-1),pt={class:"multisteps-form__content mt-4"},mt={class:"row"},ut={class:"col-12"},ht=t("label",null,"Public Email",-1),vt={class:"col-12"},ft={class:"button-row d-flex mt-4"};function bt(n,o){const l=v,c=at,s=u;return _(),d("div",_t,[dt,t("div",pt,[t("div",mt,[t("div",ut,[ht,e(l,{class:"multisteps-form__input",type:"text",placeholder:"Use an address you don't use frequently."})]),t("div",vt,[e(c,{id:"bio",class:"multisteps-form__textarea mt-0",placeholder:"Say a few words about who you are or what you're working on."},{default:a(()=>[r("Bio ")]),_:1})])]),t("div",ft,[e(s,{type:"button",color:"light",variant:"gradient",class:"js-btn-prev",onClick:n.$parent.prevStep},{default:a(()=>[r(" Prev ")]),_:1},8,["onClick"]),e(s,{type:"button",color:"dark",variant:"gradient",class:"ms-auto"},{default:a(()=>[r(" Send ")]),_:1})])])])}const $t=p(rt,[["render",bt]]),gt={class:"card multisteps-form__panel p-3 border-radius-xl bg-white","data-animation":"FadeIn"},wt=t("h5",{class:"font-weight-bolder"},"Address",-1),St={class:"multisteps-form__content"},yt={class:"row mt-3"},xt={class:"col"},Ct=t("label",null,"Address 1",-1),kt={class:"row"},At={class:"col"},It=t("label",null,"Address 2",-1),Pt={class:"row"},Nt={class:"col-12 col-sm-6"},Ut=t("label",null,"City",-1),Bt=f('<div class="col-6 col-sm-3 mt-3 mt-sm-0"><label>State</label><select id="choices-state" class="multisteps-form__select form-control" name="choices-state"><option selected="selected">...</option><option value="1">State 1</option><option value="2">State 2</option></select></div>',1),jt={class:"col-6 col-sm-3 mt-3 mt-sm-0"},Tt=t("label",null,"Zip",-1),Et={class:"button-row d-flex mt-2"},Ft={__name:"Address",setup(n){return x(()=>{const o=document.getElementById("choices-state");o&&new C(o,{searchEnabled:!1,allowHTML:!0})}),(o,l)=>{const c=v,s=u;return _(),d("div",gt,[wt,t("div",St,[t("div",yt,[t("div",xt,[Ct,e(c,{id:"address-line",class:"multisteps-form__input",type:"text",placeholder:"eg. Street 111"})])]),t("div",kt,[t("div",At,[It,e(c,{id:"address-line2",class:"multisteps-form__input",type:"text",placeholder:"eg. Street 221"})])]),t("div",Pt,[t("div",Nt,[Ut,e(c,{id:"city",class:"multisteps-form__input",type:"text",placeholder:"eg. Tokyo"})]),Bt,t("div",jt,[Tt,e(c,{id:"zipcode",class:"multisteps-form__input",type:"text",placeholder:"7 letters"})])]),t("div",Et,[e(s,{type:"button",color:"light",variant:"gradient",class:"js-btn-prev",onClick:o.$parent.prevStep},{default:a(()=>[r("Prev")]),_:1},8,["onClick"]),e(s,{type:"button",color:"dark",variant:"gradient",class:"ms-auto js-btn-next",onClick:o.$parent.nextStep},{default:a(()=>[r(" Next ")]),_:1},8,["onClick"])])])])}}},Mt={name:"NewUser",components:{UserInfo:K,Socials:et,Profile:$t,UserAddress:Ft},data(){return{showMenu:!1,activeClass:"js-active position-relative",activeStep:0,formSteps:3}},methods:{nextStep(){this.activeStep<this.formSteps?this.activeStep+=1:this.activeStep-=1},prevStep(){this.activeStep>0&&(this.activeStep-=1)}}},Vt={class:"container-fluid py-5"},qt={class:"row"},Ht={class:"col-12"},zt={class:"multisteps-form"},Lt={class:"row"},Dt={class:"col-12 col-lg-8 mx-auto mb-4"},Rt={class:"card"},Zt={class:"card-body"},Gt={class:"multisteps-form__progress"},Jt=t("span",null,"User Info",-1),Kt=[Jt],Ot={class:"row"},Qt={class:"col-12 col-lg-8 m-auto"},Wt={class:"multisteps-form__form"};function Xt(n,o,l,c,s,b){const $=m("UserInfo"),g=m("UserAddress"),w=m("Socials"),S=m("Profile");return _(),d("div",Vt,[t("div",qt,[t("div",Ht,[t("div",zt,[t("div",Lt,[t("div",Dt,[t("div",Rt,[t("div",Zt,[t("div",Gt,[t("button",{class:i(["multisteps-form__progress-btn js-active",s.activeStep>=0?s.activeClass:""]),type:"button",title:"User Info",onClick:o[0]||(o[0]=h=>s.activeStep=0)},Kt,2),t("button",{class:i(["multisteps-form__progress-btn",s.activeStep>=1?s.activeClass:""]),type:"button",title:"Address",onClick:o[1]||(o[1]=h=>s.activeStep=1)}," Address ",2),t("button",{class:i(["multisteps-form__progress-btn",s.activeStep>=2?s.activeClass:""]),type:"button",title:"Socials",onClick:o[2]||(o[2]=h=>s.activeStep=2)}," Socials ",2),t("button",{class:i(["multisteps-form__progress-btn",s.activeStep>=3?s.activeClass:""]),type:"button",title:"Profile",onClick:o[3]||(o[3]=h=>s.activeStep=3)}," Profile ",2)])])])])]),t("div",Ot,[t("div",Qt,[t("form",Wt,[e($,{class:i(s.activeStep===0?s.activeClass:"")},null,8,["class"]),e(g,{class:i(s.activeStep===1?s.activeClass:"")},null,8,["class"]),e(w,{class:i(s.activeStep===2?s.activeClass:"")},null,8,["class"]),e(S,{class:i(s.activeStep===3?s.activeClass:"")},null,8,["class"])])])])])])])])}const os=p(Mt,[["render",Xt]]);export{os as default};