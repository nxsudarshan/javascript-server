import * as mongoose from "mongoose";
export class Database {
  public static open({ mongoUri }) {
    console.log(mongoUri);
    return new Promise((resolve, reject) => {
      const options = {

      };
      mongoose.connect(mongoUri, options);
      mongoose.connection.on("error", (error) => {
        reject(error);
      });
      mongoose.connection.on("connected", (result) => {
        resolve();
      });
    });
    // tslint:disable-next-line: prefer-const

  }
  public static disconnect() {
    mongoose.disconnect();
  }
}
