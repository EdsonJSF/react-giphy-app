import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiphyApp = () => {
  const [categories, setCategories] = useState(["edson"]);

  const handleAddCategory = (category) => {
    if (categories.includes(category)) return
    setCategories([category, ...categories]);
  };

  return (
    <>
      {/* Title */}
      <h1>GiphyApp</h1>

      {/* input */}
      <AddCategory
        // setCategories={setCategories}
        onValue={handleAddCategory}
      />

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
