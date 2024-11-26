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
// import black_tishert from "../../assets/black_tishert.png";
import yellow_dress from "../../assets/yellow_dress.png";
import nail_ink from "../../assets/nail_ink.png";

// import layout from "../../assets/layout.png";




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
    image: yellow_dress
  },
  {
    title: "Beauty products",
    description: "Over 24 categories in stock",
    image: nail_ink
  },
  {
    title: "Gym wears",
    description: "Over 62 categories in stock",
    image: packout
  },
];

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

      {/* Layout section */}
      {/* <div className="layout-container">
        <h1>hey</h1>
        <img
          src={layout}
          alt=""
          className="layout-img border-3 object-contain;"
        />
      </div> */}

      <div className="curated-summer-collection">
        <div className="text-content">
          <h1>Our Curated Summer Collection</h1>
          <p>
            Explore our curated summer collection featuring trending styles,
            vibrant colors, and lightweight fabrics perfect for long days and
            nights.
          </p>
          <button className="explore-button">Explore Now</button>
        </div>

        {/* Circles in the Middle */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute w-[22px] h-[22px] top-[352px] left-[430px] bg-[#882BEC7D] rounded-full"></div>
          <div className="absolute w-[22px] h-[22px] top-[38px] left-[599px] bg-[#FFD700] rounded-full"></div>
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
      <div className="product-category flex  justify-between mt-[50px] p-[20px] top-[630px] left-[3px]">
        <h2 className="latest w-388  left-80 font-poppins text-2xl font-semibold font-normal antialiased tracking-wider leading-60">
          Browse by category
        </h2>
        <div className="scroll-side flex gap-8 items-center  ">
          <img src={arrow1} alt="" className="w-8 h-8 cursor-pointer" />
          <img src={arrow2} alt="" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>

      <div className="category-container">
        {BrowseCategory.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="category-img" >
              <img
                src={category.image}
                alt={category.title}
                className="category-image"
              />
            </div>
            <div className="category-discription" >
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryData;
