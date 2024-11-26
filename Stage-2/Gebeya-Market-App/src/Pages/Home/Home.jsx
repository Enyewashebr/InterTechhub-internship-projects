// import { useState } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import "./Home.css"
import home_img1 from "../../assets/home_img1.png"
import home_img2 from "../../assets/home_img2.png"
import home_img3 from "../../assets/home_img3.png"

import Footer from "../../components/Footer/Footer"

import ProductList from "../../components/ProductList/ProductList"
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";
import CategoryData from '../../components/CategoryData/CategoryData'


const Home = () => {
  

  return (
    <>
      <Navbar />
      <div className="home-container w-full h-[769px] mt-[90px]  bg-[#882BEC] flex gap-10 justify-between p-[10px]  justify-center Z-0 overflow-x-hidden ">
        <div className="left-div  block  justify-center items-center p-[15px] flex-1  ml-[60px] mt-[50px] ml-[90px]">
          <h1 className=" w-[497px] h-[175px] top-[193px] left-[80px] font-alfa-slab text-[128px]  leading-[175.23px] text-white text-bold font-Anton-Regular mb-[30px] mt-[50px] ml-[30px]">
            Gebeya
          </h1>
          <h1 className=" w-[125px] h-[44px] top-[150px] left-[24px] font-alfa-slab text-[128px]  leading-[175.23px] text-white text-bold font-400 mb-[30px] mt-[50px] ml-[30px] lg:hidden">
            TIMBU
          </h1>
          <img
            src={home_img2}
            alt=""
            className="w-[260px] h-[260px] top-[448px] left-[188px] rounded-full  ml-[120px] mt-[100px] right-0"
          />
        </div>
        <div className="middle-div  block justify-center   mt-[50px] items-center p-[15px]">
          <img
            src={home_img1}
            alt=""
            className=" h-[300px] justify-center  rounded-full  mt-[10px] "
          />
          <button className="w-[366px] h-[66px] relative top-[40 px] pt-[10px] gap-[10px] rounded-[8px] rounded-[8px]  bg-[#FEA301] top-[170px] font-poppins font-500 text-24 ">
            Explore Now
          </button>
        </div>
        <div className="right-div  block   justify-center items-center mt-[50px] mr-[60px] pt-[70px]  relative">
          <p className=" w-[435px] h-[128px]   font-Poppins text-[20px] text-white font-normal leading-[32px] pt-[10px] pl-[30px] pr-[30px] mb-[40px]">
            Discover a world of convenience with our user-friendly platform,
            curaated collections, and exceptional customer service
          </p>
          <h1 className="w-[390px]  h-[175px] top-[366px] left-[1007px] font-alfa-slab text-[128px] text-white font-Anton-Regular leading-[175.23px]  mt-[30px] pl-[30px]">
            SHOP
          </h1>
          <img
            src={home_img3}
            alt=""
            className="w-[223px] h-[223px] top-[572px] left-[1057px] rounded-full ml-[50px] m-[50px] "
          />
        </div>
      </div>
      <div className="product-category flex justify-between mt-[50px] p-[20px]">
        <h2 className="latest w-388  left-80 font-poppins text-2xl font-semibold font-normal antialiased tracking-wider leading-60">
          Latest Collections
        </h2>
        <div className="scroll-side flex gap-8 items-center  ">
          <img src={arrow1} alt="" className="w-8 h-8 cursor-pointer" />
          <img src={arrow2} alt="" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
      <ProductList />
      <CategoryData />
      {/* <CategorySection /> */}
      <Footer />
    </>
  );
}

export default Home
