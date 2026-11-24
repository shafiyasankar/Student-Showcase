
import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid({
  items,
  addToCart,
  viewProduct,
  wishlist,
  toggleWish
}) {
  if (items.length === 0) {
    return (
      <div className="empty-message">
        <h3>No Products Found</h3>
        <p>Try another product name or category.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {items.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          viewProduct={viewProduct}
          wishlist={wishlist.includes(product.id)}
          toggleWish={toggleWish}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
