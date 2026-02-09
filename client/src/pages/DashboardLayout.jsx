import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <nav>dashboard</nav>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
