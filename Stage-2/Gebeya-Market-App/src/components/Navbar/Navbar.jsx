// import React from 'react';
import "./Navbar.css";

import logo from "/logo.png";
import profile from "../../assets/profile.png";
import dropdown from "../../assets/down-arrow.png";
import search from "../../assets/search.png";
import bag from "../../assets/bag.png";
import flag from "../../assets/uk-flag.png";
// import notification from "../../assets/notfication.png";
import search2 from '../../assets/search2.png'
const Navbar = () => {
  const moreMenu = [
    {to: "/perfumes", text: "Perfumes"},
    {to: "/Jewelries", text: "Jewelries"},
    {to: "/Gym wears", text: "Gym wears"},
    {to: "/Ventage wear", text: "Ventage wear"},
    {to: "/Sport wear", text: "Sport wears"},
    {to: "/Pyjamas", text: "Pyjamas"},
    {to: "/Slippers", text: " Slippers"},
    
  ]
  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <img src={logo} alt="Logo" className="logo-img" />

          {/* Register/Sign In Section */}

          {/* Category Links */}
          <div className="category">
            <div className="profile-container">
              <div className="profile">
                <img src={profile} alt="Profile" className="profile-img" />
                <h2
                  className="Register-SignIn
            border-b border-gray-300 text-10 font-poppins"
                >
                  Register/Sign In
                </h2>
                <img src={dropdown} alt="Dropdown" className="register-drop" />
              </div>
              <div className="register-signin">
                <h2 className="register">Register</h2>
                <h3>
                  <hr />
                </h3>
                <h2 className="signin">Sign In</h2>
              </div>
            </div>

            <div className="home w-[49px] h-[24px] font-poppins text-[16px] font-[700] leading-[24px] text-[#1E1E1E] cursor-pointer">
              Home
            </div>
            <div className="men w-[34px] h-[24px] font-poppins text-[16px] font-[400] leading-[24px] text-[#1E1E1E] cursor-pointer">
              Men
            </div>
            <div className="women w-[63px] h-[24px] font-poppins text-[16px] font-[400] leading-[24px] text-[#1E1E1E] cursor-pointer">
              Women
            </div>
            <div className="kids w-[33px] h-[24px] font-poppins text-[16px] font-[400] leading-[24px] text-[#1E1E1E] cursor-pointer">
              Kids
            </div>
            <div className="accessories w-[96px] h-[24px] font-poppins text-[16px] font-[400] leading-[24px] text-[#1E1E1E] cursor-pointer">
              Accessories
            </div>

            <div className="more-categories">
              <div className="more-container">
                <h2 className="more">More</h2>
                <img src={dropdown} alt="" className="more-drop" />
              </div>
              <div className="drop-lists">
                {moreMenu.map(({ to, text }, index) => (
                  <a key={index} href={to} className="list">
                    {text} <hr />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Search Bar Section */}

          <div className="search-box">
            <div className="input-container">
              <img src={search} alt="" className="search-img" />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
            </div>

            <button type="submit">
              <img src={search2} alt="" className="search-icon" />
            </button>
          </div>

          {/* Currency Section */}
          <div className="currency-change flex items-center gap-2">
            <img src={flag} alt="" className="flag-img" />
            <h2>EN/Currency</h2>
            <img src={dropdown} alt="Dropdown" className="currency-drop " />
          </div>

          {/* Cart Section */}
          <div className="cart-container flex items-center">
            <img src={bag} alt="Shopping Bag" className="bag-img" />
            <h2>2</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
