import { Router } from 'express';

import { RegisterGameFactory } from '../useCases/RegisterGameFactory';

const registerGameFactory = RegisterGameFactory();

const registerRoutes = Router();
registerRoutes.post('/', registerGameFactory.handle);

export { registerRoutes };
