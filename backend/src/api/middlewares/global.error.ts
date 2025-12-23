import { Request, Response, NextFunction } from "express";
import { AppError } from "../../domain/errors/app.error";

export function errorMiddleware(err: Error, _req: Request,  res: Response, _next: NextFunction) {

  if (err instanceof AppError) {
    // console.log(err.statusCode);
    // console.log(err.message);
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  console.error("Unexpected Error:", err);

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}
