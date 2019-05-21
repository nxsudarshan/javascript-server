import { validateEmail } from "../../extraTs/utils/helpers";
export const sign_in_schema = Object.freeze({
  sign_in: {
    email: {
      in: ["body"],
      isEmpty: {
        errorMessage: "Email id required",
        negated: true,
      },
      custom: {
        options: (value) => {
          return validateEmail(value);
        },
        errorMessage: "Invalid email",
      },
    },
    password: {
      in: ["body"],
      isEmpty: {
        errorMessage: "Password is required",
        negated: true,
      },
    },
  },

});
