import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/locations/richmond')({
  head: () => ({
    meta: [
      { title: 'Asphalt Paving Richmond VA 23221 | J. Worden & Sons Paving' },
      { name: 'description', content: 'The Richmond authority in asphalt paving. Serving 23221 and the metro area with 4th-gen expertise. Call (804) 446-1296.' },
    ],
  }),
  component: () => (
    <main className="min-h-screen bg-[#111111] text-white font-sans p-12">
      <h1 className="text-6xl font-black uppercase mb-4 leading-none">Richmond <span className="text-[#ffcc00]">Paving</span></h1>
      <p className="text-xl text-gray-400 max-w-2xl border-l-4 border-[#ffcc00] pl-6">Dominating the Richmond (23221) market with premium paving since 1984.</p>
    </main>
  ),
})
