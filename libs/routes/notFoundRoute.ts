export function notFoundRoute(req, res, next) {
  const result = { error: "Page Not Found",
status:404,
message:"File or Page not found" };
  res.status(404).send(result);
  next();
}
