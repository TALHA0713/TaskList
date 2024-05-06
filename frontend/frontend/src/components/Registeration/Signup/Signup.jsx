import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleSubmitForm = async (values) => {
    try {
      const formData = {
        ...values,
        status: "ACTIVE",
        role: "CLIENT",
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      };
      const response = await fetch(
        "http://localhost:3333/auth/sign-up",
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      formik.resetForm();
      toast.success("User registered successfully!", { autoClose: 1000 });
      setTimeout(() => {
        window.location.href = "/login";
      }, 2100);
    } catch (error) {
      toast.error("Email already exists", { autoClose: 2000 });
      console.error("There was a problem with the POST request:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmitForm,
  });

  const handleToggle = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
    setIcon((prevIcon) => (prevIcon === eyeOff ? eye : eyeOff));
  };

  return (
    <div className="w-full h-screen bg-white text-slate-900 flex">
      {/* Left Side */}
      <div className="w-1/2 bg-cyan-400 relative">
        <div className="mt-10 flex items-center justify-center">
          <img src="/Task.png" alt="Task List" className="inline-block" />
          <h2 className="text-white font-bold leading-4 text-3xl inline-block">
            Task List Manager
          </h2>
        </div>
        <img
          src="/Illustration.png"
          alt="image"
          className="w-full h-[70%] object-contain max-w-full max-h-full"
        />
      </div>

      {/* Right Side */}
      <form
        className="w-1/2 h-full bg-white grid place-content-center space-y-8"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-2xl font-bold space-y-10">
          Sign Up for an Account
        </h1>
        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Your Full Name"
              className="w-[400px] h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 pl-10"
            />
            <img
              src="/user.svg"
              alt=""
              className="absolute top-0 left-3 mt-3"
            />
          </div>
          {formik.touched.name && formik.errors.name && (
            <p className="error text-red-500 mt-2 text-sm">
              {formik.errors.name}
            </p>
          )}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
              className={
                "w-[400px] h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 pl-10" +
                (formik.errors.email && formik.touched.email
                  ? " input-error"
                  : "")
              }
            />
            <img
              src="/mail.svg"
              alt=""
              className="absolute top-0 left-3 mt-4"
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <p className="error text-red-500 mt-2 text-sm">
              {formik.errors.email}
            </p>
          )}
          <div className="relative">
            <input
              type={type}
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
              className={
                "w-[400px] h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 pl-10 pr-10" +
                (formik.errors.password && formik.touched.password
                  ? " input-error"
                  : "")
              }
            />
            <span
              className="flex justify-around items-center"
              onClick={handleToggle}
            >
              <Icon
                className="absolute mt-3 top-0 right-8 cursor-pointer"
                icon={icon}
                size={25}
              />
            </span>
            <img
              src="/lock.svg"
              alt=""
              className="absolute top-0 left-3 mt-3"
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <p className="error text-red-500 mt-2 text-sm">
              {formik.errors.password}
            </p>
          )}
          <div className="flex items-center mt-[-8px]">
            <input type="checkbox" className="mr-1" />
            <p className="text-sm mt-4 text-gray-600 max-w-[400px] font-light">
              By creating an account means you agree to the{" "}
              <span className="font-semibold">Terms & Conditions</span> and our{" "}
              <span className="font-semibold">Privacy and Policy</span>
            </p>
          </div>
          <button
            type="submit"
            className="w-[400px] h-12 bg-cyan-400 rounded-lg text-white text-xl font-bold"
          >
            Sign Up
          </button>
          <p className="text-med text-gray-600 justify-center text-center">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 font-bold">
              Log in
            </a>
          </p>
        </div>
      </form>
      <ToastContainer position="top-right" style={{ marginTop: "1rem" }} />
    </div>
  );
}

export default Signup;
