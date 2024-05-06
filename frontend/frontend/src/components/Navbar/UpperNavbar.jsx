import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function UpperNavbar({ heading = "Dashboard" }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Retrieve token from sessionStorage
    const token = sessionStorage.getItem("token");
    // console.log(token);

    if (token) {
      let decodedToken;
      try {
        decodedToken = JSON.parse(token);
        let token1 = decodedToken.token;
        const arrayToken = token1.split(".");
        const tokenPayload = JSON.parse(atob(arrayToken[1]));
        var name = tokenPayload.name;
        // console.log(name);
      } catch (error) {
        console.error("Error parsing token:", error);
        return;
      }

      const userName = name;
      console.log(userName);
      setUserName(userName);
    }
  }, []);

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
              <p className="absolute  top-6 right-[60px]">{userName}</p>
              <p className="absolute  top-12 right-[114px]">Status 200</p>
              <button className=" absolute top-9 right-[30px] border-none bg-none">
                <FontAwesomeIcon icon={faGreaterThan} />
              </button>
            </div>
          </div>
        </div>
        {/* ========== */}
      </div>
    </nav>
  );
}
export default UpperNavbar;
