import React, { useEffect } from "react";
import UpperNavbar from "../../Navbar/UpperNavbar.jsx";
import SideNavbar from "../../Navbar/SideNavbar.jsx";
import FirstPage from "../FirstPage.jsx";

function Home() {
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.error("No token found in session storage.");
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="min-h-screen  bg-slate-200">
      <UpperNavbar heading="Dashboard" />
      <div className="w-full h-full flex">
        <div id="left-navbar" className="w-[22%] h-full ">
          <SideNavbar />
        </div>

        <div
          id="Right-Side"
          className="w-full h-full flex justify-center pt-10 bg-slate-200"
        >
          <div className="w-[90%] bg-white rounded border border-sky-200 px-3 py-2">
            <FirstPage />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
