import { useState } from "react"
import useStock from "../../../hooks/useStock"

interface Props {
  isOpen: boolean
  item: {
    id: string
    name: string
  }
  onClose: () => void
}

export default function FormModalStockOut({ item, onClose }: Props) {
  const [quantity, setQuantity] = useState(0)
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
    <div className="modal modal h-screen w-full fixed flex items-center justify-center bg-transparent backdrop-blur z-50">
      <form onSubmit={handleSubmit} className="border-2 p-8 rounded-2xl">
        <h3>Stock Out {item.name}</h3>

        <input
          type="number"
          min={1}
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          placeholder="Quantity"
          className="outline-1 focus:outline-2"
        />
        
        <input
          type="text"
          value={reason}
          onChange={e => setReason(e.target.value)}
          placeholder="Reason (optional)"
          className="outline-1 focus:outline-2 mr-3"
        />

        <button type="submit" disabled={stockIsLoading} className="rounded-md px-4 py-1 mr-2.5 border-2">
          Submit
        </button>

        <button type="button" onClick={onClose} className="rounded-md px-4 py-1 mr-2.5 border-2">
          Cancel
        </button>
        {stockError && <p className="text-red-500">{stockError?.message || "Something went wrong"}</p>}
      </form>
    </div>
  )
}
