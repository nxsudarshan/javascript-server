import * as bcrypt from "bcrypt";
import { configenv } from "../src/config/configuration";
import UserRepository from "../src/repositories/user/UserRepository";
const repositoryObject = new UserRepository();

export default async () => {
  const firstRecords = [
    {
      _id: UserRepository.generateObjectId(),
      sub: "Learn and Implement",
      name: "Trainee",
      email: "trainee@successive.tech",
      role: "trainee",
      password: await bcrypt.hash("password@12345", configenv.SALT),
    },
    {
      _id: UserRepository.generateObjectId(),
      sub: "Learn and Implement",
      name: "Head Trainer",
      email: "head.trainer@successive.tech",
      role: "head-trainer",
      password: await bcrypt.hash("password@12345", configenv.SALT),
    },
  ];
  try {
    const res = await repositoryObject.count();
    if (res === 0) {
      repositoryObject.insert(firstRecords);
      console.log("Database seed data first time");
    }
  } catch (error) {
    console.log(error);
  }

};
