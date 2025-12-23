import useReserve from "../../hooks/useReserve"
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";

export default function Reservation(){

  const {reserveHistory, reserveHistoryIsLoading, reserveHistoryIsError, reserveError} = useReserve();

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center">
      <Navbar />
      <div className="wrapper flex items-center justify-center gap-4">
        {reserveHistoryIsLoading && <p>Loading...</p>}
        {reserveHistoryIsError && <p>Error: {reserveError?.message}</p>}
        {reserveHistory?.map(item => (
          <div className="card border-2 rounded-2xl p-4" key={item.id}>
            <h2>{`id :${item.id}`}</h2>
            <h2>{`item id :${item.itemId}`}</h2>
            <h2>{`quantity :${item.quantity}`}</h2>
            <h2>{`created at :${item.createdAt}`}</h2>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  )
}