
import React from "react";
import { Star } from "lucide-react";

function Rating({ value }) {
  return (
    <div className="rating">
      <Star
        size={15}
        fill="#f5a623"
        color="#f5a623"
      />
      <span>{value}</span>
    </div>
  );
}

export default Rating;
