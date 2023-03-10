import React from "react";
import Groupe7 from "../assets/Groupe7.png";
import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import "../styles/Carriere.css";

function Carriere() {
  return (
    <div className="bottom">
      <div className="bottom-container">
        <div className="bottom-left">
          <span>
            <img alt="" src={Groupe7} />
          </span>
          <h3>
            Optimisez votre performance industrielle et réduisez votre
            consommation en énergie.
          </h3>
          <button className="objectif-btn">
            <h4>Contactez-nous </h4>
          </button>
        </div>
        <div className="bottom-center">
          <h3>Nos coordonnées</h3>
          <p className="coordonnées">
            <EnvironmentOutlined className="bottom-icon" />
            10, Rue de penthièvre 75008 Paris - France
          </p>
          <p className="coordonnées">
            <PhoneOutlined className="bottom-icon" /> +33 667 79 31 09
          </p>
          <p className="coordonnées">
            <MailOutlined className="bottom-icon" /> invoice@sk-ills.fr
          </p>
        </div>
        <div className="bottom-right">
          <h3>SOCIAL & NEWSLETTER</h3>
          <h2>Recevez les dernières nouvelles sur Skills</h2>
          <input placeholder="Entrer votre e-mail" type="email"></input>
          <h3>Suivez-nous</h3>
          <span className="icons">
            <FacebookOutlined className="outlined" />
            <InstagramOutlined />
            <LinkedinOutlined className="outlined" />
          </span>
        </div>
      </div>
      <div className="footer">
        <p>2022 © Skills</p>
        <span className="footer-right">
          <p>A propos</p>
          <p>Services</p>
          <p>Carrières</p>
          <p>Contact</p>
        </span>
      </div>
    </div>
  );
}

export default Carriere;
