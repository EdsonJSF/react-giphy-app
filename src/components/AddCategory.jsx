import { useState } from "react";

export const AddCategory = ({ onValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;

    // setCategories((categories) => [inputValue, ...categories]);
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
