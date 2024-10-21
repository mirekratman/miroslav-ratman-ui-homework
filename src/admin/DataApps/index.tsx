import React, { useContext } from "react";

import { AppsStorageContext } from "@keboola/shared/index";
import AppCard from "@keboola/components/Apps/AppCard";

const DataApps = () => {
  // TODO fix types
  // @ts-ignore:next-line
  const { appsStorage } = useContext(AppsStorageContext);

  return (
    <div className="container mx-auto py-10 pt-40">
      <h2>Apps Listing</h2>

      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-wrap mx-10">
          {Object.keys(appsStorage).length > 0
            ? Object.entries(appsStorage).map(([key, app]) => (
                <AppCard key={key} app={app} />
              ))
            : // TOIDO fix types
              // @ts-ignore:next-line
              Array.from(new Array(5), (el) => <AppCard key={el} />)}
        </div>
      </div>
    </div>
  );
};

export default DataApps;
