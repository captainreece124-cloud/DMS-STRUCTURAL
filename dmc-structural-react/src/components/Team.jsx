import { motion } from 'framer-motion'

export default function Team() {
  return (
    <section id="team" style={{ padding: '96px 0', background: 'var(--bg)' }}>
      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 24px' }} className="xl:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 16, fontWeight: 500, color: 'var(--accent)', marginBottom: 12, letterSpacing: 0.3 }}>
            Where Quality Meets Commitment
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 'clamp(40px, 6vw, 64px)',
            color: 'var(--text)',
            letterSpacing: 2,
            lineHeight: 1,
            marginBottom: 16,
          }}>
            OUR TEAM
          </h2>
          <div style={{ width: 60, height: 4, background: 'var(--accent)', margin: '0 auto', borderRadius: 2 }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ maxWidth: 1200, margin: '0 auto 48px' }}>
          <img
            src="/team-photo.jpg"
            alt="DMC Structural Rehabilitation team"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: 8,
              objectFit: 'cover',
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            maxWidth: 860,
            margin: '0 auto',
            fontSize: 'clamp(16px, 1.25vw, 18px)',
            lineHeight: 1.8,
            color: '#a0aec0',
            textAlign: 'center',
          }}>
          Behind every completed project is a team of skilled professionals who refuse to cut corners. Our craftspeople bring dedication, precision, and pride to every structural challenge — whether it's a routine repair or a complex industrial rehabilitation. They understand that buildings depend on their work, and they treat every job with the responsibility it deserves. Quality isn't a promise we make; it's what we deliver, day after day.
        </motion.p>

      </div>
    </section>
  )
}
