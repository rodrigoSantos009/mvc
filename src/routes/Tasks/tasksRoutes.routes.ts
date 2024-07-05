import { Router } from "express";
import { TasksController } from "../../controllers/Tasks/TasksController";

class TasksRoutes {
  constructor(
    public router: Router,
    private tasksController: TasksController
  ) {
    this.getRoutes();
  }

  private getRoutes(): Router {
    this.router.post(
      "/tasks",
      this.tasksController.handle.bind(this.tasksController)
    );

    this.router.put(
      "/tasks/:id",
      this.tasksController.updateTask.bind(this.tasksController)
    );

    this.router.get(
      "/tasks",
      this.tasksController.getTasks.bind(this.tasksController)
    );

    this.router.delete(
      "/tasks/:id",
      this.tasksController.deleteById.bind(this.tasksController)
    );

    this.router.get(
      "/tasks/:id",
      this.tasksController.getById.bind(this.tasksController)
    );

    return this.router;
  }
}

export { TasksRoutes };