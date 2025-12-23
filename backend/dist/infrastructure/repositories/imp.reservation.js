"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationRepositoryImpl = void 0;
const db_memo_1 = require("../../infrastructure/db/db.memo");
class ReservationRepositoryImpl {
    create(reservation) {
        db_memo_1.db.reservations.push(reservation);
        // console.log(db.reservations);
    }
    findAll() {
        // console.log(db.reservations);
        return db_memo_1.db.reservations;
    }
}
exports.ReservationRepositoryImpl = ReservationRepositoryImpl;
