import { Router } from "express";
import { StockService } from "../../domain/service/stock.service";
import { StockController } from "../controllers/stock.controllers";

import { ItemRepositoryImpl } from "../../infrastructure/repositories/imp.item";
import { StockOutRepositoryImpl } from "../../infrastructure/repositories/imp.stockout";
import { ReservationRepositoryImpl } from "../../infrastructure/repositories/imp.reservation";

const router = Router();

const itemRepo = new ItemRepositoryImpl();
const reservationRepo = new ReservationRepositoryImpl();
const stockOutRepo = new StockOutRepositoryImpl();


const stockService = new StockService(
  itemRepo,
  reservationRepo,
  stockOutRepo
);

const stockController = new StockController(stockService);

router.get("/items", stockController.getItems.bind(stockController));
router.post("/reserve", stockController.reserve.bind(stockController));
router.post("/stock-out", stockController.stockOut.bind(stockController));
router.get("/reservations", stockController.getReservations.bind(stockController));
router.get("/stock-outs", stockController.getStockOuts.bind(stockController));

export default router;