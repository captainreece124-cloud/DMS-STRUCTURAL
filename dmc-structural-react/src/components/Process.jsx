import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faClipboardCheck, faHelmetSafety, faHandshake } from '@fortawesome/free-solid-svg-icons'

const steps = [
  {
    num: '01', icon: faPhone, title: 'ENQUIRE', side: 'left',
    desc: 'Contact us via WhatsApp or our contact form. Tell us what you need and we\'ll be in touch.',
  },
  {
    num: '02', icon: faClipboardCheck, title: 'ASSESS', side: 'right',
    desc: 'Our specialist team conducts a full on-site assessment and provides a detailed written quote at no charge.',
  },
  {
    num: '03', icon: faHelmetSafety, title: 'EXECUTE', side: 'left',
    desc: 'Work begins on schedule with a dedicated site supervisor. You\'re updated at every milestone.',
  },
  {
    num: '04', icon: faHandshake, title: 'DELIVER', side: 'right',
    desc: 'Final walkthrough with the client. Work signed off.',
  },
]

export default function Process() {
  return (
    <section id="process" style={{ padding: '96px 0', background: 'var(--bg)' }}>
      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 24px' }} className="xl:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(40px,6vw,64px)', color: 'var(--text)', letterSpacing: 2, lineHeight: 1, marginBottom: 16 }}>
            HOW WE WORK
          </h2>
          <div style={{ width: 60, height: 4, background: 'var(--accent)', margin: '0 auto 20px', borderRadius: 2 }} />
          <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            A simple, transparent process — from first contact to final handover
          </p>
        </motion.div>

        <div style={{ display: 'grid', gap: 48, position: 'relative' }} className="lg:grid-cols-4 lg:gap-8">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block" style={{
            position: 'absolute', top: 136,
            left: 'calc(12.5% + 30px)', right: 'calc(12.5% + 30px)',
            height: 2,
            background: 'repeating-linear-gradient(90deg,var(--primary) 0,var(--primary) 10px,transparent 10px,transparent 18px)',
            opacity: 0.5, zIndex: 0,
          }} aria-hidden="true" />

          {steps.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, x: s.side === 'left' ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.18, ease: 'easeOut' }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 52, color: 'var(--accent)', lineHeight: 1, marginBottom: 12 }}>{s.num}</span>
              <motion.div
                whileHover={{ background: 'var(--primary)', color: 'var(--text)' }}
                style={{
                  width: 60, height: 60, borderRadius: '50%', background: 'var(--bg-elevated)',
                  border: '2px solid var(--primary)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 22, color: 'var(--primary)',
                  marginBottom: 20, transition: 'background 0.3s ease, color 0.3s ease',
                }}>
                <FontAwesomeIcon icon={s.icon} />
              </motion.div>
              <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 22, color: 'var(--text)', letterSpacing: 2, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: 260 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
