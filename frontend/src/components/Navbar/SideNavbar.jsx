import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

function SideNavbar() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("No token found in session storage.");
        window.location.href = "/login";
        return;
      }

      const decodedToken = JSON.parse(token);
      const token1 = decodedToken.token;
      const arrayToken = token1.split(".");
      const tokenPayload = JSON.parse(atob(arrayToken[1]));
      let userId = tokenPayload.id;

      try {
        const response = await axios.get(
          `http://localhost:3333/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token1}`,
            },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <nav
      id="Side-Navbar"
      className="fixed w-[273px] h-full bg-white border-[1px] border-r-slate-200 box-border "
    >
      <div className="w-full h-full mt-4 mb-7 px-6">
        <h1 className="text-xl font-bold">MENU</h1>

        <ul className="mt-8 flex flex-col gap-4 ">
          <li
            className={`flex gap-3 hover:bg-sky-100 pt-[7px] pl-[5px] h-[47px] flex-grow-1 cursor-pointer ${
              location.pathname === "/" ? "text-sky-500" : "text-slate-600"
            } font-bold text-lg ml-2 pl-2`}
          >
            <img
              src="/layout-grid.svg"
              alt="Image"
              className="w-7 h-7 rounded-full"
            />
            <Link to="/">Dashboard</Link>
          </li>

          {userData?.role === "ADMIN" && (
            <li
              className={`flex gap-4 hover:bg-sky-100 pt-[7px] pl-[5px] h-[47px] flex-grow-1 cursor-pointer ${
                location.pathname === "/users"
                  ? "text-sky-500"
                  : "text-slate-600"
              } font-bold text-lg ml-2 pl-2`}
            >
              <img
                src="/user.svg"
                alt="Image"
                className="w-7 h-7 rounded-full"
              />
              <Link to="/users">Users</Link>
            </li>
          )}

          <li
            className={`flex gap-4 hover:bg-sky-100 pt-[7px] pl-[7px] h-[47px] flex-grow-1 cursor-pointer ${
              location.pathname === "/task" ? "text-sky-500" : "text-slate-600"
            } font-bold text-lg ml-2 pl-2`}
          >
            <img
              src="/task_list.svg"
              alt="Image"
              className="w-7 h-7 rounded-full"
            />
            <Link to="/task">Tasks</Link>
          </li>

          <li
            className={`flex gap-4 hover:bg-sky-100 pt-[7px] pl-[5px] h-[47px] flex-grow-1 cursor-pointer ${
              location.pathname === "/setting"
                ? "text-sky-500"
                : "text-slate-600"
            } font-bold text-lg ml-2 pl-2`}
          >
            <img
              src="/Group.svg"
              alt="Image"
              className="w-7 h-7 rounded-full"
            />
            <Link to="/setting">Settings</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideNavbar;
