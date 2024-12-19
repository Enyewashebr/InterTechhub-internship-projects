
import "./ProductCard.css";
import PropTypes from "prop-types";


const ProductCard = ({ image, name, brand, price, rating, category }) => {

  


  return (
    <>
      <div className="product-card sm:!z-50 sm:!mr-[-5px]!overflow-hidden sm:relative sm:!w-[282px] sm:h-[350px] sm:left-[4px] sm:!Z-50 smoverflow-visible sm:!container sm:ml-0">
        <div className="product-card-upper sm:w-[266px] sm:!h-[177px] sm:gap-8">
          <div className="product-card-header sm:w-[266px] sm:!h-[160px] sm:rounded-[8px] sm:relative">
            <button className="flex favorite-btn sm:absolute sm:w-[24px] sm:h-[24px] sm:left-2 sm:top-2 justify-center items-center">
              ♡
            </button>
            {image && (
              <img
                src={image}
                alt={name || "Product Image"}
                className="product-image sm:!w-[90px] sm:!h-[110px] sm:absolute"
              />
            )}
            <span className="flex in-stock sm:absolute sm:!w-[70px] sm:!h-[26px] sm:left-[155px] sm:top-2 !items-center !justify-center">
              In Stock
            </span>
          </div>
          <div className="rate-category sm:w-[266px] sm:!h-[23px]">
            <span className="category !items-center !justify-center !text-center">
              {category || "Uncategorized"}
            </span>
            <span className="rate">⭐ {rating || "No"} rating</span>
          </div>
        </div>
        <div className="product-card-lower sm:relative">
          <div className="product-details sm:w-[128px] sm:h-[92px]">
            <h3 className="product-name sm:!w-[140px] sm:!h-[24px] sm:!text-[16px]">
              {name || "Unknown Product"}
            </h3>
            <p className="brand sm:!text-[12px]">{brand || "Unknown Brand"}</p>
            <span className="price sm:absolute sm:!w-[110px] sm:left-0 sm:!h-[24px] sm:!text-[16px] sm:bottom-8">
              ${price !== undefined ? price : "N/A"}
            </span>
          </div>
          <button className="flex add-to-cart-btn sm:absolute sm:!w-[155px] sm:!h-[37px] sm:left-[80px] sm:!text-center sm:!text-[14px] sm:bottom-5 justify-center items-center">
            Add to cart
          </button>
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
