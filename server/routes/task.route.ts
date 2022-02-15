import { Router } from "express";
const router = Router();

router
  .route("/")
  .get((req, res) => {
    res.json({ success: true, msg: "get todos" });
  })
  .post((req, res) => res.send("post task"));

router
  .route("/:id")
  .get((req, res) => res.send("get one task"))
  .put((req, res) => res.send("update a task"))
  .delete((req, res) => res.send("delete a task"));

export default router;
