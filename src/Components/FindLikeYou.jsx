import React from "react";
import dummyprofile from "../Assets/dummyprofile.png";
export default function FindLikeYou() {
  return (
    <>
    <h2 className="text-center upper_bold m-5">Find people like you</h2>
      <div className="wrapall">
      
        <div className="wrapper">
        <div className="findlike_card">
            <div className="d-flex align-items-center justify-content-around m-2">
              <img src={dummyprofile} alt="" />
              <div className="d-flex flex-column align-items-center">
                <h6>Audrey Alexander</h6>
                <p>Team lead at Google</p>
              </div>
              <button className="btn btn-connect">Connect</button>
            </div>
          </div>
          <div className="findlike_card">
            <div className="d-flex align-items-center justify-content-around m-2">
              <img src={dummyprofile} alt="" />
              <div className="d-flex flex-column align-items-center">
                <h6>Audrey Alexander</h6>
                <p>Team lead at Google</p>
              </div>
              <button className="btn btn-connect">Connect</button>
            </div>
          </div>
          <div className="findlike_card">
            <div className="d-flex align-items-center justify-content-around m-2">
              <img src={dummyprofile} alt="" />
              <div className="d-flex flex-column align-items-center">
                <h6>Audrey Alexander</h6>
                <p>Team lead at Google</p>
              </div>
              <button className="btn btn-connect">Connect</button>
            </div>
          </div>
        </div>
        <div className="wrapper">
         
          <div className="findlike_card">
            <div className="d-flex align-items-center justify-content-around m-2">
              <img src={dummyprofile} alt="" />
              <div className="d-flex flex-column align-items-center">
                <h6>Audrey Alexander</h6>
                <p>Team lead at Google</p>
              </div>
              <button className="btn btn-connect">Connect</button>
            </div>
          </div>
          <div className="findlike_card">
            <div className="d-flex align-items-center justify-content-around m-2">
              <img src={dummyprofile} alt="" />
              <div className="d-flex flex-column align-items-center">
                <h6>Audrey Alexander</h6>
                <p>Team lead at Google</p>
              </div>
              <button className="btn btn-connect">Connect</button>
            </div>
          </div>
          
          <div className="findlike_card">
            <div className="d-flex align-items-center justify-content-around m-2">
              <img src={dummyprofile} alt="" />
              <div className="d-flex flex-column align-items-center">
                <h6>Audrey Alexander</h6>
                <p>Team lead at Google</p>
              </div>
              <button className="btn btn-connect">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
