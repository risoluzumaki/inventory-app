"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
class InMemoryDB {
    constructor() {
        this.items = [];
        this.reservations = [];
        this.stockOuts = [];
        // Seeding data awal/Dummy data
        this.items = [
            { id: "1", name: "Keyboard", stock: 100 },
            { id: "2", name: "Mouse", stock: 50 },
            { id: "3", name: "Monitor", stock: 20 },
            { id: "4", name: "Speaker", stock: 30 },
            { id: "5", name: "Microphone", stock: 40 }
        ];
    }
}
exports.db = new InMemoryDB();
