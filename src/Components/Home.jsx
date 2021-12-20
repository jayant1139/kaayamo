import React from "react";
import banner from '../Assets/banner.png'
import Kaaycommunity from './Kaaycommunity';
import Kaay_after_community_card from './Kaay_after_community_card';
import Combinecards from './Combinecards';
import FindLikeYou from './FindLikeYou';

export default function Home() {
  return (
    <>
    <h1 className="top-h1-yellow">Do one fun thing everyday</h1>
      <div className="group3595">
        {/* <img src={banner} alt="" /> */}
        
        <div className="flex-column group3595-child">
        
          <div className="wrapper ">
            {/* <h3>Join Us</h3> */}
            {/* <h1><b><span>Creativity</span> starts with viewing the whole world differently</b></h1>
            <h2 className="my-3">
              Every day brings with it a fresh set of learning possibilites.
            </h2> */}
            <div className="d-flex  m-3">
              <button className="btn btn-00FF90 ">
                Enroll Now
              </button>
              <button className="btn btn-00FF90-outline mx-3">Learn More</button>
            </div>
          </div>
        </div>
        {/* <div className="banner-imgdiv">
        <img className="banner-image m-5" src="banner-image.png" alt="" />
      </div> */}

      </div>
    
    <Combinecards/>
    <Kaaycommunity/>
    <Kaay_after_community_card/>
    <FindLikeYou/> 
    </>
  );
}
