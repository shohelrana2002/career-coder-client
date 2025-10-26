import React from "react";
import NavBar from "../Pages/Shared/NavBar";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer";

const RootLayout = () => {
  return (
    <div className="container mx-auto">
      <NavBar />
      <div className="min-h-[calc(100vh-290px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
