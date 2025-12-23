import { Item } from "../../domain/entities/item";
import { Reservation } from "../../domain/entities/reservation";
import { StockOut } from "../../domain/entities/stockout";

class InMemoryDB {
  public items: Item[] = [];
  public reservations: Reservation[] = [];
  public stockOuts: StockOut[] = [];

  constructor() {
    
    // Seeding data awal/Dummy data
    this.items = [
      { id: "1", name: "Keyboard", stock: 100 },
      { id: "2", name: "Mouse", stock: 50 },
      { id: "3", name: "Monitor", stock: 20 },
    ];
  }
}

export const db = new InMemoryDB();