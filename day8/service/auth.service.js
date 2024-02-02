import { UserModel } from "../model/user.model.js";
import bcrypt from 'bcrypt'
import Jsonwebtoken from 'jsonwebtoken';

export const register = async (req, res, next) => {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await UserModel.create({ email, username, hashedPassword, roles: ["user "] });

    console.log("bod :>>y", req.body)
    res.status(200).send(user)
};

export const Login = async (req, res, next) => {
    const { username, email, password } = req.body;
    const user = await UserModel.findOne({
        username: username || { $ne: null },
        email: email || { $ne: null },
    });

    const result = bcrypt.compare(password, user.password);
    if (!result) {
        throw new Error("Username, email or password not correct!");
    }
    return res.status(200).send(user)
};


