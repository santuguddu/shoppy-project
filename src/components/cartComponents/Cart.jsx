import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/selectors/cartSelectors";
import { formatePrize } from "../../utils/helpers";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/reducers/cartSlice";
import { useNavigate, Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartItemsTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-12">
        <p className="text-gray-600 text-4xl">Your cart is empty!</p>
        {/* Updated Back Button with route to Home */}
        <Link
          to="/home"
          className="mt-4 inline-block px-6 py-3 text-lg font-semibold text-green-600 border-2 border-green-600 rounded-lg hover:bg-green-600 hover:text-white transition duration-300"
        >
          ⬅ Back to Home
        </Link>
      </div>
    );
  }

  const handleRemovecart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  // -------------- Handle Submit --------------

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
          {/* Updated Back Button with route to Home */}
          <Link
            to="/home"
            className="px-6 py-3 text-lg font-semibold text-green-600 border-2 border-green-600 rounded-lg hover:bg-green-600 hover:text-white transition duration-300"
          >
            ⬅ Back to Home
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4 overflow-y-scroll max-h-96 scrollbar-hide">
            {/* ------------------------ Individual cart item ------------------------ */}
            {cartItems.map((cart) => (
              <CartItem
                key={cart.id}
                item={cart}
                onRemove={() => handleRemovecart(cart.id)}
                onIncrease={() => handleIncreaseQuantity(cart.id)}
                onDecrease={() => handleDecreaseQuantity(cart.id)}
              />
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md max-h-fit">
            <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Total Items:</span>
                <span className="font-semibold">{cartItems.length}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-gray-600">Total Price:</span>
                <span className="font-semibold">
                  {formatePrize(cartItemsTotal)}
                </span>
              </div>
              <button className="w-full bg-green-500 text-white py-3 text-lg rounded-lg border-2 border-green-600 hover:bg-green-700 hover:border-green-700 transition duration-300">
                Proceed to Checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
