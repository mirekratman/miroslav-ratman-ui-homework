// TODO fix types
import React, { useState, createContext, useContext, useEffect } from "react";
import { useLoadingContext } from "@keboola/shared/Providers/LoadingProvider";
import { ProviderProps } from "@keboola/shared/Types/ProviderProps";

export interface AppsStorageProvidersProps extends ProviderProps {
  limit: number;
  offset: number;
  searchAppsQuery?: string;
}

// TODO Extend data types
export interface AppsProps {
  id: number;
  name: string;
  description: string;
}

export interface AppsStorageProps {
  [key: string]: AppsProps[];
}

/*
TODO fix

interface AppsStorageContextType {
  appsStorage: AppsStorageProps;
  setAppsStorage: React.Dispatch<React.SetStateAction<AppsStorageProps>>;
  queryLimit: number;
  setQueryLimit: React.Dispatch<React.SetStateAction<number>>;
  queryOffset: number;
  setQueryOffset: React.Dispatch<React.SetStateAction<number>>;
}
const AppsStorageContext = createContext<AppsStorageContextType>({
  appsStorage: {},
  setAppsStorage: () => {},
  queryLimit: 0,
  setQueryLimit: () => {},
  queryOffset: 0,
  setQueryOffset: () => {},
});
*/
const AppsStorageContext = createContext(undefined);

const AppsStorageProvider = ({
  children,
  limit = 0,
  offset = 0,
  searchAppsQuery = "",
}: AppsStorageProvidersProps) => {
  const { setIsComponentLoading } = useLoadingContext();
  const [queryLimit, setQueryLimit] = useState(limit);
  const [queryOffset, setQueryOffset] = useState(offset);
  const [appsStorage, setAppsStorage] = useState({}); // Ensure correct type

  const fetchData = async () => {
    setIsComponentLoading(true);
    try {
      const response = await fetch(
        `${process.env.KEBOOLA_API_URL}/apps?offset=${queryOffset}&limit=${queryLimit}`
      );
      const data = await response.json();

      /*
      TODO add loading additional data
      setApiData(() => {
        return (appsStorage && { ...appsStorage, ...data }) || data;
      });
      */
      // TODO fix  this data - must be apiData
      setAppsStorage(
        // TODO fix types
        // @ts-ignore:next-line

        await data.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {})
      );
      setIsComponentLoading(false);
    } catch (error) {
      setIsComponentLoading(false);
      console.error("Failed to fetch data:", error);
    }
  };

  // TODO add filtering + types
  // TODO fix types
  // @ts-ignore:next-line

  const searchData = async (data) => {
    //setAppsStorage({ ...data[0] });
  };

  useEffect(() => {
    //!searchAppsQuery ? fetchData() : searchData(apiData);
    fetchData();
  }, [queryOffset, queryLimit]); // Fetch data when queryOffset or queryLimit changes

  const ctx = {
    appsStorage,
    setAppsStorage,
    queryLimit,
    setQueryLimit,
    queryOffset,
    setQueryOffset,
  };

  return (
    // TODO fix types
    // @ts-ignore:next-line

    <AppsStorageContext.Provider value={ctx}>
      {children}
    </AppsStorageContext.Provider>
  );
};

const useAppsStorageContext = () => useContext(AppsStorageContext);

export { AppsStorageContext, useAppsStorageContext, AppsStorageProvider };
