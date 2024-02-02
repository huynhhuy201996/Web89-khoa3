import { UserModel } from "../model/user.model.js";

async function authenticationMiddleware(req, res, next) {
    try {
        const username = req.headers?.["x-username"];
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(403).send({
                data: null,
                status: "failed",
                error: "Xác thực không thành công",
            });
        }

        req.user = user;

        next();
    } catch (error) {
        res.status(500).send("Server error!");
    }
}

export { authenticationMiddleware };