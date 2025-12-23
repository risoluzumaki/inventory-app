import api from "../api/api"

export type StockOut = {
  id: string
  itemId: string
  reason?: string
}

export async function stockOutItem(payload: {
  itemId: string
  reason?: string
}): Promise<StockOut> {
  const res = await api.post('/stock-outs', payload)
  return res.data
}

export async function getStockOutHistory(): Promise<StockOut[]> {
  const res = await api.get('/stock-outs')
  return res.data
}
