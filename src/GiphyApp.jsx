import { useState } from "react";

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
