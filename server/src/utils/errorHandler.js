import apiResponse from "./apiResponse.js";

const errorHandler = (err, req, res, next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";

  res.status(statusCode).json(new apiResponse(statusCode, message));
};

export default errorHandler;
