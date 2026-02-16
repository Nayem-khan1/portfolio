import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import StarsCanvas from "../components/StarsCanvas";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Main = () => {
  return (
    <div className="bg-[#030014]">
      <StarsCanvas />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Main;
