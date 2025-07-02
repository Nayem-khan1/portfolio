import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import Main from "./layout/Main";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Projects from "./pages/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import StarsCanvas from "./components/StarsCanvas";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route element={<Home />} path="/" />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
