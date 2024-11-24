import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white p-4 mt-8">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Gebeya Market</div>
        <ul className="flex space-x-4">
          <li>About</li>
          <li>Contact</li>
          <li>Pricing</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
