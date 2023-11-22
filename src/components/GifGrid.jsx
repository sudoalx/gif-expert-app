import PropTypes from "prop-types";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <div className="grid-container">
      <h3>{category}</h3>
      {isLoading && (
        <div className="loading-container">
          <h2 className="loading-text">Loading...</h2>
        </div>
      )}

      <div className="card-grid">
        {images.map((image) => {
          return <GifItem key={image.id} {...image} />;
        })}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
