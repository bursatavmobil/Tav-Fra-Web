import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Tentang from '@/components/Tentang'
import Keunggulan from '@/components/Keunggulan'
import Paket from '@/components/Paket'
import MasterFranchise from '@/components/MasterFranchise'
import Kontak from '@/components/Kontak'
import Footer from '@/components/Footer'

export default function Home(){
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Tentang />
        <Keunggulan />
        <Paket />
        <MasterFranchise />
        <Kontak />
        <Footer />
      </main>
    </div>
  )
}
