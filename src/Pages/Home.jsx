import React, { useEffect, useState } from "react";
import Spinner from "../Components/Spinner";
import Product from "../Components/Product";

const Home = () => {
  const APi_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const reasult = await fetch(APi_URL);
      const data = await reasult.json();
      // console.log(data);

      setPosts(data);
    } catch (error) {
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-[80vh]">
          <Spinner />
        </div>
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-2 gap-6 min-h-[80vh]">
          {posts.map((post, index) => {
            return <Product key={index} post={post} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[80vh]">
          <p className="text-xl font-semibold text-gray-600">
            No Data Found 🚫
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
