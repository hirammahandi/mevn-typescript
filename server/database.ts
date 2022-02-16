import { connect } from "mongoose";

(async (): Promise<void> => {
  try {
    const { connection } = await connect(process.env.MONGODB_URI as string);
    console.log(`DB is connected to: ${connection.name}`);
  } catch (error) {
    console.error(error);
  }
})();
