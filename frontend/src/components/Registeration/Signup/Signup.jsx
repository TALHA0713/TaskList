import { useFormik } from "formik";
import { basicSchema } from "../../../schemas/Login-Validation.js";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function Signup() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <div className={"w-[100vw] h-[100vh] bg-white text-slate-900 flex"}>
      {/*==== Left Side ====*/}
      <div className="w-[50%]  bg-cyan-400 relative">
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

      {/*==== Right Side ====*/}

      <form
        className="w-[50%] h-full bg-white grid place-content-center space-y-8"
        onSubmit={handleSubmit}
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
              value={values.name}
              onChange={handleChange}
              placeholder="Enter Your Full Name"
              className="w-[400px] h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 pl-10"
            />
            <img
              src="/user.svg"
              alt=""
              className="absolute top-0 left-3 mt-3"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              className={
                "w-[400px] h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 pl-10" +
                (errors.email && touched.email ? " input-error" : "")
              }
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="error text-red-500 mt-2 text-sm">{errors.email}</p>
            )}
            <img
              src="/mail.svg"
              alt=""
              className="absolute top-0 left-3 mt-4"
            />
          </div>

          <div className="relative">
            <input
              type={type}
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              className={
                "w-[400px] h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 pl-10 pr-10" +
                (errors.password && touched.password ? "input-error" : "")
              }
            />
            {errors.password && touched.password && (
              <p className="error  text-red-500 text-sm mt-2">
                {errors.password}
              </p>
            )}
            <span
              class="flex justify-around items-center"
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

          <div className="flex items-center mt-[-8px]">
            <input type="checkbox" className="mr-1" />
            <p className="text-sm mt-4 text-gray-600 max-w-[400px] font-light">
              By creating an account means you agree to the{" "}
              <span className="font-semibold"> Terms & Conditions</span> and our{" "}
              <span className="font-semibold">Privacy and Policy</span>{" "}
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
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
    </div>
  );
}

export default Signup;
