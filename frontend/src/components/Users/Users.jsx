import React from "react";
import UpperNavbar from "../Navbar/UpperNavbar";
import SideNavbar from "../Navbar/SideNavbar";

<<<<<<< HEAD
const Users = () => {
=======


const Users = () => {

>>>>>>> f067329dcc534b07a3dee4fecdebf4f3d80b8c62
  const data = [
    {
      CustomerName: "John Doe",
      ProjectName: "Alpha",
      startDate: "05-01-24",
      endDate: "07-01-24",
      overDue: "1 day",
      customerImage: "https://picsum.photos/50",
    },
    {
      CustomerName: "Jane Smith",
      ProjectName: "Beta",
      startDate: "10-02-24",
      endDate: "15-02-24",
      overDue: "1 days",
      customerImage: "https://picsum.photos/50",
    },
    {
      CustomerName: "Alice Johnson",
      ProjectName: "Gamma",
      startDate: "20-03-24",
      endDate: "25-03-24",
      overDue: "1 days",
      customerImage: "https://picsum.photos/50",
    },
<<<<<<< HEAD
  ];

  return (
    <div className="min-h-screen w-screen bg-slate-200">
      <UpperNavbar heading="Users" />
      <div className="w-full h-full flex">
=======
    {
      CustomerName: "John Doe",
      ProjectName: "Alpha",
      startDate: "05-01-24",
      endDate: "07-01-24",
      overDue: "1 day",
      customerImage: "https://picsum.photos/50",
    },
    {
      CustomerName: "Jane Smith",
      ProjectName: "Beta",
      startDate: "10-02-24",
      endDate: "15-02-24",
      overDue: "2 days",
      customerImage: "https://picsum.photos/50",
    },
    {
      CustomerName: "Alice Johnson",
      ProjectName: "Gamma",
      startDate: "20-03-24",
      endDate: "25-03-24",
      overDue: "3 days",
      customerImage: "https://picsum.photos/50",
    },
    {
      CustomerName: "Alice Johnson",
      ProjectName: "Gamma",
      startDate: "20-03-24",
      endDate: "25-03-24",
      overDue: "3 days",
      customerImage: "https://picsum.photos/50",
    },
    {
      CustomerName: "Alice Johnson",
      ProjectName: "Gamma",
      startDate: "20-03-24",
      endDate: "25-03-24",
      overDue: "3 days",
      customerImage: "https://picsum.photos/50",
    },
    {
      CustomerName: "Alice Johnson",
      ProjectName: "Gamma",
      startDate: "20-03-24",
      endDate: "25-03-24",
      overDue: "3 days",
      customerImage: "https://picsum.photos/50",
    },
  ];

  return (

    <div className="min-h-screen w-screen bg-slate-200">
      <UpperNavbar heading="Users"/>
      <div className="w-full h-full flex">

>>>>>>> f067329dcc534b07a3dee4fecdebf4f3d80b8c62
        <div id="left-navbar" className="w-[22%] h-full ">
          <SideNavbar />
        </div>

<<<<<<< HEAD
        <div
          id="Right-Side"
          className="w-[78%] h-full flex justify-center mt-8 mb-20"
        >
          <div className="w-[90%] bg-white rounded border border-sky-400 px-6 py-3">
            {/* Actual Code */}
            <div className="w-full h-full">
              <h1 className=" pt-6 pb-10 font-bold text-2xl ">Online User</h1>

              <div className="ml-5 pl-5 mb-5 flex gap-[86px]">
                <h1 className="text-md font-semibold">Customer Name</h1>
                <h1 className="text-md font-semibold">Project Name</h1>
                <h1 className="text-md font-semibold">Start Date</h1>
                <h1 className="text-md font-semibold">End Date</h1>
                <h1 className="text-md font-semibold">Overdue day</h1>
              </div>
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mb-3 py-3 flex border-b space-x-[52px] items-center justify-between pr-4"
                  >
                    <div className="ml-5 flex items-center space-x-2 w-[9rem]">
                      <img
                        src={item.customerImage}
                        alt="Customer"
                        className="w-10 rounded-full h-10"
                      />
                      <div className="text-[#0B3B95]">{item.CustomerName}</div>
                    </div>
                    <div className="px-5 w-32 flex items-center">
                      {item.ProjectName}
                    </div>
                    <div className="px-5 w-30">{item.startDate}</div>
                    <div className="px-5 w-30">{item.endDate}</div>
                    <div className="w-28 flex items-start justify-between px-2">
                      {item.overDue}
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
=======
        <div id="Right-Side" className="w-[78%] h-full flex justify-center my-20 bg-slate-200">
          <div className="w-[90%] bg-white rounded border border-sky-400 px-6 py-4">
          
          {/* Actual Code */}
          <div className="w-full h-full">
      <h1 className="pb-10 font-bold text-2xl text-center">Online User</h1>

      <div className="ml-5 mb-5 flex gap-[86px]">
        <h1 className="text-md font-semibold">Customer Name</h1>
        <h1 className="text-md font-semibold">Project Name</h1>
        <h1 className="text-md font-semibold">Start Date</h1>
        <h1 className="text-md font-semibold">End Date</h1>
        <h1 className="text-md font-semibold">Overdue day</h1>
      </div>
      {data.map((item, index) => {
        return (
          <div key={index} className="mb-3 py-3 flex border-b space-x-[52px] items-center justify-between pr-4">
            <div className="ml-5 flex items-center space-x-2 w-[9rem]">
              <img
                src={item.customerImage}
                alt="Customer"
                className="w-10 rounded-full h-10"
              />
              <div className="text-[#0B3B95]">{item.CustomerName}</div>
            </div>
            <div className="px-5 w-32 flex items-center">{item.ProjectName}</div>
            <div className="px-5 w-30">{item.startDate}</div>
            <div className="px-5 w-30">{item.endDate}</div>
            <div className="w-28 flex items-start justify-between px-2">
              {item.overDue}
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
        );
      })}
    </div>
            
          </div>
        </div>
      </div>
      
    </div>

    
>>>>>>> f067329dcc534b07a3dee4fecdebf4f3d80b8c62
  );
};

export default Users;
