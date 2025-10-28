import Link from 'next/link'
import { useState } from 'react'

export default function Navbar(){ 
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed w-full z-50 top-0 left-0 bg-black/60 backdrop-blur-md border-b border-gray-800">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-extrabold text-red-500">
            <img src='/logotav.png' style={{width:'200px'}} />
          </div>
          <div className="hidden md:block text-sm text-gray-300">Buka Showroom Mulai dari 250 Jutaan</div>
        </div>

      <nav className="hidden md:flex gap-6 items-center p-7">
      <Link href="#home" className="hover:text-red-400">Home</Link>
      <Link href="#tentang" className="hover:text-red-400">Tentang</Link>
      <Link href="#keunggulan" className="hover:text-red-400">Keunggulan</Link>
      <Link href="#paket" className="hover:text-red-400">Paket</Link>
      <Link href="#kontak" className="hover:text-red-400">Kontak</Link>
    </nav>


        <div className="md:hidden">
          <button onClick={() => setOpen(v => !v)} aria-label="menu" className="px-3 py-2 rounded-md border border-gray-800">
            <span className="text-sm">Menu</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#070707] border-t border-gray-800">
          <div className="flex flex-col p-4 gap-3">
            <Link href="#home">Home</Link>
            <Link href="#tentang">Tentang</Link>
            <Link href="#keunggulan">Keunggulan</Link>
            <Link href="#paket">Paket</Link>
            <Link href="#kontak">Kontak</Link>
          </div>
        </div>
      )}
    </header>
  )
}
