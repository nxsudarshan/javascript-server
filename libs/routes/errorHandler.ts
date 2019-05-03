import { validationResult } from "express-validator/check";

const errorMessage = {
  response: "error",
  message: "Bad Request",
  status: 422,
  timestamp: new Date(),
};
export let errorHandler = (err, req, res, next) => {
  return res.status(422).json(err);
};
