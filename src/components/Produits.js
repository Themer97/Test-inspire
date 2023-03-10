import React from "react";
import { Card } from "antd";
import Image1 from "../assets/IMAGE-2.png";
import Image2 from "../assets/IMAGE-3.png";
import Image3 from "../assets/IMAGE-4.png";
import Image4 from "../assets/IMAGE-5.png";
import Image5 from "../assets/IMAGE-6.png";
import Image6 from "../assets/IMAGE-7.png";
import "../styles/Produits.css";

function Produits() {
  const { Meta } = Card;

  return (
    <div className="second">
      <div className="second-description">
        <h4>PRODUITS </h4>
        <h1>Découvrez nos gammes de produits</h1>
      </div>
      <div className="cards-container">
        <Card
          hoverable
          className="produits"
          cover={<img alt="example" src={Image1} />}
        >
          <Meta title="Appareillage et protection" />
        </Card>
        <Card
          className="produits"
          hoverable
          cover={<img alt="example" src={Image2} />}
        >
          <Meta title="Contrôle Industriel" />
        </Card>
        <Card
          className="produits"
          hoverable
          cover={<img alt="example" src={Image3} />}
        >
          <Meta title="Câbles, conduits et canalisations" />
        </Card>
        <Card
          className="produits"
          hoverable
          cover={<img alt="example" src={Image6} />}
        >
          <Meta title="Eclairage " />
        </Card>
        <Card
          className="produits"
          hoverable
          cover={<img alt="example" src={Image5} />}
        >
          <Meta title="VDI, câblage et réseaux informatiques" />
        </Card>
        <Card
          className="produits"
          hoverable
          cover={<img alt="example" src={Image4} />}
        >
          <Meta title="Compensation d'énergie réactive" />
        </Card>
      </div>
      <button className="cards-btn"> Découvrir Nos Produits </button>
    </div>
  );
}

export default Produits;
