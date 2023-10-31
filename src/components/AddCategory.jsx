import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
