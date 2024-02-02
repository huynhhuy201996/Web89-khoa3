import { UserModel } from "../model/user.model.js"

// dây là arrow function
export const getMe = async (req, res, nex) => {
    const user = await UserModel.findOne();
    res.status(200).send(user);
};