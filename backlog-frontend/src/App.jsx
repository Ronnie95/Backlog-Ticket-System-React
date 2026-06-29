import React from "react";
import Home from "./Home";
import Navbar from "./components/NavBar"
import Register from "./components/Register"
import {Routes, Route, } from "react-router-dom"

  
  function App() {
    return (


  <div>
      <Navbar/>
      <Home />
    <Routes>
      <Route path='/register'>
        <Route path='' element={<Register />} />
      </Route>
    </Routes>

    </div>
     
    );
  }
  
  export default App;
  

