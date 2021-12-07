import React from "react";
import fixedheight from "../Assets/fixed-height sec.png";
import fixedheight1 from "../Assets/fixed-height sec-1.png";
import fixedheight2 from "../Assets/fixed-height sec-2.png";
import bgimage from "../Assets/after community_1.png"
export default function Kaay_after_community_card() {
  return (
    <>
      <div className="kaay_after_card my-5">
        {/* <img className="bgimage" src={bgimage} alt="" /> */}
        <div className=" d-flex justify-content-evenly ">
          <div className=" kaay_after_card_item">
            <img src={fixedheight} alt="" />
            <h6>Apply for Ongoing contest</h6>
            <p>Description</p>
          </div>
          <div className=" kaay_after_card_item">
            <img src={fixedheight1} alt="" />
            <h6>Olympiad Questions</h6>
            <p>Description</p>
          </div>
          <div className=" kaay_after_card_item">
            <img src={fixedheight2} alt="" />
            <h6>Previous Year Papers</h6>
            <p>Description</p>
          </div>
        </div>
      </div>
    </>
  );
}
