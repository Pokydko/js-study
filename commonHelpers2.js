import"./assets/modulepreload-polyfill-3cfb730f.js";import{v as m}from"./assets/vendor-011ade53.js";const t=document.querySelector("form.feedback-form");let e;try{e=JSON.parse(localStorage.getItem("feedback-form-state")),e.email=e.email??"",t.email.value=e.email,e.message=e.message??"",t.message.value=e.message}catch{localStorage.removeItem("feedback-form-state"),e={email:"",message:""}}t.addEventListener("input",({target:a})=>{e[a.name]=a.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});t.addEventListener("submit",a=>{if(a.preventDefault(),!m.isEmail(e.email)){alert("Email is incorrect");return}e.email&&e.message?(console.log(e),e={email:"",message:""},localStorage.removeItem("feedback-form-state"),t.reset()):alert("Fill please all fields")});
//# sourceMappingURL=commonHelpers2.js.map
