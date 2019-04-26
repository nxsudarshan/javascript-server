
const errorMessage = {
  error: "not found",
  message: "error",
  status: 500,
  timestamp: new Date(),
};
export let errorHandler = (req, res, next) => {
  console.log(errorMessage);
  next();
};
