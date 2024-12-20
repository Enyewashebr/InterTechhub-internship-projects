// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./HomePage"; // Your homepage component
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App
