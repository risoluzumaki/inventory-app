import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="font-bold text-xl">InventoryApp</Link>
        <div className="flex gap-4">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
          <Link to="/reservation" className="hover:text-gray-300">Reservations</Link>
          <Link to="/stock" className="hover:text-gray-300">Stock Outs</Link>
        </div>
      </div>
    </nav>
  )
}