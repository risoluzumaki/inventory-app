import api from "../api/api";

export type Item = {
  id: string
  name: string
  stock: number
}

export async function getAllItems(): Promise<Item[]> {
  const res = await api.get('/items')
  return res.data
}