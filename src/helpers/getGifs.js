import { GIPHY_TOKEN } from "../../env";

export const getGifs = async (category, limit = 10) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_TOKEN}&q=${category}&limit=${limit}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return gifs;
};
