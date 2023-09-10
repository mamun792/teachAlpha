import { useDispatch, useSelector } from "react-redux";
import { CurrentFormetter } from "../Utilities/CurrentFormetter";
import { BsArrowLeft } from "react-icons/bs";
import {
  addToCart,
  clearCart,
 
  decreaseCart,
 
  removeCart,
} from "../features/products/cartSlice";
import { Link } from "react-router-dom";

export default function Card() {
  const dispatch = useDispatch();
  const { cart: data } = useSelector((state) => state.cart);

  const removeHandler = (product) => {
    dispatch(removeCart(product));
    console.log(product);
  };

  const clearCartHandelar = () => {
    dispatch(clearCart());
  };

  const deceasedHandler = (product) => {
    
    dispatch(decreaseCart(product))
  };

  const inceasedHandler = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="cart-section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold space-font text-center mb-10">
        Your Card
      </h2>

      <div className="cart-container ">
        <div className="cart-headline grid grid-cols-5 gap-10 border-b pb-3 uppercase font-medium">
          <div className="col-product col-span-2">products</div>
          <div className="col-unit-price">Price</div>
          <div className="col-quantity">Quantity</div>

          <div className="col-total-price ml-auto">Total</div>
        </div>
        <div className="texts flex flex-col ">
          {data.map((product) => (
            <div className="cart-item grid grid-cols-5 gap-5 pb-5 border-b mt-10">
              <div className="col-product flex col-span-2 gap-5">
                <div className="product-image ">
                  <img
                    src={product.image}
                    alt={product.category}
                    className="h-32 w-32 object-cover"
                  />
                </div>
                <div className="product-details flex flex-col gap-3 items-start">
                  <div className="product-name">{product.name}</div>
                  <button
                    onClick={() => removeHandler(product)}
                    className="remove-btn uppercase font-medium text-gray-500 hover:text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="col-unit-price">
                {CurrentFormetter(product.price)}
              </div>
              <div className="col-quantity flex">
                <button
                  onClick={() => deceasedHandler(product)}
                  className="btn h-10 w-10  bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-500"
                >
                  -
                </button>
                <span className="quantity-value h-10 w-10  bg-gray-100 flex justify-center items-center border border-gray-300">
                  {product.quantity}
                </span>
                <button
                  onClick={() => inceasedHandler(product)}
                  className="btn  h-10 w-10  bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-500"
                >
                  +
                </button>
              </div>
              <div className="col-total-price ml-auto">{product.price}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="catr-lower-section flex justify-between items-start py-10">
        <button
          onClick={() => clearCartHandelar()}
          className="clear-btn  uppercase border py-3 px-8 hover:bg-rose-200 hover:text-gray-600 font-medium hover:border-rose-200 duration-300"
        >
          Clear Cart
        </button>
        <div className="flex flex-col items-start gap-2 ">
          <div className="top flex justify-between w-full text-2xl font-medium">
            <span className="total text-sky-500">Subtotal</span>
            <span className="total-price text-rose-500">$1,000.00</span>
          </div>
          <p className="text-gray-500">
            Taxes and shipping calculated at checkout
          </p>
          <Link
            to="#"
            className="checkout-btn bg-sky-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-700 hover:text-sky-50 duration-300 text-center"
          >
            Checkout
          </Link>
          <button className="continue-btn flex justify-between items-center mt-3">
            <span className=" text-sky-500  font-medium">
              <BsArrowLeft />
            </span>
            <Link
              to="/Products"
              className="ml-2 uppercase text-sky-500  font-medium"
            >
              Continue Shopping
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
