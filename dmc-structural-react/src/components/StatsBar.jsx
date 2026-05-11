import { motion } from 'framer-motion'

const statements = [
  'Trusted by Durban',
  'Quality Assured',
  'Industry Leaders',
  'Proven Results',
]

export default function StatsBar() {
  return (
    <section aria-label="Brand positioning" style={{ background: 'var(--primary)', padding: '64px 24px' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '40px 32px',
        maxWidth: 1280, margin: '0 auto',
      }} className="sm:grid-cols-4 sm:gap-8">
        {statements.map((s, i) => (
          <motion.div key={s}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 0 }}>
            <span style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: 'clamp(28px,4vw,40px)',
              color: 'var(--accent)',
              lineHeight: 1,
              letterSpacing: 2,
            }}>
              {s}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
