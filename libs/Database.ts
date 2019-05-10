import * as mongoose from "mongoose";
import { default as seedData } from "./seedData";
export class Database {
  public static open({ mongoUri }) {
    return new Promise((resolve, reject) => {
      const options = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
      };
      mongoose.connect(mongoUri, options);
      mongoose.connection.on("error", (error) => {
        reject(error);
      });
      mongoose.connection.on("connected", (result) => {
        seedData();
        resolve();
      });
    });
  }
  public static disconnect() {
    mongoose.disconnect();
  }
}
