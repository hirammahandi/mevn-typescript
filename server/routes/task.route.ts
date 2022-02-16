import { Router } from "express";
import * as tasksCtrl from "../controllers/task.controller";
const router = Router();

router.route("/").get(tasksCtrl.geTasks).post(tasksCtrl.createTask);

router
  .route("/:id")
  .get(tasksCtrl.getOneTask)
  .put(tasksCtrl.updateTask)
  .delete(tasksCtrl.deleteTask);

export default router;
