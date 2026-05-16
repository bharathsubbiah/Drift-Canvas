import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./Pages/Home";
import Audi from "./Pages/Audi";
import Bmw from "./Pages/Bmw";
import Lamborghini from "./Pages/Lamborghini";
import Gtr from "./Pages/Gtr";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/audi" element={<Audi />} />

        <Route path="/bmw" element={<Bmw />} />

        <Route
          path="/lamborghini"
          element={<Lamborghini />}
        />

        <Route path="/gtr" element={<Gtr />} />


        <Route path="/contact" element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />





      </Routes>
    </BrowserRouter>
  );
}

export default App;