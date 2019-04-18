let validUser = 0;
let invalidUser = 0;
let validEmail = [];
let invalidEmail = [];
let expression = "/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w[2,4])+$/";
let domain_name = "@successive.tech$";
let users = [{
  traineeEmail: 'trainee1@successive.tech',
  reviewerEmail: 'reviewer1@1successive.tech'
},
{
  traineeEmail: 'trainee1.gh.sh#successive.tech',
  reviewerEmail: 'reviewer1-s@successive.tech'
}
]

function validateUsers(users) {
  users.forEach((value) => {
    let {traineeEmail,reviewerEmail}=value;
    if(validateEmail(traineeEmail))
    {
      validUser++;
      validEmail.push(traineeEmail);
    }
    else
    {
      invalidUser++;
      invalidEmail.push(traineeEmail);
    }
    if(validateEmail(reviewerEmail)){
      validUser++;
      validEmail.push(reviewerEmail);
    }
    else
    {
      invalidUser++;
      invalidEmail.push(reviewerEmail);
    }
  })
  getResult();
}

function validateEmail(value) {
  if (value.match(expression) || value.match(domain_name)) {
    return true;
  }
  else {
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

validateUsers(users);


