import express from 'express';
import { asynCatch } from '../utils/trycatch.js';
import { getMe } from '../service/user.service.js';

const userController = express.Router();

userController.get('/me', asynCatch(getMe));

export { userController };

