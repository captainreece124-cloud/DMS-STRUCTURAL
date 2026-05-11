import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href="https://wa.me/27718760406?text=Hi%20Travis%2C%20I%27d%20like%20to%20enquire%20about%20DMC%27s%20services."
      target="_blank" rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={hovered ? { scale: 1.1 } : { scale: [1, 1.1, 1] }}
      transition={hovered ? { duration: 0.2 } : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 900,
        width: 56, height: 56, borderRadius: '50%',
        background: 'var(--wa-green)', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 26,
        boxShadow: hovered ? '0 6px 28px rgba(37,211,102,0.55)' : '0 4px 20px rgba(37,211,102,0.4)',
      }}>
      <FontAwesomeIcon icon={faWhatsapp} />
      {hovered && (
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            position: 'absolute', right: 'calc(100% + 12px)', top: '50%', transform: 'translateY(-50%)',
            background: 'var(--bg-elevated)', color: 'var(--text)',
            fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 500,
            whiteSpace: 'nowrap', padding: '8px 14px', borderRadius: 6,
            border: '1px solid var(--border)', pointerEvents: 'none',
          }}>
          Chat with us on WhatsApp
        </motion.span>
      )}
    </motion.a>
  )
}
