
import React from "react";
import { Search, X } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-box">
      <Search size={20} />

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <button onClick={() => setSearch("")}>
          <X size={17} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
