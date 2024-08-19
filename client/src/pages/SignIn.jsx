import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInRequest,
  signInSuccess,
} from "../store/slices/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({});

  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInRequest());
      const res = await fetch("/backend/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-bold my-7">
        Sign In{" "}
        <span className="font-serif uppercase mx-3 text-red-500">or</span> Login
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email..."
          id="email"
          className="bg-gray-300 p-3 rounded-lg "
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password..."
          id="password"
          className="bg-gray-300 p-3 rounded-lg "
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-gray-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account? </p>
        <span className="text-blue-600">
          <Link to="/sign-in">Sign Up</Link>
        </span>
      </div>
      <p className="text-red-400 mt-5">
        {error ? error.message || "Something Went Wrong" : ""}
      </p>
    </div>
  );
};

export default SignIn;
