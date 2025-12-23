import { Link } from "react-router";

export default function Navbar(){
  return (
    <nav className="p-4 fixed w-full z-10 top-0 border-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">InventoryApp Prototype</Link>
        <div className="flex gap-4">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
          <Link to="/reservation" className="hover:text-gray-300">Reservations</Link>
          <Link to="/stock" className="hover:text-gray-300">Stock Outs</Link>
        </div>
      </div>
    </nav>
  )
}