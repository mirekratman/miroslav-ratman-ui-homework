import "./index.scss";

import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppsStorageContext } from "@keboola/shared/index";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const DataAppsDetails = () => {
  // TODO fix types
  // @ts-ignore:next-line
  const { appsStorage } = useContext(AppsStorageContext);
  const { id } = useParams();
  const app = appsStorage[id];

  return (
    <div className="container mx-auto py-10 pt-40">
      <h2>App details</h2>
      {app && (
        <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg p-6 my-8">
          <div className="flex items-start">
            <img
              src={app?.icon?.["64"]}
              alt={app.name}
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {app.name}
              </h2>
              <p className="text-sm text-gray-500">Version: {app.version}</p>
              <p className="text-sm text-gray-500">
                Vendor: {app.vendor?.name} ({app.vendor?.type})
              </p>
            </div>
          </div>
          <p className="mt-4 text-gray-700">{app.shortDescription}</p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">About this App</h3>
            <p className="text-gray-600">
              <ReactMarkdown
                children={app.longDescription}
                remarkPlugins={[remarkGfm]}
                className={"ReactMarkdown"}
              />
            </p>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold">Vendor Information</h3>
            <p className="text-gray-600">
              <strong>Name: </strong>
              {app.vendor?.name}
              <br />
              <strong>Email: </strong>
              {app.vendor?.email}
              <br />
              <strong>Address: </strong>
              {app.vendor?.address}
            </p>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold">Configuration</h3>
            {app.configurationSchema && (
              <ul className="list-disc pl-6 text-gray-600">
                {Object.keys(app.configurationSchema.properties).map((key) => {
                  const property = app.configurationSchema.properties[key];
                  return (
                    <li key={key}>
                      <strong>{property.title}</strong>: {property.description}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="mt-4 flex space-x-4">
            {app.documentationUrl && (
              <a
                href={app.documentationUrl}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            )}
            {app.sourceCodeUrl && (
              <a
                href={app.sourceCodeUrl}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            )}
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            {
              // TODO fix types
              // @ts-ignore:next-line
              app.categories?.map((category, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full mr-2"
                >
                  {category}
                </span>
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default DataAppsDetails;
