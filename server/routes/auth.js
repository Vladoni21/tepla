import express from 'express';

import controller from '../controller/auth';

const router = new express.Router();

router.post('/registration', controller().registration);

export default router;
