// import React from "react";

const CartPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <header className="mb-6">
        <nav className="text-sm text-gray-600">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          &gt;{" "}
          <a href="/kids" className="hover:underline">
            Kids
          </a>{" "}
          &gt;{" "}
          <a href="/shoes" className="hover:underline">
            Shoes
          </a>{" "}
          &gt; <span className="font-bold">Sneakers</span>
        </nav>
      </header>

      {/* Main Content */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Product Images */}
        <div className="col-span-1">
          <img
            src="path-to-main-image.jpg"
            alt="Product"
            className="w-full h-auto rounded-md mb-4"
          />
          <div className="flex space-x-2">
            <img
              src="path-to-thumbnail-1.jpg"
              alt="Thumbnail 1"
              className="w-16 h-16 object-cover rounded-md"
            />
            <img
              src="path-to-thumbnail-2.jpg"
              alt="Thumbnail 2"
              className="w-16 h-16 object-cover rounded-md"
            />
            <img
              src="path-to-thumbnail-3.jpg"
              alt="Thumbnail 3"
              className="w-16 h-16 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Middle Section: Product Info */}
        <div className="col-span-1 lg:col-span-2">
          <h1 className="text-3xl font-bold mb-2">Burberry Shine</h1>
          <p className="text-gray-600 mb-4">Brand: Fendi</p>
          <p className="text-2xl text-green-500">
            $150 <span className="line-through text-gray-400">$200</span>
          </p>
          <p className="text-sm text-gray-500 mb-6">
            + $10 shipping fee may apply
          </p>

          {/* Quantity & Size Selector */}
          <div className="flex items-center mb-6 space-x-4">
            <div>
              <label htmlFor="quantity" className="block text-gray-700">
                Quantity:
              </label>
              <div className="flex space-x-2 mt-2">
                <button className="px-4 py-2 bg-gray-200 rounded">-</button>
                <input
                  type="number"
                  id="quantity"
                  value="1"
                  className="w-12 text-center border rounded"
                />
                <button className="px-4 py-2 bg-gray-200 rounded">+</button>
              </div>
            </div>
            <div>
              <label htmlFor="size" className="block text-gray-700">
                Size:
              </label>
              <select
                id="size"
                className="block w-full mt-2 border px-4 py-2 rounded"
              >
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="32">32</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4 mb-6">
            <button className="px-6 py-2 bg-gray-200 rounded">
              Save for later
            </button>
            <button className="px-6 py-2 bg-yellow-500 text-white rounded">
              Buy now
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Pickup & Pay on collection available
          </p>
        </div>

        {/* Right Section: Delivery & Returns */}
        <div className="bg-white p-6 rounded shadow col-span-1">
          <h2 className="text-lg font-bold mb-4">Delivery & Returns</h2>
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700">
              Location
            </label>
            <select
              id="location"
              className="block w-full mt-2 border px-4 py-2 rounded"
            >
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
            </select>
          </div>
          <div>
            <h3 className="text-sm font-bold">Delivery</h3>
            <p className="text-sm text-gray-600">
              Standard delivery within 3-5 business days. Free for orders over
              $100. <br />
              Express delivery available.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-bold">Return Policy</h3>
            <p className="text-sm text-gray-600">
              7-day return policy for defective or damaged items.
            </p>
          </div>
        </div>
      </div>

      {/* Similar Items */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Similar items you may like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <img
              src="path-to-similar-item-1.jpg"
              alt="Similar Item 1"
              className="w-full rounded"
            />
            <p className="text-center mt-2 font-bold">Buttin Blue</p>
            <p className="text-center text-gray-500">$120</p>
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded w-full">
              Add to cart
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img
              src="path-to-similar-item-2.jpg"
              alt="Similar Item 2"
              className="w-full rounded"
            />
            <p className="text-center mt-2 font-bold">Pink Cherry</p>
            <p className="text-center text-gray-500">$180</p>
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded w-full">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
