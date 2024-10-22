import { AppsProps } from "@keboola/shared/index";
import "./index.scss";

import React from "react";
import { Link } from "react-router-dom";
export interface AppCardProps {
  app?: AppsProps;
}

const AppCard = ({ app }: AppCardProps) => {
  const statusStyle =
    app && app?.publishingStatus === "public" ? "bg-green-500" : "bg-red-500";
  const loadingStyle = !app && "bg-gray-300 cursor-not-allowed opacity-50";
  return (
    <div
      className={`md:w-1/2 mt-10 p-4 bg-white shadow-lg rounded-lg border border-gray-200`}
    >
      <div className={!app ? `animate-pulse` : ""}>
        <div className="flex items-start">
          <img
            src={
              app?.icon[32]
                ? app?.icon[32]
                : app && "/assets/logo/default-icon.png"
            }
            alt={app?.name}
            className={`w-10 h-10 rounded-full ${loadingStyle}`}
          />
          <div className="ml-3">
            <h2
              className={`text-lg font-semibold text-gray-800 w-full max-w-full ${loadingStyle} ${
                !app && "flex h-6 mb-2 "
              }`}
            >
              {app?.name}
            </h2>
            <div className="flex items-center">
              <span
                className={`inline-block w-2 h-2 rounded-full mr-2 ${
                  app && statusStyle
                } ${loadingStyle} `}
              />
              <h3 className={`text-gray-500 w-fill text-sm ${loadingStyle}`}>
                {app && app?.publishingStatus}
              </h3>
            </div>
          </div>
        </div>

        <p className="h-12 mt-4 text-gray-600 text-sm">
          {app && app?.shortDescription}
          {!app && (
            <>
              <span
                className={`${loadingStyle} flex rounded h-3 mt-4 w-3/4`}
              ></span>
              <span
                className={`${loadingStyle} flex rounded h-3 mt-2 w-full`}
              ></span>
              <span
                className={`${loadingStyle} flex rounded h-3 mt-2 w-5/6`}
              ></span>
            </>
          )}
        </p>

        <div className=" mt-4 flex space-x-4 justify-end">
          <Link
            to={`/apps/${app?.id}`}
            className={`flex-1 px-4 py-2 min-h-10 text-white bg-blue-600 rounded-lg ${loadingStyle}`}
          >
            {app && "Show details"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
