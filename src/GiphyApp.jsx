import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiphyApp = () => {
  const [categories, setCategories] = useState(["edson"]);

  const handleAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GiphyApp</h1>

      <AddCategory onValue={handleAddCategory} />

      <div>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};
