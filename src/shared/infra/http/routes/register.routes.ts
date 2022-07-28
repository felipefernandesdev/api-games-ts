import { Router } from 'express';

import { RegisterGameFactory } from '../../../../modules/games/useCases/registerGame/RegisterGameFactory';

const registerGameFactory = RegisterGameFactory();

const registerRoutes = Router();
registerRoutes.post('/', registerGameFactory.handle);

export { registerRoutes };
