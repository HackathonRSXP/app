import { Router } from 'express';

import FilterController from './app/controllers/FilterController';
import EnterpriseController from './app/controllers/EnterpriseController';

const routes = new Router();

// Categories
routes.get('/', FilterController.index);

routes.post('/enterprise', EnterpriseController.index);

export default routes;
