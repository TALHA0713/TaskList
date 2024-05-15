import React from "react";
import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import RouterLayout from "./RouterLayout.jsx";
import "./App.css";
import {
  Login,
  Signup,
  Forget,
  Reset,
  Notification,
  Home,
  Task,
  AddTask,
  Users,
} from "./components";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"} element={<RouterLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Task" element={<Task />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/notify" element={<Notification />} />
        <Route path="/users" element={<Users />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/Reset" element={<Reset />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
