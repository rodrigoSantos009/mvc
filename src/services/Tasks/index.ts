import Express from "express";

import { TasksController } from "../../controllers/Tasks/TasksController";
import { TasksRepository } from "../../repositories/implements/Tasks/TasksRepository";
import { TasksRoutes } from "../../routes/Tasks/tasksRoutes.routes";
import { TasksServices } from "./TasksServices";

const router = Express.Router();
const tasksRepository = new TasksRepository();
const tasksServices = new TasksServices(tasksRepository);
const tasksController = new TasksController(tasksServices);
const tasksRoutes = new TasksRoutes(router, tasksController);

export default tasksRoutes;
export { tasksRepository, tasksServices, tasksController };