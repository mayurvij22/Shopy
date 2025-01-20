import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty!</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-6 p-4 border border-gray-200 rounded-lg shadow-sm"
              >
                {/* Product Info */}
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Price: ${item.price}
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      Total: ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Total Price: ${total}
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
