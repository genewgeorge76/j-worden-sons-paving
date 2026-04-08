import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/standards')({
  component: () => (
    <main className="min-h-screen bg-[#111111] font-sans text-white">
      <section className="py-24 px-6 bg-[#1a1a1a] border-b-[10px] border-[#ffcc00]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black uppercase mb-4 text-[#ffcc00]">Premium Paving Standards</h1>
          <p className="text-xl text-gray-300">4th-Generation Excellence in every square foot.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-black/50 p-8 border border-gray-800">
            <h3 className="text-[#ffcc00] font-bold text-2xl mb-4 uppercase">Commercial Grade Materials</h3>
            <p>We use high-stability surface courses designed for heavy traffic and Richmond weather cycles.</p>
          </div>
          <div className="bg-black/50 p-8 border border-gray-800">
            <h3 className="text-[#ffcc00] font-bold text-2xl mb-4 uppercase">ADA Compliance</h3>
            <p>Every stall and route is measured to the inch to meet federal and Virginia state accessibility laws.</p>
          </div>
        </div>
      </section>
    </main>
  ),
})
