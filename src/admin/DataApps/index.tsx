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
          loader={<h4>Loading...</h4>}
          // TODO add nicer message
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You have seen it all</b>
            </p>
          }
        >
          <div className="flex flex-wrap mx-10">
            {Object.keys(appsStorage).length > 0
              ? Object.entries(appsStorage).map(([key, app]) => (
                  // TODO verify types
                  // @ts-ignore:next-line
                  <AppCard key={key} app={app} />
                ))
              : Array.from(new Array(5), (el) => (
                  <AppCard key={el} app={undefined} />
                ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default DataApps;
