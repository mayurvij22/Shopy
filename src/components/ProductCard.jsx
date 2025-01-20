import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.category}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 mt-2"
      >
        Add to Cart
      </button>
      <Link to={`/product/${product.id}`} className="block mt-2 text-blue-500">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
