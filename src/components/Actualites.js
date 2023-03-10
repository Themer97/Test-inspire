import React from "react";
import { Card } from "antd";
import Luminaire from "../assets/luminaire-led.png";
import "../styles/Actualites.css";

function Actualites() {
  return (
    <div className="fifth">
      <span className="fifth-top">
        <h4>ACTUALITES _____</h4>
        <h1>Dernières news</h1>
      </span>
      <div className="imgcard-conatiner">
        <img className="lumianire-pic" alt="" src={Luminaire} />
        <Card className="luminaire-card">
          <h2>LUMINAIRE LED ENCASTRÉ GERMICIDE 3 en 1 </h2>
          <p className="luminaire-description">
            Le Luminaire LED encastré Germicide de la série OFFICE purificateur
            d'air ambiant et Antibactérien.
          </p>
          <a href="more">Voir plus </a>
        </Card>
      </div>
    </div>
  );
}

export default Actualites;
