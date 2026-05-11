import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Services', 'About', 'Process', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 'var(--nav-h)',
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
        background: scrolled ? 'rgba(15,27,60,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 24px',
      }}>
        <a href="#" aria-label="DMC Structural Rehabilitation home"
          style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 32, color: 'var(--accent)', letterSpacing: 3 }}>DMC</span>
          <span style={{ fontFamily: 'Poppins', fontSize: 9, fontWeight: 500, color: 'var(--text-muted)', letterSpacing: 2, marginTop: 2 }}>STRUCTURAL REHAB</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 40 }}
          className="hidden lg:flex">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="flex lg:hidden"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          style={{ flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 8, zIndex: 1100 }}
        >
          {[0, 1, 2].map(i => (
            <motion.span key={i}
              animate={open
                ? i === 0 ? { translateY: 7, rotate: 45 }
                : i === 1 ? { opacity: 0, scaleX: 0 }
                : { translateY: -7, rotate: -45 }
                : { translateY: 0, rotate: 0, opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.3 }}
              style={{ display: 'block', width: 24, height: 2, background: 'var(--text)', borderRadius: 2 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, background: 'var(--bg)', zIndex: 1050,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}
            role="dialog" aria-label="Navigation menu"
          >
            <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
              {links.map((l, i) => (
                <motion.li key={l}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a href={`#${l.toLowerCase()}`}
                    onClick={closeMenu}
                    style={{
                      fontFamily: "'Bebas Neue', cursive", fontSize: 48,
                      color: 'var(--text)', letterSpacing: 3, transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
                  >{l}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
