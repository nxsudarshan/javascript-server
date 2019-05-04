import * as mongoose from "mongoose";
import { default as seedData } from "./seedData";
export class Database {
  public static open({ mongoUri }) {
    return new Promise((resolve, reject) => {
      const options = {

      };
      mongoose.connect(mongoUri, options);
      mongoose.connection.on("error", (error) => {
        reject(error);
      });
      mongoose.connection.on("connected", (result) => {
        if (result === 0) {
          seedData();
        }
        resolve();
      });
    });
    // tslint:disable-next-line: prefer-const

  }
  public static disconnect() {
    mongoose.disconnect();
  }
}
