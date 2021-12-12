import React from "react";
import {RiDashboardFill} from 'react-icons/ri';
import {CgProfile} from 'react-icons/cg';
import {FaClipboardList, FaCalendarAlt} from 'react-icons/fa';
import {MdLocalLibrary} from 'react-icons/md';
import {FiActivity} from 'react-icons/fi';
import {AiFillSetting} from 'react-icons/ai';
import {IoMdNotifications} from 'react-icons/io';

export default function Dashboard() {
  const img_style = {
    width: "5rem",
  };
  const iconstyle={
      fontSize:"1.8rem"
  }
  return (
    <>
      <div className="d-flex flex-column dashboard    ">
        <div className="d-flex align-items-center ">
          <img
            style={img_style}
            src={require("../../Assets/baby-girl.png").default}
            alt=""
          />
          <div className="des">
            <p><b>Shanu Kumar</b></p>
            <p>Product Designer at KAAY AMO</p>
          </div>
        </div>

        <div className="dashboard-elements">
            <div className="d-flex elements_cont align-items-center">
                <div style={iconstyle} className="inner-itm mx-3"><RiDashboardFill/></div>
                <div className="inner-itm mx-4">Dashboard</div>
            </div>
        </div>
        <div className="dashboard-elements">
            <div className="d-flex elements_cont align-items-center">
                <div style={iconstyle} className="inner-itm mx-3"><CgProfile/></div>
                <div className="inner-itm mx-4">Profile</div>
            </div>
        </div>
        <div className="dashboard-elements">
            <div className="d-flex elements_cont align-items-center">
                <div style={iconstyle} className="inner-itm mx-3"><FaClipboardList/></div>
                <div className="inner-itm mx-4">My Status</div>
            </div>
        </div>
        <div className="dashboard-elements">
            <div className="d-flex elements_cont align-items-center">
                <div style={iconstyle} className="inner-itm mx-3"><MdLocalLibrary/></div>
                <div className="inner-itm mx-4">Library</div>
            </div>
        </div>
        <div className="dashboard-elements">
            <div className="d-flex elements_cont align-items-center">
                <div style={iconstyle} className="inner-itm mx-3"><FiActivity/></div>
                <div className="inner-itm mx-4">Activity</div>
            </div>
        </div>
        <div className="dashboard-elements">
            <div className="d-flex elements_cont align-items-center">
                <div style={iconstyle} className="inner-itm mx-3"><FaCalendarAlt/></div>
                <div className="inner-itm mx-4">Calendar</div>
            </div>
        </div>
        <hr />
        



      </div>
    </>
  );
}
