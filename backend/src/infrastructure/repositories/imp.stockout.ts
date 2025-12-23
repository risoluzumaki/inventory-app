import { StockOut } from "../../domain/entities/stockout";
import { StockOutRepository } from "../../domain/repositories/stockout.repository";
import { db } from "../db/db.memo";

export class StockOutRepositoryImpl implements StockOutRepository {
  create(stockOut: StockOut): void {
    // console.log(db.stockOuts);
    db.stockOuts.push(stockOut);
  }

  findAll(): StockOut[] {
    // console.log(db.stockOuts);
    return db.stockOuts;
  }
}
