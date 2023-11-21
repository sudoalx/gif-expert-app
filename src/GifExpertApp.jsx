import React, { useState } from "react";
const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Marvel"]);
  const onAddCategory = () => {
    // TODO: Add category when the button is pressed
    setCategories((oldCategories) => [...oldCategories, "Android"]);
  };
  return (
    <>
      {/* title */}
      <h1>GIF Expert App</h1>
      {/* search input */}
      {/* GIFS container */}
      <button onClick={onAddCategory}>Add category</button>
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
