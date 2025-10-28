import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050505] via-[#0b0b0b] to-[#0b0b0b] text-gray-200">
      <Component {...pageProps} />
    </div>
  );
}
