export default function Trademark() {
  return (
    <section id="trademark" className="relative py-24">
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">My Trademark</h2>
        <div className="mt-8 flex items-center justify-center">
          <div className="w-56 h-56 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <img src="/trademark.png" alt="Trademark placeholder" className="w-3/4 h-3/4 object-contain opacity-80" />
          </div>
        </div>
        <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
          This is my creative mark — a symbol of energy, originality, and the Vibe that drives every project I build.
        </p>
      </div>
    </section>
  )
}
