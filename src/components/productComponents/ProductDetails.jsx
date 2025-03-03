import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { useFetchSingleProduct } from "../../hooks/useFetchSingleProduct";
import { formatePrize } from "../../utils/helpers";
import { selectCartItems } from "../../redux/selectors/cartSelectors";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/reducers/cartSlice";
import BackButton from "../BackButton";
const ProductDetails = () => {
  const { id } = useParams();
  const cartItems = useSelector(selectCartItems);

  // ------------- Hook for fetching the single product from API -------------
  const { product, isLoading, error } = useFetchSingleProduct(
    "https://dummyjson.com/products/",
    id
  );

  const cartProduct = cartItems.find((item) => item.id == id);
  const cartProductQuantity = cartProduct ? cartProduct.quantity : 1;
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(cartProductQuantity);

  const dispatch = useDispatch();

  // ------------- Setting initital image -------------
  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  // ------------- Function to increase quantity -------------
  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
    setQuantity(quantity + 1);
  };

  // ------------- Function to decrease quantity but ensure it doesn't go below 1 -------------
  const handleDecrease = (id) => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(id));
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (quantity) => {
    dispatch(addToCart({ ...product, quantity }));
  };

  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4">
      {/* ------------- Back to Home Button ------------- */}
      <BackButton />

      {
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ------------- Product Image & Gallery ------------- */}
          <div className="lg:col-span-2">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full h-80 object-contain rounded-lg shadow-lg"
            />
            
          </div>

          {/* ------------- Product Details ------------- */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-lg text-gray-600">{product.description}</p>
            <p className="text-2xl font-semibold text-green-600">
              {formatePrize(product.price * quantity)}
            </p>
            <p className="text-gray-500">
              <strong>Brand:</strong> {product.brand}
            </p>
            <p className="text-gray-500">
              <strong>Availability:</strong> {product.availabilityStatus}
            </p>
            <p className="text-gray-500">
              <strong>Warranty:</strong> {product.warrantyInformation}
            </p>

            <div>
              <div className="flex items-center space-x-4 mt-6">
                <p className="text-lg font-semibold">Quantity:</p>
                <button
                  onClick={() => handleDecrease(id)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => handleIncrease(id)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleAddToCart(quantity)}
                className="px-3 py-2 bg-green-500 text-white text-xs font-bold uppercase rounded mt-4"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      }

    
    </div>
  );
};

export default ProductDetails;
