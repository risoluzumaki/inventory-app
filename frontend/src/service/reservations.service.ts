import api from "../api/api"

export type Reservation = {
  id: string
  itemId: string
  quantity: number,
  createdAt: string
}

export async function reserveStock(payload: {
  itemId: string
  quantity: number
}): Promise<Reservation> {
  try {
    const res = await api.post('/reserve', payload)
    return res.data
  } catch (error: any) {
    if (error.response){
      throw new Error(error.response.data.message) 
    } else {
      throw new Error("Something went wrong")
    }
  }
}

export async function getReservationHistory(): Promise<Reservation[]> {
  try {
    const res = await api.get('/reservations')
    return res.data
  } catch (error: any) {
    if(error.response){
      throw new Error(error.response.data.message)
    }
    throw new Error("Something went wrong")
  }
}
