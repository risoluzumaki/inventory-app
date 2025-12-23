import express from "express";
import cors from "cors";
import { errorMiddleware } from "./api/middlewares/global.error";
import stockRoutes from "./api/routes/stock.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Backend is running",
  });
});

app.use("/api", stockRoutes);

app.use(errorMiddleware)

export default app;