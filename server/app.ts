import express from "express";
import morgan from "morgan";
import cors from "cors";
import taskRoute from "./routes/task.route";
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/tasks", taskRoute);

app.get("/", (req, res) => {
  res.send("todo api");
});

export default app;
