import React from "react";
import TextNavbar from "../Navbar";
import Sidebar from "./Sidebar";
import {Route, Routes } from "react-router-dom";
import DashboardMainPage from "./DashboardMainPage/DashboardMainPage";
import UserProfile from "./UserProfile/UserProfile";
import UserPortfolioForm from "./UserProfile/UserForms/UserPortfolioForm";
import MyResume from "../../ResumeBuilder/MyResume";

function UserDashboard() {
  return (
    <div className="h-screen flex flex-col">
      <TextNavbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <Routes>
          <Route path='/' element={ <DashboardMainPage />} />
          <Route path="user-profile" element={<UserProfile/>}/>
          <Route path="addPortfolio" element={<UserPortfolioForm/>}/>
          <Route path="myResume" element = {<MyResume/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
