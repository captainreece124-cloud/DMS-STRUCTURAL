import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

const drawPaths = [
  { tag: 'line',  props: { x1:10,  y1:330, x2:490, y2:330, strokeWidth:2.5  }, cls:'bp-primary' },
  { tag: 'rect',  props: { x:75,   y:140,  width:310, height:190, strokeWidth:1.8 }, cls:'bp-primary' },
  { tag: 'path',  props: { d:'M 58 140 L 230 50 L 402 140', strokeWidth:2.2 }, cls:'bp-primary' },
  { tag: 'line',  props: { x1:52,  y1:140, x2:75,  y2:140, strokeWidth:2 }, cls:'bp-primary' },
  { tag: 'line',  props: { x1:385, y1:140, x2:408, y2:140, strokeWidth:2 }, cls:'bp-primary' },
  { tag: 'rect',  props: { x:296,  y:63,   width:32, height:77, strokeWidth:1.5 }, cls:'bp-accent' },
  { tag: 'line',  props: { x1:289, y1:63,  x2:335, y2:63,  strokeWidth:2.8 }, cls:'bp-accent' },
  { tag: 'rect',  props: { x:92,   y:163,  width:44, height:48, strokeWidth:1.2 }, cls:'bp-primary' },
  { tag: 'line',  props: { x1:114, y1:163, x2:114, y2:211, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'line',  props: { x1:92,  y1:187, x2:136, y2:187, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'rect',  props: { x:152,  y:163,  width:44, height:48, strokeWidth:1.2 }, cls:'bp-primary' },
  { tag: 'line',  props: { x1:174, y1:163, x2:174, y2:211, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'line',  props: { x1:152, y1:187, x2:196, y2:187, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'rect',  props: { x:264,  y:163,  width:44, height:48, strokeWidth:1.2 }, cls:'bp-primary' },
  { tag: 'line',  props: { x1:286, y1:163, x2:286, y2:211, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'line',  props: { x1:264, y1:187, x2:308, y2:187, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'rect',  props: { x:324,  y:163,  width:44, height:48, strokeWidth:1.2 }, cls:'bp-primary' },
  { tag: 'line',  props: { x1:346, y1:163, x2:346, y2:211, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'line',  props: { x1:324, y1:187, x2:368, y2:187, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'rect',  props: { x:92,   y:233,  width:44, height:62, strokeWidth:1.2 }, cls:'bp-primary' },
  { tag: 'line',  props: { x1:114, y1:233, x2:114, y2:295, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'line',  props: { x1:92,  y1:264, x2:136, y2:264, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'rect',  props: { x:152,  y:233,  width:44, height:62, strokeWidth:1.2 }, cls:'bp-primary' },
  { tag: 'line',  props: { x1:174, y1:233, x2:174, y2:295, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'line',  props: { x1:152, y1:264, x2:196, y2:264, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'rect',  props: { x:264,  y:233,  width:44, height:62, strokeWidth:1.2 }, cls:'bp-primary' },
  { tag: 'line',  props: { x1:286, y1:233, x2:286, y2:295, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'line',  props: { x1:264, y1:264, x2:308, y2:264, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'rect',  props: { x:324,  y:233,  width:44, height:62, strokeWidth:1.2 }, cls:'bp-primary' },
  { tag: 'line',  props: { x1:346, y1:233, x2:346, y2:295, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'line',  props: { x1:324, y1:264, x2:368, y2:264, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'rect',  props: { x:202,  y:250,  width:56, height:80, strokeWidth:1.5 }, cls:'bp-primary' },
  { tag: 'path',  props: { d:'M 202 250 A 28 22 0 0 1 258 250', strokeWidth:1.5 }, cls:'bp-accent' },
  { tag: 'circle',props: { cx:252,  cy:289, r:3.5, strokeWidth:1.5 }, cls:'bp-accent' },
  { tag: 'line',  props: { x1:230,  y1:250, x2:230, y2:330, strokeWidth:0.8 }, cls:'bp-ann' },
  { tag: 'line',  props: { x1:186,  y1:250, x2:274, y2:250, strokeWidth:2.2 }, cls:'bp-primary' },
  { tag: 'line',  props: { x1:192,  y1:330, x2:268, y2:330, strokeWidth:3.5 }, cls:'bp-primary' },
  { tag: 'line',  props: { x1:75,   y1:352, x2:385, y2:352, strokeWidth:1 }, cls:'bp-dim' },
  { tag: 'line',  props: { x1:75,   y1:345, x2:75,  y2:359, strokeWidth:1.5 }, cls:'bp-dim' },
  { tag: 'line',  props: { x1:385,  y1:345, x2:385, y2:359, strokeWidth:1.5 }, cls:'bp-dim' },
  { tag: 'line',  props: { x1:42,   y1:50,  x2:42,  y2:330, strokeWidth:1 }, cls:'bp-dim' },
  { tag: 'line',  props: { x1:35,   y1:50,  x2:49,  y2:50,  strokeWidth:1.5 }, cls:'bp-dim' },
  { tag: 'line',  props: { x1:35,   y1:330, x2:49,  y2:330, strokeWidth:1.5 }, cls:'bp-dim' },
  { tag: 'rect',  props: { x:384,   y:242,  width:106, height:82, strokeWidth:1 }, cls:'bp-dim' },
  { tag: 'line',  props: { x1:384,  y1:257, x2:490, y2:257, strokeWidth:0.5 }, cls:'bp-dim' },
  { tag: 'line',  props: { x1:384,  y1:272, x2:490, y2:272, strokeWidth:0.5 }, cls:'bp-dim' },
  { tag: 'line',  props: { x1:384,  y1:287, x2:490, y2:287, strokeWidth:0.5 }, cls:'bp-dim' },
  { tag: 'line',  props: { x1:384,  y1:302, x2:490, y2:302, strokeWidth:0.5 }, cls:'bp-dim' },
  { tag: 'line',  props: { x1:384,  y1:317, x2:490, y2:317, strokeWidth:0.5 }, cls:'bp-dim' },
  { tag: 'circle',props: { cx:452,  cy:60,  r:20,   strokeWidth:1 }, cls:'bp-dim' },
  { tag: 'path',  props: { d:'M 452 41 L 456 59 L 452 55 L 448 59 Z', strokeWidth:1.2 }, cls:'bp-primary' },
  { tag: 'line',  props: { x1:452,  y1:59,  x2:452, y2:78, strokeWidth:1 }, cls:'bp-dim' },
]

const dashEls = [
  { tag:'line', props:{ x1:58, y1:157, x2:402, y2:157, strokeWidth:1 }, cls:'bp-accent bp-dash' },
  { tag:'line', props:{ x1:75, y1:222, x2:385, y2:222, strokeWidth:0.8 }, cls:'bp-muted bp-dash' },
  { tag:'line', props:{ x1:230, y1:22,  x2:230, y2:338, strokeWidth:1 }, cls:'bp-accent bp-dash' },
]

function SvgEl({ tag, props, className, style }) {
  const T = tag
  return <T className={className} style={style} {...props} />
}

export default function BlueprintSVG() {
  return (
    <div style={{
      width: '100%', borderRadius: 'var(--radius)', overflow: 'hidden',
      backgroundColor: 'var(--bg-elevated)',
      backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(0,82,204,0.12) 39px,rgba(0,82,204,0.12) 40px),
        repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(0,82,204,0.12) 39px,rgba(0,82,204,0.12) 40px)`,
      border: '1px solid var(--border)',
      padding: 16,
    }}>
      <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img" aria-label="Technical architectural elevation drawing of a building">

        {drawPaths.map((el, i) => (
          <motion.g key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.035, duration: 0.4 }}>
            <SvgEl tag={el.tag} props={el.props} className={`bp-anim ${el.cls}`} />
          </motion.g>
        ))}

        {dashEls.map((el, i) => (
          <motion.g key={`d${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 + i * 0.1, duration: 0.5 }}>
            <SvgEl tag={el.tag} props={el.props} className={`bp-anim ${el.cls}`} />
          </motion.g>
        ))}

        {/* Text labels */}
        {[
          { x:230, y:372, anchor:'middle', size:9, text:'WIDTH: 24 500mm' },
          { x:16,  y:195, anchor:'middle', size:9, text:'HEIGHT: 8 750mm', rotate:'rotate(-90 16 195)' },
          { x:437, y:253, anchor:'middle', size:6.5, weight:600, text:'DMC STRUCTURAL' },
          { x:437, y:266, anchor:'middle', size:6,   text:'REHABILITATION (PTY) LTD' },
          { x:437, y:281, anchor:'middle', size:6.5, text:'ELEVATION — FRONT' },
          { x:437, y:296, anchor:'middle', size:6,   text:'DWG NO: A-101' },
          { x:437, y:311, anchor:'middle', size:6,   text:'SCALE: 1:100' },
          { x:437, y:322, anchor:'middle', size:6,   text:'REV: A — 2026' },
          { x:452, y:46,  anchor:'middle', size:8,   weight:600, text:'N' },
        ].map((t, i) => (
          <motion.text key={`t${i}`}
            className="bp-text"
            x={t.x} y={t.y}
            textAnchor={t.anchor}
            fontSize={t.size}
            fontWeight={t.weight}
            transform={t.rotate}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2.2 + i * 0.06, duration: 0.4 }}
          >{t.text}</motion.text>
        ))}
      </svg>
    </div>
  )
}
