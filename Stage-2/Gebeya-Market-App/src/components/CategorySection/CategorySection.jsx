import React from "react";

const categories = [
  { name: "Shoes", image: "path_to_shoes_image" },
  { name: "Bags", image: "path_to_bags_image" },
  { name: "Jackets", image: "path_to_jackets_image" },
  { name: "Lingerie", image: "path_to_lingerie_image" },
  { name: "Belts", image: "path_to_belts_image" },
  { name: "Street wear", image: "path_to_streetwear_image" },
];

const CategorySection = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-16 mb-4"
            />
            <h3 className="text-lg font-bold">{category.name}</h3>
            <button className="text-purple-600 mt-2">
              See all collections
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
