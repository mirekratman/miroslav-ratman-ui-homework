import React, { useState, createContext, useContext } from "react";
import { ProviderProps } from "@keboola/shared/Types/ProviderProps";

export interface ErrorProvidersProps extends ProviderProps {
  errorContent?: React.ReactNode;
}

const ErrorContext = createContext({});

const ErrorProvider = ({
  children,
  errorContent = <></>,
}: ErrorProvidersProps) => {
  const [isError, setIsError] = useState(false);
  const logError = (error: string) => {
    setIsError(true);
    // Extra error loging logic can be added here
    console.error(error);
  };
  const logWarning = (warning: string) => {
    // Extra warning loging logic can be added here
    console.error(warning);
  };

  const ctx = {
    isError,
    setIsError,
    logError,
    logWarning,
  };

  return (
    <ErrorContext.Provider value={ctx}>
      {isError && errorContent}
      {children}
    </ErrorContext.Provider>
  );
};

const useErrorContext = () => useContext(ErrorContext);

export { ErrorContext, useErrorContext, ErrorProvider };
