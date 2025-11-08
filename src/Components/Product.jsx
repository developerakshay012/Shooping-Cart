import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/Slices/CartSlices";
import { toast } from "react-toastify";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCArt = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeToCart = () => {
    dispatch(remove(post.id));
    toast.error("Item remove success fully");
  };

  return (
    // Background changed to a soft light blue (bg-blue-50)
    <div
      className="flex flex-col items-center justify-between 
                shadow-xl rounded-xl p-5 mx-auto max-w-[280px]
                bg-blue-50 border border-blue-100 // Border color updated to match
                hover:shadow-2xl hover:scale-[1.03] transition duration-500 ease-in-out"
    >
      
      {/* Title */}
      <div className="w-full text-center">
        <p className="text-gray-900 font-bold text-xl line-clamp-1 w-full"> 
          {post.title}
        </p>
      </div>

      {/* Description */}
      <div className="my-2">
        <p className="text-gray-600 font-normal text-xs text-center line-clamp-3"> 
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      {/* Image */}
      <div className="h-[200px] w-full flex justify-center my-3">
        <img src={post.image} className="h-full object-contain" alt={post.title} />
      </div>

      {/* Price & Button Container */}
      <div className="flex justify-between items-center w-full mt-4">
        
        {/* Price */}
        <div>
          <p className="text-green-700 font-extrabold text-lg">${post.price}</p> 
        </div>

        {/* Button Logic (Functionality unchanged) */}
        {cart.some((p) => p.id === post.id) ? (
          <button 
            className="text-red-700 border-2 border-red-700 rounded-full font-semibold text-sm py-1 px-4 uppercase
                       hover:bg-red-700 hover:text-white transition duration-300 ease-in shadow-md"
            onClick={removeToCart}
          >
            Remove Item
          </button>
        ) : (
          <button 
            className="text-green-700 border-2 border-green-700 rounded-full font-semibold text-sm py-1 px-4 uppercase
                       hover:bg-green-700 hover:text-white transition duration-300 ease-in shadow-md"
            onClick={addToCArt}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;