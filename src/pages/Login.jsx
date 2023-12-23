import React, { useState } from "react";
import main_bg from "../images/signup-bg.svg";
import { Link } from "react-router-dom";
import { VscGithub } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";
import { FiLinkedin } from "react-icons/fi";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
            className=" flex flex-col justify-center items-center relative  h-full shadow-lg rounded  w-full px-6 py-[4.5rem] "
            onSubmit={handleSubmit}
          >
            <div className="flex justify-center items-center pb-10">
              <p className="text-2xl font-semibold">Login</p>
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

            <div className="mb-6 w-full">
              <button
                className="bg-[#268d8d] hover:bg-[#efc495] hover:text-[#57544f] text-white duration-150 font-semibold py-2 px-4 w-full rounded-2xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
            <p className="text-center text-gray-600 text-xs">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500">
                Signup
              </Link>
            </p>
            <hr className="w-full bg-gray-300 mt-5 h-[0.3px]" ></hr>
            <div className="flex gap-6 justify-center items-center pt-5">
              <a href="/" className="text-[1.7rem] text-black hover:text-[#268d8d]">
                <GrInstagram />
              </a>
              <a href="/" className="text-[1.7rem] text-black hover:text-[#268d8d]">
                <VscGithub />
              </a>
              <a href="/" className="text-[1.7rem] text-black hover:text-[#268d8d]">
                <FiLinkedin />
              </a>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
