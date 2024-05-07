import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import "react-calendar/dist/Calendar.css";

const Firstpage = () => {
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.error("No token found in session storage.");
      window.location.href = "/login";
    }
  }, []);

  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };
  const [selectedOption, setSelectedOption] = useState("Weekly");
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const state = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    datasets: [
      {
        label: "Class Strength",
        backgroundColor: [
          "#4BCBEB",
          "#4BCBEB",
          "#4BCBEB",
          "#4BCBEB",
          "#4BCBEB",
          "#4BCBEB",
          "#4BCBEB",
        ],
        fill: false,
        lineTension: 0.5,
        borderColor: "#4BCBEB",
        borderWidth: 2,
        data: [10, 500, 1000, 2000, 2500, 5000],
      },
    ],
  };

  return (
    <div className="bg-white rounded-md m-1">
      <h1 className="px-6 font-bold text-2xl">Analytics</h1>

      <section className="  grid grid-cols-4 ">
        <div className=" bg-[#F4F2FF]  m-4 rounded-2xl  p-4">
          <h1 className=" pb-3 font-medium">Total Task</h1>
          <div className="mb-1 text-xl font-medium text-[#64748B]  pb-2">
            90/100
          </div>
          <div className="w-full bg-gray-200  h-5 mb-4 ">
            <div className="bg-[#4BCBEB] h-5   w-4/5"></div>
          </div>
        </div>

        <div className=" bg-[#E2EFFC]  m-4 rounded-2xl p-4">
          <h1 className=" pb-3 font-medium">Completed Task</h1>
          <div className="mb-1 text-xl font-medium text-[#64748B] pb-2">
            60/100
          </div>
          <div className="w-full bg-gray-200  h-5 mb-4">
            <div className="bg-[#5CB85C] h-5  w-3/5"></div>
          </div>
        </div>

        <div className=" bg-[#FBEDD2]  m-4 rounded-2xl p-4">
          <h1 className=" pb-3 font-medium">Pending Task</h1>
          <div className="mb-1 text-xl font-medium text-[#64748B] pb-2">
            24/100
          </div>
          <div className="w-full bg-gray-200  h-5 mb-4 ">
            <div className="bg-[#F0AD4E] h-5   w-2/5"></div>
          </div>
        </div>

        <div className=" bg-[#E0F6F4]  m-4 rounded-2xl p-4">
          <h1 className=" pb-3 font-medium"> Decline Task</h1>
          <div>
            <div className="mb-1 text-xl font-medium text-[#64748B] pb-2">
              6/100
            </div>
            <div className="w-full bg-gray-200  h-5 mb-4 ">
              <div className="bg-[#F0AD4E] h-5   w-1/5"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 m-10">
        {/* Left Side */}
        <div className="flex-1 p-4 relative">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold pb-10">Total Task Ratio</h1>
            <span className="absolute right-6 top-5 dropdownbutton text-[#4BCBEB] text-xl font-bold">
              <select value={selectedOption} onChange={handleSelectChange}>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Daily">Daily</option>
              </select>
            </span>
          </div>

          <div className="w-full h-96">
            <Line
              data={state}
              options={{
                scales: {
                  x: {
                    display: true,
                    title: {
                      display: true,
                    },
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    display: true,
                    title: {
                      display: true,
                    },
                    grid: {
                      display: true,
                      color: "rgba(0, 0, 0, 0.1)", // Color for grid lines
                    },
                    ticks: {
                      beginAtZero: false,
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false, // Hide legend
                  },
                  filler: {
                    propagate: false, // Don't fill area under line
                  },
                },
                responsive: true,
              }}
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 p-4 relative">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
          {/* <Calendar className="w-full h-full" /> */}
        </div>
      </section>
    </div>
  );
};

export default Firstpage;
