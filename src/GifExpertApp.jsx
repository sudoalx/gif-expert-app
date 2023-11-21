import React, { useState } from "react";
const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Marvel"]);
  return (
    <>
      {/* title */}
      <h1>GIF Expert App</h1>
      {/* search input */}
      {/* GIFS container */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* GIF Items */}
    </>
  );
};

export default GifExpertApp;
