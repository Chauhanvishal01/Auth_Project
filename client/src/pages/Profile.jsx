import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";
import {
  deleteUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  signout,
  updateUserFailure,
  updateUserRequest,
  updateUserSuccess,
} from "../store/slices/userSlice.js";

const Profile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [imagePercent, setImagePercent] = useState(0);
  const [image, setImage] = useState(undefined);
  const [imageError, setImageError] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [formData, setFormData] = useState({});
  const fileRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.value]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(updateUserRequest());

      const res = await fetch(
        `/backend/api/v1/user/update/${currentUser?.rest?._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );
      console.log(currentUser);
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleDelete = async () => {
    try {
      dispatch(deleteUserRequest());
      const res = await fetch(
        `/backend/api/v1/user/delete/${currentUser?.rest?._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };
  const handleSignout = async () => {
    try {
      await fetch(`/backend/api/v1/auth/signout`);
      dispatch(signout());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <img
          src={formData?.profilePicture || currentUser?.rest?.profilePicture}
          alt="Profile"
          className="h-24 w-24 self-center rounded-full cursor-pointer object-cover hover:scale-105 mt-2 "
          onClick={() => fileRef.current.click()}
        />
        <p className="text-sm self-center">
          {imageError ? (
            <span className="text-red-500">
              Error Uploading image (file size must me less than 2MB)
            </span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span className="text-slate-700">{`Uploading: ${imagePercent} %`}</span>
          ) : imagePercent === 100 ? (
            <span className="text-green-400">Image uploaded successfully</span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          defaultValue={currentUser?.rest?.username}
          id="username"
          placeholder="Username..."
          className="bg-slate-300 rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          type="email"
          defaultValue={currentUser?.rest?.email}
          id="email"
          placeholder="Email..."
          className="bg-slate-300 rounded-lg p-3"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="Password..."
          className="bg-slate-300 rounded-lg p-3"
          onChange={handleChange}
        />
        <button className="bg-green-400 text-white p-3 rounded-lg uppercase hover:bg-green-600 ">
          {loading ? "Loading..." : "Update Profile"}
        </button>
      </form>
      <div className="flex justify-between mt-5 ">
        <span className="text-red-500 cursor-pointer" onClick={handleDelete}>
          Delete Account
        </span>
        <span className="text-red-500 cursor-pointer" onClick={handleSignout}>
          Sign Out
        </span>
      </div>
      <p className="text-red-500 mt-5">{error && "Something went wrong"}</p>
      <p className="text-green-500 mt-5">
        {updateSuccess && "User is updated successfully"}
      </p>
    </div>
  );
};

export default Profile;
