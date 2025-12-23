"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockOutRepositoryImpl = void 0;
const db_memo_1 = require("../db/db.memo");
class StockOutRepositoryImpl {
    create(stockOut) {
        // console.log(db.stockOuts);
        db_memo_1.db.stockOuts.push(stockOut);
    }
    findAll() {
        // console.log(db.stockOuts);
        return db_memo_1.db.stockOuts;
    }
}
exports.StockOutRepositoryImpl = StockOutRepositoryImpl;
