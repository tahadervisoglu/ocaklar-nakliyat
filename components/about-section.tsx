import { Users, Award, Truck, HeartHandshake } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3557] mb-4">Hakkımızda</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ocaklar Nakliyat olarak yılların deneyimi ve güvenilir hizmet anlayışıyla evden eve nakliyat sektöründe
            lider konumdayız
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#e63946]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-[#e63946]" />
            </div>
            <h3 className="text-xl font-bold text-[#1d3557] mb-2">Uzman Kadro</h3>
            <p className="text-gray-600">Alanında uzman ve deneyimli ekibimizle hizmetinizdeyiz</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#1d3557]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-[#1d3557]" />
            </div>
            <h3 className="text-xl font-bold text-[#1d3557] mb-2">Kaliteli Hizmet</h3>
            <p className="text-gray-600">Her projede en yüksek kalite standartlarını uyguluyoruz</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#e63946]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-10 h-10 text-[#e63946]" />
            </div>
            <h3 className="text-xl font-bold text-[#1d3557] mb-2">Modern Araç Filosu</h3>
            <p className="text-gray-600">Yeni nesil araçlarımızla güvenli taşımacılık garantisi</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#1d3557]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartHandshake className="w-10 h-10 text-[#1d3557]" />
            </div>
            <h3 className="text-xl font-bold text-[#1d3557] mb-2">Müşteri Memnuniyeti</h3>
            <p className="text-gray-600">Müşteri memnuniyeti bizim için her zaman önceliklidir</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#1d3557] to-[#1d3557]/90 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Neden Ocaklar Nakliyat?</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Evden eve nakliyat sektöründe uzun yılların tecrübesi ile müşterilerimize en kaliteli hizmeti sunmayı
                hedefliyoruz. Eşyalarınızın güvenliği bizim için en önemli önceliktir. Modern araç filomuz, profesyonel
                ekibimiz ve güvenilir hizmet anlayışımızla her zaman yanınızdayız.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#e63946] rounded-full" />
                  <span>Sigortalı ve güvenli taşımacılık</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#e63946] rounded-full" />
                  <span>Profesyonel paketleme ve montaj hizmeti</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#e63946] rounded-full" />
                  <span>7/24 müşteri destek hizmetimiz</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#e63946] rounded-full" />
                  <span>Uygun fiyat garantisi</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-[#e63946] mb-2">15+</div>
                <div className="text-sm text-white/80">Yıllık Deneyim</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-[#e63946] mb-2">10K+</div>
                <div className="text-sm text-white/80">Mutlu Müşteri</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-[#e63946] mb-2">%100</div>
                <div className="text-sm text-white/80">Güvenli Taşıma</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-[#e63946] mb-2">24/7</div>
                <div className="text-sm text-white/80">Destek Hizmeti</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
