import React from "react";
import { CurrentFormetter } from "../Utilities/CurrentFormetter";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/products/cartSlice";

export default function Cart({ product }) {


  const naviGate=useNavigate();
  const dispatch=useDispatch();

const addTocartHandler=(product)=>{
 
  dispatch(addToCart(product));

 naviGate('/cart');
}


  return (
    <div className="product flex flex-col gap-2 bg-white shadow-lg rounded-xl overflow-hidden">
  <div className="img-container flex justify-center object-cover">
    <img src={product.image} alt={product.category} />
  </div>
  <div className="texts flex flex-col gap-2 px-5 pb-5">
    <span className="category-tag uppercase text-xs font-semibold tracking-widest text-orange-500">
      {product.category}
    </span>
    <h3 className="title text-lg md:text-xl lg:text-2xl truncate font-medium md:h-[3.25rem] lg:h-[4rem]">
      {product.name}
    </h3>
    <p className="description text-gray-500 h-[7rem] md:h-[9rem] lg:h-[11rem]">
      {product.description}
    </p>
    <div className="flex flex-col md:flex-row md:justify-between items-center">
      <div className="price text-lg md:text-xl lg:text-2xl font-medium text-rose-500">
        {CurrentFormetter(product.price)}
      </div>
      <button
        onClick={() => addTocartHandler(product)}
        className="btn uppercase bg-teal-500 text-teal-50 px-5 py-2 md:px-7 md:py-2 font-medium rounded-md hover:bg-red-500 hover:text-red-50 duration-300"
      >
        Add to cart
      </button>
    </div>
  </div>
</div>

  
  );  
}
