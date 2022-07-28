import { Router } from 'express';

import { registerRoutes } from './register.routes';

const router = Router();

router.use('/', registerRoutes);

router.get('/', (req, res) => {
  res.status(200).send('Welcome to API Game');
});

export { router };
