import{a as w,S as b,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function f(r,e){return(await w.get("https://pixabay.com/api/",{params:{key:"55801241-e99e372d55d0d3e8c8675385f",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const h=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more");let S=new b(".gallery a",{captionsData:"alt",captionDelay:250});function p(){m.classList.remove("is-hidden")}function y(){m.classList.add("is-hidden")}function c(){g.classList.remove("is-hidden")}function d(){g.classList.add("is-hidden")}function P(){h.innerHTML=""}function v(r){const e=r.map(o=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
        <img
          class="gallery-image"
          src="${o.webformatURL}" 
          alt="${o.tags}"
        />
      </a>

      <div class="img-description">
            <div class="stat">
                <h3>Likes</h3>
                <p>${o.likes}</p>
            </div>
            <div class="stat">
                <h3>Views</h3>
                <p>${o.views}</p>
            </div>
            <div class="stat">
                <h3>Comments</h3>
                <p>${o.comments}</p>
            </div>
            <div class="stat">
                <h3>Downloads</h3>
                <p>${o.downloads}</p>
            </div>
        </div>  
    </li>
  `).join("");h.insertAdjacentHTML("beforeend",e),S.refresh()}const q=document.querySelector(".form"),M=document.querySelector(".load-more");let n="",i=1;const L=15;q.addEventListener("submit",async r=>{if(r.preventDefault(),n=r.target.elements["search-text"].value.trim(),!!n){i=1,P(),d(),p();try{const e=await f(n,i);if(e.hits.length===0){a.error({message:"No images found. Try again!"});return}v(e.hits),Math.ceil(e.totalHits/L)>1?c():(d(),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({message:"Something went wrong. Please try again later."})}finally{y()}}});M.addEventListener("click",async()=>{i+=1,d(),p();try{const r=await f(n,i);v(r.hits);const e=Math.ceil(r.totalHits/L);i>=e?a.info({message:"We're sorry, but you've reached the end of search results."}):c(),$()}catch{a.error({message:"Error loading more images"}),c()}finally{y()}});function $(){const r=document.querySelector(".gallery-item");if(!r)return;const{height:e}=r.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
