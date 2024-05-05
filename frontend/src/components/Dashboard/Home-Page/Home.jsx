import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

import UpperNavbar from "../../Navbar/UpperNavbar.jsx";
import SideNavbar from "../../Navbar/SideNavbar.jsx";
import FirstPage from "../FirstPage.jsx";


function Home() {
  return (
    
    <div className="min-h-screen w-screen bg-slate-200">
      <UpperNavbar heading="Dashboard"/>
      <div className="w-full h-full flex">

        <div id="left-navbar" className="w-[22%] h-full ">
          <SideNavbar />
        </div>

        <div id="Right-Side" className="w-[78%] h-full flex justify-center my-20 bg-slate-200">
          <div className="w-[90%] bg-white rounded border border-sky-400 px-6 py-4">
            <FirstPage />
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Home;
