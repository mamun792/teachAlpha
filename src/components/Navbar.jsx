import React from "react";
import { NavLink } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function Hedar() {

  
  const { cart } = useSelector((state) => state.cart);

  return (
    <div className="nav-bg  bg-violet-600 text-violet-50 h-20 flex justify-center items-center">
      <div className="navbar container mx-auto flex justify-between items-center">
        <div className="nav-left">
          <div className="logo">
            <span className="logo-text text-xl font-semibold">
              Teach<span className=" text-orange-500">Alpha</span>
            </span>
          </div>
        </div>
        <div className="nav-right flex  items-center gap-5">
          <NavLink to="/" className="nav-link duration-500">
            Home
          </NavLink>
          <NavLink to="/products" className="nav-link   duration-500">
            Products
          </NavLink>
          <NavLink to="/cart" >
            <span className="cart-icon relative">
              <BsCartPlus />
              <span className="cart-count absolute -top-3  -right-3 text-xs bg-orange-500 h-5 w-5 rounded-full flex items-center justify-center font-medium">
                {cart?.length}
              </span>
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
