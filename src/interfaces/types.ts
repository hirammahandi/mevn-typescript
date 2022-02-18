export interface ITaskResponse {
  success: boolean;
  tasks?: Task[];
  msg?: string;
  task?: Task;
}

export interface Task {
  title: string;
  description: string;
  done?: boolean;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
}
