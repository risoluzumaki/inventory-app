"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockController = void 0;
class StockController {
    constructor(stockService) {
        this.stockService = stockService;
    }
    getItems(_req, res) {
        const items = this.stockService.getItems();
        res.json(items);
    }
    reserve(req, res) {
        const { itemId, quantity } = req.body;
        if (!itemId || !quantity == null) {
            return res.status(400).json({ success: false, rror: "Bad request" });
        }
        const result = this.stockService.reserve(itemId, quantity);
        res.status(201).json({ success: true, ...result });
    }
    stockOut(req, res) {
        const { itemId, quantity, reason } = req.body;
        if (!itemId || !quantity || !reason) {
            return res.status(400).json({ succes: false, error: "Bad Request" });
        }
        const result = this.stockService.stockOut(itemId, quantity, reason);
        res.status(201).json({ success: true, ...result });
    }
    getReservations(_req, res) {
        const data = this.stockService.getReservations();
        res.json(data);
    }
    getStockOuts(_req, res) {
        const data = this.stockService.getStockOuts();
        res.json(data);
    }
}
exports.StockController = StockController;
