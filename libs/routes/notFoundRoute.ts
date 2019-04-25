export function notFoundRoute(req, res,next) {
  const result = { error: "Not Found" };
  res.status(404).send(result);
  next();
}
