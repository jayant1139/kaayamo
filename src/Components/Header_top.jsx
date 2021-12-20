import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../Assets/KAAYAMOLogo.png";
import cart from '../Assets/shopping_cart.png'
export default function Header_top() {
    return (
        <>
        <div className=" header-top">
           <div className="header-top-li ">
           
            <ul className="d-flex ">
            <div className="logo ">
            <NavLink to="/">
              {" "}
              <img src={logo} alt="" />
            </NavLink>
          </div>
                <li> HOME</li>
                <li> ONLINE</li>
                <li> ACADEMY</li>
                <li> GURUKUL</li>
                <li> COMMUNITY</li>
                <li> STUDENT</li>
            </ul>
            </div>
            <div className="header_shop d-flex  ">
                <NavLink className="mx-2 signin-header"  to="/SignIn">SIGN IN</NavLink>
                <NavLink className="mx-2 signup-header" to="/SignUp">SIGN UP</NavLink>
                {/* <a className="mx-2 header_shop_a" href="/"><img src={cart} alt="" /></a> */}
            </div>
        </div>
        </>
    )
}
