import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-24 grid md:grid-cols-[1.1fr_0.9fr] items-center gap-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(56,189,248,0.25)]"
          >
            Velimineti Krishna
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-lg sm:text-xl text-sky-200"
          >
            AI & Vibe Coding Enthusiast | CSE AIML Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-2 text-sky-300/90"
          >
            “Even this portfolio is made using Vibe Coding.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-slate-300 max-w-xl"
          >
            I’m an AI and Arduino enthusiast driven by curiosity and creativity. I build, code, and innovate to bring ideas to life — blending technology with imagination through Vibe Coding.
          </motion.p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-600 text-white font-medium shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.55)]"
          >
            Explore My Work
          </motion.a>
        </div>

        <div className="relative">
          <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full border border-white/10 mx-auto overflow-hidden shadow-[0_0_30px_rgba(56,189,248,0.35)]">
            <img src="/profile-placeholder.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-10 -right-6 w-40 h-40 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-sky-500/20 blur-2xl" />
          <div className="absolute -bottom-10 -left-6 w-36 h-36 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-sky-500/20 blur-2xl" />

          <img src="/trademark.png" alt="Trademark" className="absolute inset-0 m-auto opacity-20 w-64 h-64 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
