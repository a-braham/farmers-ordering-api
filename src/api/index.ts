import { Router } from 'express';
import users from './users/users.routes';

const router = Router();

router.use('/users', users);

export default router;