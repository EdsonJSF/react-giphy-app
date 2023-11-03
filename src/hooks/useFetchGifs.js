import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category).then((gifsByCategory) => {
      setGifs(gifsByCategory);
      setIsLoading(false);
    });
  }, [category]);

  return {
    gifs,
    isLoading,
  };
};
