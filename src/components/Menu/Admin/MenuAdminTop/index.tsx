import React from "react";

import { Link } from "react-router-dom";

export interface MenuAdminTopProps {
  SetSearchTerm: (searchTerm: string) => void;
}

const MenuAdminTop = ({ SetSearchTerm }: MenuAdminTopProps) => {
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    SetSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div className="MenuAdminTop max-w-full fixed inset-x-0">
      <nav className="bg-white border-gray-200 border-b	border-b-slate-200">
        <div className="flex flex-wrap justify-between items-center mx-auto p-4">
          <a
            href="https://www.keboola.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/assets/logo/main.svg" className="h-8" alt="Keboola" />
          </a>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="Search items-center justify-between font-medium hidden md:w-fill focus:md:w-full md:flex md:order-1">
            <form className="max-w-md mx-auto">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img
                    className="w-5 h-5 rounded-full"
                    src="/assets/menu/search.svg"
                    alt="Jan Novak"
                  />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:w-100 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search Apps"
                  required
                  name="search"
                  onChange={onChangeSearch}
                />
              </div>
            </form>

            <img src="/assets/menu/trash.svg" className="w-9 h-9 md:order-2" />
            <img src="/assets/menu/gift.svg" className="w-9 h-9 md:order-3" />
            <img
              className="w-10 h-10 rounded-full md:order-4"
              src="/assets/user/avatar.svg"
              alt="Jan Novak"
            />
          </div>
        </div>
      </nav>
      <nav className="bg-white border-b border-b-slate-200">
        <div className="flex flex-wrap justify-between items-center mx-auto p-4">
          <div
            id="mega-menu-full"
            className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li className="flex items-center space-x-2">
                <img src="/assets/menu/dashboard.svg" className="w-5 h-5" />
                <Link
                  to="/"
                  className="text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Dashboard
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <img src="/assets/menu/flows.svg" className="w-5 h-5" />
                <a
                  href="#"
                  className="block text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Flows
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <img src="/assets/menu/components.svg" className="w-5 h-5" />
                <a
                  href="#"
                  className="block text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Components
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <img src="/assets/menu/apps.svg" className="w-5 h-5" />
                <Link
                  to="/apps"
                  className="block text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Data Apps
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <img src="/assets/menu/storage.svg" className="w-5 h-5" />
                <a
                  href="#"
                  className="block text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Storage
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <img
                  src="/assets/menu/transformations.svg"
                  className="w-5 h-5"
                />
                <a
                  href="#"
                  className="block text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Transformations
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <img src="/assets/menu/workspaces.svg" className="w-5 h-5" />
                <a
                  href="#"
                  className="block text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Workspaces
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <img src="/assets/menu/jobs.svg" className="w-5 h-5" />
                <a
                  href="#"
                  className="block text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Jobs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MenuAdminTop;
