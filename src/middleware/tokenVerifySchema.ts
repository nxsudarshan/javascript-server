export default Object.freeze({
  tokenCreate: {
    id: {
      isAlphanumeric: true,
      in: ["body"],
      isEmpty: {
        errorMessage: "Id is Required",
        negated: true,
      },
    },
    email: {
      in: ["body"],
      isLength: {
        errorMessage: "email id should be 7 character long",
        options: { min: 7 },
      },
      isEmpty: {
        errorMessage: "email id is Required",
        negated: true,
      },
    },
  },
  getToken: {
    in: ["params"],
    isEmpty: {
      errorMessage: "Token is Required",
      negated: true,
    },
  },
});
