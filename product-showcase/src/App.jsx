
import React, { useState } from "react";
import "./App.css";

// PRODUCT IMAGE HELPER
const photo = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;

// 50 PRODUCTS - 10 PRODUCTS IN EACH CATEGORY
const catalog = [
  {
    category: "Women",
    items: [
      ["Floral Summer Dress", 899, 4.5, "photo-1539008835657-9e8e9680c956"],
      ["Casual Women's Top", 499, 4.3, "photo-1551163943-3f6a855d1153"],
      ["Classic Blue Jeans", 999, 4.6, "photo-1541099649105-f69ad21f3246"],
      ["Traditional Kurti", 799, 4.4, "photo-1583391733956-6c78276477e7"],
      ["Elegant Handbag", 1199, 4.7, "photo-1584917865442-de89df76afd3"],
      ["Party Wear Gown", 1799, 4.8, "photo-1566174053879-31528523f8ae"],
      ["Printed Cotton Kurti", 699, 4.5, "photo-1583391733981-849840f6a1e9"],
      ["Denim Jacket", 1299, 4.6, "photo-1548624149-f2a5e9e2b6b2"],
      ["Casual Skirt", 799, 4.3, "photo-1583496661160-fb5886a0aaaa"],
      ["Winter Sweater", 1199, 4.7, "photo-1576566588028-4147f3842f27"]
    ]
  },
  {
    category: "Men",
    items: [
      ["Cotton T-Shirt", 399, 4.4, "photo-1521572163474-6864f9cf17ab"],
      ["Casual Formal Shirt", 799, 4.5, "photo-1603252109303-2751441dd157"],
      ["Men's Denim Jeans", 1099, 4.6, "photo-1542272604-787c3835535d"],
      ["Casual Hoodie", 999, 4.5, "photo-1556821840-3a63f95609a7"],
      ["Men's Jacket", 1499, 4.7, "photo-1551028719-00167b16eac5"],
      ["Polo T-Shirt", 599, 4.5, "photo-1586790170083-2f9ceadc732d"],
      ["Casual Blazer", 2199, 4.7, "photo-1591047139829-d91aecb6caea"],
      ["Cargo Pants", 999, 4.4, "photo-1517438476312-10d79c077509"],
      ["White Shirt", 749, 4.6, "photo-1598033129183-c4f50c736f10"],
      ["Winter Sweatshirt", 1099, 4.5, "photo-1618354691373-d851c5c3a990"]
    ]
  },
  {
    category: "Footwear",
    items: [
      ["White Running Sneakers", 1599, 4.8, "photo-1542291026-7eec264c27ff"],
      ["Classic Sports Shoes", 1899, 4.7, "photo-1460353581641-37baddab0fa2"],
      ["Casual Walking Shoes", 1299, 4.4, "photo-1495555961986-6d4c1ecb7be3"],
      ["Women's Fashion Heels", 999, 4.5, "photo-1543163521-1bf539c55dd2"],
      ["Comfort Sandals", 699, 4.3, "photo-1603487742131-4160ec999306"],
      ["Black Running Shoes", 1699, 4.7, "photo-1552346154-21d32810aba3"],
      ["Classic White Sneakers", 1499, 4.8, "photo-1525966222134-fcfa99b8ae77"],
      ["Men's Formal Shoes", 1899, 4.6, "photo-1614252369475-531eba835eb1"],
      ["Women's Casual Flats", 599, 4.3, "photo-1531310197839-ccf54634509e"],
      ["Sport Training Shoes", 1999, 4.8, "photo-1539185441755-769473a23570"]
    ]
  },
  {
    category: "Accessories",
    items: [
      ["Luxury Wrist Watch", 1299, 4.6, "photo-1523275335684-37898b6baf30"],
      ["Stylish Sunglasses", 599, 4.4, "photo-1511499767150-a48a237f0083"],
      ["Leather Wallet", 499, 4.5, "photo-1627123424574-724758594e93"],
      ["Fashion Backpack", 999, 4.6, "photo-1553062407-98eeb64c6a62"],
      ["Elegant Belt", 399, 4.2, "photo-1624222247344-550fb8c7c9f7"],
      ["Premium Handbag", 1599, 4.8, "photo-1590874103328-eac38a683ce7"],
      ["Fashion Bracelet", 399, 4.4, "photo-1611591437281-460bfbe1220a"],
      ["Silver Necklace", 699, 4.6, "photo-1611652022419-a9419f74343d"],
      ["Travel Backpack", 1299, 4.7, "photo-1622560480654-d96214fdc887"],
      ["Stylish Baseball Cap", 349, 4.3, "photo-1588850561407-ed78c282e89b"]
    ]
  },
  {
    category: "Electronics",
    items: [
      ["Wireless Headphones", 1999, 4.8, "photo-1505740420928-5e560c06d30e"],
      ["Bluetooth Earbuds", 1499, 4.6, "photo-1606220945770-b5b6c2c55bf1"],
      ["Smart Watch", 2499, 4.7, "photo-1523275335684-37898b6baf30"],
      ["Portable Speaker", 1299, 4.5, "photo-1608043152269-423dbba4e7e1"],
      ["Wireless Keyboard", 899, 4.4, "photo-1587829741301-dc798b83add3"],
      ["Gaming Mouse", 999, 4.6, "photo-1527814050087-3793815479db"],
      ["Gaming Keyboard", 1899, 4.8, "photo-1595225476474-87563907a212"],
      ["Bluetooth Speaker", 1599, 4.5, "photo-1589003077984-894e133dabab"],
      ["Digital Fitness Band", 1299, 4.4, "photo-1557935728-e6d1eaabe558"],
      ["Wireless Charger", 899, 4.5, "photo-1583394838336-acd977736f90"]
    ]
  }
];

const products = catalog.flatMap((group, index) =>
  group.items.map((item, i) => {
    const category = group.category;
    let sizes = [];

    if (category === "Footwear") {
      sizes = ["UK 5", "UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"];
    } else if (category === "Women") {
      sizes = ["S", "M", "L", "XL"];
    } else if (category === "Men") {
      sizes = ["S", "M", "L", "XL", "XXL"];
    }

    return {
      id: index * 10 + i + 1,
      name: item[0],
      price: item[1],
      rating: item[2],
      image: photo(item[3]),
      category,
      sizes
    };
  })
);

const categories = [
  "All", "Women", "Men", "Footwear", "Accessories", "Electronics"
];

const money = (amount) =>
  "₹" + amount.toLocaleString("en-IN");

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(null);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Cash on Delivery"
  });

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      category === "All" || product.category === category;

    const matchSearch =
      product.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  // IMAGE FALLBACK
  const handleImageError = (e, name) => {
    if (e.currentTarget.dataset.failed) return;
    e.currentTarget.dataset.failed = "true";
    e.currentTarget.src =
      `https://placehold.co/600x600/f3e7ff/7024b5?text=${encodeURIComponent(name)}`;
  };

  // ADD TO CART
  const addToCart = (product, size = "") => {
    if (product.sizes.length > 0 && !size) {
      alert("Please select your size first!");
      return;
    }

    setCart((previous) => {
      const existing = previous.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existing) {
        return previous.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...product, size, quantity: 1 }];
    });

    setSelectedProduct(null);
    setSelectedSize("");
    alert("Product added successfully!");
  };

  // QUANTITY
  const updateQuantity = (id, size, change) => {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // WISHLIST
  const toggleWishlist = (product) => {
    setWishlist((previous) =>
      previous.some((item) => item.id === product.id)
        ? previous.filter((item) => item.id !== product.id)
        : [...previous, product]
    );
  };

  // CUSTOMER INPUTS
  const handleCustomerChange = (e) => {
    setCustomer((previous) => ({
      ...previous,
      [e.target.name]: e.target.value
    }));
  };

  // PLACE ORDER
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const order = {
      orderNumber: "NOVA" + Date.now().toString().slice(-8),
      date: new Date().toLocaleString(),
      customer: { ...customer },
      items: [...cart],
      total: cartTotal
    };

    setPlacedOrder(order);
    setCart([]);
    setShowCheckout(false);
    setShowCart(false);
  };

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <a href="#" className="logo">Nova<span>Cart</span></a>

        <input
          className="search"
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="header-actions">
          <button onClick={() => {
            setShowWishlist(true);
            setShowCart(false);
          }}>
            ♡ Wishlist ({wishlist.length})
          </button>

          <button onClick={() => {
            setShowCart(true);
            setShowWishlist(false);
          }}>
            🛒 Cart ({cartCount})
          </button>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="nav">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* BENEFITS */}
      <section className="benefits">
        <div>🚚 <span>Free Delivery</span></div>
        <div>💜 <span>Best Prices</span></div>
        <div>🔄 <span>Easy Returns</span></div>
        <div>🔒 <span>Secure Shopping</span></div>
      </section>

      {/* PRODUCTS */}
      <main className="main">
        <section className="heading">
          <p className="eyebrow">NEW COLLECTION</p>
          <h1>Products For You</h1>
          <p>Discover your favourite collection</p>
        </section>

        <div className="filters">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "selected" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="results">
          Showing {filteredProducts.length} products
        </p>

        <section className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => handleImageError(e, product.name)}
                />

                <button
                  className="heart"
                  aria-label="Toggle wishlist"
                  onClick={() => toggleWishlist(product)}
                >
                  {wishlist.some((item) => item.id === product.id)
                    ? "♥" : "♡"}
                </button>

                <span className="category-tag">
                  {product.category}
                </span>
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="rating">
                  ⭐ {product.rating} / 5
                </div>

                <div className="price-row">
                  <strong>{money(product.price)}</strong>

                  <button onClick={() => {
                    if (product.sizes.length > 0) {
                      setSelectedProduct(product);
                      setSelectedSize("");
                    } else {
                      addToCart(product);
                    }
                  }}>
                    Add +
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {filteredProducts.length === 0 && (
          <div className="empty">
            <h2>No Products Found</h2>
            <p>Try searching with another name.</p>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <h2>Nova Cart</h2>
        <p>Your style, your choice, your shopping destination.</p>
        <p>© 2026 Nova Cart. All rights reserved.</p>
      </footer>

      {/* SIZE SELECTION */}
      {selectedProduct && (
        <div className="overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setSelectedProduct(null)}>
              ×
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              onError={(e) => handleImageError(e, selectedProduct.name)}
            />

            <h2>{selectedProduct.name}</h2>
            <p className="modal-price">{money(selectedProduct.price)}</p>
            <h4>Select Size</h4>

            <div className="size-options">
              {selectedProduct.sizes.map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "size-active" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              className="primary-btn"
              onClick={() => addToCart(selectedProduct, selectedSize)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* CART */}
      {showCart && (
        <div className="overlay" onClick={() => setShowCart(false)}>
          <div className="side-panel" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setShowCart(false)}>
              ×
            </button>

            <h2>🛒 Your Shopping Cart</h2>

            {cart.length === 0 ? (
              <p>Your cart is empty. Start shopping!</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div className="cart-item" key={`${item.id}-${item.size}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => handleImageError(e, item.name)}
                    />

                    <div className="cart-details">
                      <h4>{item.name}</h4>
                      {item.size && <p>Size: {item.size}</p>}
                      <strong>{money(item.price * item.quantity)}</strong>

                      <div className="quantity">
                        <button onClick={() =>
                          updateQuantity(item.id, item.size, -1)
                        }>−</button>

                        <span>{item.quantity}</span>

                        <button onClick={() =>
                          updateQuantity(item.id, item.size, 1)
                        }>+</button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="total">
                  <span>Total Amount</span>
                  <strong>{money(cartTotal)}</strong>
                </div>

                <button className="primary-btn" onClick={() => {
                  setShowCart(false);
                  setShowCheckout(true);
                }}>
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* WISHLIST */}
      {showWishlist && (
        <div className="overlay" onClick={() => setShowWishlist(false)}>
          <div className="side-panel" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setShowWishlist(false)}>
              ×
            </button>

            <h2>♡ Your Wishlist</h2>

            {wishlist.length === 0 ? (
              <p>Your wishlist is empty.</p>
            ) : (
              wishlist.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => handleImageError(e, item.name)}
                  />

                  <div className="cart-details">
                    <h4>{item.name}</h4>
                    <strong>{money(item.price)}</strong>

                    <button onClick={() => {
                      setShowWishlist(false);
                      if (item.sizes.length > 0) {
                        setSelectedProduct(item);
                        setSelectedSize("");
                      } else {
                        addToCart(item);
                      }
                    }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* CHECKOUT FORM */}
      {showCheckout && (
        <div className="overlay" onClick={() => setShowCheckout(false)}>
          <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setShowCheckout(false)}>
              ×
            </button>

            <h2>Complete Your Order</h2>
            <p className="checkout-subtitle">
              Enter your delivery details below.
            </p>

            <div className="checkout-summary">
              <span>Products: {cartCount}</span>
              <strong>Total: {money(cartTotal)}</strong>
            </div>

            <form onSubmit={handlePlaceOrder}>
              <label>Full Name</label>
              <input
                name="name"
                value={customer.name}
                onChange={handleCustomerChange}
                placeholder="Enter your full name"
                minLength={2}
                required
              />

              <label>Mobile Number</label>
              <input
                name="phone"
                type="tel"
                value={customer.phone}
                onChange={handleCustomerChange}
                placeholder="10 digit mobile number"
                pattern="[0-9]{10}"
                maxLength={10}
                required
              />

              <label>Email Address</label>
              <input
                name="email"
                type="email"
                value={customer.email}
                onChange={handleCustomerChange}
                placeholder="Enter your email"
                required
              />

              <label>Delivery Address</label>
              <textarea
                name="address"
                value={customer.address}
                onChange={handleCustomerChange}
                placeholder="House number, street and area"
                required
              />

              <label>City</label>
              <input
                name="city"
                value={customer.city}
                onChange={handleCustomerChange}
                placeholder="Enter your city"
                required
              />

              <label>PIN Code</label>
              <input
                name="pincode"
                type="text"
                value={customer.pincode}
                onChange={handleCustomerChange}
                placeholder="6 digit PIN code"
                pattern="[0-9]{6}"
                maxLength={6}
                required
              />

              <label>Payment Method</label>
              <select
                name="payment"
                value={customer.payment}
                onChange={handleCustomerChange}
              >
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Demo UPI">UPI (Demo Only)</option>
              </select>

              <button className="primary-btn" type="submit">
                Place Order - {money(cartTotal)}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ORDER CONFIRMATION */}
      {placedOrder && (
        <div className="overlay order-overlay">
          <div className="success-modal">
            <div className="success-icon">✓</div>

            <h1>ORDER PLACED!</h1>
            <h3>Your order has been placed successfully.</h3>

            <p className="order-number">
              Order ID: {placedOrder.orderNumber}
            </p>

            <p className="order-date">
              Order Date: {placedOrder.date}
            </p>

            <div className="order-details">
              <h3>Customer Details</h3>
              <p><strong>Name:</strong> {placedOrder.customer.name}</p>
              <p><strong>Phone:</strong> {placedOrder.customer.phone}</p>
              <p><strong>Email:</strong> {placedOrder.customer.email}</p>
              <p>
                <strong>Address:</strong> {placedOrder.customer.address},
                {" "}{placedOrder.customer.city} - {placedOrder.customer.pincode}
              </p>
              <p><strong>Payment:</strong> {placedOrder.customer.payment}</p>

              <hr />

              <h3>Ordered Products</h3>

              {placedOrder.items.map((item) => (
                <div className="ordered-product" key={`${item.id}-${item.size}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => handleImageError(e, item.name)}
                  />

                  <div>
                    <strong>{item.name}</strong>
                    {item.size && <p>Size: {item.size}</p>}
                    <p>Quantity: {item.quantity}</p>
                    <p>{money(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}

              <div className="order-total">
                Total Amount: {money(placedOrder.total)}
              </div>

              <p className="delivery-message">
                Thank you for shopping with Nova Cart!
              </p>
            </div>

            <button className="primary-btn" onClick={() => {
              setPlacedOrder(null);
              setCategory("All");
              setSearch("");
              setCustomer({
                name: "",
                phone: "",
                email: "",
                address: "",
                city: "",
                pincode: "",
                payment: "Cash on Delivery"
              });
            }}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
