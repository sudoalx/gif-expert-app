import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="grid-container">
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => {
          return <GifItem key={image.id} title={image.title} url={image.url} />;
        })}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
