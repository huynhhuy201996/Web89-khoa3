import express from 'express';
import { asynCatch } from '../utils/trycatch.js';
import { register, Login } from '../service/auth.service.js';
import { validateLogin, validationRegister } from '../validation/auth.validation.js';

const authController = express.Router();

authController.post('/register', asynCatch(validationRegister), asynCatch(register));
authController.post('/login', asynCatch(validateLogin), asynCatch(Login));

export { authController };

