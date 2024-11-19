import React from "react";

const Card = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded mb-2"
      />
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="text-gray-600">{product.category}</p>
      <p className="text-green-600 font-semibold">Rp {product.price.toLocaleString()}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Tambahkan ke Keranjang
      </button>
    </div>
  );
};

export default Card;
