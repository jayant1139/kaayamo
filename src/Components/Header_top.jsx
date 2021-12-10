import React from 'react'
import { NavLink } from 'react-router-dom'
import cart from '../Assets/shopping_cart.png'
export default function Header_top() {
    return (
        <>
        <div className=" header-top">
           <div className="header-top-li ">
            <ul className="d-flex ">
                <li>KAAY HOME</li>
                <li>KAAY ONLINE</li>
                <li>KAAY ACADEMY</li>
                <li>KAAY GURUKUL</li>
                <li>KAAY COMMUNITY</li>
                <li>KAAY STUDENT</li>
            </ul>
            </div>
            <div className="header_shop d-flex  ">
                <NavLink className="mx-2"  to="/Signup">Signin</NavLink>
                <a className="mx-2 header_shop_a" href="/"><img src={cart} alt="" /></a>
            </div>
        </div>
        </>
    )
}
