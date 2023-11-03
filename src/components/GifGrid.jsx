import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getGifs } from "../../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs(category).then((gifsByCategory) => setGifs(gifsByCategory));
  }, [category]);

  return (
    <>
      <h3>{category}</h3>

      <ol>
        {gifs.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
