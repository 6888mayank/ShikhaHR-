import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ value, suffix = '', duration = 1200 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const target = parseInt(value, 10)
    if (isNaN(target)) {
      setDisplay(value)
      return
    }
    let start = 0
    const startTime = performance.now()
    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
      else setDisplay(target)
    }
    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {typeof display === 'number' ? display : value}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const stats = [
    { value: '3', suffix: '+', label: 'Core Services', sub: 'Manpower • Goods • Construction' },
    { value: '100', suffix: '%', label: 'Commitment', sub: 'Quality & Reliability First' },
    { value: '24/7', isText: true, label: 'Support', sub: 'Always Available for You' },
    { value: 'On-Time', isText: true, label: 'Delivery', sub: 'Projects On Schedule' },
  ]

  return (
    <section className="relative bg-white border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100 border-x border-slate-100">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="py-8 lg:py-10 px-6 lg:px-8 text-center lg:text-left bg-white hover:bg-slate-50/50 transition-colors group"
            >
              <div className="text-[32px] lg:text-[40px] font-extrabold tracking-[-0.03em] text-[#0B1220] leading-none">
                {s.isText ? (
                  s.value
                ) : (
                  <Counter value={s.value} suffix={s.suffix} />
                )}
              </div>
              <div className="mt-1 text-[13px] font-bold tracking-widest text-[#F59E0B] uppercase">{s.label}</div>
              <div className="mt-1 text-[12px] font-medium text-slate-500">{s.sub}</div>
              <div className="mt-4 h-[2px] w-8 bg-[#F59E0B] group-hover:w-12 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
