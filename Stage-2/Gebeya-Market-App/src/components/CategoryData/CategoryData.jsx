// import React from 'react'
import "./CategoryData.css";
import bag3 from "../../assets/bag3.png";
import dark_dress from "../../assets/dark_dress.png";
import cosmotics from "../../assets/cosmotics.png";
import black_tishert from "../../assets/black_tishert.png";
import shoes2 from "../../assets/shoes2.png";
import packout from "../../assets/packout.png";
import belts from "../../assets/belts.png";
import lingerie from "../../assets/lingerie.png";
import eye_glass from "../../assets/eye_glass.png";
import hat from "../../assets/hat.png";
import streat_wear from "../../assets/streat_wear.png";
import slipper from "../../assets/slipper.png";
import sun_wear from "../../assets/sun-wear.png";
import wig from "../../assets/wig.png";
import shoes from "../../assets/shoes.png";
import { useState, useEffect } from "react";
import triple_arrow from "../../assets/triple_arrow.png";
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";
// import black_tishert from "../../assets/black_tishert.png";
import yellow_dress from "../../assets/yellow_dress.png";
import nail_ink from "../../assets/nail_ink.png";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "../ProductList/ProductList.css";



// import layout from "../../assets/layout.png";
// import { useNavigate } from "react-router-dom";



const categories = {
  Men: [
    { name: "Shoes", description: "See all collections", img: shoes },
    { name: "Belts", description: "See all collections", img: belts },
    { name: "Sunglasses", description: "See all collections", img: eye_glass },
    { name: "Hats", description: "See all collections", img: hat },
    {
      name: "Slippers",
      description: "See all collections",
      img: { slipper },
    },
    {
      name: "T-shirts",
      description: "See all collections",
      img: black_tishert,
    },
    { name: "Packout", description: "See all collections", img: packout },
  ],
  Women: [
    { name: "Shoes", description: "See all collections", img: shoes2 },
    { name: "Bags", description: "See all collections", img: bag3 },
    { name: "Jackets", description: "See all collections", img: dark_dress },
    {
      name: "Lingerie",
      description: "See all collections",
      img: lingerie,
    },
    { name: "Belts", description: "See all collections", img: belts },
    {
      name: "Street wear",
      description: "See all collections",
      img: streat_wear,
    },
    { name: "Sunglasses", description: "See all collections", img: eye_glass },
    { name: "Sun wear", description: "See all collections", img: sun_wear },
    { name: "Hats", description: "See all collections", img: hat },
    {
      name: "Slippers",
      description: "See all collections",
      img: slipper,
    },
    { name: "Wigs", description: "See all collections", img: wig },
    { name: "Cosmetics", description: "See all collections", img: cosmotics },
  ],
  Kids: [
    { name: "Hats", description: "See all collections", img: hat },
    {
      name: "Slippers",
      description: "See all collections",
      img: slipper,
    },
  ],
  Perfumes: [
    {
      name: "cosmetics",
      description: "See all collections",
      img: cosmotics,
    },
  ],
  Sport: [
    { name: "Gym wears", description: "See all collections", img: packout },
  ],
  Jewelry: [
    {
      name: "Cosmetics",
      description: "See all collections",
      img: cosmotics,
    },
  ],
};
const BrowseCategory = [
  {
    title: "Casual wear",
    description: "Over 20 categories in stock",
    image: black_tishert,
  },
  {
    title: "Vintage",
    description: "Over 31 categories in stock",
    image: yellow_dress,
  },
  {
    title: "Beauty products",
    description: "Over 24 categories in stock",
    image: nail_ink,
  },
  {
    title: "Gym wears",
    description: "Over 62 categories in stock",
    image: packout,
  },
  {
    title: "Casual wear",
    description: "Over 20 categories in stock",
    image: black_tishert,
  },
];

const CategoryData = () => {






  const [activeCategory, setActiveCategory] = useState("Women");
const [isDropdown, setIsDropdown] = useState(window.innerWidth < 480);


  // Function to handle screen resizing


   

   

  const handleResize = () => {
    setIsDropdown(window.innerWidth < 480);
  };

  // Add event listener for screen resize
  useEffect(() => {
    
    window.addEventListener("resize", handleResize);
    return () => {window.removeEventListener("resize", handleResize);
      
    }
  }, []);

  
  return (
    <div className="category-data flex flex-col w-full  sm:!w-full   ">
      <div className="catagories flex justify-between sm:!w-full sm:relative items-center sm:!overflow-y-hidden">
        {isDropdown ? (
          /** Render dropdown if screen width is below 480px */
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          >
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        ) : (
          Object.keys(categories).map((category) => (
            <button
              key={category}
              className={`category-button   ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))
        )}
      </div>

      {/* Content */}
      <div className="content sm:!grid sm:!w-full sm:!grid-cols-2 ">
        {categories[activeCategory].map((item, index) => (
          <div
            key={index}
            className=" flex item-container justify-center  sm:!w-[183px] sm:!h-[175px]"
          >
            <div
              key={index}
              className="item-card sm:mt-[-8px] sm:w-[107px] sm:!gap-[10px]"
            >
              <div className="img-item sm:!h-[74px]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="img sm:!w-[60px] sm:!h-[60px]"
                />
              </div>
              <div
                key={index}
                className="item-description  sm:!w-full sm:!gap-[2px]"
              >
                <h4 className="name sm:!w-[50px]sm:!h-24px] sm:!text-[12px]">
                  {item.name}
                </h4>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="see-more">
        <button>
          <p>See more</p> <img src={triple_arrow} alt="" />
        </button>
      </div>

      <div className="curated-summer-collection relative sm:w-full sm:!h-[270px]">
        <div className="text-content">
          <h1 className="titl sm:!w-[296px] sm:!h-[54px] sm:!text-[18px] sm:!tracking-[0.04em] sm:!leading-[27px]">
            Our Curated Summer Collection
          </h1>
          <p className="explore sm:!w-[351px] sm:!h-[84px] sm:!text-[14px] sm:!tracking-[0.04em] sm:!leading-[24px]">
            Explore our curated summer collection featuring trending styles,
            vibrant colors, and lightweight fabrics perfect for long days and
            nights.
          </p>
          <button className="explore-button sm:!w-[332px] sm:h-[44px] sm:!text-[16px]  sm:!leading-[24px]">
            Explore Now
          </button>
        </div>

        {/* Circles in the Middle */}
        <div className="absolute inset-0 flex justify-center items-center sm:absolute sm:hidden">
          <div className="absolute w-[22px] h-[22px] top-[352px] left-[430px] bg-[#882BEC7D] rounded-full sm:top-[54px] "></div>
          <div className="absolute w-[22px] h-[22px] top-[38px] left-[599px] bg-[#FFD700] rounded-full "></div>
          <div className="absolute w-[40px] h-[40px] top-[439px] left-[500px] bg-[#A35CF0] rounded-full"></div>
          <div className="absolute w-[40px] h-[40px] top-[144px] left-[689px] bg-[#A35CF0] rounded-full"></div>
          <div className="absolute w-[58px] h-[58px] top-[331px] left-[680px] bg-[#FFD700] rounded-full"></div>
          <div className="absolute w-[22px] h-[22px] top-[457px] left-[605px] bg-[#882BEC7D] rounded-full"></div>
          <div className="absolute w-[40px] h-[40px] top-[100px] left-[896px] bg-[#A35CF0] rounded-full"></div>
          <div className="absolute w-[40px] h-[40px] top-[251px] left-[776px] bg-[#CAD3B8] rounded-full"></div>
          <div className="absolute w-[40px] h-[40px] top-[40px] left-[796px] bg-[#CAD3B8] rounded-full"></div>
        </div>
      </div>

      {/* {Browse by category} */}
      <div className="product-category flex  justify-between mt-[50px] p-[20px] top-[630px] left-[0px] ">
        <h2 className="latest w-388  left-80 font-poppins text-2xl font-semibold  antialiased tracking-wider leading-60">
          Browse by category
        </h2>
        <div className="scroll-side flex gap-8 items-center  sm:hidden">
          <img src={arrow1} alt="" className="w-8 h-8 cursor-pointer" />
          <img src={arrow2} alt="" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>

      <div className=" sm:!grid sm:!grid-cols-2 category-container sm:!w-full justify-between items-center w-full    sm:!overflow-x-hidden sm:!mx-auto sm:object-cover">
        {BrowseCategory.map((category, index) => (
          <div
            className="category-card   sm:!w-[172px] sm:!h-[218px] sm:!gap-[16px]  sm:flex-col sm:items-center sm:justify-center sm:!text-center "
            key={index}
          >
            <div className="category-img sm:!w-[172px] sm:!h-[152px]">
              <img
                src={category.image}
                alt={category.title}
                className="category-image sm:!w-[122px] sm:!h-[104px] "
              />
            </div>
            <div className="sm:flex  sm:flex-col category-discription sm:!w-[162px] sm:!h-[50px] sm:!text-center sm:!items-center sm:!justify-center sm:!gap-0">
              <h3 className="category-title sm:!text-[14px] sm:!w-[162px]">
                {category.title}
              </h3>
              <p className="sm:flex category-description sm:!justify-center sm:items-center sm:!text-[12px] sm:!w-[162px]">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryData;
