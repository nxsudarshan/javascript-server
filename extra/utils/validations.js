let expression = "/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w[2,4])+$/";
let domain_name = "@successive.tech$";
let users = [{
  traineeEmail: 'trainee1@successive.tech',
  reviewerEmail: 'reviewer1@1successive.tech'
},
{
  traineeEmail: 'trainee1.gh.sh#successive.tech',
  reviewerEmail: 'reviewer1-s@successive.tech'
},
{
  traineeEmail: 'trainee112#successive.tech',
  reviewerEmail: 'reviewer2@successive.tech'
},
{
  traineeEmail: '123@successive$.tech',
  reviewerEmail: 'reviewer9successive.tech'
}
]
function validateUsers(users) {
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
    return validateEmail(traineeEmail) ?
      (validUsers.count++ , validUsers.users.push(traineeEmail)) :
      (invalidUsers.count++ , invalidUsers.users.push(traineeEmail))
        &&
        validateEmail(reviewerEmail) ?
        (validUsers.count++ , validUsers.users.push(reviewerEmail)) :
        (invalidUsers.count++ , invalidUsers.users.push(reviewerEmail));
  })
  getResult(validUsers, invalidUsers);
}

function validateEmail(value) {
  return (value.match(expression) || value.match(domain_name));
}

function getResult(validUsers, invalidUsers) {
  return (validUsers.count > 0 ?
    (console.log("Valid Count :" + validUsers.count),
      console.log(validUsers.users.toString())) : console.log("email id not founds"))
    || (invalidUsers.count > 0 ?
      (console.log("invalid Count :" + invalidUsers.count),
        console.log(invalidUsers.users.toString())) : console.log("email id not founds"));
}
validateUsers(users);


