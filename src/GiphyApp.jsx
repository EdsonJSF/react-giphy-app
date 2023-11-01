import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiphyApp = () => {
  const [categories, setCategories] = useState(["edson"]);

  const handleAddCategory = () => {
    setCategories([...categories, "new"]);
  };

  return (
    <>
      {/* Title */}
      <h1>GiphyApp</h1>

      {/* input */}
      <AddCategory setCategories={setCategories} />

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
