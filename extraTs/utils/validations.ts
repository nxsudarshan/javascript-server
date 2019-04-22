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
    return checkHelper.validateEmail(traineeEmail) ?
      (validUsers.count++ , validUsers.users.push(traineeEmail)) :
      (invalidUsers.count++ , invalidUsers.users.push(traineeEmail))
        &&
        checkHelper.validateEmail(reviewerEmail) ?
        (validUsers.count++ , validUsers.users.push(reviewerEmail)) :
        (invalidUsers.count++ , invalidUsers.users.push(reviewerEmail));
  })
  getResult(validUsers, invalidUsers);
}



function getResult(validUsers, invalidUsers) {
  return (validUsers.count > 0 ?
    (console.log("Valid Count :" + validUsers.count),
      console.log(validUsers.users.toString())) :
      console.log("email id not founds"))
    || (invalidUsers.count > 0 ?
      (console.log("invalid Count :" + invalidUsers.count),
        console.log(invalidUsers.users.toString())) :
        console.log("email id not founds"));
}


