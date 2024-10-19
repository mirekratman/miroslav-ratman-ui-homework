import React from "react";

const AdminTopMenu = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 bg-white p-6 border-t border-gray-300 shadow-lg">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Contact
            </a>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              FAQ
            </a>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Support
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Partners
            </a>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Documentation
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              API
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Community
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Contact Sales
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminTopMenu;
