import { useState } from "react"
import useItem from "../../hooks/useItem"
import FormModalReserve from "./component/FormModalReserve"
import FormModalStockOut from "./component/FormModalStock"
import Navbar from "../../shared/Navbar"
import Footer from "../../shared/Footer"

export default function Home() {
  const { itemData, itemIsLoading, itemIsError } = useItem()

  const [selectedItemReserve, setSelectedItemReserve] = useState<{
    id: string
    name: string
  } | null>(null)

  const [selectedItemStock, setSelectedItemStock] = useState<{
    id: string,
    name: string
  } | null>(null)

  return (
    <main className="h-screen flex justify-center items-center">
      <Navbar />
      {itemIsLoading && <p>Loading...</p>}
      {itemIsError && <p>Error...</p>}
      <div className="wrapper flex gap-1">
        {itemData?.map(item => (
          <div key={item.id} className="border-2 p-4 rounded">
            <h2>{item.name}</h2>
            <p>Stock: {item.stock}</p>

            <button
              onClick={() => setSelectedItemReserve(item)}
              className="mt-2 rounded-md px-4 py-1 mr-2.5 border-2"
            >
              Reserves
            </button>
            <button className="mt-2 rounded-md px-4 py-1 border-2" onClick={() => setSelectedItemStock({id: item.id, name: item.name})}>Stock Out</button>
          </div>
        ))}
      </div>

      {/* Modal Reserve */}
      {selectedItemReserve && (
        <FormModalReserve
          isOpen={true}
          item={selectedItemReserve}
          onClose={() => setSelectedItemReserve(null)}
        />
      )}

      {selectedItemStock && (
        <FormModalStockOut
          isOpen={true}
          item={selectedItemStock}
          onClose={() => setSelectedItemStock(null)}
        />
      )}
      <Footer />
    </main>
  )
}
