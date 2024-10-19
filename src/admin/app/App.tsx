import "./App.scss";

import React from "react";
import AdminTopMenu from "@keboola/components/AdminTopMenu";
import AdminBottomMenu from "@keboola/components/AdminBottomMenu";

const App = () => {
  return (
    <div className="fixed bg-slate-200 inset-0">
      <AdminTopMenu />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          Hello, React with Rspack!
        </h1>
      </div>
      <AdminBottomMenu />
    </div>
  );
};

export default App;
