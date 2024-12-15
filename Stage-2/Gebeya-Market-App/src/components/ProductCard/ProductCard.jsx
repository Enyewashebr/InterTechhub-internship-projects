// import React from "react";
import "./ProductCard.css";
import PropTypes from "prop-types";
// import { useState } from "react";

// import ProductCard from "../ProductCard/ProductCard";
// import "./ProductList.css";

// import PropTypes from "prop-types";



  // const [currentSlide, setCurrentSlide] = useState(0);

const ProductCard = ({image, name, brand, price, rating, category  })=>{
  return (
    <>
      <div className="product-card  sm:relative sm:!w-[282px] sm:h-[296px]
      sm:left-[4px] sm:!Z-50" >
        <div className="product-card-upper sm:w-[266px] sm:h-[167px]  sm:gap-8">
          <div className="product-card-header sm:w-[266px] sm:h-[136px] sm:rounded-[8px]">
            <button className="favorite-btn  sm:absolute">♡</button>
            <img src={image} alt={name} className="product-image sm:w-[124px] sm:h-[141px sm:absolute" />
            <span className="in-stock">In Stock</span>
          </div>
          <div className="rate-category">
            <span className="category">{category}</span>
            <span className="rate">⭐ {rating} rating</span>
          </div>
        </div>
        <div className="product-card-lower">
          <div className="product-details">
            <h3 className="product-name">{name}</h3>
            <p className="brand">{brand}</p>
            <span className="price">${price}</span>
          </div>
          <button className="add-to-cart-btn">Add to cart</button>
        </div>
      </div>
      
    </>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
