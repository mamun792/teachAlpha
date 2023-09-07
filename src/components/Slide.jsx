import React from 'react'
import { Link } from "react-router-dom";

export default function Slide({item}) {
  return (
   
       <div
            className="slide bg-gradient-to-tr from-black to-transparent h-screen w-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${item.src})` }}
            
          >
            <div className="slide-texts container mx-auto flex flex-col items-start justify-center h-full gap-5">
            <h1 className="text-7xl w-4/5 text-violet-50 font-semibold uppercase">{item.headline} </h1>
            <p className=" text-xl text-violet-50/75 w-3/5">{item.description}  </p>
            <Link to={`/products/${item.category}`}  className="slide-btn  h-14 w-72 mt-5 uppercase font-medium   border-2 duration-300 text-orange-50">
              <span className=" z-[2] absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 w-full text-center ">{item.cta}</span>
            </Link>
            </div>
          </div>
   
  )
}
