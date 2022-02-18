import { Router } from "express";
import * as tasksCtrl from "../controllers/task.controller";
const router = Router();

router.route("/tasks").get(tasksCtrl.geTasks).post(tasksCtrl.createTask);

router
  .route("/tasks/:id")
  .get(tasksCtrl.getOneTask)
  .put(tasksCtrl.updateTask)
  .delete(tasksCtrl.deleteTask);

export default router;
