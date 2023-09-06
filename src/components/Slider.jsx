import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1787236/pexels-photo-1787236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Close-Up Photo of Dslr Camera",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Turned-on Flat Screen Smart Television Ahead",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Top View Photo of Black Wireless Headphones",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Person Holding Game Pad",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Rose Gold Aluminum Case Apple Watch With White Sports Band",
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
          <div
            className="slide"
            style={{ backgroundImage: `url(${item.src})` }}
            key={item.id}
          ></div>
        ))}
      </div>
      <div className="btns absolute z-[1] text-white text-2xl flex gap-10 bottom-20 w-screen justify-center">
        <div
          onClick={prevSlide}
          className="btn-prev h-14 w-20 bg-white/40 flex justify-center items-center backdrop-blur-xl hover:bg-white/90 hover:text-black duration-300"
        >
          <button>
            <span>
              <BsArrowLeft />
            </span>
          </button>
        </div>
        <div
          onClick={nextSlide}
          className="btn-next h-14 w-20 bg-white/40 flex justify-center items-center backdrop-blur-xl  hover:bg-white/90 hover:text-black duration-300"
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
