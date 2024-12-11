import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CompanyProfile from "./CompanyProfile/CompanyProfile";

function CompanyDashboard() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar */}
        <Sidebar />
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <CompanyProfile />
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
