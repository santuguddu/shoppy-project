import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/selectors/cartSelectors";

const Header = () => {
  const totalCarts = useSelector(selectCartItems);

  return (
    <>
      <header className="flex items-center justify-between py-6 border-b sticky top-0 bg-[#232F3E] px-8">
        <Logo />

        {/* Centered Home Link */}
        <h1 className="text-2xl font-bold text-white absolute left-1/2 transform -translate-x-1/2">
  <Link to="/home">Home</Link>
</h1>

        <Link to={`/cart`}>
          <div className="relative">
            <span className="text-2xl text-white">
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            {totalCarts.length !== 0 && (
              <span
                className="absolute right-0 -top-4 bg-yellow-500 min-w-7 h-7 
      flex items-center justify-center rounded-full text-black font-bold"
              >
                {totalCarts.length}
              </span>
            )}
          </div>
        </Link>
      </header>
    </>
  );
};

export default Header;
