import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function SideNavbar() {
  return (
    <nav
      id="Side-Navbar"
      className="fixed w-[341px] h-full bg-white border-[1px]  border-r-slate-200 box-border "
    >
      <div className="w-full h-full mt-4 mb-7 px-6">
        <h1 className="text-xl font-bold">MENU</h1>

        <ul className="mt-8 flex flex-col gap-12">
          <div className="flex gap-4">
            <img
              src="/layout-grid.svg"
              alt="Image"
              className="w-7 h-7 rounded-full"
            />
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-sky-500" : "text-slate-600"
                } font-bold text-lg`
              }
            >
              Dashboard
            </NavLink>
          </div>

          <div className="flex gap-4">
            <img src="/user.svg" alt="Image" className="w-7 h-7 rounded-full" />
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `${
                  isActive ? "text-sky-500" : "text-slate-600"
                } font-bold text-lg`
              }
            >
              User
            </NavLink>
          </div>

          <div className="flex gap-4">
            <img
              src="/task_list.svg"
              alt="Image"
              className="w-7 h-7 rounded-full"
            />
            <NavLink
              to="/task"
              className={({ isActive }) =>
                `${
                  isActive ? "text-sky-500" : "text-slate-600"
                } font-bold text-lg`
              }
            >
              Task
            </NavLink>
          </div>

          <div className="flex gap-4">
            <img
              src="/Group.svg"
              alt="Image"
              className="w-7 h-7 rounded-full"
            />
            <NavLink
              to="/setting"
              className={({ isActive }) =>
                `${
                  isActive ? "text-sky-500" : "text-slate-600"
                } font-bold text-lg`
              }
            >
              Setting
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
}
export default SideNavbar;
