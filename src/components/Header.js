import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="조각집 로고" className="logo" />
    </header>
  );
};

export default Header;
