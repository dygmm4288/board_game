import React from "react";
import logo from "../assets/clickandchillin 1.png";

const FirstVisit = () => {
  return (
    <div className=' bg-primary-background-color w-full h-screen flex flex-col items-center justify-center'>
      <div className='relative h-[162px]'>
        <img src={logo} alt='logo' className='w-[304px]' />
        <button className='bg-primary-color w-[304px] h-[44px] text-[#fff] absolute top-[118px]'>
          시작하기
        </button>
      </div>
    </div>
  );
};

export default FirstVisit;
