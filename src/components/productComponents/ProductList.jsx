import { useEffect, useState } from "react";
import Loader from "../Loader";
import ProductItem from "./ProductItem";
import { useFetchProducts } from "../../hooks/useFetchProducts";

const ProductList = () => {
  const { products, isLoading, error } = useFetchProducts(
    `https://dummyjson.com/products`
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log("Products fetched:", products);
  }, [products]); // Just to demonstrate the use of useEffect in ProductList.jsx

  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Search Input with Icon */}
      <div className="flex justify-center my-5">
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 pl-10 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full p-7">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </>
  );
};

export default ProductList;
