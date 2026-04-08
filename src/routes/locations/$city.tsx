import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/locations/$city')({
  component: CityTemplate,
})

function CityTemplate() {
  const { city } = Route.useParams()
  // This cleans up the name (e.g., "glen-allen" becomes "Glen Allen")
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, ' ')

  return (
    <main className="min-h-screen bg-[#111111] text-white font-sans">
      <section className="py-24 px-6 bg-[#1a1a1a] border-b-[10px] border-[#ffcc00]">
        <div className="max-w-7xl mx-auto">
          <span className="bg-[#ffcc00] text-black px-4 py-1 font-black uppercase text-sm tracking-[0.3em] mb-6 inline-block">
            Official Service Area
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-4 leading-none">
            {cityName} <span className="text-[#ffcc00]">Paving</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl border-l-4 border-[#ffcc00] pl-6 italic">
            Premium 4th-generation asphalt solutions for {cityName}, VA. 
            Commercial & Residential excellence headquartered in Chester.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#ffcc00] text-black text-center">
        <h2 className="text-3xl font-black uppercase">Schedule Your {cityName} Estimate</h2>
        <p className="text-xl font-bold mt-2">Call Our Chester HQ: (804) 446-1296</p>
      </section>
    </main>
  )
}
