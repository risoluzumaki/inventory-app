"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockService = void 0;
const app_error_1 = require("../errors/app.error");
const crypto_1 = __importDefault(require("crypto"));
class StockService {
    constructor(itemRepo, reservationRepo, stockOutRepo) {
        this.itemRepo = itemRepo;
        this.reservationRepo = reservationRepo;
        this.stockOutRepo = stockOutRepo;
    }
    reserve(itemId, quantity) {
        // console.log(itemId, quantity);
        // console.log(`type of quantity : ${typeof quantity}`)
        if (quantity <= 0) {
            // console.log("Quantity <= 0 execution")
            throw new app_error_1.AppError("Quantity must be greater than zero", 400);
        }
        const item = this.itemRepo.findById(itemId);
        if (!item) {
            throw new app_error_1.AppError("Item not found", 404);
        }
        if (item.stock < quantity) {
            // console.log("Insufficient stock execution")
            throw new app_error_1.AppError("Insufficient stock", 400);
        }
        item.stock -= quantity;
        this.itemRepo.update(item);
        const reservation = {
            id: crypto_1.default.randomUUID(),
            itemId,
            quantity,
            createdAt: new Date().toISOString(),
        };
        this.reservationRepo.create(reservation);
        return {
            remainingStock: item.stock,
        };
    }
    stockOut(itemId, quantity, reason) {
        if (quantity <= 0) {
            throw new app_error_1.AppError("Quantity must be greater than zero", 400);
        }
        const item = this.itemRepo.findById(itemId);
        if (!item) {
            throw new app_error_1.AppError("Item not found", 404);
        }
        if (item.stock < quantity) {
            throw new app_error_1.AppError("Insufficient stock", 400);
        }
        item.stock -= quantity;
        this.itemRepo.update(item);
        const stockOut = {
            id: crypto_1.default.randomUUID(),
            itemId,
            quantity,
            reason,
            // createdAt: new Date().toISOString(),
        };
        this.stockOutRepo.create(stockOut);
        return {
            remainingStock: item.stock,
        };
    }
    getItems() {
        return this.itemRepo.findAll();
    }
    getReservations() {
        return this.reservationRepo.findAll();
    }
    getStockOuts() {
        return this.stockOutRepo.findAll();
    }
}
exports.StockService = StockService;
