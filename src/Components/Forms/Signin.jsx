import React from 'react'
import {CgClose} from 'react-icons/cg'
export default function Signin() {
    const close_style={
        fontSize:"1.6rem"
    }
    return (
        <>
             <div className="formwrap">
        <div className="forms">
            <div className="d-flex justify-content-between m-2">
                <h5><b>Sign In</b></h5>
                <CgClose  style={close_style}/>
            </div>
            {/* <div className="d-flex justify-content-between">
            <input  type="text" placeholder="First Name" />
            <input  type="text" placeholder="Last Name"/>
            </div> */}
            <div className="d-flex flex-column">
                <input type="text" placeholder="Email Address" />
                
                
                <input type="password" placeholder="Password"/>
            </div>
            <div className="d-flex justify-content-between">
            <button className=" btn-signup">Sign Up</button>
            <button className=" btn-signin">Sign in</button>
            </div>
            </div>
            </div>
        </>
    )
}
