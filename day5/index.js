import Express from "express";
import mongoose from 'mongoose';
import { postController } from "./controller/post.controller.js";
import { userController } from "./controller/user.controller.js";

const server = Express();

server.use(Express.json());

server.use("/posts", postController);
server.use("users", userController);


mongoose
    .connect("mongodb://localhost:27017/mindx")
    .then(() => server.listen(3000, () => console.log("server is running !!!")));
