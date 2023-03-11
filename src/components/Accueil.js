import React, { useState } from "react";
import Groupe7 from "../assets/Groupe7.png";
import Tracé1 from "../assets/Groupe8.png";
import Tracé2 from "../assets/Tracé116.png";
import Tracé3 from "../assets/Tracé122.png";
import Navbar from "./Navbar";
import { MenuOutlined } from "@ant-design/icons";
import "../styles/Accueil.css";

function Accueil() {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <div className="top">
      <div className="navbar">
        <img className="skills-img" alt="" src={Groupe7} />
        <button onClick={() => setShowNavbar(!showNavbar)}>
          <MenuOutlined />
        </button>
        <Navbar show={showNavbar} />
      </div>
      <div className="title-container">
        <p className="top-title">
          <h5 className="skills">SKILLS</h5>
          l'entreprise leader dans le domaine de l'énergie électrique
          industrielle
        </p>
        <button> Nos services </button>
      </div>
      <div className="test">
        <div className="services">
          <div className="services-card">
            <span className="services-img edge">
              <img className="services-img" alt="" src={Tracé1} />
            </span>
            <span className="cards-text">
              <h4>AUTOMATISME INDUSTRIEL</h4>
              <p className="cards-description">
                SKILLS excelle dans l'activité d'automatisation industrielle.
              </p>
            </span>
          </div>
          <div className="services-card middle">
            <span className="services-img">
              <img alt="" src={Tracé2} />
            </span>
            <span className="cards-text">
              <h4>ELECTRICITE INDUSTRIELLE</h4>
              <p className="cards-description">
                Nous adaptons l'installation sur le site conformément aux
                besoins de nos clients.
              </p>
            </span>
          </div>
          <div className="services-card">
            <span className="services-img edge">
              <img className="services-img" alt="" src={Tracé3} />
            </span>
            <span className="cards-text">
              <h4>INSTRUMENTATION</h4>
              <p className="cards-description">
                Des solutions pour servir les industries de transformation.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
