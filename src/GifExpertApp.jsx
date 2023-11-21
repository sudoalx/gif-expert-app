import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const handleAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>GIF Expert App</h1>
      <AddCategory onNewVal={(value) => handleAddCategory(value)} />
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
