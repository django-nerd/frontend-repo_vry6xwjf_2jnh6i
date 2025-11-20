import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5]"
      aria-hidden
    >
      <div
        className="absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-fuchsia-500/40 to-sky-500/40"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-md opacity-60 bg-sky-400/50"
        style={{ left: pos.x, top: pos.y }}
      />
    </div>
  )
}
