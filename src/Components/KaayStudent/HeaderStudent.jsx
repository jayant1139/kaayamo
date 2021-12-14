import React from 'react'

export default function HeaderStudent() {
    return (
        <>
          <header>
        <div className="second-header">
        <div className="second-header_1 header-logo d-flex justify-content-between align-items-center ">
          <div className="logo ">
            <NavLink to="/">
           
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="items  ">
            <ul className=" ul-element">
              <li>
                <NavLink
                  to="/StudentProfile"
                  style={({ isActive }) =>  isActive? {color: "#fff",background: "#22577A",borderRadius:"0.2rem",fontWeight:"normal"}: { color: "black", background: "" } }
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Mystatus"
                  style={({ isActive }) =>  isActive? {color: "#fff",background: "#22577A",borderRadius:"0.2rem",fontWeight:"normal"}: { color: "black", background: "" } }                >
                  Performance
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Library"
                  style={({ isActive }) =>  isActive? {color: "#fff",background: "#22577A",borderRadius:"0.2rem",fontWeight:"normal"}: { color: "black", background: "" } }
                >
                  Cart
                </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
        </div>
      </header>   
        </>
    )
}
