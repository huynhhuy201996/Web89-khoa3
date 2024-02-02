import express from "express";
import mongoose from "mongoose";
import { userController } from "./controller/user.controller.js";
import morgan from "morgan";
import { authenticationMiddleware } from "./middleware/authenticantion.middleware.js";

const server = express();

server.use(express.json());
server.use(morgan("combined"));

// thứ tự đặt middle để trước chạy trước 
//server.use(authenticationMiddleware);

server.use("/users", userController);

mongoose
    .connect("mongodb://localhost:27017/fullstack")
    .then(() => server.listen(3000, () => console.log("Server is running!")));