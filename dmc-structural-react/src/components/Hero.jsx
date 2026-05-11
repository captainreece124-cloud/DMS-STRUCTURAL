import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const pills = ['Roofing', 'Waterproofing', 'Cladding', 'Structural Repairs', 'Painting']

const fade = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 'var(--nav-h)' }}>

      {/* Dark overlay for text legibility */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'rgba(10, 15, 30, 0.62)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%', maxWidth: 860,
        margin: '0 auto', padding: '80px 24px',
        display: 'flex', flexDirection: 'column', gap: 28,
        alignItems: 'flex-start',
      }} className="sm:items-start md:px-12">

        <motion.p {...fade(0.2)}
          style={{ fontSize: 12, fontWeight: 500, letterSpacing: 3, color: 'var(--accent)' }}>
          DURBAN'S SPECIALIST CONTRACTORS
        </motion.p>

        <motion.h1 {...fade(0.4)}
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 'clamp(48px, 9vw, 88px)',
            lineHeight: 1, color: 'var(--text)', letterSpacing: 2,
          }}>
          WE REBUILD WHAT DURBAN BUILDS ON
        </motion.h1>

        <motion.p {...fade(0.6)}
          style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(232,234,240,0.88)', maxWidth: 580 }}
          className="md:text-[18px]">
          From rooftops to foundations — DMC delivers industrial-grade roofing, waterproofing, structural repairs, and protective coatings for commercial and industrial properties across KwaZulu-Natal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          style={{ display: 'flex', flexWrap: 'nowrap', gap: 10, overflowX: 'auto', paddingBottom: 4 }}
          className="md:flex-wrap">
          {pills.map((p, i) => (
            <motion.span key={p}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              style={{
                display: 'inline-flex', alignItems: 'center', padding: '6px 16px',
                background: 'rgba(0,82,204,0.55)', backdropFilter: 'blur(6px)',
                border: '1px solid rgba(0,82,204,0.7)',
                color: 'var(--text)', borderRadius: 100,
                fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap', flexShrink: 0,
              }}>
              {p}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <a href="https://wa.me/27718760406?text=Hi%20DMC%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px',
              borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer',
              background: 'var(--accent)', color: '#0a0c10', border: 'none',
              transition: 'transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'var(--accent-dark)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,215,0,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.boxShadow = '' }}>
            <FontAwesomeIcon icon={faWhatsapp} /> Chat on WhatsApp
          </a>
          <a href="#services"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px',
              borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: 'pointer',
              background: 'transparent', color: 'var(--text)',
              border: '2px solid rgba(255,255,255,0.35)',
              backdropFilter: 'blur(4px)',
              transition: 'transform 0.2s ease, background 0.2s ease, border-color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)' }}>
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  )
}
