"use client"

import { useState } from "react"
import { ChevronDown, MapPin } from "lucide-react"

interface CitySelectProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
  required?: boolean
}

export function CitySelect({ value, onChange, placeholder, required }: CitySelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showCustomInput, setShowCustomInput] = useState(false)
  const [customValue, setCustomValue] = useState("")

  const cities = [
    "İstanbul",
    "Ankara", 
    "İzmir",
    "Bursa",
    "Antalya",
    "Adana",
    "Konya",
    "Gaziantep",
    "Kayseri",
    "Mersin",
    "Diğer"
  ]

  const handleCitySelect = (city: string) => {
    if (city === "Diğer") {
      setShowCustomInput(true)
      onChange("")
    } else {
      setShowCustomInput(false)
      onChange(city)
    }
    setIsOpen(false)
  }

  const handleCustomInputChange = (inputValue: string) => {
    setCustomValue(inputValue)
    onChange(inputValue)
  }

  return (
    <div className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full pl-10 pr-10 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <span className={value ? "text-gray-900" : "text-gray-500"}>
            {value || placeholder}
          </span>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {cities.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => handleCitySelect(city)}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            >
              {city}
            </button>
          ))}
        </div>
      )}

      {showCustomInput && (
        <div className="mt-2">
          <input
            type="text"
            placeholder="Şehir adını yazınız"
            value={customValue}
            onChange={(e) => handleCustomInputChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required={required}
          />
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}