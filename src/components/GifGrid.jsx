import PropTypes from "prop-types";
import { useEffect } from "react";
import getGifs from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <p>Hello world</p>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
