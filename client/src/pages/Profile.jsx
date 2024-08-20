import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser.rest.profilePicture);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser?.rest?.profilePicture}
          alt="Profile"
          className="h-24 w-24 self-center rounded-full cursor-pointer object-cover hover:scale-105 mt-2 "
        />
        <input
          type="text"
          defaultValue={currentUser?.rest?.username}
          id="username"
          placeholder="Username..."
          className="bg-slate-300 rounded-lg p-3"
        />
        <input
          type="email"
          defaultValue={currentUser?.rest?.email}
          id="username"
          placeholder="Email..."
          className="bg-slate-300 rounded-lg p-3"
        />
        <input
          type="password"
          id="username"
          placeholder="Password..."
          className="bg-slate-300 rounded-lg p-3"
        />
        <button className="bg-green-400 text-white p-3 rounded-lg uppercase hover:bg-green-600 ">
          Update Profile
        </button>
      </form>
      <div className="flex justify-between mt-5 ">
      <span className="text-red-500 cursor-pointer">Delete Account</span>
      <span className="text-red-500 cursor-pointer">Sign Out</span>

      </div>
    </div>
  );
};

export default Profile;
