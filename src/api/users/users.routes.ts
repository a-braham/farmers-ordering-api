import { Router } from 'express';
import { celebrate } from 'celebrate';
import AuthController from './users.controller';
import { signup } from './users.validator';

const router = Router();

router.post(
  '/signup',
  celebrate({
    body: signup,
  }),
  AuthController.signup,
);

export default router;
