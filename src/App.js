import "./App.css";
import React from "react";
import { Card } from "antd";
import Groupe7 from "./assets/Groupe7.png";
import Tracé1 from "./assets/Groupe8.png";
import Tracé2 from "./assets/Tracé116.png";
import Tracé3 from "./assets/Tracé122.png";
import Skills from "./assets/Groupe51.png";
import Image1 from "./assets/IMAGE-2.png";
import Image2 from "./assets/IMAGE-3.png";
import Image3 from "./assets/IMAGE-4.png";
import Image4 from "./assets/IMAGE-5.png";
import Image5 from "./assets/IMAGE-6.png";
import Image6 from "./assets/IMAGE-7.png";
import Profilepic from "./assets/profilepic.png";
import Imagethrd from "./assets/Groupe37.png";
import Imagethrd1 from "./assets/Groupe39.png";
import Saacke from "./assets/SAACKE.png";
import Soing from "./assets/SO-ing.png";
import Ccmg from "./assets/CCMG.png";
import Socinfo from "./assets/SOCINFO.png";
import Print from "./assets/PRINTRONIX.png";
import Luminaire from "./assets/luminaire-led.png";
import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

function App() {
  const { Meta } = Card;

  return (
    <div className="App">
      <div className="top">
        {/* <img alt="" src={Backgroundtop} /> */}
        <div className="navbar">
          <img className="skills-img" alt="" src={Groupe7} />
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
                <p className="cards-descrription">
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
                <p className="cards-descrription">
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
                <p className="cards-descrription">
                  Des solutions pour servir les industries de transformation.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="first">
          <img alt="" src={Skills} />
          <div className="first-text">
            <h4>QUI SOMMES-NOUS ? ______</h4>
            <h1>SKILLS, une expertise internationale qualifiée</h1>
            <p className="first-description">
              SK INNOVATIVE LIMITLESS SOLUTIONS est la référence dans le secteur
              de la distribution, de l'assemblage et de l'installation des
              solutions électriques.
            </p>
            <p className="first-description">
              Notre équipe, qualifiée de 20 ans d'expérience et de
              collaborations réussies dans le domaine de l'électricité
              industrielle, met en place des solutions intelligentes et
              personnalisées pour répondre aux besoins de nos clients. Par une
              parfaite maîtrise, nos équipes assurent la réalisation conforme
              aux normes internationales du métier et procède par un système de
              reporting pour avoir un suivi détaillé et continu de l'avancement
              de chaque projet.
            </p>
            <button> En savoir-plus </button>
          </div>
        </div>
        <div className="second">
          <div className="second-description">
            <h4>PRODUITS</h4>
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
        <div className="third">
          <div className="third-left">
            <h4>NOTRE AMBITION _______</h4>
            <h1 className="optimiser">Optimiser votre performance</h1>
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
              <span>
                <MailOutlined />
                <p>ENVOYEZ-NOUS VOTRE REQUÊTE</p>
              </span>

              <span>
                <PhoneOutlined className="phone" />
                <p>APPELEZ NOUS</p>
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
              étant le médiateur entre les clients et les fournisseurs de
              produits, nous accompagnons nos clients dans l'installations et le
              maintien des solutions adaptées par un suivi professionnel
              permanent.
            </p>
          </div>
        </div>
        <div className="fourth">
          <div className="fourth-left">
            <h4>Témoignages & collaborations ______</h4>
            <h1>Ils nous ont fait confiance</h1>
            <span>
              <img className="profile-pic" alt="" src={Profilepic} />
              <Card className="president-card">
                <p className="president-description">
                  Dolor consetetur sadipscing elitr diam nonumy eirmod tempor
                  labore dolore magna aliquyam sed diam vero eos accusam justo
                  dolores.
                </p>
                <span>
                  <button className="slider s1"></button>
                  <button className="slider s2"></button>
                </span>
                <h4>Ole Jørgen Bratland</h4>
                <h5>Président et chef de la direction</h5>
              </Card>
            </span>
          </div>
          <div className="fourth-right">
            <table id="coll-pics">
              <tr className="top-collab" id="left-collab">
                <img className="collaboration" alt="" src={Saacke} />
              </tr>
              <tr className="top-collab" id="right-collab">
                <img className="collaboration" alt="" src={Soing} />
              </tr>
              <tr id="left-collab" className="top-collab">
                <img className="collaboration" alt="" src={Ccmg} />
              </tr>
              <tr id="right-collab" className="top-collab">
                <img className="collaboration" alt="" src={Socinfo} />
              </tr>
            </table>
            <img id="col5" alt="" src={Print} />
          </div>
        </div>
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
                Le Luminaire LED encastré Germicide de la série OFFICE
                purificateur d'air ambiant et Antibactérien.
              </p>
              <a href="more">Voir plus </a>
            </Card>
          </div>
        </div>
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
              <p>
                <EnvironmentOutlined />
                10, Rue de penthièvre 75008 Paris - France
              </p>
              <p>
                <PhoneOutlined /> +33 667 79 31 09
              </p>
              <p>
                <MailOutlined /> invoice@sk-ills.fr
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
      </div>
    </div>
  );
}

export default App;
