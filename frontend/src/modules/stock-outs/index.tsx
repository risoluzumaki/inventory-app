import useStock from "../../hooks/useStock"
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

export default function Stock(){
  const {stockHistory, stockHistoryIsLoading, stockHistoryIsError, stockHistoryError} = useStock();

  return(
    <main className="h-screen w-full flex flex-col items-center justify-center">
      <Navbar />
      <div className="wrapper flex items-center justify-center gap-4">
        {stockHistoryIsLoading && <p>Loading...</p>}
        {stockHistoryIsError && <p>Error: {stockHistoryError?.message}</p>}
        {stockHistory?.map(item => (
          <div className="card border-2 rounded-2xl p-4" key={item.id}>
            <h2>{`id :${item.id}`}</h2>
            <h2>{`item id :${item.itemId}`}</h2>
            <h2>{`quantity :${item.quantity}`}</h2>
            <h2>{`reason :${item.reason}`}</h2>
          </div>)
        )}
      </div>
      <Footer />
    </main>
  )
}