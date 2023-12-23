import React from "react";
import Avatar2 from "../images/mern-blog-assets-main/avatar2.jpg";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

function UserProfile() {
  return (
    <section className=" mt-[6.3rem] ">
      <div className="mx-[2rem] mb-[2rem] h-[34rem] rounded-xl relative flex flex-col justify-center items-center gap-12 ">
        {" "}
        <div className="w-[100%] sm:w-[50%] md:w-[40%] bg-[#faeee5] flex flex-col justify-center items-center rounded-2xl p-[1rem] pt-[.6rem] px-[2rem] shadow-lg shadow-slate-400">
          <Link to={`/myposts/sadasd`} className="bg-white text-md font-medium shadow-md rounded-lg p-1 mb-2">
            My Posts
          </Link>
          <div className="w-[6rem] aspect-square rounded-[50%] relative cursor-pointer">
            <img src={Avatar2} alt="" className="flex rounded-[3rem]" />
            <button
              className="rounded-[50%] bg-blue-600"
              style={{
                right: "-8px",
                position: "absolute",
                bottom: "-2px",
                width: "2rem",
                display: "flex",
                height: "2rem",
                alignItems: "center",
                justifyContent: "center",
                zIndex: "9999",
              }}
            >
              <TiTick className="text-white" />
            </button>
          </div>
          <h1 className="text-lg font-semibold mt-1">Edit Profile</h1>
          <div className="mb-2 w-full">
            <label
              className="block text-gray-700 text-sm font-semibold mb-1"
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
              // value={formData.fullName}
              // onChange={handleChange}
            />
          </div>
          <div className="mb-2 w-full">
            <label
              className="block text-gray-700 text-sm font-semibold mb-1"
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
              // value={formData.email}
              // onChange={handleChange}
            />
          </div>
          <div className="mb-2 w-full">
            <label
              className="block text-gray-700 text-sm font-semibold mb-1"
              htmlFor="password"
            >
              Current Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              name="password"
              // value={formData.password}
              // onChange={handleChange}
            />
          </div>
          <div className="mb-2 w-full">
            <label
              className="block text-gray-700 text-sm font-semibold mb-1"
              htmlFor="password"
            >
              New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              name="password"
              // value={formData.password}
              // onChange={handleChange}
            />
          </div>
          <div className="mb-2 w-full">
            <label
              className="block text-gray-700 text-sm font-semibold mb-1"
              htmlFor="confirmPassword"
            >
              Confirm new Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="********"
              name="confirmPassword"
              // value={formData.confirmPassword}
              // onChange={handleChange}
            />
          </div>
          <label className=" form__error-message ">Error message</label>
          <div className="mt-2 flex gap-2 w-full">
            <button className="bg-red-500 hover:bg-red-400 hover:text-[#57544f] text-white duration-150 font-semibold py-2 px-4 w-full rounded-2xl focus:outline-none focus:shadow-outline">
              clear
            </button>
            <button
              className="bg-[#268d8d] hover:bg-[#9eef95] hover:text-[#57544f] text-white duration-150 font-semibold py-2 px-4 w-full rounded-2xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
