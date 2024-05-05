import React from "react";

const AddTask = () => {
  return (
    <div class="max-w-lg mx-auto bg-white rounded overflow-hidden shadow-lg mt-10">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 justify-center text-center">
          Add Task
          <div className="font-light text-sm">
            Fill the information below to add new task as per your requirements
          </div>
        </div>

        <form>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="title"
            >
              Title
            </label>
            <input
              class="shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter title"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="description"
            >
              Description
              <span className="font-light text-sm text-light-gray">
                (up to 255 character)
              </span>
            </label>
            <textarea
              class="shadow appearance-none border rounded-lg w-full py-10  text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-top"
              id="description"
              placeholder="Enter description"
            ></textarea>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="attachment"
            >
              Attachment
            </label>
            <input
              type="file"
              class="shadow appearance-none border rounded-lg w-full py-10 px-[105px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="attachment"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="start-date"
            >
              Start Date
            </label>
            <div class="relative">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="start-date"
                type="date"
                placeholder="Select start date"
              />
            </div>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="end-date"
            >
              End Date
            </label>
            <div class="relative">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="end-date"
                type="date"
                placeholder="Select end date"
              />
            </div>
          </div>
          <div class="flex items-center justify-center">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
