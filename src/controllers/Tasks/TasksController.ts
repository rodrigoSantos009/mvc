import { Request, Response } from "express";
import { TasksServices } from "../../services/Tasks/TasksServices";

export class TasksController {
  constructor(private tasksServices: TasksServices) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { title } = req.body;

    try {
      const task = await this.tasksServices.create({
        title,
      });

      return res.status(201).json(task);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(400).json({ message: "Ocorreu um erro inesperado." });
    }
  }

  async getTasks(req: Request, res: Response): Promise<Response> {
    const tasks = await this.tasksServices.getTasks();
    return res.status(200).json(tasks);
  }

  async updateTask(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const task = await this.tasksServices.updateTask(id);

      return res.status(200).json(task);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: "Ocorreu um erro inesperado." });
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const task = await this.tasksServices.getById(id);
      return res.status(200).json(task);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: "Ocorreu um erro inesperado." });
    }
  }

  async deleteById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const task = await this.tasksServices.removeById(id);
      return res.status(200).json(task);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: "Ocorreu um erro inesperado." });
    }
  }
}