import React from "react";

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto py-10 pt-40">
      <h2>Dashboard</h2>

      <div className="py-4">
        <Link
          to="/apps"
          className={`px-4 py-2 min-h-10 text-white bg-blue-600 rounded-lg`}
        >
          Go to Apps
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
