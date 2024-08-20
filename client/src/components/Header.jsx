import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  return (
    <>
      <div className="bg-gray-200">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <h1 className="font-bold">Entry Vault</h1>
          </Link>
          <ul className="flex gap-4 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <Link to="/profile">
              {currentUser ? (
                <img
                  src={currentUser?.rest?.profilePicture}
                  alt="profile"
                  className="h-7 w-7 rounded-full object-cover"
                />
              ) : (
                <li>Sign In</li>
              )}
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
