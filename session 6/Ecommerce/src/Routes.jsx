import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./Home";
import Product from "./Product";
import Navbar from "./Navbar";

export default function WebRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Example />}></Route>
        <Route path="/pro" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
