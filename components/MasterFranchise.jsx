export default function MasterFranchise(){
  return (
    <section id="master" className="py-20 bg-[#0b0b0b]">
      <div className="container">
        <h3 className="text-2xl font-bold text-red-400 mb-6">Peluang Kemitraan Skala Besar</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
            <h4 className="font-bold">Master Kota</h4>
            <p className="text-sm text-gray-300 mt-2">Active Income: Penjualan &gt; 50 unit/bulan. Passive Income: Sharing franchise fee area kota.</p>
          </div>
          <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
            <h4 className="font-bold">Master Provinsi</h4>
            <p className="text-sm text-gray-300 mt-2">Active Income: Penjualan &gt; 100 unit/bulan. Passive Income: Sharing franchise fee area provinsi.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
