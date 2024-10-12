import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-500">
          Login
          <span className="text-blue-500">ChatApp</span>
        </h1>

        <form action="">
          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 bg-gray-900 text-white placeholder-gray-500"
            />
          </div>
          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-gray-900 text-white placeholder-gray-500"
            />
          </div>

          <Link
            to="/register"
            className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            Don't have an account ?
          </Link>
          <div className="">
            <button className="btn btn-block btn-sm mt-2 bg-gray-900 text-gray-300 border-none hover:text-gray-500">
              {" "}
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
