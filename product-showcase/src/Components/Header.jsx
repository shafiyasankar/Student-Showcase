
import React from "react";
import { Menu } from "lucide-react";
import SearchBar from "./SearchBar";
import CartBadge from "./CartBadge";
import ThemeButton from "./ThemeButton";

function Header({
  count,
  dark,
  toggleTheme,
  search,
  setSearch,
  openCart
}) {
  return (
    <>
      <header className="top-header">
        <div className="brand">
          <Menu size={23} />
          <span>nova<span className="brand-highlight">cart</span></span>
        </div>

        <SearchBar search={search} setSearch={setSearch} />

        <div className="header-actions">
          <ThemeButton dark={dark} toggle={toggleTheme} />

          <button className="header-cart" onClick={openCart}>
            <CartBadge count={count} />
            Cart
          </button>
        </div>
      </header>

      <nav className="location-bar">
        <span>Deliver to India</span>
        <span>Today's Deals</span>
        <span>Customer Service</span>
        <span>Best Sellers</span>
        <span>New Arrivals</span>
      </nav>
    </>
  );
}

export default Header;
