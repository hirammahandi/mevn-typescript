import { Task } from "@/interfaces/types";
import axios from "./axios";
import { AxiosError } from "axios";
import { ITaskResponse } from "@/interfaces/types";

export const createTask = async (body: Task): Promise<ITaskResponse | void> => {
  try {
    const { data } = await axios.post<ITaskResponse>("/tasks", body);
    return data;
  } catch (error) {
    console.error((error as AxiosError).message);
  }
};

export const getTasks = async (): Promise<ITaskResponse | void> => {
  try {
    const { data } = await axios.get<ITaskResponse>("/tasks");
    return data;
  } catch (error) {
    console.error((error as AxiosError).message);
  }
};

export const getTask = async (id: string): Promise<ITaskResponse | void> => {
  try {
    const { data } = await axios.get<ITaskResponse>(`/tasks/${id}`);
    return data;
  } catch (error) {
    console.error((error as AxiosError).message);
  }
};

export const updateTask = async ({
  id,
  task,
}: {
  id: string;
  task: Task;
}): Promise<ITaskResponse | void> => {
  try {
    const { data } = await axios.put<ITaskResponse>(`/tasks/${id}`, task);
    return data;
  } catch (error) {
    console.error((error as AxiosError).message);
  }
};

export const deleteTask = async (id: string): Promise<ITaskResponse | void> => {
  try {
    const { data } = await axios.delete(`/tasks/${id}`);
    return data;
  } catch (error) {
    console.error((error as AxiosError).message);
  }
};
