import { useState } from "react";

const AddCategory = () => {
  const [inputValue, setInputValue] = useState("One Punch");
  const onInputChange = (event) => {
    setInputValue(event.target.value); // extract the value from the event object and set it to the state
  };
  return (
    <div className="centered-input">
      <input
        type="text"
        placeholder="Search GIFs"
        value={inputValue}
        onChange={onInputChange} // the event is passed by default
      />
    </div>
  );
};

export default AddCategory;
