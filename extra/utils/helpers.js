export const expression = "/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w[2,4])+$/";
export const domain_name = "@successive.tech$";

export function validateEmail(value) {
  return (value.match(expression) || value.match(domain_name));
}
