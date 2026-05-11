import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const serviceOptions = [
  'Roofing', 'Waterproofing', 'Industrial Cladding', 'Structural Repairs',
  'Building Services', 'Epoxy Screens', 'Corrosion Protection', 'Painting & Urethane Coating', 'Other',
]

function buildWhatsAppURL(fields) {
  const { name, phone, email, service, message } = fields
  const text = [
    `Hi Travis, my name is ${name}.`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service required: ${service}`,
    message ? `Message: ${message}` : '',
  ].filter(Boolean).join('\n')
  return `https://wa.me/27718760406?text=${encodeURIComponent(text)}`
}

export default function Contact() {
  const [fields, setFields] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!fields.name.trim())  e.name = 'Please enter your name'
    if (!fields.phone.trim()) e.phone = 'Please enter your phone number'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) e.email = 'Please enter a valid email address'
    if (!fields.service)      e.service = 'Please select a service'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    window.open(buildWhatsAppURL(fields), '_blank', 'noopener,noreferrer')
  }

  const set = (k) => (e) => {
    setFields(f => ({ ...f, [k]: e.target.value }))
    setErrors(err => { const n = { ...err }; delete n[k]; return n })
  }

  const inputStyle = (field) => ({
    width: '100%', padding: '13px 16px', background: 'var(--bg-elevated)',
    border: `1.5px solid ${errors[field] ? 'var(--error)' : 'var(--border)'}`,
    borderRadius: 8, color: 'var(--text)', fontFamily: 'Poppins, sans-serif',
    fontSize: 15, outline: 'none', transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    appearance: 'none', WebkitAppearance: 'none',
  })

  return (
    <section id="contact" style={{ padding: '96px 0', background: 'var(--bg-surface)' }}>
      <div style={{ width: '100%', maxWidth: 1280, margin: '0 auto', padding: '0 24px' }} className="xl:px-12">
        <div style={{ display: 'grid', gap: 64 }} className="md:grid-cols-2 md:items-start md:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}>
            <h2 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(36px,5vw,52px)', color: 'var(--text)', letterSpacing: 1.5, marginBottom: 20 }}>
              GET IN TOUCH
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: 32 }}>
              Whether it's a planned renovation, routine maintenance, or a full structural rehabilitation — DMC is ready to assess and deliver.
            </p>
            <address style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 8, fontStyle: 'normal' }}>
              {[
                { icon: faPhone, text: 'Travis Dupouy — 071 876 0406' },
                { icon: faPhone, text: 'Mike Manthey — 083 375 9136' },
                { icon: faEnvelope, href: 'mailto:info@dmcdurban.co.za', text: 'info@dmcdurban.co.za' },
                { icon: faLocationDot, text: 'Durban, KwaZulu-Natal' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 15, color: 'var(--text-muted)' }}>
                  <FontAwesomeIcon icon={item.icon} style={{ color: 'var(--accent)', fontSize: 16, width: 20, flexShrink: 0 }} />
                  {item.href
                    ? <a href={item.href} style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>{item.text}</a>
                    : <span>{item.text}</span>}
                </div>
              ))}
            </address>
            <motion.a
              href="https://wa.me/27718760406?text=Hi%20Travis%2C%20I%27d%20like%20to%20enquire%20about%20DMC%27s%20services."
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(37,211,102,0.25)' }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px',
                borderRadius: 8, fontSize: 15, fontWeight: 600, marginTop: 24,
                background: 'var(--wa-green)', color: '#fff', border: 'none', cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}>
              <FontAwesomeIcon icon={faWhatsapp} /> Chat with Travis on WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}>
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form"
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              {[
                { id: 'name',  label: 'Full Name',       type: 'text',  placeholder: 'Your full name',      autoComplete: 'name' },
                { id: 'phone', label: 'Phone Number',    type: 'tel',   placeholder: 'e.g. 071 234 5678',   autoComplete: 'tel' },
                { id: 'email', label: 'Email Address',   type: 'email', placeholder: 'your@email.com',      autoComplete: 'email' },
              ].map(f => (
                <div key={f.id} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label htmlFor={f.id} style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', letterSpacing: 0.3 }}>
                    {f.label} <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder}
                    autoComplete={f.autoComplete} value={fields[f.id]} onChange={set(f.id)}
                    style={inputStyle(f.id)}
                    onFocus={e => { e.target.style.borderColor = errors[f.id] ? 'var(--error)' : 'var(--primary)'; e.target.style.boxShadow = errors[f.id] ? '0 0 0 3px rgba(229,62,62,0.15)' : '0 0 0 3px rgba(0,82,204,0.15)' }}
                    onBlur={e => { e.target.style.borderColor = errors[f.id] ? 'var(--error)' : 'var(--border)'; e.target.style.boxShadow = '' }} />
                  {errors[f.id] && <span role="alert" style={{ fontSize: 12, color: 'var(--error)', fontWeight: 500 }}>{errors[f.id]}</span>}
                </div>
              ))}

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="service" style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', letterSpacing: 0.3 }}>
                  Service Required <span style={{ color: 'var(--accent)' }}>*</span>
                </label>
                <select id="service" name="service" value={fields.service} onChange={set('service')}
                  style={{
                    ...inputStyle('service'),
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238892a4' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: 40, cursor: 'pointer',
                  }}
                  onFocus={e => { e.target.style.borderColor = errors.service ? 'var(--error)' : 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,82,204,0.15)' }}
                  onBlur={e => { e.target.style.borderColor = errors.service ? 'var(--error)' : 'var(--border)'; e.target.style.boxShadow = '' }}>
                  <option value="" disabled>Select a service</option>
                  {serviceOptions.map(o => <option key={o} value={o} style={{ background: 'var(--bg-elevated)', color: 'var(--text)' }}>{o}</option>)}
                </select>
                {errors.service && <span role="alert" style={{ fontSize: 12, color: 'var(--error)', fontWeight: 500 }}>{errors.service}</span>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="message" style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', letterSpacing: 0.3 }}>
                  Message <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 400 }}>(optional)</span>
                </label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us more about your project..."
                  value={fields.message} onChange={set('message')}
                  style={{ ...inputStyle('message'), resize: 'vertical', minHeight: 120 }}
                  onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,82,204,0.15)' }}
                  onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = '' }} />
              </div>

              <motion.button type="submit"
                whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(255,215,0,0.25)', background: 'var(--accent-dark)' }}
                whileTap={{ y: 0 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  width: '100%', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600,
                  background: 'var(--accent)', color: 'var(--bg)', border: 'none', cursor: 'pointer',
                  transition: 'background 0.2s ease',
                }}>
                <FontAwesomeIcon icon={faWhatsapp} /> Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
