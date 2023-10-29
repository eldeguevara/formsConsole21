import React from "react";
import layoutPages from "./layoutPages";
import { NavLink } from "react-router-dom";
import "../../assets/css/Nav.css";
import { AiOutlineAlignLeft } from "react-icons/ai";

export default function Navigate({ children }) {

  const menuActive = ()=>{
    document.querySelector('.navigate').classList.toggle("activeMenu")
  }

  const closeMenuNavlink = ()=>{
    document.querySelector(".navigate").classList.remove("activeMenu")
  }

  return (
    <div className="container">
      <div className="icon" onClick={menuActive}>
          <AiOutlineAlignLeft className="i"/>
        </div>
      <nav id="nav" className="navigate">
        <div className="title">
          <h3>Menu</h3>
        </div>
        {layoutPages.map((item, index) => (
          <NavLink
            to={"/" + item.name}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenuNavlink}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

    {/* Children */}
    <div className="principal">
        <div>{children}</div>
      </div>
    </div>
  );
}
