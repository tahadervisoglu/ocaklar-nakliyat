import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { QuoteSection } from "@/components/quote-section"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <Hero />
      <div id="hizmetlerimiz">
        <AboutSection />
      </div>
      <div id="teklif">
        <QuoteSection />
      </div>
      <WhatsAppFloat />
    </div>
  )
}
