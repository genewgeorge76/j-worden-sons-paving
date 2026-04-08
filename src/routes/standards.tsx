import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/standards')({
  component: () => (
    <main className="min-h-screen bg-[#111111] font-sans text-white">
      <section className="py-24 px-6 bg-[#1a1a1a] border-b-[10px] border-[#ffcc00]">
        <div className="max-w-7xl mx-auto">
          <span className="bg-[#ffcc00] text-black px-4 py-1 font-black uppercase text-sm tracking-[0.3em] mb-6 inline-block">
            Consumer Protection & Specs
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-4 leading-none">
            Premium <span className="text-[#ffcc00]">Standards</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            4th-Generation Asphalt Paving excellence. We don't just pave; we build foundations that last.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-black/40 p-10 border border-white/10">
            <h3 className="text-[#ffcc00] font-black uppercase text-2xl mb-4">Material Quality</h3>
            <p className="text-gray-300">High-stability surface courses with optimized liquid asphalt content.</p>
          </div>
          <div className="bg-black/40 p-10 border border-white/10">
            <h3 className="text-[#ffcc00] font-black uppercase text-2xl mb-4">Engineering Precision</h3>
            <p className="text-gray-300">Laser-leveled sub-base and 2% minimum drainage slope for every job.</p>
          </div>
        </div>
      </section>
    </main>
  ),
})
