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
    return (checkHelper.validateEmail(traineeEmail) && checkHelper.validateEmail(reviewerEmail)) ?
      (validUsers.count++ ,
        (validUsers.users.push(traineeEmail),
          validUsers.users.push(reviewerEmail) + validUsers.users.push("\n"))) :
      (invalidUsers.count++ ,
        (invalidUsers.users.push(traineeEmail),
          invalidUsers.users.push(reviewerEmail) + invalidUsers.users.push("\n")));
  })
  getResult(validUsers, invalidUsers);
}

function getResult(validUsers, invalidUsers) {
  return (validUsers.count > 0 ?
    (console.log("Valid Count :" + validUsers.count),
      console.log("Valid User : " + validUsers.users.toString())) :
    console.log("email id not founds"))
    || (invalidUsers.count > 0 ?
      (console.log("invalid Count :" + invalidUsers.count),
        console.log("Invalid Users : " + invalidUsers.users.toString())) :
      console.log("email id not founds"));
}


