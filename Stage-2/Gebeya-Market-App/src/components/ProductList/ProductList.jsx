import ProductCard from '../ProductCard/ProductCard';
import bag2 from "../../assets/bag2.png";
import dress from "../../assets/dress.png";
import shoes from "../../assets/shoes.png";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination} from "swiper/modules";
import "./ProductList.css";









const products = [
  {
    image: bag2, // Replace with actual URLs
    name: "French Kiss Bag",
    brand: "ALDO",
    price: 500,
    rating: "2k+",
    category: "Women",
    // Leftproduct: "50 units left",
    // message: "+ Shipping fee may vary on location",
    // availableSizes: [25, 26, 27, 28],
    // availableColors: ["Pink", "Blue"],
  },
  {
    image: shoes,
    name: "Burberry Shine",
    brand: "FENDI",
    price: 150,
    rating: "1k+",
    category: "Kids",
    // Leftproduct: "50 units left",
    // message: "+ Shipping fee may vary on location",
    // availableSizes: [25, 26, 27, 28],
    // availableColors: ["Pink", "Blue"],
  },
  {
    image: dress,
    name: "Alvero Gown",
    brand: "DIVINE",
    price: 300,
    rating: "5k+",
    category: "Women",
    // Leftproduct: "50 units left",
    // message: "+ Shipping fee may vary on location",
    // availableSizes: [25, 26, 27, 28],
    // availableColors: ["Pink", "Blue"],
  },
];
const ProductList = () => {
const [isMobile, setIsMobile] = useState(false);


useEffect(() => {

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 480); 
  };

  handleResize(); 
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize); 
  };
}, []);




return (
  <>
    <div className="product-list ">
      {isMobile ? (
        // Mobile: Swiper slider
        <Swiper
          slidesPerView={1.3} // Slightly showing the next slide
          spaceBetween={7}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination]}
          className="mySwiper  w-full z-50 overflow-y-hidden"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard
                {...product}
                
                
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            brand={product.brand}
            price={product.price}
            rating={product.rating}
            category={product.category}
          />
        ))
      )}
    </div>
  </>
);
};
export default ProductList;
