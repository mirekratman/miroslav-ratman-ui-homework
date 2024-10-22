import React from "react";

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto py-10 pt-40">
      <h2>Dashboard</h2>

      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-wrap mx-10">
          <Link to="/apps" className="w-1/4 p-4">
            Go to Apps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
