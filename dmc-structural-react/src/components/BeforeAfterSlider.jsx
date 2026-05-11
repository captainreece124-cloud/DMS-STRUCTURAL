import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const updateSlider = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
    setSliderPos(pct)
  }, [])

  const handleMouseDown = useCallback((e) => {
    isDragging.current = true
    updateSlider(e.clientX)
    e.preventDefault()
  }, [updateSlider])

  const handleTouchStart = useCallback((e) => {
    isDragging.current = true
    updateSlider(e.touches[0].clientX)
  }, [updateSlider])

  useEffect(() => {
    const onMouseMove = (e) => { if (isDragging.current) updateSlider(e.clientX) }
    const onTouchMove = (e) => { if (isDragging.current) updateSlider(e.touches[0].clientX) }
    const stop = () => { isDragging.current = false }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', stop)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', stop)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', stop)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', stop)
    }
  }, [updateSlider])

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setSliderPos((p) => Math.max(0, p - 2))
    else if (e.key === 'ArrowRight') setSliderPos((p) => Math.min(100, p + 2))
  }

  return (
    <section id="before-after" style={{ padding: '96px 0 72px', position: 'relative' }}>

      {/* Dark overlay so text stays readable over the shared background */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'rgba(10, 15, 30, 0.62)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>

        {/* Section heading — matches Services.jsx pattern */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 'clamp(40px, 6vw, 64px)',
            color: 'var(--text)',
            letterSpacing: 2,
            lineHeight: 1,
            marginBottom: 16,
          }}>
            FROM CONCEPT TO COMPLETION
          </h2>
          <div style={{
            width: 60, height: 4,
            background: 'var(--accent)',
            margin: '0 auto 20px',
            borderRadius: 2,
          }} />
          <p style={{
            fontSize: 16,
            color: 'var(--text-muted)',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            A complete structural transformation from start to finish
          </p>
        </motion.div>

        {/* Slider container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            ref={containerRef}
            style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(240px, 50vw, 600px)',
              overflow: 'hidden',
              borderRadius: 'var(--radius)',
              cursor: 'col-resize',
              userSelect: 'none',
              border: '1px solid var(--border)',
              outline: 'none',
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            role="slider"
            aria-label="Before and after image comparison slider"
            aria-valuenow={Math.round(sliderPos)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {/* Before — full base layer */}
            <div style={{ position: 'absolute', inset: 0 }}>
              <img
                src="/project-images/before.jpg"
                alt="Before: project site prior to structural rehabilitation"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                draggable={false}
              />
              <div style={{
                position: 'absolute', top: 16, left: 16,
                background: 'rgba(0,0,0,0.65)',
                backdropFilter: 'blur(6px)',
                color: 'var(--text)',
                fontFamily: "'Bebas Neue', cursive",
                fontSize: 14, letterSpacing: 2,
                padding: '6px 14px', borderRadius: 6,
              }}>
                BEFORE
              </div>
            </div>

            {/* After — clipped to reveal right of slider */}
            <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 0 0 ${sliderPos}%)` }}>
              <img
                src="/project-images/after.jpg"
                alt="After: completed structural rehabilitation and transformation"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                draggable={false}
              />
              <div style={{
                position: 'absolute', top: 16, right: 16,
                background: 'rgba(255,215,0,0.88)',
                backdropFilter: 'blur(6px)',
                color: 'var(--bg)',
                fontFamily: "'Bebas Neue', cursive",
                fontSize: 14, letterSpacing: 2,
                padding: '6px 14px', borderRadius: 6,
              }}>
                AFTER
              </div>
            </div>

            {/* Divider + handle */}
            <div style={{
              position: 'absolute', inset: '0 auto',
              left: `${sliderPos}%`,
              transform: 'translateX(-50%)',
              zIndex: 10,
              pointerEvents: 'none',
            }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute',
                top: 0, bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 2,
                background: 'rgba(255,255,255,0.85)',
                boxShadow: '0 0 14px rgba(255,255,255,0.45)',
              }} />

              {/* Circle handle */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
                style={{
                  position: 'absolute',
                  left: '50%', top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.28, 1] }}
                  transition={{ duration: 1.8, repeat: 2, ease: 'easeInOut', delay: 1.1 }}
                  style={{
                    width: 44, height: 44,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.96)',
                    boxShadow: '0 0 20px rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.45)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M8 5L4 10l4 5M12 5l4 5-4 5" stroke="#0a0c10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            style={{
              textAlign: 'center',
              color: 'var(--text-muted)',
              fontSize: 13,
              marginTop: 16,
            }}
          >
            Drag the slider to compare &nbsp;·&nbsp; Use ← → keys for precision
          </motion.p>
        </motion.div>

      </div>
    </section>
  )
}
