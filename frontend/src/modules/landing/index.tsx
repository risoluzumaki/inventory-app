import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="text-center bg-white px-10 py-12 rounded-xl shadow-md">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <Icon
            icon="mdi:warehouse"
            className="text-black"
            width={64}
            height={64}
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">
          Inventory App
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8">
          Simple inventory management system
        </p>

        {/* Button */}
        <button
          onClick={() => navigate('/home')}
          className="px-6 py-2 rounded-lg
                     bg-black hover:bg-slate-800 text-white"
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}
