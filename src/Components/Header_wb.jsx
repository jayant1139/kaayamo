import React from "react";

export default function Header_wb() {
  return (
    <>
      <header>
        <div className="header-logo d-flex justify-content-between align-items-center ">
          <div className="logo m-1">
            <img src="KAAYAMOLogo.png" alt="" />
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
