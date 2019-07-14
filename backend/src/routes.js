import {
  Router
} from "express";

import EventController from "./app/controllers/EventController";
import EventBuyController from "./app/controllers/EventBuyController";

const routes = new Router();

routes.post('/event', EventController.store);
routes.get('/list', EventController.index);

routes.post('/event-buy', EventBuyController.store);

export default routes;