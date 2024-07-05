import { IUpdate } from "src/interfaces/Tasks/TasksInterface";
import { Task } from "../../entities/Task";

export interface ITasksRepository {
  createTask(task: Task): Promise<void>;
  getTasks(): Promise<Task[]>;
  updateTask(id: string): Promise<Task>;
  getById(id: string): Promise<Task | null>;
  removeById(id: string): Promise<void>;
}