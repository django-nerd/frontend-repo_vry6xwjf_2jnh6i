import { motion } from 'framer-motion'

export default function VibeCoding() {
  return (
    <section id="vibecoding" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_55%)]" />
        <div className="absolute -inset-40 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_60%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">What is Vibe Coding?</h2>
        <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
          Vibe Coding is my personal way of creating — where logic meets creativity. It’s not just about code; it’s about rhythm, energy, and emotion. I believe every line of code should flow like music — alive and expressive.
        </p>

        <motion.div
          className="mt-10 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-sky-400 to-pink-400 font-extrabold text-4xl sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Create • Flow • Groove • Ship
        </motion.div>

        <img src="/trademark.png" alt="Trademark" className="mx-auto mt-12 opacity-15 w-40 h-40 animate-pulse" />
      </div>
    </section>
  )
}
