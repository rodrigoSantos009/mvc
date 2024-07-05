import { Task } from "../../entities/Task";
import { ICreate } from "../../interfaces/Tasks/TasksInterface";
import { ITasksRepository } from "../../repositories/Tasks/ITasksRepository";

export class TasksServices {
  constructor(private tasksRepository: ITasksRepository) {}

  async create({ title }: ICreate) {
    const task = new Task(title);

    await this.tasksRepository.createTask(task);

    return task;
  }

  async getTasks() {
    const findTasks = await this.tasksRepository.getTasks();

    return findTasks;
  }

  async updateTask(id: string) {
    const findTask = await this.tasksRepository.getById(id);

    if (!findTask) {
      throw new Error("Ferramenta não encontrada!");
    }

    const update = await this.tasksRepository.updateTask(id);

    return update;
  }

  async getById(id: string): Promise<Task | null> {
    const findTask = await this.tasksRepository.getById(id);

    if (!findTask) {
      throw new Error("Ferramenta não encontrada!");
    }

    return findTask;
  }

  async removeById(id: string) {
    const findTask = await this.tasksRepository.getById(id);

    if (!findTask) {
      throw new Error("Ferramenta não encontrada!");
    }

    await this.tasksRepository.removeById(id);
  }
}