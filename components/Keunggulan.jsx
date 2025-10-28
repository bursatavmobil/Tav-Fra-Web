import { motion } from "framer-motion"
import { ShieldCheck, Database, Network, ShoppingBag, Users } from "lucide-react"

const items = [
  {
    title: "Brand Teruji & Terpercaya",
    desc: "Memanfaatkan kekuatan nama TAV yang dikenal di bursa mobil nasional.",
    icon: <ShieldCheck className="w-8 h-8 text-red-400" />,
    color: "from-yellow-500/20 to-yellow-700/10",
  },
  {
    title: "Sistem ERP & Database Terpadu",
    desc: "Operasional, inventaris, dan keuangan terkelola digital.",
    icon: <Database className="w-8 h-8 text-red-400" />,
    color: "from-yellow-500/20 to-yellow-700/10",
  },
  {
    title: "Akses Jaringan Eksklusif",
    desc: "Terhubung ke jaringan dealer dan marketplace otomotif.",
    icon: <Network className="w-8 h-8 text-red-400" />,
    color: "from-yellow-500/20 to-yellow-700/10",
  },
  {
    title: "Penjualan Melalui E-Commerce",
    desc: "Unit terhubung ke platform digital kami, jangkauan pelanggan luas.",
    icon: <ShoppingBag className="w-8 h-8 text-red-400" />,
    color: "from-yellow-500/20 to-yellow-700/10",
  },
  {
    title: "Dukungan SDM & Training",
    desc: "Pelatihan komprehensif untuk staff dan manajemen showroom.",
    icon: <Users className="w-8 h-8 text-red-400" />,
    color: "from-yellow-500/20 to-yellow-700/10",
  },
]

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="py-20 bg-[#0b0b0b] relative overflow-hidden">
      {/* background dekoratif */}
      <div className="absolute inset-0   pointer-events-none"></div>

      <div className="container relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold text-red-400 mb-10 text-center"
        >
          Kenapa Harus Franchise di TAV?
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 border border-gray-800 bg-gradient-to-br ${it.color} hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-black/40 rounded-xl border border-gray-700">
                  {it.icon}
                </div>
                <h4 className="font-bold text-white text-lg">{it.title}</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
