import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/standards')({
  component: () => (
    <main className="min-h-screen bg-[#111111] font-sans text-white">
      <section className="py-24 px-6 bg-[#1a1a1a] border-b-[10px] border-[#ffcc00]">
        <div className="max-w-7xl mx-auto">
          <span className="bg-[#ffcc00] text-black px-4 py-1 font-black uppercase text-sm tracking-[0.3em] mb-6 inline-block">
            Premium Specifications
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-4 leading-none">
            Elite <span className="text-[#ffcc00]">Standards</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            4th-Generation Asphalt Paving excellence. We build foundations that last for decades.
          </p>
        </div>
      </section>
      <section className="py-20 px-6 text-center">
        <h3 className="text-[#ffcc00] font-black uppercase text-2xl mb-4">Commercial Grade Material</h3>
        <p className="text-gray-300">High-stability surface courses designed for Virginia's traffic and weather cycles.</p>
      </section>
    </main>
  ),
})
