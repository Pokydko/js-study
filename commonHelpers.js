import{S as u,i as p}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m=s=>fetch(`https://pixabay.com/api/?key=44302589-5a2329cbe5164dd3461a63194&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}),f=(s,t)=>{t.insertAdjacentHTML("beforeend",g(s)),l.refresh()},l=new u(".gallery-link",{captionsData:"alt",captionDelay:250});l.on("error.simplelightbox",function(s){console.log(s)});function g(s){return s.reduce((t,{webformatURL:i,largeImageURL:a,tags:e,likes:r,views:n,comments:c,downloads:d})=>t+=`<li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img
          class="gallery-image"
          src="${a}" 
          alt="${e}"
        />
        <div class="picture-describe">
        <span><span class="title">Likes</span>${r}</span>
        <span><span class="title">Views</span>${n}</span>
        <span><span class="title">Comments</span>${c}</span>
        <span><span class="title">Downloads</span>${d}</span>
        </div>
      </a>
    </li>`,"")}const o=document.querySelector(".gallery");document.querySelector("form").addEventListener("submit",s=>{s.preventDefault(),o.classList.add("loader"),o.innerHTML="",m(s.target.searchrequest.value).then(({hits:t})=>{t.length===0?p.error(y):f(t,o),o.classList.remove("loader")}).catch(t=>{o.classList.remove("loader"),o.innerHTML="Something went wrong. <br/>Please, check your connection and try again.",console.error(t)}),s.target.reset()});const y={position:"topRight",theme:"dark",iconUrl:"./img/err.svg",color:"#ef4040",message:"Sorry, there are no images matching <br/>your search query. Please try again!"};document.getElementById("slide").addEventListener("click",()=>{document.body.classList.toggle("black"),document.body.firstElementChild.classList.toggle("black"),document.getElementById("searchrequest").classList.toggle("black")});
//# sourceMappingURL=commonHelpers.js.map
