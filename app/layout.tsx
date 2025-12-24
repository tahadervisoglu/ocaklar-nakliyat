import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ocaklar Nakliyat - Profesyonel Evden Eve Nakliyat",
  description:
    "Ev eşyası taşımacılık konusunda deneyimli ekibimizle tüm eşyalara özel paketleme uygulayarak profesyonelce ve özenle taşıyoruz.",
  metadataBase: new URL('https://ocaklarnakliyat.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ocaklar Nakliyat - Profesyonel Evden Eve Nakliyat",
    description: "Ev eşyası taşımacılık konusunda deneyimli ekibimizle tüm eşyalara özel paketleme uygulayarak profesyonelce ve özenle taşıyoruz.",
    url: 'https://ocaklarnakliyat.com',
    siteName: 'Ocaklar Nakliyat',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ocaklar Nakliyat - Profesyonel Evden Eve Nakliyat",
    description: "Ev eşyası taşımacılık konusunda deneyimli ekibimizle tüm eşyalara özel paketleme uygulayarak profesyonelce ve özenle taşıyoruz.",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
