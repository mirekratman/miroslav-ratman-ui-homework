import "./admin.scss";

import React, { useState } from "react";
import MenuAdminTop from "@keboola/components/Menu/Admin/MenuAdminTop";
import MenuAdminBottom from "@keboola/components/Menu/Admin/MenuAdminBotton";
import Dashboard from "@keboola/admin/Dashboard";
import DataApps from "@keboola/admin/DataApps";
import DataAppsDetails from "@keboola/admin/DataApps/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppsStorageProvider } from "@keboola/shared/index";

const Admin = () => {
  const [searchTerm, SetSearchTerm] = useState("");
  return (
    <Router>
      <div className="Admin inset-0 min-h-screen flex flex-col">
        <MenuAdminTop SetSearchTerm={SetSearchTerm} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>

        <AppsStorageProvider searchTerm={searchTerm}>
          <Routes>
            {/* TODO - hook.js:332 No routes matched location "/apps" - browser message */}
            <Route path="/apps" element={<DataApps />} />
            {/* TODO - fix No routes matched location "/apps/kds-team.ex-2performant" in browser  */}
            <Route path="/apps/:id" element={<DataAppsDetails />} />
          </Routes>
        </AppsStorageProvider>

        <MenuAdminBottom />
      </div>
    </Router>
  );
};

export default Admin;
