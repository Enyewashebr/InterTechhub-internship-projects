import { useState } from 'react';
import "./Navbar.css";

import logo from "/logo.png";
import profile from "../../assets/profile.png";
import dropdown from "../../assets/down-arrow.png";
import search from "../../assets/search.png";
import bag from "../../assets/bag.png";
import flag from "../../assets/uk-flag.png";
import search2 from '../../assets/search2.png'
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
//FaShoppingCart, FaSearch, FaTimes 



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // const toggleHover = () => {
  //   setHovered(!hovered);
  // }
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
      <div className="navbar ">
        <div className="navbar2 lg:hidden md:hiddden ">
          <div className="navbar-left">
            <FaBars className="menu-icon" onClick={toggleMenu} />

            <div className="logo">
              <img src={logo} alt="Logo " className="logo-img w-32px h-32px" />
            </div>
          </div>
          <div className="navbar-center">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search....."
            />
          </div>
          <div className="navbar-right">
            {/* <FaShoppingCart className="cart-icon" /> */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#222222" />
              <path
                d="M9 9.11334V8.46667C9 6.96667 10.2067 5.49334 11.7067 5.35334C13.4933 5.18001 15 6.58667 15 8.34001V9.26001"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.99988 18.6667H13.9999C16.6799 18.6667 17.1599 17.5933 17.2999 16.2867L17.7999 12.2867C17.9799 10.66 17.5132 9.33333 14.6666 9.33333H9.33322C6.48655 9.33333 6.01988 10.66 6.19988 12.2867L6.69988 16.2867C6.83988 17.5933 7.31988 18.6667 9.99988 18.6667Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.3302 12H14.3361"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.66317 12H9.66916"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={`sidebar-menu  ${menuOpen ? "open" : ""}`}>
            <div className="xlogo flex ">
              <div className="close ">
                <FaTimes
                  className="close-icon item-center align-center"
                  onClick={toggleMenu}
                />
              </div>
              <div className="lgo  ">
                <img src={logo} alt="Logo " className="logo-img  " />
              </div>
            </div>
            <div className="nav-list h-full gap-10 items-left flex flex-col ">
              <div className="rigister w-full  ">
                <h3 className="h-20">Register/Sign up &gt;</h3>
              </div>
              <div className="our-category absolute">
                <h3>Our Categories</h3>
                <ul>
                  <li>Men</li>
                  <li>Women</li>
                  <li>Kids</li>
                  <li>Accessories</li>
                  <li>More &gt;</li>
                </ul>
              </div>
              <hr className="w-full  absolute bg-red-500" height="3px" />
              <div className="nav-currency relative flex flex-row">
                <img
                  src={flag}
                  alt=""
                  className="flag-img w-20px h-20px rounded-full align-left"
                />
                <h3 className="cursor-pointer">EN/Currency &gt;</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-container flex space-between sm:hidden">
          {/* Logo Section */}
          <img src={logo} alt="Logo " className="logo-img" />

          {/* Register/Sign In Section */}

          {/* Category Links */}
          <div className="category ">
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

            <div
              className="more-categories"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="more-container">
                <h2 className="more">More</h2>
                <img
                  src={dropdown}
                  alt=""
                  className={`more-drop cursor-pointer ${
                    hovered ? "rotated" : ""
                  }`}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                />
              </div>
              {hovered && (
                <div
                  className="drop-lists"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {moreMenu.map(({ to, text }, index) => (
                    <a key={index} href={to} className="list">
                      {text} <hr />
                    </a>
                  ))}
                </div>
              )}
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
              <input
                type="text"
                placeholder="Search..."
                className="search-input lg:hidden md:hidden xl:hidden"
              />
              {/* <input
                type="text"
                placeholder="Search..."
                className="search-input lg:hidden md:hidden xl:hidden"
              /> */}
            </div>

            <button type="submit">
              <img src={search2} alt="" className="search-icon " />
            </button>
          </div>

          {/* Currency Section */}
          <div className="currency-change flex items-center gap-2 sm:hidden">
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
