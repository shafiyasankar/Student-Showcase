
import React from "react";
import { Heart } from "lucide-react";
import Price from "./Price";
import Rating from "./Rating";

function ProductCard({
  product,
  addToCart,
  viewProduct,
  wishlist,
  toggleWish
}) {
  return (
    <div className="product-card">
      <button
        className="wishlist"
        onClick={() => toggleWish(product.id)}
      >
        <Heart
          size={19}
          fill={wishlist ? "#e53935" : "none"}
          color={wishlist ? "#e53935" : "#777"}
        />
      </button>

      <div
        className="product-image"
        style={{ background: product.color }}
      >
        <span>{product.emoji}</span>
      </div>

      <div className="product-details">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <Rating value={product.rating} />

        <Price
          price={product.price}
          oldPrice={product.oldPrice}
        />

        <button
          className="add-button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

        <button
          className="view-link"
          onClick={() => viewProduct(product)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
