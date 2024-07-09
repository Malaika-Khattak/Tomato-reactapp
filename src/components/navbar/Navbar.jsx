import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { Storecontext } from "../../context/Storecontext";

const Navbar = ({ setshowlogin }) => {
  const [menu, setmenu] = useState("home");

  const { gettotal } = useContext(Storecontext);

  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => {
            setmenu("home");
          }}
          className={menu == "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setmenu("Menu");
          }}
          className={menu == "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#appdown"
          onClick={() => {
            setmenu("Mobile App");
          }}
          className={menu == "Mobile App" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => {
            setmenu("Contact Us");
          }}
          className={menu == "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.bag_icon} />
          </Link>

          <div className={gettotal() === 0 ? "" : "dot"}></div>
        </div>
        <button
          onClick={() => {
            setshowlogin(true);
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
