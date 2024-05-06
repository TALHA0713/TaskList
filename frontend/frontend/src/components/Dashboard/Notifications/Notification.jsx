import React from "react";
import UpperNavbar from "../../Navbar/UpperNavbar.jsx";
import SideNavbar from "../../Navbar/SideNavbar.jsx";

const Notification = () => {
  return (
    <div className="min-h-screen w-screen bg-slate-200">
      <UpperNavbar heading="Notifications"/>
      <div className="w-full h-full flex">

        <div id="left-navbar" className="w-[22%] h-full ">
          <SideNavbar />
        </div>

        <div id="Right-Side" className="w-[78%] h-full flex justify-center my-20 bg-slate-200">
          <div className="w-[90%] bg-white rounded border border-sky-400 px-6 py-4">
            <h1 className="text-2xl font-bold ">Notifications</h1>
            how are you
          </div>
        </div>
      </div>
      
    </div>
    
  )};

export default Notification;
