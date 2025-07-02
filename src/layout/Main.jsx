import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import StarsCanvas from "../components/StarsCanvas";

const Main = () => {
  return (
    <div className="relative z-10 bg-[#030014] overflow-hidden">
      <StarsCanvas />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
