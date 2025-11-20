import { Cpu, Rocket, Globe, Music, Lightbulb } from 'lucide-react'

const interests = [
  { icon: Cpu, label: 'AI & ML' },
  { icon: Lightbulb, label: 'Arduino Projects' },
  { icon: Rocket, label: 'Hackathons & Innovation' },
  { icon: Globe, label: 'Web Development' },
  { icon: Music, label: 'Music & Creativity' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.08),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">About Me</h2>
        <p className="text-slate-300 max-w-3xl">
          Hey there 👋 I’m Krishna, a passionate AI and ML learner currently pursuing B.Tech in Computer Science (AIML). I love experimenting with micro-drones, building Arduino-based prototypes, and creating AI-powered web apps. I believe in ‘learning by doing’ and ‘vibe coding’ — coding with flow, rhythm, and purpose.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {interests.map(({ icon: Icon, label }) => (
            <div key={label} className="group rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-5 text-center hover:border-sky-500/40 transition-colors shadow-[0_0_20px_rgba(56,189,248,0.12)]">
              <Icon className="mx-auto text-sky-300 group-hover:text-fuchsia-300 transition-colors" />
              <div className="mt-2 text-slate-200">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
