import React from 'react'
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
                <a className="mx-1"  href="/">Signin</a>
                <a className="mx-1 header_shop_a" href="/"><img src={cart} alt="" /></a>
            </div>
        </div>
        </>
    )
}
