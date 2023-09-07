import { CurrentFormetter } from "../Utilities/CurrentFormetter";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

const data = [
  {
    id: 1,
    name: "Blink Mini – Compact indoor plug-in smart security camera",
    description:
      "Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
    price: 64.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    category: "Camera",
  },
  {
    id: 2,
    name: "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
    description:
      "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    price: 109.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
    category: "Camera",
  },
  {
    id: 3,
    name: "SAMSUNG 55-Inch Class Crystal 4K UHD AU8000 Series HDR",
    description:
      "Witness millions of shades of color through powerful Dynamic Crystal technology",
    price: 497.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/cl-uhd-tu7090-un50tu7090gxzs-rperspective-285965740_duusj5.png",
    category: "TV",
  },
  {
    id: 4,
    name: "Sony 65 Inch 4K Ultra HD TV X80K Series: LED Smart Google TV",
    description:
      "The 4K HDR Processor X1 delivers a picture that is smooth and clear, full of rich colors and detailed contrast",
    price: 698,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/287330_fhhcyx.jpg",
    category: "TV",
  },
];

export default function Card() {
  const [count, setCount] = useState(1);

  const handelIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handelDecrese = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="cart-section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold space-font text-center mb-10">
        {" "}
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
                  <button className="remove-btn uppercase font-medium text-gray-500 hover:text-red-500">
                    Remove
                  </button>
                </div>
              </div>
              <div className="col-unit-price">
                {CurrentFormetter(product.price)}
              </div>
              <div className="col-quantity flex">
                <button
                  onClick={handelDecrese}
                  className="btn h-10 w-10  bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-500"
                >
                  -
                </button>
                <span className="quantity-value h-10 w-10  bg-gray-100 flex justify-center items-center border border-gray-300">
                  {count}
                </span>
                <button
                  onClick={handelIncrease}
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
        <button className="clear-btn  uppercase border py-3 px-8 hover:bg-rose-200 hover:text-gray-600 font-medium hover:border-rose-200 duration-300">Clear Cart</button>
        <div className="flex flex-col items-start gap-2 ">
          <div className="top flex justify-between w-full text-2xl font-medium">
            <span className="total text-sky-500">Subtotal</span>
            <span className="total-price text-rose-500">$1,000.00</span>
          </div>
          <p className="text-gray-500">Taxes and shipping calculated at checkout</p>
          <button className="checkout-btn bg-sky-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-700 hover:text-sky-50 duration-300">Checkout</button>
          <button className="continue-btn flex justify-between items-center mt-3">
            <span className=" text-sky-500  font-medium">
              <BsArrowLeft />
            </span>
           <span className="ml-2 uppercase text-sky-500  font-medium">Continue Shopping</span>
          </button>
        </div>
      </div>
    </div>
  );
}
