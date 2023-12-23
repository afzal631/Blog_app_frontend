import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-[1rem]">
      <Link
        to="/"
        className="px-[1rem] bg-purple-600 text-white py-1 hover:bg-black  delay-75 transition ease-in rounded-xl"
      >
        {" "}
        Go Back Home
      </Link>
      <h1 className="font-bold text-2xl">Page Not Found</h1>
    </div>
  );
}

export default ErrorPage;
