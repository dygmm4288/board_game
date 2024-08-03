import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/svg/HomeIcon";

const Header = () => {
  return (
    <nav className='w-full h-[60px] flex items-center justify-center shadow-header-nav sticky'>
      <li>
        <Link to={"/"} className='flex flex-col items-center justify-center'>
          <HomeIcon width={28} height={28} />
          <h1 className=' text-primary-font-color text-10'>홈</h1>
        </Link>
      </li>
    </nav>
  );
};

export default Header;
