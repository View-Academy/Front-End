import{a as i,b as c,e as t,C as l,o as r}from"./entry.5a09969b.js";const d={name:"SweetAlerts",methods:{showSwal(e){if(e==="basic")this.$swal({title:"Any fool can use a computer"});else if(e==="success-message")this.$swal({icon:"success",title:"Good Job!",text:"You clicked the button!"});else if(e==="custom-html")this.$swal({icon:"info",title:"<strong>HTML <u>example</u></strong>",html:'You can use <b>bold text</b>, <a href="//sweetalert2.github.io">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'<i class="fa fa-thumbs-up"></i> Great!',confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:'<i class="fa fa-thumbs-down"></i>',cancelButtonAriaLabel:"Thumbs down",customClass:{confirmButton:"btn bg-gradient-success",cancelButton:"btn bg-gradient-danger"},buttonsStyling:!1});else if(e==="input-field")this.$swal({title:"Submit your Github username",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,customClass:{confirmButton:"btn bg-gradient-success",cancelButton:"btn bg-gradient-danger"},buttonsStyling:!1,preConfirm:s=>fetch(`//api.github.com/users/${s}`).then(n=>{if(!n.ok)throw new Error(n.statusText);return n.json()}).catch(n=>{this.$swal.showValidationMessage(`Request failed: ${n}`)}),allowOutsideClick:()=>!this.$swal.isLoading()}).then(s=>{s.isConfirmed&&this.$swal({title:`${s.value.login}'s avatar`,imageUrl:s.value.avatar_url})});else if(e==="title-and-text")this.$swal({title:"Sweet!",text:"Modal with a custom image.",imageUrl:"https://unsplash.it/400/200",imageWidth:400,imageHeight:200,imageAlt:"Custom image"});else if(e==="auto-close"){let s;this.$swal({title:"Auto close alert!",html:"I will close in <b></b> milliseconds.",timer:2e3,timerProgressBar:!0,didOpen:()=>{this.$swal.showLoading();const n=this.$swal.getHtmlContainer().querySelector("b");s=setInterval(()=>{n.textContent=this.$swal.getTimerLeft()},100)},willClose:()=>{clearInterval(s)}})}else e==="warning-message-and-confirmation"?this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0,customClass:{confirmButton:"btn bg-gradient-success",cancelButton:"btn bg-gradient-danger"},buttonsStyling:!1}).then(s=>{s.isConfirmed?this.$swal({title:"Deleted!",text:"Your file has been deleted.",icon:"success",customClass:{confirmButton:"btn bg-gradient-success"},buttonsStyling:!1}):s.dismiss===this.$swal.DismissReason.cancel&&this.$swal({title:"Cancelled!",text:"Your imaginary file is safe :)",icon:"error",customClass:{confirmButton:"btn bg-gradient-success"},buttonsStyling:!1})}):e==="warning-message-and-cancel"?this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,cancelButtonText:"Cancel",confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn bg-gradient-success",cancelButton:"btn bg-gradient-danger"},buttonsStyling:!1}).then(s=>{s.isConfirmed?this.$swal({title:"Deleted!",text:"Your file has been deleted.",icon:"success",customClass:{confirmButton:"btn bg-gradient-success"},buttonsStyling:!1}):s.dismiss===this.$swal.DismissReason.cancel&&this.$swal.dismiss}):e==="rtl-language"&&this.$swal({title:"\u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0644\u0627\u0633\u062A\u0645\u0631\u0627\u0631\u061F",icon:"question",iconHtml:"\u061F",confirmButtonText:"\u0646\u0639\u0645",cancelButtonText:"\u0644\u0627",showCancelButton:!0,showCloseButton:!0,customClass:{confirmButton:"btn bg-gradient-success",cancelButton:"btn bg-gradient-danger"},buttonsStyling:!1})}}},u={class:"py-4 container-fluid"},m={class:"row min-vh-75"},h={class:"mx-auto col-lg-8 col-md-12"},b=l('<div class="places-sweet-alerts mb-3"><h2 class="text-center text-white">Sweet Alert</h2><p class="text-center category text-white"> A beautiful plugin, that replace the classic alert, Handcrafted by our friend <a class="text-white" target="_blank" href="https://twitter.com/t4t5">Tristan Edwards</a>. Please check out the <a class="text-white" href="https://sweetalert2.github.io/" target="_blank">full documentation.</a></p></div>',1),g={class:"row"},w={class:"col-md-4"},f={class:"card"},_={class:"text-center card-body"},v=t("p",{class:"card-text"},"Basic example",-1),x={class:"mt-4 col-md-4 mt-md-0"},C={class:"card"},B={class:"text-center card-body"},y=t("p",{class:"card-text"},"A success message",-1),$={class:"mt-4 col-md-4 mt-md-0"},p={class:"card"},T={class:"text-center card-body"},S=t("p",{class:"card-text"},"Custom HTML description",-1),k={class:"mt-4 row"},A={class:"col-md-4"},L={class:"card"},Y={class:"text-center card-body"},H=t("p",{class:"card-text"},"Gitgub avatar request",-1),M={class:"mt-4 col-md-4 mt-md-0"},R={class:"card"},q={class:"text-center card-body"},D=t("p",{class:"card-text"},"A title with a text under",-1),G={class:"mt-4 col-md-4 mt-md-0"},I={class:"card"},E={class:"text-center card-body"},N=t("p",{class:"card-text"},"A message with auto close",-1),O={class:"mt-4 mb-5 row"},P={class:"col-md-4"},V={class:"card"},U={class:"text-center card-body"},j=t("p",{class:"card-text"},' A warning message, with a function attached to the "Confirm" Button... ',-1),z={class:"mt-4 col-md-4 mt-md-0"},J={class:"card"},W={class:"text-center card-body"},F=t("p",{class:"card-text"},' ...and by passing a parameter, you can execute something else for "Cancel" ',-1),K={class:"mt-4 col-md-4 mt-md-0"},Q={class:"card"},X={class:"text-center card-body"},Z=t("p",{class:"card-text"}," Right-to-left support for Arabic, Persian, Hebrew, and other RTL languages ",-1);function tt(e,s,n,st,et,a){return r(),c("div",u,[t("div",m,[t("div",h,[b,t("div",g,[t("div",w,[t("div",f,[t("div",_,[v,t("button",{class:"mb-0 btn bg-gradient-success",onClick:s[0]||(s[0]=o=>a.showSwal("basic"))}," Try me! ")])])]),t("div",x,[t("div",C,[t("div",B,[y,t("button",{class:"mb-0 btn bg-gradient-success",onClick:s[1]||(s[1]=o=>a.showSwal("success-message"))}," Try me! ")])])]),t("div",$,[t("div",p,[t("div",T,[S,t("button",{class:"mb-0 btn bg-gradient-success",onClick:s[2]||(s[2]=o=>a.showSwal("custom-html"))}," Try me! ")])])])]),t("div",k,[t("div",A,[t("div",L,[t("div",Y,[H,t("button",{class:"mb-0 btn bg-gradient-success",onClick:s[3]||(s[3]=o=>a.showSwal("input-field"))}," Try me! ")])])]),t("div",M,[t("div",R,[t("div",q,[D,t("button",{class:"mb-0 btn bg-gradient-success",onClick:s[4]||(s[4]=o=>a.showSwal("title-and-text"))}," Try me! ")])])]),t("div",G,[t("div",I,[t("div",E,[N,t("button",{class:"mb-0 btn bg-gradient-success",onClick:s[5]||(s[5]=o=>a.showSwal("auto-close"))}," Try me! ")])])])]),t("div",O,[t("div",P,[t("div",V,[t("div",U,[j,t("button",{class:"mb-0 btn bg-gradient-success",onClick:s[6]||(s[6]=o=>a.showSwal("warning-message-and-confirmation"))}," Try me! ")])])]),t("div",z,[t("div",J,[t("div",W,[F,t("button",{class:"mb-0 btn bg-gradient-success",onClick:s[7]||(s[7]=o=>a.showSwal("warning-message-and-cancel"))}," Try me! ")])])]),t("div",K,[t("div",Q,[t("div",X,[Z,t("button",{class:"mb-0 btn bg-gradient-success",onClick:s[8]||(s[8]=o=>a.showSwal("rtl-language"))}," Try me! ")])])])])])])])}const nt=i(d,[["render",tt]]);export{nt as default};