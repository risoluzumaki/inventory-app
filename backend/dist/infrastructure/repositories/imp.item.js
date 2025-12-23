"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRepositoryImpl = void 0;
const db_memo_1 = require("../db/db.memo");
class ItemRepositoryImpl {
    findAll() {
        // console.log(db.items);
        return db_memo_1.db.items;
    }
    findById(id) {
        // console.log(db.items);
        return db_memo_1.db.items.find((item) => item.id === id);
    }
    update(item) {
        const index = db_memo_1.db.items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
            db_memo_1.db.items[index] = item;
        }
        // console.log(db.items);
    }
}
exports.ItemRepositoryImpl = ItemRepositoryImpl;
