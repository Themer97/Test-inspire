import React from "react";
import Imagethrd from "../assets/Groupe37.png";
import Imagethrd1 from "../assets/Groupe39.png";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import "../styles/Services.css";

function Services() {
  return (
    <div className="third">
      <div className="third-left">
        <span className="third-title">
          <h4>NOTRE AMBITION _______</h4>
          <h1 className="optimiser">Optimiser votre performance</h1>
        </span>
        <span>
          <img alt="" src={Imagethrd1} />
          <h4>En 2025, chiffre d'affaires 3M€</h4>
        </span>
        <span>
          <img alt="" src={Imagethrd} />
          <h4>En 2025, un effectif de 15 collaborateurs</h4>
        </span>
      </div>
      <div className="third-right">
        <span className="contact">
          <span className="contact-third">
            <h5>ENVOYEZ-NOUS VOTRE REQUÊTE</h5>
            <span className="circle">
              <MailOutlined className="contact-icon" />
            </span>
          </span>

          <span className="contact-third">
            <h5>APPELEZ NOUS</h5>
            <span className="circle">
              <PhoneOutlined className="contact-icon" />
            </span>
          </span>
        </span>
        <span>
          <button>
            <h5>Notre vocation</h5>
          </button>
          <button className="objectif-btn">
            <h5>Notre Objectif</h5>
          </button>
        </span>
        <h2>SKILLS développe sa capacité des solutions</h2>
        <p className="third-description">
          SKILLS développe sa capacité à anticiper sur les besoins de nos
          clients dans l'élaboration des solutions, tout en respectant leurs
          attentes et en suivant les normes internationales du métier. Comme
          étant le médiateur entre les clients et les fournisseurs de produits,
          nous accompagnons nos clients dans l'installations et le maintien des
          solutions adaptées par un suivi professionnel permanent.
        </p>
      </div>
    </div>
  );
}

export default Services;
