import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./HomeScreens/Home";
import Dogs from "./Dogs/Dogs";
import Carts from "./Carts/Carts";
import Navbar from "./Navbar/navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="page-container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dogs" element={<Dogs/>}/>
            <Route path="/carts" element={<Carts/>}/>

          </Routes>

      </div>
    </Router>
  );
}

export default App;
