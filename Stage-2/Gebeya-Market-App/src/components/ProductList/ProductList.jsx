// import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import bag2 from "../../assets/bag2.png";
import dress from "../../assets/dress.png";
import shoes from "../../assets/shoes.png";
import PropTypes from "prop-types";



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
    image:dress,
    name: "Alvero Gown",
    brand: "DIVINE",
    price: 300,
    rating: "5k+",
    category: "Women",
  },
];

const ProductList = () => {
  return (
    <div className="product-list ">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};


ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default ProductList;
