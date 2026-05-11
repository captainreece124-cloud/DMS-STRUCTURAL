export default function Footer() {
  return (
    <footer aria-label="Site footer" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '64px 24px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: 40, paddingBottom: 48 }} className="md:grid-cols-3">

          <div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 12 }}>
              <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 32, color: 'var(--accent)', letterSpacing: 3 }}>DMC</span>
              <span style={{ fontSize: 9, fontWeight: 500, color: 'var(--text-muted)', letterSpacing: 2, marginTop: 2 }}>STRUCTURAL REHAB</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>Structural Rehabilitation Specialists</p>
          </div>

          <div>
            <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 18, letterSpacing: 1.5, color: 'var(--text)', marginBottom: 20 }}>Quick Links</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Services', 'About', 'Process', 'Contact'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`}
                    style={{ fontSize: 14, color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 18, letterSpacing: 1.5, color: 'var(--text)', marginBottom: 20 }}>Contact</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Travis Dupouy — 071 876 0406', 'Mike Manthey — 083 375 9136'].map(c => (
                <li key={c} style={{ fontSize: 14, color: 'var(--text-muted)' }}>{c}</li>
              ))}
              <li>
                <a href="mailto:info@dmcdurban.co.za"
                  style={{ fontSize: 14, color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                  info@dmcdurban.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', padding: '24px 0', textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>© 2026 DMC Structural Rehabilitation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
