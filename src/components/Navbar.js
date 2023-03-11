import React from "react";
import { NavbarData } from "./NavbarData";
import { GlobalOutlined, SearchOutlined } from "@ant-design/icons";
import "../styles/Navbar.css";

function Navbar({ show }) {
  return (
    <div className={show ? "Navbar-nav" : "sidebar"}>
      <nav>
        <ul>
          {NavbarData.map((item, index) => {
            return (
              <li>
                <a href={item.path} key={index} className="links">
                  <span classname="title">{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <span className="navbar-icons">
          <SearchOutlined />
          <GlobalOutlined />
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
