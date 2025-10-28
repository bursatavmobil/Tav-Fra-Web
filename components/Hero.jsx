import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('/hero2.png')] bg-cover bg-center opacity-70 "></div>
      <div className="container relative z-10 py-28">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Bangun Kerajaan Bisnis Otomotif Kamu Sendiri</h1>
            <p className="mt-4 text-gray-300 max-w-lg">
              <strong>TAV Mobil Indonesia</strong> sejak 2010 — membuka kesempatan kemitraan franchise di berbagai kota.
              Buka showroom mulai dari <span className="text-red-400 font-bold">250 Jutaan</span> saja.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#kontak" className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold">Gabung Sekarang</a>
              <a href="#paket" className="inline-block border border-gray-700 px-6 py-3 rounded-full text-sm">Lihat Paket</a>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="p-4">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/40 p-4 rounded-2xl border border-gray-800">
              <div className="flex gap-4 items-center">
                <div className="w-28 h-28 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold">250 Jt+</div>
                <div>
                  <div className="text-sm text-gray-300">Investasi Start From</div>
                  <div className="text-2xl font-bold text-white">250 JUTA</div>
                  <div className="text-xs text-gray-400 mt-1">Hanya Selama Pameran</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
