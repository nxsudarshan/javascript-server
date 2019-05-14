import UserRepository from "../src/repositories/user/UserRepository";
const repositoryObject = new UserRepository();
const firstRecords = [
  {
    _id: UserRepository.generateObjectId(),
    sub: "Learn and Implement",
    name: "Trainee",
    email: "trainee@successive.tech",
    role: "trainee",
  },
  {
    _id: UserRepository.generateObjectId(),
    sub: "Learn and Implement",
    name: "Head Trainer",
    email: "head.trainer@successive.tech",
    role: "head-trainer",
  },
];
export default () => {
  repositoryObject.count().then((res) => {
    if (res === 0) {
      repositoryObject.insert(firstRecords);
      console.log("Database seed data first time");
    }
  });
};
