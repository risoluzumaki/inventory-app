import api from "../api/api"

export type StockOut = {
  id: string
  itemId: string,
  quantity: number,
  reason?: string,
  createdAt: string
}

export async function stockOutItem(payload: {
  itemId: string
  quantity: number
  reason?: string,
  createdAt?: string
}): Promise<StockOut> {
  try {
    const res = await api.post('/stock-out', payload)
    return res.data
  } catch (error: any) {
    if (error.response){
      throw new Error(error.response.data.message) 
    } else {
      throw new Error("Something went wrong")
    }
  }
}

export async function getStockOutHistory(): Promise<StockOut[]> {
  try {
    const res = await api.get('/stock-outs')
    return res.data
  } catch (error: any) {
    if (error.response){
      throw new Error(error.response.data.message) 
    } else {
      throw new Error("Something went wrong")
    }
  }
}
