import { Router } from 'express';

import FilterController from './app/controllers/FilterController';

const routes = new Router();

// Categories
routes.get('/', FilterController.index);

export default routes;
