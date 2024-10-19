import React, { useState, createContext, useContext } from "react";
import { ProviderProps } from "@keboola/shared/Types/ProviderProps";

export interface LoadingProvidersProps extends ProviderProps {
  loadingContent?: React.ReactNode;
}

const LoadingContext = createContext({});

const LoadingProvider = ({
  children,
  loadingContent = <></>,
}: LoadingProvidersProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const ctx = {
    isLoading,
    setIsLoading,
  };

  return (
    <LoadingContext.Provider value={ctx}>
      {isLoading && loadingContent}
      {children}
    </LoadingContext.Provider>
  );
};

const useLoadingContext = () => useContext(LoadingContext);

export { LoadingContext, useLoadingContext, LoadingProvider };
