import React, {useContext} from "react";
import './App.css';
import NavbarMaterial from "./components/NavbarMaterial";
import NavbarCzech from './components/czech/NavbarMaterial';
import Home from "./components/Home";
import HomeCzech from './components/czech/Home'
import Products from "./components/Products";
import ProductsCzech from './components/czech/Products'
import LanguageContext from "./contexts/LanguageContext";

function App() {

  const {language} = useContext(LanguageContext)
  if(language==='English'){
    return (
      <div className="App">
          <NavbarMaterial/>
          <Home/>
          <Products/>
      </div>
    );
  }
  else{
    return (
      <div className="App">
          <NavbarCzech/>
          <HomeCzech/>
          <ProductsCzech/>
      </div>
    );
  }
}
export default App;
