import "./index.scss";

import React from "react";

const AdminBottomMenu = () => {
  return (
    <div className="AdminBottomMenu fixed bottom-0 inset-x-0 bg-black p-6 border-t border-gray-300 shadow-lg">
      <div className="flex flex-wrap justify-between items-top mx-auto max-w-screen-xl p-4">
        <ul className="space-y-2">
          <li>
            <h4 className="text-white">Product</h4>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-800">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-800">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-800">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-800">
              Contact
            </a>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <h4 className="text-white">Resources</h4>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-800">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-800">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-800">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-800">
              Documentation
            </a>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <h4 className="text-white">Legal</h4>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-800">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-800">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-800">
              Support
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminBottomMenu;
