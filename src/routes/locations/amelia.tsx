import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/locations/amelia')({
  head: () => ({
    meta: [
      { title: 'Asphalt Paving Amelia VA | J. Worden & Sons | 4th Gen Paving' },
      { name: 'description', content: 'Premium asphalt paving in Amelia, VA. 4th-generation expertise, headquartered in Chester. Call (804) 446-1296.' },
    ],
  }),
  component: () => (
    <main className="min-h-screen bg-[#111111] text-white font-sans p-12">
      <h1 className="text-6xl font-black uppercase mb-4 leading-none">Amelia <span className="text-[#ffcc00]">Paving</span></h1>
      <p className="text-xl text-gray-400 max-w-2xl border-l-4 border-[#ffcc00] pl-6">Elite asphalt solutions for Amelia, VA. 4th-generation excellence for your home or business.</p>
    </main>
  ),
})
