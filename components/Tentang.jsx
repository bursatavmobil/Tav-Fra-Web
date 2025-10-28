import Image from "next/image"
import { motion } from "framer-motion"

export default function Tentang() {
  return (
    // <section id="tentang" className="p-10 md:p-20 bg-gradient-to-b from-gray-900 to-black text-gray-200">
    <section id="tentang" className="p-10 md:p-20  text-gray-200">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* === BAGIAN TEKS === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-red-400 mb-5">Tentang Kami</h2>
          <p className="text-gray-300 leading-relaxed mb-5">
            <span className="font-semibold text-white">TAV Mobil Indonesia</span> telah berdiri sejak tahun 
            <span className="text-red-400"> 2010</span> dan berkembang menjadi salah satu 
            platform jual-beli mobil second paling <span className="text-white font-semibold">terpercaya</span> di Indonesia.
          </p>
          <p className="text-gray-300 leading-relaxed mb-5">
            Kami menghadirkan sistem yang transparan dan efisien bagi pelanggan maupun mitra showroom, 
            serta memberikan peluang <span className="text-white font-semibold">kemitraan eksklusif</span> bagi 
            Anda yang ingin memiliki bisnis otomotif berkelas — bagian dari jaringan 
            <span className="text-white font-semibold"> first-class & bonafide</span>.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Dengan dukungan tim profesional dan teknologi digital terkini, 
            kami terus berinovasi untuk memberikan pengalaman terbaik dalam setiap transaksi.
          </p>
        </motion.div>

        {/* === BAGIAN GAMBAR === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/tav2.jpg"
            alt="TAV Mobil Indonesia Showroom"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg border border-gray-700"
          />
        </motion.div>
      </div>


    </section>
  )
}
