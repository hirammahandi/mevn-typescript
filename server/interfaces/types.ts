export interface ITaskResponse {
  success: boolean;
  tasks?: ITask[];
  msg?: string;
  task?: ITask;
}

export interface ITask {
  title: string;
  description: string;
  done: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
