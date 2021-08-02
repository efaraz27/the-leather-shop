import React from "react";
import './App.css';
import NavbarMaterial from "./components/NavbarMaterial";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {

  return (
      <div className="App">
          <NavbarMaterial/>
          <Home/>
          <Products/>
      </div>


  );
}
export default App;
