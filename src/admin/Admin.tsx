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
  const [searchAppsQuery, setSearchAppsQuery] = useState("");
  return (
    <Router>
      <div className="Admin inset-0">
        <MenuAdminTop setSearchAppsQuery={setSearchAppsQuery} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>

        <AppsStorageProvider limit={10} offset={0}>
          <Routes>
            <Route path="/apps" element={<DataApps />} />
            <Route path="/apps/:id" element={<DataAppsDetails />} />
          </Routes>
        </AppsStorageProvider>

        <MenuAdminBottom />
      </div>
    </Router>
  );
};

export default Admin;
