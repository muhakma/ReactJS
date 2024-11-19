import React, { useState } from "react";
import Card from "./Components/card";
import SearchBar from "./Components/searchbar";

const App = () => {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Beads Necklace",
      category: "Necklace",
      price: 50000,
      image: "public/Images/neckles.jpg",
    },
    {
      id: 2,
      name: "Beads Bracelet",
      category: "Bracelet",
      price: 30000,
      image: "public/Images/anklet.jpg",
    },
    {
      id: 3,
      name: "Beads Earrings",
      category: "Earrings",
      price: 40000,
      image: "public/Images/pearl.jpg",
    },
    {
      id: 4,
      name: "Beads Ring",
      category: "Ring",
      price: 25000,
      image: "public/Images/ring.jpg",
    },
    {
      id: 5,
      name: "Beads Hairpin",
      category: "Hair Accessories",
      price: 20000,
      image: "public/Images/hairclip.jpg",
    },
    {
      id: 6,
      name: "Beads Keychain",
      category: "Keychain",
      price: 15000,
      image: "public/Images/keychain.jpg",
    },
    {
      id: 7,
      name: "Beads Anklet",
      category: "Anklet",
      price: 35000,
      image: "/public/Images/anklet.jpg",
    },
    {
      id: 8,
      name: "Beads Phonestrap",
      category: "Strap",
      price: 30000,
      image: "public/Images/phonestrap.jpg",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} berhasil ditambahkan ke keranjang!`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Aksesori Beads</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
