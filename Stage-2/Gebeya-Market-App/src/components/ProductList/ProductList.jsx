import ProductCard from '../ProductCard/ProductCard';
import bag2 from "../../assets/bag2.png";
import dress from "../../assets/dress.png";
import shoes from "../../assets/shoes.png";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
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
  },
  {
    image: shoes,
    name: "Burberry Shine",
    brand: "FENDI",
    price: 150,
    rating: "1k+",
    category: "Kids",
  },
  {
    image: dress,
    name: "Alvero Gown",
    brand: "DIVINE",
    price: 300,
    rating: "5k+",
    category: "Women",
  },
];
const ProductList = () => {
const [isMobile, setIsMobile] = useState(false);

// Detect screen width on mount and resize
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 480); // Adjust breakpoint as needed
  };

  handleResize(); // Check on mount
  window.addEventListener("resize", handleResize); // Listen for changes

  return () => {
    window.removeEventListener("resize", handleResize); // Cleanup on unmount
  };
}, []);




return (
  <>
    <div className="product-list ">
      {isMobile ? (
        // Mobile: Swiper slider
        <Swiper
          slidesPerView={1.2} // Slightly showing the next slide
          spaceBetween={8}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination]}
          className="mySwiper  "
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard {...product} />
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
