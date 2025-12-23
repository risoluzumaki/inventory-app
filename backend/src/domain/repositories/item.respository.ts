import { Item } from "../entities/item";

export interface ItemRepository {
  findAll(): Item[];
  findById(id: string): Item | undefined;
  update(item: Item): void;
}
