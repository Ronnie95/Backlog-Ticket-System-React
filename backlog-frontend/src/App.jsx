import React from "react";
import Home from "./Home";
import Projects from "./components/Projects";
import Navbar from "./components/NavBar"
import Register from "./components/Register"
import {Routes, Route, } from "react-router-dom"
import Login from "./components/login";
import CreateProject from "./components/ProjectsCreate";
import ProjectDetail from "./components/projectsShow";

  
function App() {
  return (
    <div>

      <Navbar />

      <Routes>

        <Route path="/home" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/projects/new" element={<CreateProject />} />

        <Route path="/projects/:id" element={<ProjectDetail />} />

        
      </Routes>

    </div>
  );
}
  
  export default App;
  

