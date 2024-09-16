// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white mt-12">
      <div className="container mx-auto p-6 text-center text-gray-600">
        &copy; {new Date().getFullYear()} CryptoTracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
