let validUser = 0;
let invalidUser = 0;
let validEmail = [];
let invalidEmail = [];
let users = [{
  traineeEmail: 'trainee1@successive.tech',
  reviewerEmail: 'reviewer1@1successive.tech'
},
{
  traineeEmail: 'trainee1.gh.sh#successive.tech',
  reviewerEmail: 'reviewer1-s@successive.tech'
}
]
validateUsers(users)
function validateUsers(users) {
  users.forEach((value) => {
    validateEmail(value.traineeEmail)
    validateEmail(value.reviewerEmail)
  })
  getResult();
}

function validateEmail(value) {
  let expression = "/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w[2,4])+$/";
  let domain_name = "@successive.tech$";
  if (value.match(expression) || value.match(domain_name)) {
    validUser++;
    validEmail.push(value);
    return true;
  }
  else {
    invalidUser++;
    invalidEmail.push(value);
    return false;
  }
}

function getResult() {
  if (validUser > 0) {
    console.log("Valid Count :" + validUser)
    validEmail.forEach(value => { console.log(value) })
    validUser = 0;
  }
  if (invalidUser > 0) {
    console.log("invalid Count :" + invalidUser)
    invalidEmail.forEach(value => { console.log(value) })
    invalidUser = 0;
  }
}


