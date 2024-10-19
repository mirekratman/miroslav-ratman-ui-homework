import React from "react";
import { ProviderProps } from "@keboola/shared/Types/ProviderProps";
import { ErrorProvider } from "@keboola/shared/Providers/ErrorProvider";
import { LoadingProvider } from "@keboola/shared/Providers/LoadingProvider";

const Providers = (props: ProviderProps) => {
  return (
    <ErrorProvider
      errorContent={
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 text-white flex items-center justify-center">
          We apologize for the mistake. Unexprected error happened. Please try
          again later.
        </div>
      }
    >
      <LoadingProvider
        loadingContent={
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 text-white flex items-center justify-center">
            Loading page...
          </div>
        }
      >
        {props?.children}
      </LoadingProvider>
    </ErrorProvider>
  );
};

export default Providers;
