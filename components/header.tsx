"use client"

import { Phone, Mail, Facebook, Instagram, Youtube, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <header>
      {/* Top bar with contact info */}
      <div className="bg-[#e63946] text-white py-2.5">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:05304083028" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">0530 408 30 28</span>
            </a>
            <a
              href="mailto:info@ocaklarnakliyat.com.tr"
              className="hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              <span>info@ocaklarnakliyat.com.tr</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:opacity-80">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:opacity-80">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-80">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-80">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="hover:opacity-80">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.89-8.9c1.28 0 2.33-1.05 2.33-2.33S14.17 6.44 12.89 6.44s-2.33 1.05-2.33 2.33 1.05 2.33 2.33 2.33zm-2.67 5.56c0-1.78 1.45-3.22 3.22-3.22s3.22 1.45 3.22 3.22H10.22z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="relative">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M20 10L30 25L20 40L10 25L20 10Z" fill="#e63946" />
                  <path d="M30 10L40 25L30 40V10Z" fill="#1d3557" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#1d3557]">OCAKLAR</div>
                <div className="text-sm text-gray-600">nakliyat</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-700 hover:text-[#e63946] transition-colors"
            >
              Anasayfa
            </button>
            <button
              onClick={() => scrollToSection("hizmetlerimiz")}
              className="text-gray-700 hover:text-[#e63946] transition-colors"
            >
              Hakkımızda
            </button>
            <button
              onClick={() => scrollToSection("hizmetlerimiz")}
              className="text-gray-700 hover:text-[#e63946] transition-colors"
            >
              Hizmetlerimiz
            </button>
            <button
              onClick={() => scrollToSection("teklif")}
              className="text-gray-700 hover:text-[#e63946] transition-colors"
            >
              İletişim
            </button>
          </nav>

          {/* Desktop Request form button */}
          <Button
            onClick={() => scrollToSection("teklif")}
            className="hidden lg:flex bg-[#1d3557] hover:bg-[#1d3557]/90 text-white px-6"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Talep Formu
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#e63946] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-gray-700 hover:text-[#e63946] transition-colors py-2"
              >
                Anasayfa
              </button>
              <button
                onClick={() => scrollToSection("hizmetlerimiz")}
                className="block w-full text-left text-gray-700 hover:text-[#e63946] transition-colors py-2"
              >
                Hakkımızda
              </button>
              <button
                onClick={() => scrollToSection("hizmetlerimiz")}
                className="block w-full text-left text-gray-700 hover:text-[#e63946] transition-colors py-2"
              >
                Hizmetlerimiz
              </button>
              <button
                onClick={() => scrollToSection("teklif")}
                className="block w-full text-left text-gray-700 hover:text-[#e63946] transition-colors py-2"
              >
                İletişim
              </button>
              <Button
                onClick={() => scrollToSection("teklif")}
                className="w-full bg-[#1d3557] hover:bg-[#1d3557]/90 text-white mt-4"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Talep Formu
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
