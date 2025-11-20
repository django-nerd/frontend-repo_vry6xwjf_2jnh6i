import { ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'ATTNGAN Studio',
    desc: 'A fine-grained text-to-image generation web app using AttnGAN, built with Lovable (Frontend), Supabase (Backend), and Stability AI API.',
    tech: 'Lovable, Supabase, Stability AI, AttnGAN, Python',
    href: 'https://attnganstudio.vercel.app/',
    image: '/attngan-screenshot.jpg',
  },
  {
    name: 'Coming Soon',
    desc: 'Stay tuned for something exciting in AI x Web.',
    tech: 'TBA',
    href: '#',
    image: '/coming-soon-1.jpg',
  },
  {
    name: 'Coming Soon',
    desc: 'Exploring Arduino + ML on the edge.',
    tech: 'TBA',
    href: '#',
    image: '/coming-soon-2.jpg',
  },
]

function Card({ name, desc, tech, href, image }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_30px_rgba(56,189,248,0.12)] hover:border-sky-500/40 transition-colors">
      <div className="h-48 w-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          {href !== '#' && (
            <a href={href} target="_blank" className="text-sky-300 hover:text-fuchsia-300" rel="noreferrer">
              <ExternalLink />
            </a>
          )}
        </div>
        <p className="mt-2 text-slate-300 text-sm">{desc}</p>
        <p className="mt-3 text-sky-300 text-xs">{tech}</p>
        {href !== '#' && (
          <a href={href} target="_blank" rel="noreferrer" className="inline-block mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-600 text-white text-sm">
            View Project
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.08),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">My Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
