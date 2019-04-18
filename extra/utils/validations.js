let users=[{
  traineeEmail: 'trainee1@successive.tech',
  reviewerEmail: 'reviewer1@successive.tech'
}]
validateUsers(users)
function validateUsers(users){
  users.forEach((value)=>{
    validateEmail(value.traineeEmail);
  })
}

function validateEmail(value){
  let expression="/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w[2,4])+$/";
  if(expression.value.match(value))
  {
    return true;
  }
  else
  {
    return false;
  }

}


