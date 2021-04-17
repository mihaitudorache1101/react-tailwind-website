import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='bg-white h-screen flex flex-col justify-center items-center'>
      <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14'>
        Welcome
      </h1>
      <Link className='py-6 px-10 bg-yellow-500 rounded-full text-3l hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce'>
        Find Out More{" "}
        <svg
          className='w-6 h-6 ml-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          />
        </svg>
      </Link>
    </div>
  );
};

export default Hero;
