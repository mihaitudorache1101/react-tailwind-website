import React from "react";
import rp3 from "../images/rp3.png";
import rp4 from "../images/rp4.png";

const Content = () => {
  return (
    <>
      <div className='menu-card'>
        <img src={rp3} alt='' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Raspberry Pi 3</h2>
          <p className='mb-2'>MicroController</p>
          <span>$50</span>
        </div>
      </div>
      <div className='menu-card'>
        <img src={rp4} alt='' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Raspberry Pi 4</h2>
          <p className='mb-2'>MicroController</p>
          <span>$75</span>
        </div>
      </div>
    </>
  );
};

export default Content;
