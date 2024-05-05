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

function Forget() {
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
      email: "",
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
          src="/reset-pass.png"
          alt="image"
          className="w-full h-[80%] object-contain max-w-full max-h-full"
        />
      </div>

      {/*==== Right Side ====*/}

      <form
        className="w-[50%] h-full bg-white grid place-content-center"
        onSubmit={handleSubmit}
      >
        <div className="max-w-screen-lg h-[100%] w-[30vw]">
          <h1 className="text-2xl font-bold">Reset Your Password</h1>
          <p className="font-light mt-2 mb-8 text-gray-500 whitespace-normal">
            Enter the email which associated with you account and we will send
            you a link to reset your password
          </p>

          <div className="space-y-6">
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
                <p className="error text-red-500 mt-2 text-sm">
                  {errors.email}
                </p>
              )}
              <img
                src="/mail.svg"
                alt=""
                className="absolute top-0 left-3 mt-4"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[400px]  h-12 bg-cyan-400 rounded-lg text-white text-xl font-bold"
            >
              Continue
            </button>

            <p className="text-med text-gray-600 justify-center text-center">
              <a href="/login" className="text-blue-500 font-bold">
                Back to Sign In
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Forget;
