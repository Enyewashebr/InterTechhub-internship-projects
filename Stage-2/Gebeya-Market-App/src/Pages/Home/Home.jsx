// import { useState } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import "./Home.css"
import home_img1 from "../../assets/home_img1.png"
import home_img2 from "../../assets/home_img2.png"
import home_img3 from "../../assets/home_img3.png"

import Footer from "../../components/Footer/Footer"

// import ProductList from "../../components/ProductList/ProductList"
import ProductList from '../../components/ProductList/ProductList'
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";
import CategoryData from '../../components/CategoryData/CategoryData'


const Home = () => {
  

  return (
    <>
      <Navbar />
      <div className="home-container w-full h-[769px] mt-[90px]  bg-[#882BEC] flex gap-10 justify-between p-[10px]  justify-center Z-0 overflow-x-hidden sm:w-full sm:h-[373px] sm:top-[0px] sm:relative  sm:gap-0">
        <div className="left-div  block  justify-center items-center p-[15px] flex-1  ml-[60px] mt-[50px] ml-[90px] sm:align-left sm:ml-[0px] sm:h-[68px] ">
          <h1 className=" w-[497px] h-[175px] top-[193px] left-[80px] font-alfa-slab text-[128px]  leading-[175.23px] text-white text-bold font-Anton-Regular mb-[30px] mt-[50px] ml-[30px] sm:hidden">
            Gebeya
          </h1>
          <h1 className=" w-[125px]  top-[0px] left-[0px] font-alfa-slab text-[32px]   text-white text-bold font-400  lg:hidden  ">
            TIMBU
          </h1>
          <img
            src={home_img2}
            alt=""
            className="w-[260px] h-[260px] top-[448px] left-[188px] rounded-full  ml-[120px] mt-[100px] right-0 sm:hidden"
          />
        </div>
        <div className="middle-div  block justify-center   mt-[50px] items-center p-[15px] sm:h-[103px] sm:ml-[0px]">
          <img
            src={home_img1}
            alt=""
            className=" h-[300px] justify-center  rounded-full  mt-[0px] sm:w-full sm:h-[90px] sm:top-[0px]px] sm:rounded-full sm:mt-[-10px]"
          />
          <p className=" w-[435px] h-[128px]   font-Poppins text-[20px] text-white font-normal leading-[32px] pt-[10px] pl-[30px] pr-[30px] mb-[40px] lg:hidden sm:w-[330px] sm:h-[84px] SM:left-[300px]0px]0px]   sm:ml-[-170px] sm:mt-[50px] sm:font-400 sm:align-center sm:text-[12px] sm:mr-[100px] sm:absolute sm:leading-[18px] sm:justify-center sm:items-center">
            Discover a world of convenience with our user-friendly platform,
            curaated collections, and exceptional customer service
          </p>
          <button className="w-[366px] h-[66px] relative top-[40 px] pt-[10px] gap-[10px] rounded-[8px] rounded-[8px] font-poppins font-600 text-24  bg-[#FEA301] top-[170px] font-poppins font-500 text-24 sm:w-[382px] sm:absolute sm:top-[300px] sm:h-[44px] sm:text-[12px] sm:rounded-[8px] sm:text-[16px] sm:font-500 sm:leading-[24px] sm:ml-[-158px] sm:mt-[20px] sm:cursor-pointer">
            Explore Now
          </button>
        </div>
        <div className="right-div  block   justify-center items-center mt-[50px] mr-[60px] pt-[70px]  relative sm:h-[68px] sm:w-[98px] sm:top-[100px]">
          <p className=" w-[435px] h-[128px]   font-Poppins text-[20px] text-white font-normal leading-[32px] pt-[10px] pl-[30px] pr-[30px] mb-[40px] sm:hidden">
            Discover a world of convenience with our user-friendly platform,
            curaated collections, and exceptional customer service
          </p>
          <h1 className="w-[390px]  h-[175px] top-[366px] left-[1007px] font-alfa-slab text-[128px] text-white font-Anton-Regular leading-[175.23px]  mt-[30px] pl-[30px]  sm:w-[98px] sm:h-[44px]  sm:text-[32px]   text-white text-bold font-400 sm:top-[-93px] sm:pl-[0px] sm:absolute sm:left-[0px]">
            SHOP
          </h1>
          <img
            src={home_img3}
            alt=""
            className="w-[223px] h-[223px] top-[572px] left-[1057px] rounded-full ml-[50px] m-[50px] sm:hidden"
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
