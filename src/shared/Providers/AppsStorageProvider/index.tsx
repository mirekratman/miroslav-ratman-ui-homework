import React, { useState, createContext, useContext, useEffect } from "react";
import { useLoadingContext } from "@keboola/shared/Providers/LoadingProvider";
import { ProviderProps } from "@keboola/shared/Types/ProviderProps";

export interface AppsProps {
  id: number;
  vendor: {
    id: string;
    name: string;
    address: string;
    email: string;
    type: string;
  };
  version: number;
  name: string;
  type: string;
  shortDescription: string;
  londDescription: string;
  licenseUrl: string;
  documentationUrl: string;
  sourceCodeUrl: string;
  requiredMemory: string;
  processTimeout: string;
  features: Array<string>;
  encryption: boolean;
  network: string;
  defaultBucket: boolean;
  defaultBucketStage: string;
  forwardToken: boolean;
  forwardTokenDetails: boolean;
  injectEnvironment: boolean;
  complexity: string;
  category: string;
  categories: Array<string>;
  dataTypeSupport: string;
  allowedProcessorPosition: string;
  cpuShares: string;
  uiOptions: Array<string>;
  imageParameters: Object;
  stackParameters: Object;
  testConfiguration: null;
  configurationSchema: Object;
  configurationRowSchema: string;
  createConfigurationRowSchema: string;
  configurationDescription: string;
  configurationFormat: string;
  emptyConfiguration: string;
  emptyConfigurationRow: string;
  actions: Array<string>;
  fees: boolean;
  limits: string;
  logger: string;
  loggerConfiguration: string;
  stagingStorageInput: string;
  stagingStorageOutput: string;
  isDeprecated: boolean;
  expiredOn: string;
  replacementApp: string;
  isPublic: boolean;
  isPublished: boolean;
  publishedVersion: number;
  uri: string;
  repository: Object;
  publishingStatus: string;
  icon: {
    "32": string;
    "64": string;
    "128": string;
  };
  searchString: string;
}

export interface AppsStorageProps {
  [key: string]: AppsProps[];
}
export interface AppsStorageProvidersProps extends ProviderProps {
  limit: number;
  offset: number;
  searchTerm?: string;
}

export interface AppsStorageContextProps {
  appsStorage: any;
  setAppsStorage: any;
  queryLimit: number;
  setQueryLimit: any;
  queryOffset: number;
  setQueryOffset: any;
  fetchData: any;
  hasMoreData: boolean;
  search: any;
}

export interface AppsStorageProviderProps {
  children: React.ReactNode;
  numberOfItems?: number;
  searchTerm: string;
}

const AppsStorageContext = createContext<AppsStorageContextProps>({
  appsStorage: {},
  setAppsStorage: {},
  queryLimit: 0,
  setQueryLimit: {},
  queryOffset: 0,
  setQueryOffset: {},
  fetchData: {},
  hasMoreData: false,
  search: {},
});

const AppsStorageProvider = ({
  children,
  numberOfItems = 48,
  searchTerm = "",
}: AppsStorageProviderProps) => {
  const { setIsComponentLoading } = useLoadingContext();
  const [queryLimit, setQueryLimit] = useState(numberOfItems);
  const [queryOffset, setQueryOffset] = useState<number>(0);
  // TODO fix types
  // @ts-ignore:next-line
  const [data, setData] = useState<AppsStorageProps>([]);
  // @ts-ignore:next-line
  const [appsStorage, setAppsStorage] = useState<AppsStorageProps>([]);
  const [hasMoreData, setHasMoreData] = useState<boolean>(false);

  const fetchData = async () => {
    setIsComponentLoading(true);
    setQueryOffset(queryOffset + queryLimit);
    try {
      const response = await fetch(
        `${process.env.KEBOOLA_API_URL}/apps?offset=${queryOffset}&limit=${queryLimit}`
      );
      const result = await response.json();

      // INFO - Place for optimization
      const convertedData: AppsStorageProps = result.reduce(
        (acc: AppsStorageProps, item: any) => {
          acc[item.id] = item;
          // INFO - Add search string for future searching
          // @ts-ignore:next-line - verify searchString
          acc[item.id]["searchString"] = `${item.id} ${item?.vendor?.name} ${
            item?.vendor?.email
          } ${item.name} ${item.description} ${item.shortDescription} ${
            item.longDescription
          } ${item.categories.join(" ")} ${item.configurationDescription} ${
            item.uri
          }`.toLowerCase();
          return acc;
        },
        {}
      );

      const storageData = { ...appsStorage, ...convertedData };

      // INFO - Place for optimization
      // INFO - Set main data store
      setData(storageData);

      // INFO - Place for optimization
      // INFO - Set data for rendering
      setAppsStorage(storageData);

      // INFO - Check if there is more data for infinity scroll
      setHasMoreData(Boolean(Object.keys(result).length));

      setIsComponentLoading(false);
    } catch (error) {
      setIsComponentLoading(false);
      console.error("Failed to fetch data:", error);
    }
  };

  // INFO Search functionality
  const search = async (searchTerm: string, data: AppsStorageProps) => {
    console.log(data);
    const filtered = Object.entries(data).filter(([, item]) =>
      // TODO fix types
      // @ts-ignore:next-line
      item.searchString.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const result = Object.fromEntries(filtered);
    setAppsStorage(result);
  };

  useEffect(() => {
    searchTerm === "" ? fetchData() : search(searchTerm, data);
  }, [numberOfItems, searchTerm]);

  const ctx: AppsStorageContextProps = {
    appsStorage,
    setAppsStorage,
    queryLimit,
    setQueryLimit,
    queryOffset,
    setQueryOffset,
    fetchData,
    hasMoreData,
    search,
  };

  return (
    <AppsStorageContext.Provider value={ctx}>
      {children}
    </AppsStorageContext.Provider>
  );
};

const useAppsStorageContext = () => useContext(AppsStorageContext);

export { AppsStorageContext, useAppsStorageContext, AppsStorageProvider };
