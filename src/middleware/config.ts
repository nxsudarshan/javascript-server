export const valid = {
  id: {
    in: ["body"],
    isEmpty: {
      errorMessage: "Id is Required",
      negated: true,
    },
    isAlphanumeric: true,
  },
  name: {
    in: ["body"],
    isString: true,
    isEmpty: {
      errorMessage: "name is required",
      negated: true,
    },
    isLength:({ min: 3, max: undefined, negated: true })
  },
  email: {
    in: ["body"],
    isEmail: true,

  },
};
