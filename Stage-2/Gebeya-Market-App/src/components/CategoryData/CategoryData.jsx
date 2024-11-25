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
import { useState } from "react";
import triple_arrow from "../../assets/triple_arrow.png";
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";




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

const CategoryData = () => {
  const [activeCategory, setActiveCategory] = useState("Women");

  return (
    <div className="category-data flex flex-col">
      <div className="catagories flex justify-between">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`category-button ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="content">
        {categories[activeCategory].map((item, index) => (
          <div key={index} className="item-container">
            <div key={index} className="item-card">
              <div className="img-item">
                <img src={item.img} alt={item.name} />
              </div>
              <div key={index} className="item-description">
                <h4>{item.name}</h4>
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
      {/* {Browse by category} */}
      <div className="product-category flex relative justify-between mt-[50px] p-[20px] top-[3163px]">
        <h2 className="latest w-388  left-80 font-poppins text-2xl font-semibold font-normal antialiased tracking-wider leading-60">
          Browse by category
        </h2>
        <div className="scroll-side flex gap-8 items-center  ">
          <img src={arrow1} alt="" className="w-8 h-8 cursor-pointer" />
          <img src={arrow2} alt="" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CategoryData;
