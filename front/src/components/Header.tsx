import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/svg/HomeIcon";
import LogoutIcon from "../assets/svg/LogoutIcon";
import useAuth from "../zustand/auth";

const Header = () => {
  const { logout } = useAuth();
  const handleLogoutBtn = () => {
    logout();
  };
  return (
    <nav className='relative w-full h-[60px] shadow-header-nav sticky z-20 text-primary-font-color text-10'>
      <li className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]'>
        <Link to={"/"} className='flex flex-col items-center justify-center'>
          <HomeIcon width={28} height={28} />
          <h1>홈</h1>
        </Link>
      </li>
      <li className='absolute right-[22px] top-[50%] translate-y-[-50%]'>
        <button
          onClick={handleLogoutBtn}
          className='flex flex-col items-center justify-center'>
          <LogoutIcon />
          <h2>로그아웃</h2>
        </button>
      </li>
    </nav>
  );
};

export default Header;
