import{a as f,o,b as d,e as i,B as s,G as r}from"./entry.5a09969b.js";const m={name:"ArgonInput",emits:["update:modelValue"],props:{modelValue:{type:String,default:""},size:{type:String,default:"default"},success:{type:Boolean,default:!1},error:{type:Boolean,default:!1},icon:{type:String,default:""},iconDir:{type:String,default:""},name:{type:String,default:""},id:{type:String,default:""},value:{type:String,default:""},placeholder:{type:String,default:""},type:{type:String,default:"text"},isRequired:{type:Boolean,default:!1}},methods:{getClasses:(t,l,e)=>{let u,a;return u=t?`form-control-${t}`:"",e?a="is-invalid":l?a="is-valid":a="",`${u} ${a}`},getIcon:t=>t||"",hasIcon:t=>t?"input-group":""}},g={class:"form-group"},y={key:0,class:"input-group-text"},_=["id","type","name","value","placeholder","isRequired"],p={key:1,class:"input-group-text"};function h(t,l,e,u,a,n){return o(),d("div",g,[i("div",{class:s(n.hasIcon(e.icon))},[e.iconDir==="left"?(o(),d("span",y,[i("i",{class:s(n.getIcon(e.icon))},null,2)])):r("",!0),i("input",{id:e.id,type:e.type,class:s(["form-control",n.getClasses(e.size,e.success,e.error)]),name:e.name,value:e.modelValue,placeholder:e.placeholder,isRequired:e.isRequired,onInput:l[0]||(l[0]=c=>t.$emit("update:modelValue",c.target.value))},null,42,_),e.iconDir==="right"?(o(),d("span",p,[i("i",{class:s(n.getIcon(e.icon))},null,2)])):r("",!0)],2)])}const V=f(m,[["render",h]]);export{V as _};