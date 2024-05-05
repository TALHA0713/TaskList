import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

<<<<<<< HEAD
function UpperNavbar({ heading = "Dashboard" }) {
  return (
    <nav className="sticky top-0 w-screen h-[90px] bg-white z-10">
      <div className="w-full h-full flex justify-between items-center">
        {/* LEFT-Side */}
        <div className="w-[20%] h-full border-[1px] border-b-slate-300 border-r-slate-200  place-content-center flex flex-col items-center justify-center">
          <div className="flex gap-4">
            <img src="/Group.png" alt="Image" className="w-7 h-7 " />
            <h1 className="text-2xl font-semibold text-sky-400">
              Task Manager List
            </h1>
          </div>
        </div>

        {/* ========= */}

        {/* RIGHT-Side */}
        <div className="w-[78%] flex items-center justify-between px-12">
          <h1 className={"text-2xl font-bold"}>{heading}</h1>

          <div className="w-auto flex gap-8">
            <a href="/notify">
              <img
                className="relative top-2"
                src="bell.png"
                alt="Notifications"
              />
            </a>

            <div className={"w-[200px] h-[50px] rounded"}>
              <img src="Profile.png" className="flex w-10 mt-2 pl-1" alt="" />
              <p className="absolute  top-6 right-[60px]">Muhammad Talha</p>
              <p className="absolute  top-12 right-[114px]">Status 200</p>
              <button className=" absolute top-9 right-[30px] border-none bg-none">
                <FontAwesomeIcon icon={faGreaterThan} />
              </button>
            </div>
          </div>
        </div>
        {/* ========== */}
      </div>
=======



function UpperNavbar({heading = "Dashboard"}) {
  return (
    <nav className="sticky top-0 w-screen h-[90px] bg-white z-10">
        <div className="w-full h-full flex justify-between items-center">
            {/* LEFT-Side */}
            <div className="w-[22%] h-full border-[1px] border-b-slate-300 border-r-slate-200 grid place-content-center">
                <h1 className="text-2xl font-semibold  text-sky-400">Task Manager List</h1>
            </div>
            {/* ========= */}

            {/* RIGHT-Side */}
            <div className="w-[78%] flex items-center justify-between px-12">
                <h1 className={"text-2xl font-bold"}>{heading}</h1>

                <div className="w-auto flex gap-8">
                 <a href="/notify">
                     <img
                         className="relative top-2"
                         src="bell.png"
                         alt="Notifications" />
                 </a>

                 <div className={"w-[200px] h-[50px] rounded"}>
                     <img src="Profile.png" className="flex w-10 mt-2 pl-1" alt="" />
                     <p className="absolute  top-6 right-[60px]">Muhammad Talha</p>
                     <p className="absolute  top-12 right-[114px]">Status 200</p>
                     <button className=" absolute top-9 right-[30px] border-none bg-none">
                         <FontAwesomeIcon icon={faGreaterThan} />
                     </button>
                 </div>
                </div>
            </div>
            {/* ========== */}
        </div>
>>>>>>> f067329dcc534b07a3dee4fecdebf4f3d80b8c62
    </nav>
  );
}
export default UpperNavbar;
