import { Mail, Linkedin, Github, Instagram, FileText } from 'lucide-react'

const socials = [
  { icon: Mail, label: 'Email', href: 'mailto:veliminetikrishna@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/velimineti-krishna-668652321/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/krishna_chaithanya_1225/' },
  { icon: FileText, label: 'Resume', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(236,72,153,0.08),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s Connect</h2>
        <p className="mt-2 text-slate-300">I’d love to collaborate, connect, or just vibe about ideas.</p>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <form className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(56,189,248,0.12)]">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 text-sm mb-1">Name</label>
                <input placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-slate-800/70 border border-white/10 text-white focus:border-sky-400 outline-none" />
              </div>
              <div>
                <label className="block text-slate-300 text-sm mb-1">Email</label>
                <input placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-800/70 border border-white/10 text-white focus:border-sky-400 outline-none" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-slate-300 text-sm mb-1">Message</label>
              <textarea rows={5} placeholder="Say hello..." className="w-full px-4 py-3 rounded-xl bg-slate-800/70 border border-white/10 text-white focus:border-sky-400 outline-none" />
            </div>
            <button type="button" className="mt-5 px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-600 text-white shadow-[0_0_25px_rgba(56,189,248,0.35)]">Send Message</button>
          </form>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-slate-800/60 p-4 hover:border-sky-500/40">
                  <Icon className="text-sky-300 group-hover:text-fuchsia-300" />
                  <span className="text-slate-200 text-sm">{label}</span>
                </a>
              ))}
            </div>

            <p className="mt-10 text-center text-slate-400 text-sm">Built with ❤️ and Vibe by Velimineti Krishna</p>
          </div>
        </div>
      </div>
    </section>
  )
}
