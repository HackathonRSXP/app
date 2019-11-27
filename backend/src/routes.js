import { Router } from 'express';

import FilterController from './app/controllers/FilterController';
import EnterpriseController from './app/controllers/EnterpriseController';
import EdPlatformController from './app/controllers/EdPlatformController';

const routes = new Router();

// Categories
routes.get('/filters', FilterController.index);

// Enterprises
routes.post('/enterprises', EnterpriseController.index);

// Ed Platforms
routes.post('/edplatforms', EdPlatformController.index);
export default routes;
