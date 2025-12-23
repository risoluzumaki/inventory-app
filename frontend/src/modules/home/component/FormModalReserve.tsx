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
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h3>Reserve {item.name}</h3>

        <input
          type="number"
          min={1}
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
        />

        <button type="submit" disabled={reserveIsLoading}>
          Submit
        </button>

        <button type="button" onClick={onClose}>
          Cancel
        </button>
        {reserveError && <p className="text-red-500">{reserveError?.message}</p>}
      </form>
    </div>
  )
}
