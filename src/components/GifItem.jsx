const GifItem = ({ title, url }) => {
  return (
    <>
      <h3>{title}</h3>
      <img src={url} alt="" />
    </>
  );
};

export default GifItem;
