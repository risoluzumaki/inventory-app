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
            className="text-blue-600"
            width={64}
            height={64}
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-700 mb-2">
          Inventory App
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8">
          Simple inventory management system
        </p>

        {/* Button */}
        <button
          onClick={() => navigate('/home')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}
