import React from "react";
import Home from "./Home";
import Projects from "./components/Projects";
import Navbar from "./components/NavBar"
import Register from "./components/Register"
import {Routes, Route, } from "react-router-dom"
import Login from "./components/login";

  
function App() {
  return (
    <div>

      <Navbar />

      <Routes>

        <Route path="/home" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/projects" element={<Projects />} />

      </Routes>

    </div>
  );
}
  
  export default App;
  

