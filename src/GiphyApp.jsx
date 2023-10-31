import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiphyApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = () => {
    setCategories([...categories, "new"]);
  };

  return (
    <>
      {/* Title */}
      <h1>GiphyApp</h1>

      {/* input */}
      <AddCategory />
      <button onClick={handleAddCategory}>Add</button>

      {/* Gifs list */}
      {/* Gif item */}

      {/* Categories list */}
      <ol>
        {/* Category item */}
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
