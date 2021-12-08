import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/KAAYAMOLogo.png";
export default function Header_wb() {
  return (
    <>
      <header>
        <div className="header-logo d-flex justify-content-between align-items-center ">
          <div className="logo ">
            <NavLink to="/">
              {" "}
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="items  ">
            <ul className=" ul-element">
              <li>
                <NavLink
                  to="/About"
                  style={({ isActive }) =>  isActive? {color: "#fff",background: "#22577A",borderRadius:"0.2rem",fontWeight:"normal"}: { color: "black", background: "" } }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Inspiration"
                  style={({ isActive }) =>  isActive? {color: "#fff",background: "#22577A",borderRadius:"0.2rem",fontWeight:"normal"}: { color: "black", background: "" } }                >
                  Our Inspiration
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Programs"
                  style={({ isActive }) =>  isActive? {color: "#fff",background: "#22577A",borderRadius:"0.2rem",fontWeight:"normal"}: { color: "black", background: "" } }
                >
                  Programs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Coursecatalog"
                  style={({ isActive }) =>  isActive? {color: "#fff",background: "#22577A",borderRadius:"0.2rem",fontWeight:"normal"}: { color: "black", background: "" } }
                >
                  Course Catalog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
