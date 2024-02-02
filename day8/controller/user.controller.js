import express from 'express';
import { asynCatch } from '../utils/trycatch.js';
import { getMe } from '../service/user.service.js';

const usercontroller = express.Router();

Usercontroler.get('/me', asynCatch(getMe));

export { usercontroller };

