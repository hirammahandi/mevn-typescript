import { config } from "dotenv";
import app from "./app";
config();

const PORT = process.env.PORT;

const init = () => {
  try {
    app.listen(PORT);
    console.log(`SERVER READY: http://localhost:${PORT}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

init();
