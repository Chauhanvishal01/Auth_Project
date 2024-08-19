import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://imgs.search.brave.com/oM9tExeJ1sKGxPMpzRsF_7Fscr6pCXT2bP3bjeFhJgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Uv/cHJldmlld3MvMzc0/L2luc3RhYnV0dG9u/LXBuZy1kZXNpZ24t/NTY5MDM5MC5wbmc_/Zm10",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
