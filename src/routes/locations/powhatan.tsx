import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/locations/powhatan')({
  head: () => ({
    meta: [
      { title: 'Asphalt Paving Powhatan VA | J. Worden & Sons | Professional Paving' },
      { name: 'description', content: 'Expert asphalt installation and repair for Powhatan property owners. 4th-generation quality. Call (804) 446-1296.' },
    ],
  }),
  component: () => (
    <main className="min-h-screen bg-[#111111] text-white font-sans p-12">
      <h1 className="text-6xl font-black uppercase mb-4 leading-none">Powhatan <span className="text-[#ffcc00]">Paving</span></h1>
      <p className="text-xl text-gray-400 max-w-2xl border-l-4 border-[#ffcc00] pl-6">Professional paving and sealcoating for the Powhatan community.</p>
    </main>
  ),
})
