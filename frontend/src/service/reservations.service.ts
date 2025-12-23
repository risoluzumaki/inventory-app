import api from "../api/api"

export type Reservation = {
  id: string
  itemId: string
  quantity: number
}

export async function reserveStock(payload: {
  itemId: string
  quantity: number
}): Promise<Reservation> {
  const res = await api.post('/reservations', payload)
  return res.data
}

export async function getReservationHistory(): Promise<Reservation[]> {
  const res = await api.get('/reservations')
  return res.data
}
