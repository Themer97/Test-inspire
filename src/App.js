import "./App.css";
import React from "react";
import Accueil from "./components/Accueil";
import Apropos from "./components/Apropos";
import Produits from "./components/Produits";
import Services from "./components/Services";
import Campaigns from "./components/Campaigns";
import Actualites from "./components/Actualites";
import Carriere from "./components/Carriere";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Accueil />
        <Apropos />
        <Produits />
        <Services />
        <Campaigns />
        <Actualites />
        <Carriere />
      </div>
    </div>
  );
}

export default App;
