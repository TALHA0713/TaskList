import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "@mui/material";
import axios from "axios"; // Import axios for making HTTP requests
import MyTask from "./Addtask";
import EditTask from "./editTask";
import UpperNavbar from "../Navbar/UpperNavbar";
import SideNavbar from "../Navbar/SideNavbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Task = () => {
  const getTaskBackgroundColor = (endDate) => {
    const endDateTime = new Date(endDate).getTime();
    const currentDateTime = new Date().getTime();
    console.log(currentDateTime);
    const diffTime = endDateTime - currentDateTime;
    const diffInDays = Math.ceil(diffTime / (1000 * 3600 * 24));

    if (diffInDays <= 2) {
      return "bg-red-500";
    } else if (diffInDays <= 7) {
      return "bg-orange-500";
    } else {
      return "bg-green-500";
    }
  };

  const [tasks, setTasks] = useState([]);
  const [showOptions, setShowOptions] = useState({});
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const decodedToken = JSON.parse(token);
        const token1 = decodedToken.token;

        const response = await axios.get("http://localhost:3333/task", {
          headers: {
            Authorization: `Bearer ${token1}`,
          },
        });
        setTasks(response.data); // Set fetched tasks data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleOptions = (taskId) => {
    setShowOptions((prevOptions) => ({
      ...prevOptions,
      [taskId]: !prevOptions[taskId],
    }));
    setSelectedTaskId(taskId);
  };

  const handleDeleteClick = async (taskId) => {
    try {
      const token1 = sessionStorage.getItem("token");
      const decodedToken = JSON.parse(token1);
      const token = decodedToken.token;

      const response = await fetch(`http://localhost:3333/task/${taskId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      console.log(response);
      setTasks(tasks.filter((task) => task._id !== taskId));
      toast.success("Task deleted successfully", { autoClose: 2000 });
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleEditClick = (taskId) => {
    setSelectedTaskId(taskId);
    setOpenModal1(true);
  };

  return (
    <div className="min-h-screen w-screen bg-slate-200">
      <UpperNavbar heading="Notifications" />
      <div className="w-full h-full flex">
        <div id="left-navbar" className="w-[22%] h-full ">
          <SideNavbar />
        </div>

        <div
          id="Right-Side"
          className="w-[78%] h-full flex justify-center mt-5 mb-20 bg-slate-200"
        >
          <div className="w-[90%]rounded border  px-6 py-4">
            {/* Actual Code  */}
            <div className="h-full w-full">
              <div className="w-full">
                <div className="flex justify-between p-1">
                  <div className="p-4 m-2 ">
                    <h2 className=" text-xl pl-1  font-bold">Start date: </h2>

                    <input
                      className=" w-[120%] pl-2 h-10 mt-4 rounded-lg"
                      type="date"
                      placeholder="15-Apr-2024"
                      required
                    ></input>
                  </div>
                  <div className=" p-4 m-2">
                    <h2 className="text-xl pl-1  font-bold">End date: </h2>
                    <input
                      className=" w-[120%] pl-2 h-10 mt-4 rounded-lg"
                      type="date"
                      placeholder="15-Apr-2024"
                      required
                    ></input>
                  </div>
                  <div className=" p-4   m-10 ml-auto">
                    <button
                      onClick={() => setOpenModal(true)}
                      className="bg-blue-400 text-white font-bold py-2 px-9 mr-[60px] rounded-md"
                    >
                      + Add Task
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-full flex flex-col pl-8">
                <div className="mb-4">
                  <h4 className="text-xl pl-1 font-bold">Enter Tittle</h4>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-[23%] mt-3 border-gray-300 rounded-l-lg border-r-0 pl-2 h-[40px]"
                  />
                  <button className="bg-blue-500 h-[25%] pt-[10px] px-10 py-2 rounded-r-lg text-white">
                    Search
                  </button>
                </div>
              </div>

              <div className="pt-5 pl-3">
                <div className=" grid grid-cols-3 gap-3">
                  {tasks.map((task, index) => (
                    <div
                      key={task._id}
                      className={`rounded-t-xl ${getTaskBackgroundColor(
                        task.endDate
                      )}`} // Apply conditional background color based on remaining days
                    >
                      <div className="h-8 grow "></div>
                      <div className="p-4 relative bg-white">
                        <h1 className="text-lg font-bold">Title</h1>
                        <h3>{task.tittle}</h3>
                        <h1 className="text-lg font-bold">Description</h1>
                        <p className="text-gray-500">{task.description}</p>
                        <div className="mt-4">
                          <h4 className="text-lg font-bold">Attachment:</h4>
                          <img
                            src={`https://picsum.photos/200/300?random=${Math.floor(
                              Math.random() * 1000
                            )}`}
                            alt="Attachment"
                            className="mt-2 h-40 w-[24rem]"
                          />
                          <div className="flex mt-3 justify-between">
                            <div className="flex flex-col">
                              <div className="mb-2 space-y-2">
                                <p className="text-md font-bold">Start Date</p>
                                <p className="text-sm">{task.startDate}</p>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <div className="mb-2 space-y-2">
                                <p className="text-md font-bold">End Date</p>
                                <p className="text-sm">{task.endDate}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span
                          className="text-[#4BCBEB] hover:bg-gray-50 cursor-pointer absolute top-2 right-6"
                          onClick={() => toggleOptions(task._id)}
                        >
                          <FontAwesomeIcon
                            className="h-[30px]"
                            icon={faEllipsisV}
                          />
                          {showOptions[task._id] &&
                            selectedTaskId === task._id && (
                              <div
                                className="absolute  right-3 mt-2 w-[100px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                              >
                                <div className="py-1 font-bold" role="none">
                                  <button
                                    className=" px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full flex justify-between items-center"
                                    role="menuitem"
                                    onClick={() => handleDeleteClick(task._id)}
                                  >
                                    <img src="delete.png" alt="delete" />
                                    <span>Delete</span>
                                  </button>

                                  <button
                                    className=" px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full flex"
                                    role="menuitem"
                                    onClick={() => handleViewClick(task.id)}
                                  >
                                    <img src="eye.png" alt="delete" />
                                    <span className="ml-[15px]">View</span>
                                  </button>

                                  <button
                                    className=" px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full flex "
                                    role="menuitem"
                                    onClick={() => handleEditClick(task._id)}
                                  >
                                    <img src="edit.png" alt="delete" />
                                    <span className="ml-[15px]">Edit</span>
                                  </button>
                                </div>
                              </div>
                            )}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Modal
                className="overflow-auto w-[50vw] mx-auto no-scrollbar"
                open={openModal}
                onClose={() => setOpenModal(false)}
              >
                <div>
                  <MyTask />
                </div>
              </Modal>

              <Modal
                className="overflow-auto w-[50vw] mx-auto no-scrollbar"
                open={openModal1}
                onClose={() => setOpenModal1(false)}
              >
                <div>
                  <EditTask taskId={selectedTaskId} />
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" style={{ marginTop: "5rem" }} />
    </div>
  );
};

export default Task;
