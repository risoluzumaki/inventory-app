import { useState } from "react"
import useItem from "../../hooks/useItem"
import FormModalReserve from "./component/FormModalReserve"

export default function Home() {
  const { itemData, itemIsLoading } = useItem()

  const [selectedItem, setSelectedItem] = useState<{
    id: string
    name: string
  } | null>(null)

  if (itemIsLoading) {
    return <div>Loading...</div>
  }

  return (
    <main className="p-6">
      <div className="grid gap-4">
        {itemData?.map(item => (
          <div key={item.id} className="border p-4 rounded">
            <h2>{item.name}</h2>
            <p>Stock: {item.stock}</p>

            <button
              onClick={() => setSelectedItem(item)}
              className="mt-2"
            >
              Reserve
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <FormModalReserve
          isOpen={true}
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </main>
  )
}
