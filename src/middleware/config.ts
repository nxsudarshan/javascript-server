export default Object.freeze({
  create: {
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
        errorMessage: "Name should be in format",
        options: "",
      },
    },
  },
  delete: {
    id: {
      in: ["body"],
      isEmpty: {
        errorMessage: "Id is required",
        negated: true,
      },
    },
  },
  get: {
    skip: {
      isInt: true,
      in: ["body"],
      errorMessage: "Skip is invalid",
    },
    limit: {
      in: ["query"],
      errorMessage: "Limit is invalid",
    },

  },
  update: {
    id: {
      in: ["body"],
      isEmpty: {
        errorMessage: "Id is required",
        negated: true,
      },
    },
    dataToUpdate: {
      in: ["body"],
      custom: {
        options: (dataToUpdate) => {
          console.log(dataToUpdate);
          return true;
        },
      },
    },
  },
});
