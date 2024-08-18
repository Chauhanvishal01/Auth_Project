import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { connection } from "./database/db.connection.js";
dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/auth", authRoutes);

connection();
app.listen(process.env.PORT, () => {
  console.log(`Server is listening at port ${process.env.PORT} `);
});
