import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox/GenderCheckBox";
import { useState } from "react";

const Register = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Register
          <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10 bg-gray-900 text-white placeholder-gray-500"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 bg-gray-900 text-white placeholder-gray-500"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div className="">
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 bg-gray-900 text-white placeholder-gray-500"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            Already have an account ?
          </Link>
          <GenderCheckBox
            handleGenderChange={(e)=>setInputs({...inputs , gender : e})}
            selectGender={inputs.gender}
          />
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

export default Register;
