export const validationRegister = (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username) throw new error("username is required !!!!");
    if (!email) throw new error("email is required !!!!");
    if (!password) throw new error("password is required !!!!");
    next();
};

export const validateLogin = (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username && !email) throw new Error("Username or email is required!");
    if (!password) throw new Error("Password is required!");
    next();
};