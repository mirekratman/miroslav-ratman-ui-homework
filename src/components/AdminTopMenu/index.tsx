import React from "react";

const AdminTopMenu = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 border-b	border-b-slate-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
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
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
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
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search Apps"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div>
            </form>
            <img
              className="w-10 h-10 rounded-full"
              src="/assets/user/avatar.svg"
              alt="Jan Novak"
            />
          </div>
        </div>
      </nav>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div
            id="mega-menu-full"
            className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#"
                  className="block text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Flows
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Components
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Data Apps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Storage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Transformations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-gray-900 md:hover:text-blue-700 md:p-0"
                >
                  Workspaces
                </a>
              </li>
              <li>
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
    </>
  );
};

export default AdminTopMenu;
