import{a as h,S as y,i as d}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const b=async(e,s,o)=>{try{return await h.get("https://pixabay.com/api/",{params:{key:"44302589-5a2329cbe5164dd3461a63194",q:e,page:s,per_page:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})}catch(a){gallery.innerHTML="Something went wrong. <br/>Error happend during request.",console.error(a)}},L=(e,s)=>{s.insertAdjacentHTML("beforeend",k(e)),u.refresh()},u=new y(".gallery-link",{captionsData:"alt",captionDelay:250});u.on("error.simplelightbox",function(e){console.log(e)});function k(e){return e.reduce((s,{webformatURL:o,largeImageURL:a,tags:t,likes:r,views:i,comments:g,downloads:f})=>s+=`<li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img
          class="gallery-image"
          src="${a}" 
          alt="${t}"
        />
        <div class="picture-describe">
        <span><span class="title">Likes</span>${r}</span>
        <span><span class="title">Views</span>${i}</span>
        <span><span class="title">Comments</span>${g}</span>
        <span><span class="title">Downloads</span>${f}</span>
        </div>
      </a>
    </li>`,"")}function E(e){e.firstElementChild.checked=JSON.parse(localStorage.getItem("black"))??!1,e.firstElementChild.checked&&s(),e.addEventListener("click",o=>{e.firstElementChild.checked=!e.firstElementChild.checked,localStorage.setItem("black",JSON.stringify(e.firstElementChild.checked)),s()});function s(){document.body.classList.toggle("black"),document.body.firstElementChild.classList.toggle("black"),document.getElementById("searchrequest").classList.toggle("black")}setTimeout(()=>{e.style.opacity="0.1"},5e3)}const q="/js-study/assets/err-40fa32d5.svg",c=document.querySelector(".gallery"),n=document.getElementById("loadMore");let m,l;const v=15;n.addEventListener("click",e=>{l++,p(),setTimeout(()=>{const s=document.querySelector("li.gallery-item");window.scrollBy(0,2*s.getBoundingClientRect().height)},1e3)});document.querySelector("form").addEventListener("submit",e=>{e.preventDefault(),l=1,m=e.target.searchrequest.value,c.innerHTML="",p(),e.target.reset()});async function p(){n.textContent="",n.classList.remove("blue-btn"),n.classList.add("loader"),await b(m,l,v).then(({data:e,status:s,statusText:o,headers:a,config:t})=>{e.hits.length===0?d.error(C):L(e.hits,c),e.totalHits>l*15?(n.classList.add("blue-btn"),n.textContent="Load more"):(n.classList.remove("blue-btn"),d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}).catch(e=>{c.innerHTML="Something went wrong. <br/>Please, check your connection and try again.",console.error(e),n.classList.add("blue-btn"),n.innerHTML='<a href="/">Refreash page</a>'}),n.classList.remove("loader")}const C={position:"topRight",theme:"dark",iconUrl:q,color:"#ef4040",message:"Sorry, there are no images matching <br/>your search query. Please try again!"};E(document.querySelector(".slide"));
//# sourceMappingURL=commonHelpers.js.map
