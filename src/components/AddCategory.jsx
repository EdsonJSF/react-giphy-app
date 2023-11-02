import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    onValue(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Gif"
        value={inputValue}
        onChange={handleInputValue}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onValue: PropTypes.func.isRequired,
};
