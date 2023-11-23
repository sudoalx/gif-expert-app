import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewVal }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    // destructuring the event object to get the target property
    setInputValue(target.value); // target.value is the value of the input
  };
  const onSubmit = (e) => {
    e.preventDefault(); // prevents the page from refreshing
    addCategory();
  };
  const addCategory = () => {
    if (inputValue.trim().length <= 1) return;
    onNewVal(inputValue.trim()); // passing the value to the parent component (GifExpertApp.jsx) through a custom property
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
      <button onClick={addCategory}>Add Category</button>
    </>
  );
};

AddCategory.propTypes = {
  onNewVal: PropTypes.func.isRequired,
};
