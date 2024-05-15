import React, { useEffect, useState } from "react";
import axios from "axios";
import UpperNavbar from "../Navbar/UpperNavbar";
import SideNavbar from "../Navbar/SideNavbar";
import ReactPaginate from "react-paginate";
import { Modal } from "@mui/material";
import AddTask from "./AddUser";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Users = () => {
  const [data, setData] = useState([]);
  const [showOptions, setShowOptions] = useState({});
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [openModal1, setOpenModal1] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = sessionStorage.getItem("token");
        if (!token) {
          console.error("No token found in session storage.");
          window.location.href = "/login";
        }

        const decodedToken = JSON.parse(token);
        const token1 = decodedToken.token;

        const response = await axios.get("http://localhost:3333/users", {
          headers: {
            Authorization: `Bearer ${token1}`,
          },
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

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

      // console.log(taskId);
      const response = await fetch(`http://localhost:3333/users/${taskId}`, {
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

  const handleAddClick = () => {
    setOpenModal(true);
  };

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="min-h-screen bg-slate-200 w-full">
      <UpperNavbar heading="Users" />
      <div className="w-full h-full flex">
        <div id="left-navbar" className="w-[22%] h-full">
          <SideNavbar />
        </div>

        {!loading && (
          <div className="w-full mx-12 h-screen flex flex-grow my-16">
            <div className="bg-white rounded border border-sky-400 ml-[88px] px-6 py-3 relative">
              <div className="w-full">
                <h1 className="pt-6 pb-10 font-bold text-2xl">
                  Users{" "}
                  <button
                    className="justify-between pl-96 inline-block"
                    onClick={() => handleAddClick()}
                  >
                    Add User
                  </button>
                </h1>

                <div className="max-h-[calc(100vh-200px)] overflow-auto">
                  <table className="w-full">
                    <thead className="text-left">
                      <tr className="border-b">
                        <th className="py-3 px-4 w-[25%]">User Name</th>
                        <th className="py-3 px-4 w-[35%]">Email</th>
                        <th className="py-3 px-4 w-[25%]">Created At</th>
                        <th className="py-3 px-4 w-[15%]">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.length > 0 &&
                        data
                          .slice(itemOffset, itemOffset + itemsPerPage)
                          .map((task, index) => (
                            <tr key={index} className="border-b">
                              <td className="py-3 px-4">
                                <div className="flex items-center">
                                  <img
                                    src="https://picsum.photos/50"
                                    alt="Customer"
                                    className="rounded-full h-10 mr-2"
                                  />
                                  <span className="text-[#0B3B95]">
                                    {task.name}
                                  </span>
                                </div>
                              </td>
                              <td className="py-3 px-4">{task.email}</td>
                              <td className="py-3 px-4">
                                {formatDate(task.createdAt)}
                              </td>
                              <td className="py-3 px-4">
                                <div className="flex items-center justify-between">
                                  <button
                                    className="mr-2 focus:outline-none"
                                    onClick={() => toggleOptions(task._id)}
                                  >
                                    <svg
                                      className="fill-current text-[#4BCBEB] w-5 h-5 cursor-pointer"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 32 32"
                                    >
                                      <path d="M13 16C13 17.654 14.346 19 16 19C17.654 19 19 17.654 19 16C19 14.346 17.654 13 16 13C14.346 13 13 14.346 13 16ZM13 26C13 27.654 14.346 29 16 29C17.654 29 19 27.654 19 26C19 24.346 17.654 23 16 23C14.346 23 13 24.346 13 26ZM13 6C13 7.654 14.346 9 16 9C17.654 9 19 7.654 19 6C19 4.346 17.654 3 16 3C14.346 3 13 4.346 13 6Z" />
                                    </svg>
                                  </button>
                                  {showOptions[task._id] &&
                                    selectedTaskId === task._id && (
                                      <div className="relative">
                                        <div className="absolute right-0 mt-2 w-[160px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                          <div className="py-1 font-bold">
                                            <button
                                              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full flex items-center focus:outline-none"
                                              onClick={() =>
                                                handleDeleteClick(task._id)
                                              }
                                            >
                                              <img
                                                src="delete.png"
                                                alt="delete"
                                                className="mr-2"
                                              />
                                              <span>Delete</span>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                </div>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>

                  <Modal
                    className="overflow-auto w-[50vw] mx-auto no-scrollbar"
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                  >
                    <div>
                      <AddTask />
                    </div>
                  </Modal>
                </div>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={Math.ceil(data.length / itemsPerPage)}
                  previousLabel=" <"
                  renderOnZeroPageCount={null}
                  className="mt-1 flex justify-center absolute bottom-0 left-0 right-0"
                  previousClassName="mx-1 rounded-lg px-2 py-1 cursor-pointer"
                  nextClassName="mx-1 rounded-lg px-2 py-1 cursor-pointer"
                  pageClassName="mx-1 rounded-lg cursor-pointer"
                  activeClassName="text-red-700"
                  containerClassName="flex justify-center w-full absolute bottom-4"
                />
              </div>
            </div>
          </div>
        )}
        {loading && (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </div>
    </div>
  );
};

export default Users;
