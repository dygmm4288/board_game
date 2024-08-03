import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/svg/HomeIcon";

const Header = () => {
  return (
    <nav>
      <li>
        <Link to={"/"}>
          <HomeIcon width={28} height={28} />
        </Link>
      </li>
    </nav>
  );
};

export default Header;
