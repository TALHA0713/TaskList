import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "@mui/material";
import MyTask from "./Addtask";

import UpperNavbar from "../Navbar/UpperNavbar";
import SideNavbar from "../Navbar/SideNavbar";

const Task = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", // Sample image URL
      startDate: "2024-04-19",
      endDate: "2024-04-30",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", // Sample image URL
      startDate: "2024-04-20",
      endDate: "2024-05-01",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200",
      startDate: "2024-04-20",
      endDate: "2024-05-01",
    },
  ]);

  const [showOptions, setShowOptions] = useState({});
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const toggleOptions = (taskId) => {
    setShowOptions((prevOptions) => ({
      ...prevOptions,
      [taskId]: !prevOptions[taskId],
    }));
    setSelectedTaskId(taskId);
  };

  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleEditClick = (taskId) => {
    setSelectedTaskId(taskId);
    setShowEditForm(true);
  };

  const handleAddClick = (taskId) => {
    setSelectedTaskId(taskId);
    setShowForm(true);
  };
  const handleDeleteClick = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const [openModal, setOpenModal] = useState(false);
  return (
<<<<<<< HEAD
    <div className="min-h-screen w-screen bg-slate-200">
      <UpperNavbar heading="Notifications" />
      <div className="w-full h-full flex">
=======

    <div className="min-h-screen w-screen bg-slate-200">
      <UpperNavbar heading="Notifications"/>
      <div className="w-full h-full flex">

>>>>>>> f067329dcc534b07a3dee4fecdebf4f3d80b8c62
        <div id="left-navbar" className="w-[22%] h-full ">
          <SideNavbar />
        </div>

<<<<<<< HEAD
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
                      Add Task
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
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className=" rounded-lg shadow-md flex flex-col"
                    >
                      <div className="h-8 grow rounded-t-xl bg-pink-300"></div>
                      <div className="p-4 relative bg-white">
                        <h1 className="text-lg font-bold">Title</h1>
                        <h3>{task.title}</h3>
                        <h1 className="text-lg font-bold">Description</h1>
                        <p className="text-gray-500">{task.description}</p>
                        <div className="mt-4">
                          <h4 className="text-lg font-bold">Attachment:</h4>
                          <img
                            src={task.image}
                            alt="Attachment"
                            className="mt-2  h-40 w-80"
                          />
                          <div className="flex mt-3 justify-between">
                            <div className="flex flex-col">
                              <div className="mb-2 space-y-2">
                                <p className="text-md font-bold ">Start Date</p>
                                <p className="text-sm">{task.startDate}</p>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <div className="mb-2 space-y-2">
                                <p className="text-md font-bold ">Start Date</p>
                                <p className="text-sm">{task.startDate}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span
                          className="text-[#4BCBEB] hover:bg-gray-50 cursor-pointer absolute top-2 right-6"
                          onClick={() => toggleOptions(task.id)}
                        >
                          <FontAwesomeIcon icon={faEllipsisV} />
                          {showOptions[task.id] &&
                            selectedTaskId === task.id && (
                              <div
                                className="absolute right-3 mt-2 w-[100px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                              >
                                <div className="py-1 font-bold" role="none">
                                  <button
                                    className=" px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full flex justify-between items-center"
                                    role="menuitem"
                                    onClick={() => handleDeleteClick(task.id)}
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
                                    onClick={() => handleEditClick(task.id)}
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
            </div>
          </div>
        </div>
      </div>
    </div>
=======
        <div id="Right-Side" className="w-[78%] h-full flex justify-center my-20 bg-slate-200">
          <div className="w-[90%] bg-white rounded border border-sky-400 px-6 py-4">

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
              Add Task
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
          {tasks.map((task) => (
            <div key={task.id} className=" rounded-lg shadow-md flex flex-col">
              <div className="h-8 grow rounded-t-xl bg-pink-300"></div>
              <div className="p-4 relative bg-white">
                <h1 className="text-lg font-bold">Title</h1>
                <h3>{task.title}</h3>
                <h1 className="text-lg font-bold">Description</h1>
                <p className="text-gray-500">{task.description}</p>
                <div className="mt-4">
                  <h4 className="text-lg font-bold">Attachment:</h4>
                  <img
                    src={task.image}
                    alt="Attachment"
                    className="mt-2  h-40 w-80"
                  />
                  <div className="flex mt-3 justify-between">
                    <div className="flex flex-col">
                      <div className="mb-2 space-y-2">
                        <p className="text-md font-bold ">Start Date</p>
                        <p className="text-sm">{task.startDate}</p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="mb-2 space-y-2">
                        <p className="text-md font-bold ">Start Date</p>
                        <p className="text-sm">{task.startDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  className="text-[#4BCBEB] hover:bg-gray-50 cursor-pointer absolute top-2 right-6"
                  onClick={() => toggleOptions(task.id)}
                >
                  <FontAwesomeIcon icon={faEllipsisV} />
                  {showOptions[task.id] && selectedTaskId === task.id && (
                    <div
                      className="absolute right-3 mt-2 w-[100px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div className="py-1 font-bold" role="none">
                        <button
                          className=" px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full flex justify-between items-center"
                          role="menuitem"
                          onClick={() => handleDeleteClick(task.id)}
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
                          onClick={() => handleEditClick(task.id)}
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
    </div>
            

          </div>
        </div>
      </div>
      
    </div>


    
>>>>>>> f067329dcc534b07a3dee4fecdebf4f3d80b8c62
  );
};

export default Task;
