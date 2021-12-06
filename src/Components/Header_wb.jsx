import React from "react";
import logo from '../Assets/KAAYAMOLogo.png'
export default function Header_wb() {
  return (
    <>
      <header>
        <div className="header-logo d-flex justify-content-between align-items-center ">
          <div className="logo ">
           <a href=""> <img src={logo} alt="" /></a>
          </div>
          <div className="items  ">
            <ul className=" ul-element">
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Our Inspiration</a>
              </li>
              <li>
                <a href="/">Programs</a>
              </li>
              <li>
                <a href="/">Course Catalog</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
