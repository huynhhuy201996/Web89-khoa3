export const asynCatch = (fn) => async (req, res, next) => {
    try {
        await fn();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.mesaage);
    }
};