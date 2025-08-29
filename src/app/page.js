// src/app/page.js
import React from "react";
import "./globals.css";

import FirstPage from "./components/FirstPage";
import Services from "./components/Services";
import Product from "./components/Product";
import Testimonials from "./components/Testimonials";
import BlogHeading from "./components/BlogHeading";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh", width: "100%" }}>
      <FirstPage />
      <Services />
      <Product />
      <Testimonials />
      <BlogHeading />
      <Blog />
      <Footer />
    </div>
  );
}
