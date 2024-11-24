import React from "react";

const products = [
  {
    id: 1,
    title: "French Kiss Bag",
    brand: "ALDO",
    price: "$500",
    rating: "2k+ rating",
    image: "path_to_bag_image",
  },
  {
    id: 2,
    title: "Burberry Shine",
    brand: "FENDI",
    price: "$150",
    rating: "1k+ rating",
    image: "path_to_shoes_image",
  },
  {
    id: 3,
    title: "Alvero Gown",
    brand: "DIVINE",
    price: "$300",
    rating: "5k+ rating",
    image: "path_to_dress_image",
  },
];

const ProductSection = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-6">Latest Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-32 mb-4"
            />
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-gray-600">{product.brand}</p>
            <p className="text-yellow-500">{product.rating}</p>
            <p className="text-xl font-bold">{product.price}</p>
            <button className="bg-yellow-500 text-white py-2 px-4 mt-4 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
