import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouseChimney, faDroplet, faIndustry, faScrewdriverWrench,
  faBuilding, faShield, faTriangleExclamation, faPaintRoller,
} from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    icon: faHouseChimney,
    title: 'Roofing',
    desc: 'Complete residential and commercial roofing installations, repairs, and replacements. From pitched tiles to industrial corrugated systems, we deliver durable solutions that protect your property for decades.',
  },
  {
    icon: faDroplet,
    title: 'Waterproofing',
    desc: 'Advanced waterproofing systems for flat roofs, balconies, basements, and structural elements. We use proven liquid-applied and membrane technologies to eliminate leaks permanently.',
  },
  {
    icon: faIndustry,
    title: 'Industrial Cladding',
    desc: 'High-performance external cladding for warehouses, factories, and industrial facilities. Thermal efficient, weather-resistant, and built to withstand harsh KwaZulu-Natal conditions.',
  },
  {
    icon: faScrewdriverWrench,
    title: 'Structural Repairs',
    desc: 'Load-bearing structural rehabilitation, crack injection, concrete repairs, and reinforcement. We restore integrity to aging or damaged structures with precision engineering.',
  },
  {
    icon: faBuilding,
    title: 'Building Services',
    desc: 'Complete building and renovation services. From foundations to final finishes, we manage complex projects with expert coordination and attention to detail.',
  },
  {
    icon: faShield,
    title: 'Epoxy & Protective Coatings',
    desc: 'Industrial epoxy and polyurethane coatings for chemical resistance, durability, and aesthetic appeal. Ideal for warehouses, factories, and commercial spaces.',
  },
  {
    icon: faTriangleExclamation,
    title: 'Corrosion Protection',
    desc: 'Specialist anti-corrosion treatments for steel structures, pipelines, and metal infrastructure. We extend asset lifespan and prevent costly deterioration.',
  },
  {
    icon: faPaintRoller,
    title: 'Painting & Urethane Coating',
    desc: 'Professional industrial and commercial painting with premium finishes. High-performance urethane coatings deliver durability, appearance, and protection.',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '96px 0', background: 'var(--bg)' }}>
      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 24px' }} className="xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(40px,6vw,64px)', color: 'var(--text)', letterSpacing: 2, lineHeight: 1, marginBottom: 16 }}>
            OUR SERVICES
          </h2>
          <div style={{ width: 60, height: 4, background: 'var(--accent)', margin: '0 auto 20px', borderRadius: 2 }} />
          <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            Industrial-grade solutions for commercial, residential, and infrastructure projects across KwaZulu-Natal
          </p>
        </motion.div>

        <div style={{ display: 'grid', gap: 24 }} className="sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.article key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -8, boxShadow: 'var(--shadow)' }}
              style={{
                background: 'var(--bg-surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', overflow: 'hidden', cursor: 'default',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--primary)'
                const img = e.currentTarget.querySelector('img')
                if (img) img.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                const img = e.currentTarget.querySelector('img')
                if (img) img.style.transform = 'scale(1)'
              }}>

              {/* Service image */}
              <div className="h-40 sm:h-[200px]" style={{ width: '100%', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={`/service-images/service-${i + 1}.jpg`}
                  alt={s.title}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </div>

              {/* Card content */}
              <div style={{ padding: 24 }}>
                <FontAwesomeIcon icon={s.icon}
                  style={{ fontSize: 32, color: 'var(--accent)', marginBottom: 14, display: 'block' }}
                />
                <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 22, color: 'var(--text)', letterSpacing: 1, marginBottom: 10 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
