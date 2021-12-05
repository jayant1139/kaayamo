import React from "react";
// import passout from "../Assets/passout-hat.png"
export default function Card(props) {
  return (
    <>
      <div className="card" style={{ background: props.bg }}>
        <img className="clipimg"  src={props.src} alt="" />
        <h4>{props.title}</h4>
        <div className="line-width"></div>
        <h5>
          The gradual accumulation of information about atomic and small-scale
          behaviour...
        </h5>
        <button className="btn explore-btn my-3">Explore</button>
      </div>
    </>
  );
}
