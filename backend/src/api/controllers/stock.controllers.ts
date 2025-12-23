import { Request, Response } from "express";
import { StockService } from "../../domain/service/stock.service";

export class StockController {
  constructor(private stockService: StockService) {}

  getItems(_req: Request, res: Response) {
    const items = this.stockService.getItems();
    res.json(items);
  }

  reserve(req: Request, res: Response) {
    const { itemId, quantity } = req.body;
    if (!itemId || !quantity == null) {
      return res.status(400).json({ success: false, rror: "Bad request" });
    }
    const result = this.stockService.reserve(itemId, quantity);
    res.status(201).json({success: true, ...result});
  }

  stockOut(req: Request, res: Response) {
    const { itemId, quantity, reason } = req.body;
    if (!itemId || !quantity || !reason) {
      return res.status(400).json({ succes: false, error: "Bad Request" });
    }
    const result = this.stockService.stockOut(itemId, quantity, reason);
    res.status(201).json({ success: true, ...result });
  }

  getReservations(_req: Request, res: Response) {
    const data = this.stockService.getReservations();
    res.json(data);
  }

  getStockOuts(_req: Request, res: Response) {
    const data = this.stockService.getStockOuts();
    res.json(data);
  }
}
