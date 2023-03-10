import React from "react";
import { Card } from "antd";
import Profilepic from "../assets/profilepic.png";
import Saacke from "../assets/SAACKE.png";
import Soing from "../assets/SO-ing.png";
import Ccmg from "../assets/CCMG.png";
import Socinfo from "../assets/SOCINFO.png";
import Print from "../assets/PRINTRONIX.png";
import "../styles/Campaigns.css";

function Campaigns() {
  return (
    <div className="fourth">
      <div className="fourth-left">
        <div>
          <h4>Témoignages & collaborations ______</h4>
          <h1>Ils nous ont fait confiance</h1>
        </div>
        <span>
          <img className="profile-pic" alt="" src={Profilepic} />
          <Card className="president-card">
            <p className="president-description">
              Dolor consetetur sadipscing elitr diam nonumy eirmod tempor labore
              dolore magna aliquyam sed diam vero eos accusam justo dolores.
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
  );
}

export default Campaigns;
