// import React from "react";
import "./ProductCard.css";

// import bag2 from "../../assets/bag2.png";
// import ProductList from "../ProductList/ProductList";

const ProductCard = ({ image, name, brand, price, rating, category }) => {
  return (
    <>
      <div className="product-card ">
        <div className="product-card-upper">
          <div className="product-card-header">
            <button className="favorite-btn">♡</button>
            <img src={image} alt={name} className="product-image" />
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
