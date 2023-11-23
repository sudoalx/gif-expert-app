import PropTypes from "prop-types";

const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifItem;
