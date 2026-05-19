import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from "./js/pixabay-api";
import { renderImages, clearGallery, showLoader, hideLoader, showLoadMoreBtn, hideLoadMoreBtn, } from "./js/render-functions";

const form = document.querySelector(".form");
const loadMoreBtn = document.querySelector(".load-more");

let query = "";
let page = 1;
const PER_PAGE = 15;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  query = event.target.elements["search-text"].value.trim();

  if (!query) return;

  page = 1;
  clearGallery();
  hideLoadMoreBtn();
  showLoader();

 try {
  const data = await fetchImages(query, page);

  if (data.hits.length === 0) {
    iziToast.error({
      message: "No images found. Try again!",
    });
    return;
  }

  renderImages(data.hits);

  const totalPages = Math.ceil(data.totalHits / PER_PAGE);

  if (totalPages > 1) {
      showLoadMoreBtn();
    } else {
      hideLoadMoreBtn();
      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    iziToast.error({
      message: "Something went wrong. Please try again later.",
    });
 } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener("click", async () => {
    page += 1;

  hideLoadMoreBtn();
  showLoader();

  try {
    const data = await fetchImages(query, page);

    renderImages(data.hits);

    const totalPages = Math.ceil(data.totalHits / PER_PAGE);

    if (page >= totalPages) {
      iziToast.info({
        message:
          "We're sorry, but you've reached the end of search results.",
      });
    }else {
      showLoadMoreBtn();
    }

      smoothScroll();
      
  } catch (error) {
    iziToast.error({
      message: "Error loading more images",
    });
      
      showLoadMoreBtn();
      
  } finally {
    hideLoader();
  }
});

function smoothScroll() {
  const card = document.querySelector(".gallery-item");

  if (!card) return;

  const { height } = card.getBoundingClientRect();

  window.scrollBy({
    top: height * 2,
    behavior: "smooth",
  });
}