import React, { useState, createContext, useContext } from "react";
import { ProviderProps } from "@keboola/shared/Types/ProviderProps";

export interface LoadingProvidersProps extends ProviderProps {
  loadingContent?: React.ReactNode;
}

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isComponentLoading: boolean;
  setIsComponentLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: () => {},
  isComponentLoading: false,
  setIsComponentLoading: () => {},
});

const LoadingProvider = ({
  children,
  loadingContent = <></>,
}: LoadingProvidersProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isComponentLoading, setIsComponentLoading] = useState(false);
  const ctx: LoadingContextType = {
    isLoading,
    setIsLoading,
    isComponentLoading,
    setIsComponentLoading,
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
