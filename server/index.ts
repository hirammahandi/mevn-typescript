import { config } from "dotenv";
import app from "./app";
config();

const PORT = process.env.PORT;

const init = async () => {
  try {
    import("./database"); // import dynamic connection to db
    app.listen(PORT);
    console.log(`SERVER READY: http://localhost:${PORT}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

init();
