import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/locations/hanover')({
  head: () => ({
    meta: [
      { title: 'Asphalt Paving Hanover VA | J. Worden & Sons | Paving Experts' },
      { name: 'description', content: 'High-quality paving and sealcoating solutions throughout Hanover, VA. Call (804) 446-1296 for a free estimate.' },
    ],
  }),
  component: () => (
    <main className="min-h-screen bg-[#111111] text-white font-sans p-12">
      <h1 className="text-6xl font-black uppercase mb-4 leading-none">Hanover <span className="text-[#ffcc00]">Paving</span></h1>
      <p className="text-xl text-gray-400 max-w-2xl border-l-4 border-[#ffcc00] pl-6">Durable asphalt solutions built to last in Hanover, VA.</p>
    </main>
  ),
})
