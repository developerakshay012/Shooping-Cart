import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Cartitem from "../Components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 md:p-6">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-center max-w-[1300px] mx-auto gap-6">
          
          {/* Left Side - Cart Items */}
          <div className="w-full md:w-[60%] flex flex-col p-2 bg-white rounded-2xl shadow-md">
            {cart.map((item, index) => {
              return <Cartitem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          {/* Right Side - Summary */}
          <div className="w-full md:w-[40%] bg-white shadow-xl rounded-2xl p-6">
            <div className="flex flex-col gap-6">
              {/* Heading Section */}
              <div className="flex justify-between items-center border-b pb-4">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">Your Cart</h1>
                <span className="text-base md:text-lg font-medium text-gray-600">Summary</span>
              </div>

              {/* Total Items */}
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">Total Items:</span> {cart.length}
              </p>

              {/* Total Amount + Button */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <p className="text-lg md:text-xl font-semibold text-gray-800">
                  Total Amount: <span className="text-green-600">${totalAmount}</span>
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart Case
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Your Cart is Empty</h1>
          <NavLink to={"/"}>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition cursor-pointer ">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
