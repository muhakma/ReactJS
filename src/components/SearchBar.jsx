import React from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Cari produk..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-2 border rounded mb-4"
    />
  );
};

export default SearchBar;
