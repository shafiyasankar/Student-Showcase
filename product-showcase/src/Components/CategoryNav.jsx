
import React from "react";
import { Chip } from "@mui/material";

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Accessories",
  "Home"
];

function CategoryNav({ selected, setSelected }) {
  return (
    <div className="category-nav">
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          clickable
          color={selected === category ? "primary" : "default"}
          variant={selected === category ? "filled" : "outlined"}
          onClick={() => setSelected(category)}
        />
      ))}
    </div>
  );
}

export default CategoryNav;
