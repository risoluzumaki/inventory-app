import { useState } from "react"
import useStock from "../../../hooks/useStock"

interface Props {
  isOpen: boolean
  item: {
    id: string
    quantity: number
    name: string
  }
  onClose: () => void
}

export default function FormModalStockOut({ item, onClose }: Props) {
  const [quantity, setQuantity] = useState(item.quantity)
  const [reason, setReason] = useState("")
  const { stockMutate, stockIsLoading, stockError } = useStock()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    stockMutate(
      {
        itemId: item.id,
        quantity,
        reason,
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
        <h3>Stock Out {item.name}</h3>

        <input
          type="number"
          min={1}
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          placeholder="Quantity"
        />

        <input
          type="text"
          value={reason}
          onChange={e => setReason(e.target.value)}
          placeholder="Reason (optional)"
        />

        <button type="submit" disabled={stockIsLoading}>
          Submit
        </button>

        <button type="button" onClick={onClose}>
          Cancel
        </button>
        {stockError && <p className="text-red-500">{stockError?.message}</p>}
      </form>
    </div>
  )
}
