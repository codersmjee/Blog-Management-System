import express from 'express';
const router = express.Router();

import { signupUser, loginUser, logoutUser } from '../controller/user.controller.js'
import { createNewToken } from '../controller/JWT.controller.js'

router.post('/login', loginUser);
router.post('/signup', signupUser);
router.post('/logout', logoutUser);
router.post('/token', createNewToken);

export default router;