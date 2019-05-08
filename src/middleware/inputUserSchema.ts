import * as print2 from "../../extraTs/utils/index";
export default Object.freeze({
  createUser: {
    id: {
      isAlphanumeric: true,
      in: ["body"],
      isEmpty: {
        errorMessage: "Id is Required",
        negated: true,
      },
      custom: {
        options: (value) => {
          console.log("Value", value);
          return true;
        },
      },
    },
    name: {
      in: ["body"],
      isEmpty: {
        errorMessage: "Name is Required",
        negated: true,
      },
      isLength: {
        errorMessage: "Name should be 4 character long",
        options: { min: 4 },
      },
      matches: {
        options: [/(\w+)$/],
        errorMessage: "Name should be in format",
      },
    },
    email: {
      in: ["body"],
      isEmpty: {
        errorMessage: "Email id is required",
        negated: true,
      },
      options: {
        custom: {
          options: (value) => {
            return  print2.checkEmailValidate(value);
          },
        },
      },
      isLength: {
        errorMessage: "Email id should be 7 character long",
        options: { min: 7 },
      },
    },
  },
});
