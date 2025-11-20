import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import VibeCoding from './components/VibeCoding'
import Trademark from './components/Trademark'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Ambient gradient fields for depth */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.06),transparent_35%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(168,85,247,0.06),transparent_35%)]" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(236,72,153,0.05),transparent_35%)]" />

      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <VibeCoding />
        <Trademark />
        <Contact />
      </main>
    </div>
  )
}

export default App
