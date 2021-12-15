import mongoose from "mongoose";
import config from "config";
import log from "../logger";

function connect():Promise<void> {
  const dbUrl = config.get("dbUrl") as string;

  return mongoose
    .connect(dbUrl)
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("db error", error);
      process.exit(1);
    });
}

export default connect;