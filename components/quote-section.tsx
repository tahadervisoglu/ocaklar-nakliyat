"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CitySelect } from "@/components/city-select"
import { QuotePopup } from "@/components/quote-popup"
import { Phone } from "lucide-react"

export function QuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    fromAddress: "",
    toAddress: "",
  })

  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleFromAddressChange = (value: string) => {
    setFormData({ ...formData, fromAddress: value })
  }

  const handleToAddressChange = (value: string) => {
    setFormData({ ...formData, toAddress: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name || !formData.phone || !formData.fromAddress || !formData.toAddress) {
      alert("Lütfen tüm zorunlu alanları doldurunuz.")
      return
    }
    
    // Show popup
    setIsPopupOpen(true)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-[#f5f5f5] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3557] mb-4">Ücretsiz Fiyat Teklifi Alın</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Formu doldurun, size en uygun fiyat teklifini hemen gönderelim. Ücretsiz keşif ve danışmanlık hizmeti
            sunuyoruz.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Adınız ve soyadınız"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05XX XXX XX XX"
                      className="pl-10 w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fromAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Nereden *
                  </label>
                  <CitySelect
                    value={formData.fromAddress}
                    onChange={handleFromAddressChange}
                    placeholder="Şehir seçiniz"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="toAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Nereye *
                  </label>
                  <CitySelect
                    value={formData.toAddress}
                    onChange={handleToAddressChange}
                    placeholder="Şehir seçiniz"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-[#e63946] hover:bg-[#e63946]/90 text-white py-6 text-lg">
                Ücretsiz Teklif Al
              </Button>

              <p className="text-sm text-gray-500 text-center">
                * Formunu göndererek{" "}
                <a href="#" className="text-[#e63946] hover:underline">
                  gizlilik politikamızı
                </a>{" "}
                kabul etmiş olursunuz.
              </p>
            </form>
          </div>

          {/* Contact info cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <Phone className="w-8 h-8 text-[#e63946] mx-auto mb-3" />
              <h3 className="font-bold text-[#1d3557] mb-2">Telefon</h3>
              <a href="tel:05384697401" className="text-gray-600 hover:text-[#e63946]">
                0538 469 74 01
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <svg
                className="w-8 h-8 text-[#e63946] mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="font-bold text-[#1d3557] mb-2">E-posta</h3>
              <a href="mailto:info@ocaklarnakliyat.com.tr" className="text-gray-600 hover:text-[#e63946]">
                info@ocaklarnakliyat.com.tr
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <svg
                className="w-8 h-8 text-[#e63946] mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="font-bold text-[#1d3557] mb-2">Çalışma Saatleri</h3>
              <p className="text-gray-600">Hafta içi 08:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Popup */}
      <QuotePopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </section>
  )
}
