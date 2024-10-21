import React, { useContext, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppsStorageContext } from "@keboola/shared/index";
import AppCard from "@keboola/components/Apps/AppCard";

const DataApps = () => {
  // TODO fix types

  const {
    // @ts-ignore:next-line
    appsStorage,
    // @ts-ignore:next-line
    fetchData,
    // @ts-ignore:next-line
    hasMoreData,
    // @ts-ignore:next-line
    setQueryOffset,
    // @ts-ignore:next-line
    queryLimit,
    // @ts-ignore:next-line
    queryOffset,
  } = useContext(AppsStorageContext);

  return (
    <div className="container mx-auto py-10 pt-40">
      <h2>Apps Listing</h2>
      <div className="max-w-6xl mx-auto p-4">
        <InfiniteScroll
          dataLength={Object.keys(appsStorage).length}
          next={fetchData}
          hasMore={hasMoreData} // Boolean to show if there is more data
          loader={<h4>Loading...</h4>} // Loader component
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You have seen it all</b>
            </p>
          }
        >
          <div className="flex flex-wrap mx-10">
            {Object.keys(appsStorage).length > 0
              ? Object.entries(appsStorage).map(([key, app]) => (
                  <AppCard key={key} app={app} />
                ))
              : // TOIDO fix types
                // @ts-ignore:next-line
                Array.from(new Array(5), (el) => <AppCard key={el} />)}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default DataApps;
