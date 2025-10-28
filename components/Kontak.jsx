export default function Kontak(){
  return (
    <section id="kontak" className="py-20 container">
      <h3 className="text-2xl font-bold text-red-400 mb-4">Hubungi Kami</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#111] p-6 rounded-xl border border-gray-800">
          <p className="text-gray-300"><strong>Head Office</strong></p>
          <p className="text-sm text-gray-400 mt-2">Bursa Mobil TAV — Jl. Kompol Maksum No.280-284, Semarang</p>
          <p className="mt-4 text-sm">Rekening BCA: <strong>8165-700-585</strong> (PT TAV MOBIL INDONESIA)</p>
        </div>
        <div className="bg-[#111] p-6 rounded-xl border border-gray-800 flex flex-col gap-3 justify-center">
          <a href="https://wa.me/6288215151956" className="bg-green-600 px-4 py-2 rounded-full text-white text-center">Chat Hendy</a>
          <a href="https://wa.me/6281325704810" className="bg-green-600 px-4 py-2 rounded-full text-white text-center">Chat Ilvan</a>
          <a href="#" className="mt-2 text-sm text-gray-400">Ingin jadi Master Kota / Provinsi? Hubungi kami untuk paket eksklusif.</a>
        </div>
      </div>
    </section>
  )
}
