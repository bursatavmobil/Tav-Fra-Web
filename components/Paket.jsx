import { motion } from 'framer-motion'

const paket = [
  { name: "GOLD", investasi: "Rp 1.049,5 Jt", fee: "Rp 250 Jt", profit: "Rp 99 Jt/bln", bep: "3.4 Bulan", unit: "5 Unit" },
  { name: "DIAMOND", investasi: "Rp 2.684,5 Jt", fee: "Rp 350 Jt", profit: "Rp 240 Jt/bln", bep: "2 Bulan", unit: "15 Unit" },
  { name: "PLATINUM", investasi: "Rp 6.597 Jt", fee: "Rp 450 Jt", profit: "Rp 633 Jt/bln", bep: "1 Bulan", unit: "30 Unit" },
]

export default function Paket(){
  return (
    <section id="paket" className="py-20 container">
      <h3 className="text-2xl font-bold text-red-400 mb-6">Gambaran Investasi</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {paket.map((p, i) => (
          <motion.div key={p.name} initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: i*0.1 }} className="bg-[#111] p-6 rounded-2xl border border-gray-800">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-lg">{p.name}</h4>
              <div className="text-sm text-gray-400">{p.unit}</div>
            </div>
            <div className="mt-4 space-y-1 text-sm text-gray-300">
              <div><strong>Investasi Awal:</strong> {p.investasi}</div>
              <div><strong>Franchise Fee:</strong> {p.fee}</div>
              <div><strong>Keuntungan:</strong> {p.profit}</div>
              <div><strong>BEP:</strong> {p.bep}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
