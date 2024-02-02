import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { usercontroler } from './controller/user.controller.js';

dotenv.config();

const server = express();

server.use(express.json());
server.use(morgan("combined"));

server.use("/users", usercontroler);

mongoose.connect(process.env.MONGDB)
    .then(() =>
        server.listen(process.env.PORT, () => console.log("server is running !!!"))
    );
