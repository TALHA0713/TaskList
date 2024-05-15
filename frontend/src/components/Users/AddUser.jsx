import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTask = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmitForm = async (values, { setSubmitting, resetForm }) => {
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

      const responseBody = await response.json();
      if (!response.ok) {
        if (responseBody.statusCode === 409) {
          toast.error("Email already exists", { autoClose: 2000 });
        }
        return;
      }

      setTimeout(() => {
        toast.success("Register Account Successfully", { autoClose: 1000 });
        resetForm();
        window.location.href = "/users";
      }, 1000);
    } catch (error) {
      toast.error("Something went wrong. Try again later.", {
        autoClose: 2000,
      });
      console.error("There was a problem with the POST request:", error);
    } finally {
      setSubmitting(false);
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

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <div className="max-w-lg mx-auto bg-white rounded overflow-hidden shadow-lg mt-10">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 justify-center text-center">
          Add User
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.name && touched.name ? "border-red-500" : ""
              }`}
              id="name"
              type="text"
              name="name"
              placeholder="Enter name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <p className="text-red-500 text-xs italic">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email && touched.email ? "border-red-500" : ""
              }`}
              id="email"
              type="email"
              name="email"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password && touched.password ? "border-red-500" : ""
              }`}
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Add User"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" style={{ marginTop: "3rem" }} />
    </div>
  );
};

export default AddTask;
