import React, { useEffect, useState } from "react";
import axios from "axios";
import UpperNavbar from "../Navbar/UpperNavbar";
import SideNavbar from "../Navbar/SideNavbar";
import ReactPaginate from "react-paginate";

const Users = () => {
  const [data, setData] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (!token) {
          console.error("No token found in session storage.");
          window.location.href = "/login";
        }

        const decodedToken = JSON.parse(token);
        const token1 = decodedToken.token;

        const response = await axios.get("http://localhost:3333/task", {
          headers: {
            Authorization: `Bearer ${token1}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const calculateOverdueDays = (endDate) => {
    const endDateTime = new Date(endDate).getTime();
    const currentDateTime = new Date().getTime();
    console.log(currentDateTime);
    const diffTime = endDateTime - currentDateTime;
    const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24));
    return diffDays < 0 ? 0 : diffDays;
  };

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="min-h-screen  bg-slate-200">
      <UpperNavbar heading="Users" />
      <div className="w-full h-full flex">
        <div id="left-navbar" className="w-[22%] h-full">
          <SideNavbar />
        </div>

        <div
          id="Right-Side"
          className="w-[78%] h-full flex justify-center mt-8"
        >
          <div className="w-[90%] bg-white rounded border border-sky-400 px-6 py-3">
            <div className="w-full h-full">
              <h1 className="pt-6 pb-10 font-bold text-2xl">Users</h1>
              <div className="ml-5 mb-5 flex gap-[77px]">
                <h1 className="text-md font-semibold w-[9rem]">Name</h1>
                <h1 className="text-md font-semibold w-32">Project Name</h1>
                <h1 className="text-md font-semibold w-30">Start Date</h1>
                <h1 className="text-md font-semibold w-30">End Date</h1>
                <h1 className="text-md font-semibold w-28">Overdue day</h1>
              </div>
              {data.length > 0 &&
                data
                  .slice(itemOffset, itemOffset + itemsPerPage)
                  .map((task, index) => (
                    <div
                      key={index}
                      className="mb-3 py-3 flex gap-[6px] border-b space-x-[52px] items-center pr-6"
                    >
                      <div className="ml-5 flex items-center space-x-2 w-[9rem]">
                        <img
                          src="https://picsum.photos/50"
                          alt="Customer"
                          className="w-10 rounded-full h-10"
                        />
                        <div className="text-[#0B3B95]">
                          {task.users[0].name}
                        </div>
                      </div>
                      <div className="px-5 w-32 flex items-center">
                        {task.tittle}
                      </div>
                      <div className="px-5 w-30">{task.startDate}</div>
                      <div className="px-5 w-30">{task.endDate}</div>
                      <div className="w-28 flex items-start justify-between px-2">
                        {calculateOverdueDays(task.endDate) === 0 ? (
                          <p className="text-red-500">Due today!</p>
                        ) : (
                          <p>{calculateOverdueDays(task.endDate)} days</p>
                        )}

                        <svg
                          className=""
                          width="20"
                          height="20"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 16C13 17.654 14.346 19 16 19C17.654 19 19 17.654 19 16C19 14.346 17.654 13 16 13C14.346 13 13 14.346 13 16ZM13 26C13 27.654 14.346 29 16 29C17.654 29 19 27.654 19 26C19 24.346 17.654 23 16 23C14.346 23 13 24.346 13 26ZM13 6C13 7.654 14.346 9 16 9C17.654 9 19 7.654 19 6C19 4.346 17.654 3 16 3C14.346 3 13 4.346 13 6Z"
                            fill="#4BCBEB"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
              <ReactPaginate
                breakLabel="..."
                nextLabel="▶"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={Math.ceil(data.length / itemsPerPage)}
                previousLabel=" ◀"
                renderOnZeroPageCount={null}
                className=" mt-1 flex justify-center "
                previousClassName="border bg-blue-300 rounded-lg  px-2 py-1  cursor-pointer"
                nextClassName="px-2 py-1  cursor-pointer border bg-blue-300 rounded-lg "
                pageClassName=" mx-1 px-3 py-1 rounded-lg  border border-gray-400 cursor-pointer"
                activeClassName="bg-blue-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
