
import React from "react";

function Price({ price, oldPrice }) {
  return (
    <div className="price-line">
      <strong>
        ₹{price.toLocaleString("en-IN")}
      </strong>

      <del>
        ₹{oldPrice.toLocaleString("en-IN")}
      </del>
    </div>
  );
}

export default Price;
