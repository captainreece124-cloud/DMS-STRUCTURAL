import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const features = [
  'CIDB Registered Contractor',
  '25+ Years of Industry Leadership',
  'Commercial & Industrial Specialists',
  'Fully Licensed & Insured',
  'Every Job Fully Guaranteed',
]

export default function About() {
  return (
    <section id="about" className="section-padded" style={{ padding: '96px 0', background: 'var(--bg-surface)' }}>
      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 24px' }} className="xl:px-12">
        <div style={{ display: 'grid', gap: 64 }} className="md:grid-cols-2 md:gap-[80px] md:items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: 3, color: 'var(--accent)', marginBottom: 16 }}>
              WHY CHOOSE DMC
            </p>
            <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(36px,5vw,52px)', color: 'var(--text)', letterSpacing: 1.5, lineHeight: 1.1, marginBottom: 24 }}>
              Two Decades of Structural Excellence
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: 20 }}>
              DMC Structural Rehabilitation has been the trusted choice for KwaZulu-Natal's most demanding roofing, waterproofing, and structural projects for over 25 years. We specialize in industrial-grade solutions that stand the test of time.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: 28 }}>
              From minor repairs to full structural rehabs, we approach every project with the same commitment: precision engineering, quality materials, and accountability. Your building's integrity is our reputation.
            </p>
            <motion.a href="#contact"
              whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(255,215,0,0.28)' }}
              whileTap={{ y: 0 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px',
                borderRadius: 8, fontSize: 15, fontWeight: 600, background: 'var(--accent)',
                color: '#0a0c10', border: 'none', cursor: 'pointer', textDecoration: 'none',
                transition: 'background 0.2s ease',
              }}>
              Get a Free Quote
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {features.map((f, i) => (
                <motion.li key={f}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ borderLeftColor: 'var(--accent)' }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px',
                    background: 'var(--bg-elevated)', borderRadius: 8,
                    borderLeft: '3px solid var(--primary)', fontSize: 15, fontWeight: 600,
                    color: 'var(--text)', transition: 'border-color 0.2s ease',
                  }}>
                  <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--accent)', fontSize: 14, flexShrink: 0 }} />
                  <span>{f}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
