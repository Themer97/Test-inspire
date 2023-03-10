import React from "react";
import Skills from "../assets/Groupe51.png";
import "../styles/Apropos.css";

function Apropos() {
  return (
    <div className="first">
      <img alt="" src={Skills} className="first-img" />
      <div className="first-text">
        <span>
          <h4>QUI SOMMES-NOUS ? ______</h4>
          <h1>SKILLS, une expertise internationale qualifiée</h1>
        </span>
        <p className="first-description">
          SK INNOVATIVE LIMITLESS SOLUTIONS est la référence dans le secteur de
          la distribution, de l'assemblage et de l'installation des solutions
          électriques.
        </p>
        <p className="first-description">
          Notre équipe, qualifiée de 20 ans d'expérience et de collaborations
          réussies dans le domaine de l'électricité industrielle, met en place
          des solutions intelligentes et personnalisées pour répondre aux
          besoins de nos clients. Par une parfaite maîtrise, nos équipes
          assurent la réalisation conforme aux normes internationales du métier
          et procède par un système de reporting pour avoir un suivi détaillé et
          continu de l'avancement de chaque projet.
        </p>
        <button> En savoir-plus </button>
      </div>
    </div>
  );
}

export default Apropos;
