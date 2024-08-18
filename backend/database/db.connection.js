import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected To Database");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to Database", err);
    });
};
