import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function App() {
  let [language, setLanguage] = useState("hi");
  let [search, setSearch] = useState("");

  let changeLanguage = (data) => {
    setLanguage(data);
  };

  let changeSearch = (data) => {
    setSearch(data);
  };

  return (
    <BrowserRouter>
      <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch} />
      <Routes>
        <Route
          path=""
          element={<Home language={language} q={search ? search : "All"} />}
        />
        <Route
          path="/All"
          element={<Home language={language} q={search ? search : "All"} />}
        />
        <Route
          path="/Latestnews"
          element={
            <Home language={language} q={search ? search : "Latest News"} />
          }
        />
        <Route
          path="/India"
          element={<Home language={language} q={search ? search : "India"} />}
        />
        <Route
          path="/World"
          element={<Home language={language} q={search ? search : "World"} />}
        />
        <Route
          path="/Stock"
          element={<Home language={language} q={search ? search : "Stock"} />}
        />
        <Route
          path="/Sports"
          element={<Home language={language} q={search ? search : "Sports"} />}
        />
        <Route
          path="/Science"
          element={<Home language={language} q={search ? search : "Science"} />}
        />
        <Route
          path="/Entertainment"
          element={
            <Home language={language} q={search ? search : "Entertainment"} />
          }
        />
        <Route
          path="/Education"
          element={
            <Home language={language} q={search ? search : "Education"} />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
