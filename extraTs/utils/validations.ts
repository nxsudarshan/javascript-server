import { users } from './../constants';
import * as checkHelper from './helpers.js';

export function validateUsers(users) {
  const invalidUsers = {
    count: 0,
    users: [],
  };
  const validUsers = {
    count: 0,
    users: [],
  }

  users.forEach((value) => {
    let { traineeEmail, reviewerEmail } = value;
    return (
      checkHelper.validateEmail(traineeEmail) && checkHelper.validateEmail(reviewerEmail)) ?
      (validUsers.count++ , (validUsers.users.push(traineeEmail), validUsers.users.push(reviewerEmail+"\n"))) :
      (invalidUsers.count++ , (invalidUsers.users.push(traineeEmail), invalidUsers.users.push(reviewerEmail+"\n")));
  })
  getResult(validUsers, invalidUsers);
}



function getResult(validUsers, invalidUsers) {
  let notFound = "Email id not Found";
  return (
    validUsers.count > 0 ?
      (
        console.log("valid count : " + validUsers.count),
        console.log("Valid Users : " + validUsers.users)
      ) :
      notFound) ||
    (invalidUsers.count > 0 ?
      (
        console.log("valid count : " + invalidUsers.count),
        console.log("Valid Users : " + invalidUsers.users)
      ) :
      console.log("Email id not found")
    );
}


