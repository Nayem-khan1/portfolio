import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Main from "./layout/Main";
import ProjectDetails from "./pages/ProjectDetails";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Main />}>
          <Route element={<Home />} path="/" />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
