import api from "../api/api";

export type Item = {
  id: string
  name: string
  stock: number
}

export async function getAllItems(): Promise<Item[]> {
  try {
    const res = await api.get('/items')
    return res.data
  } catch (error: any) {
    if (error.response){
      throw new Error(error.response.data.message) 
    } else {
      throw new Error("Something went wrong")
    }
  }
}