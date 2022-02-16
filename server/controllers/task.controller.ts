import { Error } from "mongoose";
import Task from "../models/Task";
import { Response, Request } from "express";
import { ITask, ITaskResponse } from "../interfaces/types";

type ApiHandler = (
  req: Request,
  res: Response<ITaskResponse>
) => Promise<Response>;

export const geTasks: ApiHandler = async (req, res) => {
  try {
    const tasks: ITask[] = await Task.find().lean();
    return res.json({ success: true, tasks });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, msg: "Internal server error!" });
  }
};

export const createTask: ApiHandler = async (req, res) => {
  try {
    const newTask = new Task({
      ...req.body,
    });
    const taskCreated = await newTask.save();
    return res.json({ success: true, task: taskCreated });
  } catch (error) {
    if (error instanceof Error.ValidationError)
      return res.status(400).json({ success: false, msg: "Bad Request." });
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error." });
  }
};

export const getOneTask: ApiHandler = async (req, res) => {
  try {
    const task: ITask | null = await Task.findById(req.params.id).lean();
    if (!task)
      return res
        .status(404)
        .json({ success: false, msg: "Does not exists any task with that id" });
    return res.json({ success: true, task });
  } catch (error) {
    console.error(error);
    if (error instanceof Error.CastError)
      return res.status(400).json({ success: false, msg: "Invalid id." });
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error." });
  }
};

export const updateTask: ApiHandler = async (req, res) => {
  try {
    const task: ITask | null = await Task.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true, runValidators: true }
    );
    if (!task)
      return res
        .status(400)
        .json({ success: false, msg: "Does not exists any task with that id" });
    return res.json({ success: false, task });
  } catch (error) {
    console.error(error);
    if (error instanceof Error.CastError)
      return res.status(400).json({ success: false, msg: "Invalid id." });
    else if (error instanceof Error.ValidationError)
      return res.status(400).json({ success: false, msg: "Bad Request." });
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error." });
  }
};

export const deleteTask: ApiHandler = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task)
      return res.status(400).json({
        success: false,
        msg: "Does not exists any task with that id",
      });
    return res.json({ success: false, task });
  } catch (error) {
    console.error(error);
    if (error instanceof Error.CastError)
      return res.status(400).json({ success: false, msg: "Invalid id." });
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error." });
  }
};
