import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-bold my-7">Sign Up <span className="font-serif uppercase mx-3 text-red-500">or</span> Register</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username..."
          id="username"
          className="bg-gray-300 p-3 rounded-lg "
        />
        <input
          type="email"
          placeholder="email..."
          id="email"
          className="bg-gray-300 p-3 rounded-lg "
        />
        <input
          type="password"
          placeholder="password..."
          id="password"
          className="bg-gray-300 p-3 rounded-lg "
        />
        <button className="bg-gray-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account? </p>
        <span className="text-blue-600">
          <Link to="/sign-in">Sign In</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
