import { ItemRepository } from "../repositories/item.respository";
import { ReservationRepository } from "../repositories/reservation.repository";
import { StockOutRepository } from "../repositories/stockout.repository";
import { AppError } from "../errors/app.error";
import { Reservation } from "../entities/reservation";
import { StockOut } from "../entities/stockout";
import crypto from "crypto";

export class StockService {
  constructor(
    private itemRepo: ItemRepository,
    private reservationRepo: ReservationRepository,
    private stockOutRepo: StockOutRepository
  ){} 

  reserve(itemId: string, quantity: number) {
    // console.log(itemId, quantity);
    // console.log(`type of quantity : ${typeof quantity}`)
    if (quantity <= 0) {
      // console.log("Quantity <= 0 execution")
      throw new AppError("Quantity must be greater than zero", 400);
    }

    const item = this.itemRepo.findById(itemId);
    if (!item) {
      throw new AppError("Item not found", 404);
    }

    if (item.stock < quantity) {
      // console.log("Insufficient stock execution")
      throw new AppError("Insufficient stock", 400);
    }

    item.stock -= quantity;
    this.itemRepo.update(item);

    const reservation: Reservation = {
      id: crypto.randomUUID(),
      itemId,
      quantity,
      createdAt: new Date().toISOString(),
    };

    this.reservationRepo.create(reservation);

    return {
      remainingStock: item.stock,
    };
  }

  stockOut(itemId: string, quantity: number, reason?: string) {
    if (quantity <= 0) {
      throw new AppError("Quantity must be greater than zero", 400);
    }

    const item = this.itemRepo.findById(itemId);
    if (!item) {
      throw new AppError("Item not found", 404);
    }

    if (item.stock < quantity) {
      throw new AppError("Insufficient stock", 400);
    }

    item.stock -= quantity;
    this.itemRepo.update(item);

    const stockOut: StockOut = {
      id: crypto.randomUUID(),
      itemId,
      quantity,
      reason,
      createdAt: new Date().toISOString(),
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
