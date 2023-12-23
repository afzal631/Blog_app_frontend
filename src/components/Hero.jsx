import React from "react";
import deerwithbook from "../images/mern-blog-assets-main/Frame.svg";
import shapes from "../images/Shapes.svg";
import { VscGithub } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="mx-[2rem] mb-[2rem] h-[34rem] bg-[#1FC086] rounded-xl relative flex justify-between gap-12 ">
        <div className="flex flex-col justify-center items-center text-[cornsilk]">
          <div className="flex flex-col justify-start containers gap-8">
            <h1 className="text-white text-[2.4rem] font-bold ">
              Unleash Your Creativity
            </h1>
            <p className="text-md">
              Whether you're a seasoned writer or just starting your journey
              into the world of blogging,{" "}
              <span className="font-semibold">BlogBook</span> is your sanctuary.
              Create captivating posts with our intuitive and user-friendly
              interface. From thought-provoking essays to whimsical tales, every
              word finds a home here.
            </p>
            <div className="flex gap-6">
              <a href="/" className="text-[1.7rem] text-white">
                <GrInstagram />
              </a>
              <a href="/" className="text-[1.7rem] text-white">
                <VscGithub />
              </a>
              <a href="/" className="text-[1.7rem] text-white">
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>

        <img
          src={shapes}
          alt="hero section"
          className="absolute hidden lg:block right-[-11%] mix-blend-darken w-[71%]"
        />
        <img
          src={deerwithbook}
          alt="hero section"
          className="z-[1]  hidden lg:block"
        />
      </div>
      <div className="mx-[2rem] mb-[2rem] rounded-xl flex justify-center items-center gap-12 ">
        <ul className="hero__categories">
          <li>
            <Link to="posts/categories/Agriculture">Agriculture</Link>
          </li>
          <li>
            <Link to="posts/categories/Bussiness">Bussiness</Link>
          </li>
          <li>
            <Link to="posts/categories/Education">Education</Link>
          </li>
          <li>
            <Link to="posts/categories/Entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="posts/categories/Art">Art</Link>
          </li>
          <li>
            <Link to="posts/categories/Investment">Investment</Link>
          </li>
          <li>
            <Link to="posts/categories/Uncategorized">Uncategorized</Link>
          </li>
          <li>
            <Link to="posts/categories/Weather">Weather</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hero;
