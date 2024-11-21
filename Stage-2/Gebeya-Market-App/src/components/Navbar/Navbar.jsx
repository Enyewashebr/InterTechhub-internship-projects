// import React from 'react';
import "./Navbar.css";

import logo from "/logo.png";
import profile from "../../assets/profile.png";
import dropdown from "../../assets/down-arrow.png";
import search from "../../assets/search.png";
import bag from "../../assets/bag.png";
import flag from "../../assets/uk-flag.png";
import notification from "../../assets/notfication.png";
import search2 from '../../assets/search2.png'
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Register/Sign In Section */}
      <div className="div-2">
        <div className="register">
          <ul>
            <li>
              <img src={profile} alt="Profile" />
              Register/Sign In
              <img src={dropdown} alt="Dropdown" />
            </li>
          </ul>
        </div>

        {/* Category Links */}
        <div className="category">
          <ul>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Accessories</li>
            <li>
              More
              <img src={dropdown} alt="Dropdown" />
            </li>
          </ul>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="search-container">
        <div className="search-box">
          <img src={search} alt="Search Icon" />
          <input type="text" placeholder="Search" />
          <button className="search-btn">
            <img src={search2} alt="" />
          </button>
        </div>
      </div>

      {/* Currency Section */}
      <div className="currency-change">
        <img src={flag} alt="Flag" />
        <p>EN/Currency</p>
        <img src={dropdown} alt="Dropdown" />
      </div>

      {/* Cart Section */}
      <div className="cart-container">
        <img src={bag} alt="Shopping Bag" className="bag-image" />
        <img
          src={notification}
          alt="Notification Badge"
          className="notification-number"
        />
      </div>
    </div>
  );
};

export default Navbar;
