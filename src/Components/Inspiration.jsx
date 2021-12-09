import React from "react";
import dummyboy from "../Assets/dummyboyprof.svg";
import dummygirl from "../Assets/dummygirlprof.svg";
export default function Inspiration() {
  return (
    <>
      <div className="wrap_inspiration">
        <div className="card-inspiration">
          <div className="card-items">
            <img src={dummyboy} alt="" />
            <p>I am very confused that which subject should I choose</p>
          </div>
        </div>
        <div className="card-ispiration-reverse">
          <div className="d-flex flex-column">
            <div className="card-reverse-item">
              <p>Choose the subject you like the most</p>
              <img src={dummygirl} alt="" />
            </div>
          </div>
        </div>
        <div className="card-inspiration">
          <div className="card-items">
            <img src={dummyboy} alt="" />
            <p> but I know limited subjects</p>
          </div>
        </div>
        <div className="card-ispiration-reverse">
          <div className="d-flex flex-column">
            <div className="card-reverse-item">
              <p>Ohh ! I get it</p>

              <img src={dummygirl} alt="" />
            </div>

            <p>
              I also faced similar problem, but after joining kaay community I
              got to know about various Jobs of interest & you should have a
              look at these fields & then explore your area of interest.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
