export const expression = "/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w[2,4])+$/";
export const domainName = "@successive.tech$";

export function validateEmail(value) {
  return (value.match(expression) || value.match(domainName));
}
