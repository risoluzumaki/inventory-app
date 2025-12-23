import { db } from "../db/db.memo";
import { ItemRepository } from "../../domain/repositories/item.respository";
import { Item } from "../../domain/entities/item";

export class ItemRepositoryImpl implements ItemRepository {
  findAll(): Item[] {
    // console.log(db.items);
    return db.items;
  }

  findById(id: string): Item | undefined {
    // console.log(db.items);
    return db.items.find((item) => item.id === id);
  }

  update(item: Item): void {
    const index = db.items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      db.items[index] = item;
    }
    // console.log(db.items);
  }
}
