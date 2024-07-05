import { IUpdate } from "src/interfaces/Tasks/TasksInterface";
import { prisma } from "../../../database/prisma";
import { Task } from "../../../entities/Task";
import { ITasksRepository } from "../../Tasks/ITasksRepository";

class TasksRepository implements ITasksRepository {
  async createTask(task: Task): Promise<void> {
    await prisma.task.create({
      data: {
        title: task.title,
      },
    });
  }

  async getTasks(): Promise<Task[]> {
    return await prisma.task.findMany();
  }

    async updateTask(id: string): Promise<Task> {
      const update = await prisma.task.update({
        where: {
          id,
        },
        data: {
          done: true
        }
      });

      return update;
    }

  async getById(id: string): Promise<Task | null> {
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });

    return task;
  }

  async removeById(id: string): Promise<void> {
    await prisma.task.delete({
      where: {
        id,
      },
    });
  }
}

export { TasksRepository };