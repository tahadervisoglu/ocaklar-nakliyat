"use client"

import type React from "react"
import { X, AlertCircle, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuotePopupProps {
  isOpen: boolean
  onClose: () => void
}

export function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  if (!isOpen) return null

  const handleCall = () => {
    window.open("tel:05549961028", "_self")
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Merhaba, nakliyat hizmeti için fiyat almak istiyorum.")
    window.open(`https://wa.me/905549961028?text=${message}`, "_blank")
  }

  const handleBackToForm = () => {
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-gray-600" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 text-center mb-4">
          Yoğun Talep Nedeniyle
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 text-center mb-8 leading-relaxed">
          Sistemimizdeki anlık yoğunluktan dolayı teklif formumuzu şu an işleme alamadık. 
          Lütfen beklemeden aşağıdaki butonlardan bize doğrudan ulaşarak anında fiyat alınız.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleCall}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Hemen Ara
          </Button>

          <Button
            onClick={handleWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
            </svg>
            WhatsApp ile Yaz
          </Button>

          <Button
            onClick={handleBackToForm}
            className="w-full bg-red-400 hover:bg-red-500 text-white py-3 rounded-lg"
          >
            Forma Geri Dön
          </Button>
        </div>
      </div>
    </div>
  )
}