import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./HomeScreens/Home";
import Dogs from "./Dogs/Dogs";
import Carts from "./Carts/Carts";
import Navbar from "./Navbar/navbar";
import {CartContext} from "./Context/cartContext";




function App() {

  const [myCart, setAddtoCard] = useState([{}]);
  const [total,setTotal] = useState(0)
  return (
    <CartContext.Provider value={{myCart, setAddtoCard, total, setTotal}}>
    <Router>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/carts" element={<Carts />} />
        </Routes>
      </div>
    </Router>
    </CartContext.Provider>
  );
}

export default App;
