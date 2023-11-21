import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Computers", "Marvel"]);
  return (
    <>
      {/* title */}
      <h1>GIF Expert App</h1>
      {/* Functions can be passed as custom properties */}
      <AddCategory setCategories={setCategories} />
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
