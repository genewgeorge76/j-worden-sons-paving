import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/locations/powhatan')({
  component: () => (
    <div className="min-h-screen bg-[#111111] text-white p-12">
      <h1 className="text-[#ffcc00] text-5xl font-black uppercase mb-6">Asphalt Paving Powhatan, VA</h1>
      <p className="text-xl text-gray-300">Expert asphalt installation and repair for Powhatan property owners. 4th-generation quality you can trust.</p>
    </div>
  ),
})
