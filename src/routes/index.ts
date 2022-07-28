import { Request, Response, Router } from 'express';

import { registerRoutes } from './register.routes';

const router = Router();

router.use('/register', registerRoutes);

router.get('/', (request: Request, response: Response) => {
  response.status(200).send('Welcome to API Game');
});

export { router };
