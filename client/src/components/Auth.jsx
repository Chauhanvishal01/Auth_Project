import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../store/slices/userSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const naviaget = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/backend/api/v1/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await res.json();
      console.log(data);

      dispatch(signInSuccess(data));
      Navigate("/profile");
    } catch (error) {
      console.log("Could not login with google");
    }
  };
  return (
    <>
      <button
        type="button"
        onClick={handleGoogleClick}
        className="bg-green-600  text-white text-xl rounded-lg p-3 uppercase hover:opacity-85"
      >
        Continue with google
      </button>
    </>
  );
};

export default Auth;
