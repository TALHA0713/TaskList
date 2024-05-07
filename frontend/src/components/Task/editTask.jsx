import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditTask = ({ taskId }) => {
  const [taskData, setTaskData] = useState({
    tittle: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const decodedToken = JSON.parse(token);
        const token1 = decodedToken.token;

        const response = await axios.get(
          `http://localhost:3333/task/${taskId}`,
          {
            headers: {
              Authorization: `Bearer ${token1}`,
            },
          }
        );

        if (!response.data) {
          throw new Error("Failed to fetch task details");
        }

        const taskDetails = response.data;

        setTaskData({
          tittle: taskDetails.tittle || "",
          description: taskDetails.description || "",
          startDate: taskDetails.startDate || "",
          endDate: taskDetails.endDate || "",
        });
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };

    fetchTaskData();
  }, [taskId]);

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("token");
      const decodedToken = JSON.parse(token);
      const token1 = decodedToken.token;
      const arrayToken = token1.split(".");
      const tokenPayload = JSON.parse(atob(arrayToken[1]));
      const userId = tokenPayload.id;

      console.log(taskData);
      const response = await axios.patch(
        `http://localhost:3333/task/${taskId}`,
        {
          ...taskData,
          users: [userId],
        },
        {
          headers: {
            Authorization: `Bearer ${token1}`,
          },
        }
      );

      if (!response.data) {
        throw new Error("Failed to update task");
      }

      setTimeout(() => {
        toast.success("Task updated successfully", { autoClose: 2000 });
      }, 2000);
      window.location.href = "/task";

      console.log("Task updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded overflow-hidden shadow-lg mt-10">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 justify-center text-center">
          Edit Task
        </div>

        <form onSubmit={handleUpdateTask}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tittle"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tittle"
              type="text"
              placeholder="Enter title"
              value={taskData.tittle}
              onChange={(e) =>
                setTaskData({ ...taskData, tittle: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded-lg w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sticky top-0"
              id="description"
              placeholder="Enter description"
              value={taskData.description}
              onChange={(e) =>
                setTaskData({ ...taskData, description: e.target.value })
              }
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="startDate"
            >
              Start Date
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="startDate"
              type="date"
              value={taskData.startDate}
              onChange={(e) =>
                setTaskData({ ...taskData, startDate: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="endDate"
            >
              End Date
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="endDate"
              type="date"
              value={taskData.endDate}
              onChange={(e) =>
                setTaskData({ ...taskData, endDate: e.target.value })
              }
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" style={{ marginTop: "3rem" }} />
    </div>
  );
};

export default EditTask;
