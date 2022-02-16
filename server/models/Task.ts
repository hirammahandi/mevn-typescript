import { Schema, model } from "mongoose";
import { ITask } from "../interfaces/types";

const TaskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    done: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<ITask>("Task", TaskSchema);
