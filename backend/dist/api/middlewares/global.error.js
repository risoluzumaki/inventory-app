"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = errorMiddleware;
const app_error_1 = require("../../domain/errors/app.error");
function errorMiddleware(err, _req, res, _next) {
    if (err instanceof app_error_1.AppError) {
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
