import { StockOut } from "../entities/stockout";

export interface StockOutRepository {
  create(stockOut: StockOut): void;
  findAll(): StockOut[];
}
