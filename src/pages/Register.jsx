import React, { useState } from "react";
import main_bg from "../images/signup-bg.svg";
import design from "../images/Elipce Group.svg";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Registration data:", formData);
  };
  return (
    <div
      className="min-h-screen  justify-center items-center p-[1.8rem] bg-white flex"
      style={{ background: "linear-gradient(45deg, #fbfbfb, #adaca3)" }}
    >
      <div className=" w-full  grid grid-cols-7 rounded-2xl shadow-2xl relative ">
        <div className="sm:col-span-4 lg:col-span-5 rounded-l-2xl overflow-hidden sm:block hidden ">
          <img src={main_bg} alt="bg-img" className=" " />
        </div>
        <div className="sm:col-span-3 rounded-none sm:rounded-r-2xl lg:col-span-2 md:p-7 col-span-7 bg-white flex justify-center items-center relative ">
          {/* <div className="h-auto w-full bg-white px-6 py-8"> */}
          <form
            className=" flex flex-col justify-center items-center relative  h-full shadow-lg rounded  w-full px-6 py-8 "
            onSubmit={handleSubmit}
          >
            <div className="flex justify-center items-center pb-8">
              <p className="text-2xl font-semibold"> Create an account</p>
            </div>
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="John Doe"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="********"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6 w-full">
              <button
                className="bg-[#268d8d] hover:bg-[#efc495] hover:text-[#57544f] text-white duration-150 font-semibold py-2 px-4 w-full rounded-2xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
            <p className="text-center text-gray-600 text-xs">
              Have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </form>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Register;
