import axios from "axios";


export async function fetchImages(query, page) {
  const response = await axios.get("https://pixabay.com/api/", {
    params: {
      key: "55801241-e99e372d55d0d3e8c8675385f",
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return response.data;
}