import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/CartSlices";
import { toast } from "react-toastify";

const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch()


  const removeFormCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed")
    
  };

  return (
    // Outer Container: Subtle light gray background (bg-gray-50) for contrast
    // Added a pronounced shadow and smooth border on hover for elegance.
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch p-4 sm:p-6 justify-between mt-4 mb-6 mx-auto max-w-4xl 
                    bg-gray-50 border border-gray-100 rounded-xl shadow-lg 
                    transition-all duration-300 hover:shadow-2xl hover:border-blue-200">
      
      {/* Image Section */}
      <div className="w-full sm:w-1/4 flex justify-center items-center p-2">
        <img 
          src={item.image} 
          className="object-contain max-h-36 sm:max-h-48 transition-transform duration-300 hover:scale-105" 
          alt={item.title}
        />
      </div>

      {/* Content Section */}
      <div className="w-full sm:w-3/4 sm:ml-6 mt-4 sm:mt-0 flex flex-col justify-between py-2 space-y-3">
        
        {/* Title */}
        <h1 className="text-xl sm:text-2xl text-gray-800 font-extrabold line-clamp-2">
          {item.title}
        </h1>

        {/* Description */}
        <h1 className="text-sm sm:text-base text-gray-600 font-medium line-clamp-3">
          {item.description}
        </h1>

        {/* Price + Delete Container */}
        <div className="flex flex-row items-center justify-between mt-4 border-t pt-4 border-gray-200"> 
          
          {/* Price */}
          <p className="text-green-700 font-extrabold text-xl">${item.price}</p>

          {/* Delete Button */}
          <div
            onClick={removeFormCart}
            // Retained the functional color scheme but enhanced hover shadow/ring
            className="text-red-700 bg-red-100 transition duration-300 cursor-pointer rounded-full p-3 shadow-md hover:bg-red-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            <MdDelete className="text-xl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;