import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="relative rounded-[32px] overflow-hidden bg-[#0B1220] p-8 lg:p-12">
          {/* bg image */}
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1400&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            loading="lazy"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/90 to-[#0B1220]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* glow */}
          <div className="absolute -right-20 -top-20 w-[400px] h-[400px] bg-[#B68A3C]/20 rounded-full blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-[640px]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                <span className="text-[11px] tracking-[0.16em] font-bold text-white/80">READY TO START?</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-[30px] lg:text-[42px] font-extrabold tracking-[-0.03em] text-white leading-[1.05]"
              >
                Need Manpower or <br /> Facility Management Support?
              </motion.h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70 font-medium max-w-[520px]">
                Let&apos;s discuss your requirement — 500+ employee organizations, multi-location operations & government tenders welcome. 48-hour deployment.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 shrink-0"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full font-bold text-[14px] shadow-[0_8px_24px_rgba(245,158,11,0.4)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.5)] transition-all hover:-translate-y-0.5"
              >
                Request a Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0B1220] px-8 py-4 rounded-full font-bold text-[14px] transition-colors"
              >
                <Phone size={16} /> Contact Us
              </a>
            </motion.div>
          </div>

          {/* bottom stats */}
          <div className="relative mt-10 pt-6 border-t border-white/10 flex flex-wrap gap-6 text-[13px]">
            <span className="text-white/60 font-medium">Trusted delivery • </span>
            <span className="text-white font-bold">Fast response within 24h</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-white/60 font-medium">PAN India coordination</span>
          </div>
        </div>
      </div>
    </section>
  )
}
