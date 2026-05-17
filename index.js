import{a as L,S as w,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();async function u(r,e){return(await L.get("https://pixabay.com/api/",{params:{key:"55801241-e99e372d55d0d3e8c8675385f",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more");let b=new w(".gallery a",{captionsData:"alt",captionDelay:250});function g(){h.classList.remove("is-hidden")}function p(){h.classList.add("is-hidden")}function S(){m.classList.remove("is-hidden")}function l(){m.classList.add("is-hidden")}function P(){f.innerHTML=""}function y(r){const e=r.map(o=>`
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
  `).join("");f.insertAdjacentHTML("beforeend",e),b.refresh()}const q=document.querySelector(".form"),M=document.querySelector(".load-more");let n="",i=1;const v=15;q.addEventListener("submit",async r=>{if(r.preventDefault(),n=r.target.elements["search-text"].value.trim(),!!n){i=1,P(),l(),g();try{const e=await u(n,i);if(e.hits.length===0){a.error({message:"No images found. Try again!"});return}y(e.hits),Math.ceil(e.totalHits/v)>1?S():(l(),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({message:"Something went wrong. Please try again later."})}finally{p()}}});M.addEventListener("click",async()=>{i+=1,g();try{const r=await u(n,i);y(r.hits);const e=Math.ceil(r.totalHits/v);i>=e&&(l(),a.info({message:"We're sorry, but you've reached the end of search results."})),$()}catch{a.error({message:"Error loading more images"})}finally{p()}});function $(){const r=document.querySelector(".gallery-item");if(!r)return;const{height:e}=r.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
