import { useState } from "react";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    // destructuring the event object to get the target property
    setInputValue(target.value); // target.value is the value of the input
  };
  const onSubmit = (e) => {
    e.preventDefault(); // prevents the page from refreshing
    handleAddCategory();
  };
  const handleAddCategory = () => {
    if (inputValue.trim().length <= 1) return;
    setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };
  return (
    <>
      <form
        className="centered-input"
        onSubmit={onSubmit} /** the event is passed by default */
      >
        <input
          type="text"
          placeholder="Search GIFs"
          value={inputValue}
          onChange={onInputChange} // the event is passed by default
        />
      </form>
      <button onClick={handleAddCategory}>Add Category</button>
    </>
  );
};

export default AddCategory;
