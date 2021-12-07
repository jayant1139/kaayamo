import React from "react";
import {
  TiSocialLinkedinCircular,
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import founder_1 from "../Assets/kaay/Rectangle 3421.png";
export default function About() {
  const sizeStyle = {
    fontSize: "2rem",
    margin: "0 0.5rem",
    color: "#96BB7C",
  };
  return (
    <>
      <div className="d-flex flex-column width_80">
        <h1>About KAAY AMO</h1>
        <p>
          The ultimate goal of KAAY is to offer a creative, caring, innovative,
          stress-free, and harmonious learning environment for children. We got
          everything under control. We should use our natural talents to our
          benefit & incorporate them into our routines to make our life better &
          happier
        </p>
        <br />
        <p>
          We believe "every student is unique. We must let them grow at their
          own pace and develop in the areas of interest of their liking. What
          matters more is how they learn to deal with failures and obstacles and
          grow out of them embracing their imperfections and honing their
          strengths"
        </p>
      </div>
      <div className="d-flex flex-column width_80">
        <h6>
          <span>Team</span>
        </h6>
        <h2>Our Team Members</h2>
        <p>
          Kaay team members include professional member like tulika goyal who
          coordinated all the members and designer{" "}
        </p>
      </div>
<div className="d-flex justify-content-evenly m-5">
      <div className="founder_card">
        <img src={founder_1} alt="" />
        <h5>Tulika Goyal</h5>
        <p>Profession</p>
        <div className="d-flex ">
          <a href="">
            <TiSocialFacebookCircular style={sizeStyle} />
          </a>
          <a href="">
            <AiFillInstagram style={sizeStyle} />
          </a>
          <a href="">
            <TiSocialTwitterCircular style={sizeStyle} />
          </a>
        </div>
      </div>

      <div className="founder_card">
        <img src={founder_1} alt="" />
        <h5>Tulika Goyal</h5>
        <p>Profession</p>
        <div className="d-flex ">
          <a href="">
            <TiSocialFacebookCircular style={sizeStyle} />
          </a>
          <a href="">
            <AiFillInstagram style={sizeStyle} />
          </a>
          <a href="">
            <TiSocialTwitterCircular style={sizeStyle} />
          </a>
        </div>
      </div>
      </div>
    </>
  );
}
