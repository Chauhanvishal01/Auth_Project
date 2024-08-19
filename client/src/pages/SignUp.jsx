import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, seterror] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      seterror(false);

      const res = await fetch("/backend/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      setLoading(false);
      if (data.success === false) {
        seterror(true);
      }
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      seterror(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-3xl font-bold my-7">
        Sign Up{" "}
        <span className="font-serif uppercase mx-3 text-red-500">or</span>{" "}
        Register
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username..."
          id="username"
          className="bg-gray-300 p-3 rounded-lg "
          onChange={handleChange}
        />
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
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account? </p>
        <span className="text-blue-600">
          <Link to="/sign-in">Sign In</Link>
        </span>
      </div>
      <p className="text-red-400 mt-5">{error && "Something Went Wrong"}</p>
    </div>
  );
};

export default SignUp;
