import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTask = () => {
  const [formData, setFormData] = useState({
    tittle: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    const token1 = sessionStorage.getItem("token");
    const decodedToken = JSON.parse(token1);
    const token = decodedToken.token;
    const arrayToken = token.split(".");
    const tokenPayload = JSON.parse(atob(arrayToken[1]));
    const userId = tokenPayload.id.toString();

    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          users: userId,
        }),
      };

      console.log(requestOptions);

      const response = await fetch(
        "http://localhost:3333/task",
        requestOptions
      );
      const data = await response.json();
      window.location.href = "/Task";

      console.log(data);
      // console.log("Task added successfully:", data);

      setFormData({
        tittle: "",
        description: "",
        startDate: "",
        endDate: "",
      });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded overflow-hidden shadow-lg mt-10">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 justify-center text-center">
          Add Task
          <div className="font-light text-sm">
            Fill the information below to add a new task as per your
            requirements
          </div>
        </div>

        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tittle"
            >
              Tittle
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="tittle"
              type="text"
              name="tittle"
              placeholder="Enter tittle"
              value={formData.tittle}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
              <span className="font-light text-sm text-light-gray">
                (up to 255 characters)
              </span>
            </label>

            <textarea
              className="description-input shadow appearance-none border rounded-lg w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              id="description"
              name="description"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
              maxLength={255}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="attachment"
            >
              Attachment
            </label>

            <input
              type="file"
              className="shadow appearance-none border rounded-lg w-full py-10 px-[105px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="attachment"
            />
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
              name="startDate"
              placeholder="Select Start Date"
              value={formData.startDate}
              onChange={handleChange}
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
              name="endDate"
              placeholder="Select End Date"
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" style={{ marginTop: "3rem" }} />
    </div>
  );
};

export default AddTask;
