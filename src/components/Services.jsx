import { motion } from 'framer-motion'
import { Users, ShieldCheck, Sparkles, ArrowRight, Check } from 'lucide-react'

const services = [
  {
    id: '01',
    icon: Users,
    title: 'Manpower Solutions',
    desc: 'Skilled and unskilled workforce solutions across diverse sectors — scalable, compliant and ready to deploy.',
    bullets: ['Skilled Workforce', 'Semi-Skilled Workforce', 'Unskilled Workforce', 'Project-Based Staffing'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
    accent: 'bg-[#0B1220]',
  },
  {
    id: '02',
    icon: Sparkles,
    title: 'Integrated Facility Management',
    desc: 'End-to-end outsourcing for all non-core operations — single vendor for complete facility needs.',
    bullets: ['Housekeeping & Cleaning', 'Catering & Pantry Services', 'Waste Management', 'Horticulture & Landscaping'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    accent: 'bg-[#B68A3C]',
  },
  {
    id: '03',
    icon: ShieldCheck,
    title: 'Security & Support Services',
    desc: 'Reliable, compliant and technology-enabled support services to keep your operations secure and efficient.',
    bullets: ['Security Services', 'Single-Service Outsourcing', 'Integrated FM Contracts', 'Dedicated Account Manager'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    accent: 'bg-slate-700',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[680px] mx-auto text-center relative">
          {/* subtle SVG swoosh background */}
          <svg className="absolute -top-6 left-1/2 -translate-x-1/2 w-[420px] h-[80px] opacity-[0.06] pointer-events-none" viewBox="0 0 420 80" fill="none">
            <path d="M10 60 Q120 80 210 45 Q300 10 410 20" stroke="#B68A3C" strokeWidth="18" strokeLinecap="round" />
            <path d="M12 48 Q125 68 212 36 Q298 6 405 14" stroke="#0B1220" strokeWidth="10" strokeLinecap="round" />
          </svg>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5 relative"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B68A3C] animate-pulse" />
            <span className="text-[11px] tracking-[0.16em] font-extrabold text-slate-600">WHAT WE DO</span>
          </motion.div>
          {/* Integrated Workforce SVG badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-5 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-3 py-2 shadow-sm">
              <img src="/logo.svg" alt="SHS" className="h-6 w-auto object-contain" />
              <span className="w-px h-5 bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <span className="w-7 h-7 rounded-full bg-[#0B1220] flex items-center justify-center text-white" title="Manpower">
                  <Users size={13} />
                </span>
                <span className="w-7 h-7 rounded-full bg-[#B68A3C] flex items-center justify-center text-white" title="Facility">
                  <Sparkles size={13} />
                </span>
                <span className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-white" title="Security">
                  <ShieldCheck size={13} />
                </span>
              </div>
              <span className="hidden sm:inline text-[10px] font-extrabold tracking-[0.14em] text-[#0B1220] pr-1">INTEGRATED WORKFORCE</span>
              {/* small SVG swoosh */}
              <svg width="28" height="12" viewBox="0 0 60 20" className="hidden sm:block">
                <path d="M2 14 Q15 18 30 10 Q45 2 58 4" stroke="#B68A3C" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M4 10 Q16 14 30 7 Q42 2 56 3" stroke="#0B1220" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-[30px] lg:text-[40px] font-extrabold tracking-[-0.03em] text-[#0B1220] leading-[1.05]"
          >
            Your <span className="text-[#B68A3C]">Integrated Workforce</span> Partner
          </motion.h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-500 font-medium">
            Single vendor for all facility needs — 20-25% cost reduction, 48-hour deployment, 100% statutory compliance.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group relative bg-white rounded-[28px] border border-slate-200 overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-[11px] font-extrabold tracking-widest text-[#0B1220]">
                  SERVICE — {s.id}
                </div>
                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${s.accent}`}>
                  <s.icon size={22} />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="text-[20px] font-extrabold tracking-[-0.02em] text-[#0B1220]">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500 font-medium">{s.desc}</p>

                <div className="mt-5 space-y-2.5">
                  {s.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#FFF7ED] border border-orange-100 flex items-center justify-center">
                        <Check size={12} className="text-[#B68A3C]" strokeWidth={3} />
                      </span>
                      <span className="text-[13px] font-semibold text-slate-700">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <a href="#contact" className="inline-flex items-center gap-2 text-[13px] font-bold text-[#0B1220]">
                    <span className="border-b-2 border-[#B68A3C] pb-0.5">Explore Service</span>
                    <span className="w-7 h-7 rounded-full bg-[#0B1220] text-white flex items-center justify-center">
                      <ArrowRight size={14} />
                    </span>
                  </a>
                </div>

                {/* accent line */}
                <div className="mt-6 h-[3px] w-12 bg-[#B68A3C] rounded-full group-hover:w-20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-3 text-[12px] font-semibold text-slate-500"
        >
          <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full">✓ 48-Hour Deployment</span>
          <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full">✓ 20-25% Cost Reduction</span>
          <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full">✓ Dedicated Account Manager</span>
          <span className="px-4 py-2 bg-[#FFF7ED] border border-orange-200 rounded-full text-[#92400E]">★ PhD-led Leadership</span>
        </motion.div>
      </div>
    </section>
  )
}
