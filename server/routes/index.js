import express from 'express';

import authRouter from './auth';
import usersRouter from './users';

const router = express.Router();

router.use(authRouter);
router.use(usersRouter);

export default router;
