import React from 'react'
import Kaay_community from '../Assets/kaay-community.png'
export default function Kaaycommunity() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-start m-5">
                <div className="d-flex flex-column  kaaycommunity">
                    <h1>KAAY Community</h1>
                    <h5 className="mx-3">KAAY is an integrated education system that brings school & coaching systems together along with an online platform that will provide content, career counseling & community to students</h5>
                </div>
                <div className="rg_img_community"><img src={Kaay_community} alt="" /></div>
            </div>
        </>
    )
}
