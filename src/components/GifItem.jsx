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

export default GifItem;
