import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import { connection } from "./database/db.connection.js";
dotenv.config();
const app = express();


app.use("/api/v1/user", userRoutes);

connection();
app.listen(process.env.PORT, () => {
  console.log(`Server is listening at port ${process.env.PORT} `);
});
