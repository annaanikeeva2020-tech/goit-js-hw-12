import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadMoreBtn = document.querySelector(".load-more");

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function showLoader() {
  loader.classList.remove("is-hidden");
}

export function hideLoader() {
  loader.classList.add("is-hidden");
}

export function showLoadMoreBtn() {
  loadMoreBtn.classList.remove("is-hidden");
}

export function hideLoadMoreBtn() {
  loadMoreBtn.classList.add("is-hidden");
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function renderImages(images) {
  const markup = images.map((image) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
          class="gallery-image"
          src="${image.webformatURL}" 
          alt="${image.tags}"
        />
      </a>

      <div class="img-description">
            <div class="stat">
                <h3>Likes</h3>
                <p>${image.likes}</p>
            </div>
            <div class="stat">
                <h3>Views</h3>
                <p>${image.views}</p>
            </div>
            <div class="stat">
                <h3>Comments</h3>
                <p>${image.comments}</p>
            </div>
            <div class="stat">
                <h3>Downloads</h3>
                <p>${image.downloads}</p>
            </div>
        </div>  
    </li>
  `).join("");

  gallery.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}