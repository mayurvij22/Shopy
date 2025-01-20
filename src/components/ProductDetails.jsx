import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../services/api";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      const data = await fetchProductDetails(id);
      setProduct(data);
    };
    getProductDetails();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center md:flex-row md:space-x-8">
          {/* Product Image */}
          <div className="mb-6 md:mb-0 md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Product Details */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Price: ${product.price}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Category: {product.category}
            </p>
            <p className="text-sm text-gray-600">
              Rating: {product.rating.rate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
