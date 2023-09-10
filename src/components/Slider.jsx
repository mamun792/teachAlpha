import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1787236/pexels-photo-1787236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Close-Up Photo of Dslr Camera",
    headline: "Elevate Your Photography!",
    description:"Introducing the latest innovation in photography – a game-changing compact camera that redefines the way we capture moments. This cutting-edge device combines portability with professional-grade features, offering unparalleled image quality in a pocket-sized package.",
    cta: "Shop DSLR Camera Now",
    category: "cameras",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Turned-on Flat Screen Smart Television Ahead",
    headline: "The New Smart TV",
    description:"The new Smart TV is here. With a sleek design and a stunning display, this TV is the perfect addition to any home. It's also packed with features that will make your life easier, like voice control and built-in streaming services. You can even use it as a hub for all of your smart devices!",
    cta: "Shop Smart TV Now",
    category: "tvs",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Top View Photo of Black Wireless Headphones",
    headline: "Wireless Headphones",
    description:"The new Wireless Headphones are here! They're the perfect accessory for any music lover. With a sleek design and powerful sound, these headphones will make you feel like you're in the studio with your favorite artist. And they're wireless, so you can move around freely without worrying about cords or cables.",
    cta: "Shop Wireless Headphones Now",
    category: "headphones",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Person Holding Game Pad",
    headline: "Gaming Controller",
    description:"The new Gaming Controller is here! It's the perfect accessory for any gamer. With a sleek design and ergonomic grip, this controller will make your gaming experience more comfortable than ever before. And with its wireless connection, you can play from anywhere in the room without worrying about cords or cables.",
    cta: "Shop Gaming Controller Now",
    category: "consoles",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Rose Gold Aluminum Case Apple Watch With White Sports Band",
    headline: "Apple Watch",
    description:"The new Apple Watch is here! It's the perfect accessory for any occasion. With a sleek design and powerful features, this watch will make you feel like a superhero. You can even use it to track your fitness goals or get notifications from your favorite apps. And with its water resistance up to 50 meters, you can wear it in the shower or pool without worrying about damaging it!",
    cta: "Shop Apple Watch Now",
    category: "smart-watchs",
  },
];

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex(
      slideIndex === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  const prevSlide = () => {
    setSlideIndex(
      slideIndex === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };

  return (
    <div className="frame relative">
    <div
      className="slider relative"
      style={{ transform: `translateX(-${100 * slideIndex}vw )` }}
    >
      {data.map((item) => (
        <Slide item={item} key={item.id} />
      ))}
    </div>
    <div className="btns absolute z-10 text-white text-2xl flex gap-10 bottom-20 w-screen justify-center">
      <div
        onClick={prevSlide}
        className="btn-prev h-12 w-20 flex items-center justify-center bg-violet-900 text-violet-200 border-2 border-violet-200 hover:bg-gray-900 hover:text-gray-100 duration-300"
      >
        <button>
          <span>
            <BsArrowLeft />
          </span>
        </button>
      </div>
      <div
        onClick={nextSlide}
        className="btn-next h-12 w-20 flex justify-center items-center bg-violet-900 text-violet-200 border-2 border-violet-200 hover:bg-gray-900 hover:text-gray-100 duration-300"
      >
        <button>
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  </div>
  
  );
}
