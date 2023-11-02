import { useEffect } from "react";
import PropTypes from "prop-types";
import { getGifs } from "../../helpers/getGifs";

export const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category);
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
