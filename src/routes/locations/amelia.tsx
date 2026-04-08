import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/locations/amelia')({
  component: () => (
    <div className="min-h-screen bg-[#111111] text-white p-12">
      <h1 className="text-[#ffcc00] text-5xl font-black uppercase mb-6">Asphalt Paving Amelia, VA</h1>
      <p className="text-xl text-gray-300">Premium 4th-generation paving services for the Amelia community. Professional excellence in every square foot.</p>
    </div>
  ),
})
