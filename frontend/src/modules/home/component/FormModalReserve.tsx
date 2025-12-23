import { useState } from "react"
import useReserve from "../../../hooks/useReserve"

interface Props {
  isOpen: boolean
  item: {
    id: string
    name: string
  }
  onClose: () => void
}

export default function FormModalReserve({ item, onClose }: Props) {
  const [quantity, setQuantity] = useState(0)
  const { reserveMutate, reserveIsLoading, reserveError } = useReserve()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    reserveMutate(
      {
        itemId: item.id,
        quantity,
      },
      {
        onSuccess: () => {
          onClose()
        },
      }
    )
  }

  return (
    <div className="modal h-screen w-full fixed flex items-center justify-center bg-transparent backdrop-blur z-50">
      <form onSubmit={handleSubmit} className="border-2 p-8 rounded-2xl">
        <h3>Reserve {item.name}</h3>
        <input
          type="number"
          min={1}
          className="outline-1"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
        />

        <button type="submit" disabled={reserveIsLoading} className="rounded-md px-4 py-1 mr-2.5 border-2">
          Submit
        </button>

        <button type="button" onClick={onClose} className="rounded-md px-4 py-1 mr-2.5 border-2">
          Cancel
        </button>
        {reserveError && <p className="text-red-500">{reserveError?.message || "Something went wrong"}</p>}
      </form>
    </div>
  )
}
