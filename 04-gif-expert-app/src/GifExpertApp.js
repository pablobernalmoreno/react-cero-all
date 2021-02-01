import React, { useState } from "react";
import PropTypes from "prop-types";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((categorie) => (
          <GifGrid key={categorie} category={categorie} />
        ))}
      </ol>
    </>
  );
};

GifExpertApp.propTypes = {
  defaultCategories: PropTypes.array,
};
