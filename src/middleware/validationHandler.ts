import * as express from "express";
import { validationResult } from "express-validator/check";
const errorMessage = {
  message: "Bad Request",
  status: 422,
  timestamp: new Date(),
};
export const validationHandler = (req, res, next) => {
  const output = validationResult(req);
  if (!output.isEmpty()) {
    return next({ errors: output.array() });
  }
  next();
};
