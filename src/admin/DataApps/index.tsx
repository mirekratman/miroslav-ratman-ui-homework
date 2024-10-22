import React, { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  AppsStorageContext,
  AppsStorageContextProps,
} from "@keboola/shared/Providers/AppsStorageProvider";
import AppCard from "@keboola/components/Apps/AppCard";

const DataApps = () => {
  const { appsStorage, fetchData, hasMoreData }: AppsStorageContextProps =
    useContext(AppsStorageContext);

  return (
    <div className="container mx-auto py-10 pt-40">
      <h2>Apps Listing</h2>
      <div className="max-w-6xl mx-auto p-4">
        <InfiniteScroll
          dataLength={Object.keys(appsStorage).length}
          next={fetchData}
          hasMore={hasMoreData}
          // TODO add nicer loader
          loader={
            <div className="flex justify-center items-center">
              <svg
                version="1.1"
                id="L1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enableBackground="new 0 0 100 100"
                width="100"
                height="100"
              >
                <circle
                  fill="none"
                  stroke="#3498db"
                  strokeWidth="4"
                  strokeMiterlimit="10"
                  strokeDasharray="150,200"
                  cx="50"
                  cy="50"
                  r="30"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          }
        >
          <div className="flex flex-wrap mx-10">
            {Object.keys(appsStorage).length > 0
              ? Object.entries(appsStorage).map(([, app]) => (
                  // TODO verify types
                  // @ts-ignore:next-line
                  <AppCard key={app.id} app={app} />
                ))
              : Array.from(new Array(4), (el, index) => (
                  <AppCard key={index} />
                ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default DataApps;
