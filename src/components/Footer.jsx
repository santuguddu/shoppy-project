import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#232F3E] text-white py-10 px-6">
      {/* Top Section */}
      <div className="text-center pb-5 border-b border-gray-500">
        <p className="text-lg font-semibold">Back to Top</p>
      </div>

      {/* Middle Section - Links */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 py-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Get to Know Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>ShoppyGlobe Science</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Make Money with Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Sell on ShoppyGlobe</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Fulfillment Services</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Help Center</li>
            <li>Returns & Refunds</li>
            <li>Shipping Info</li>
            <li>Track Orders</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-500 pt-4">
        &copy; {new Date().getFullYear()} ShoppyGlobe. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
