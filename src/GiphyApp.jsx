import { useState } from "react";

export const GiphyApp = () => {
  const [categories, setCategories] = useState(["One Ounch", "Edson"]);

  console.log(categories);

  return (
    <>
      {/* Title */}
      <h1>GiphyApp</h1>

      {/* input */}

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
