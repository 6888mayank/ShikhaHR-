import { motion } from 'framer-motion'
import { ShieldCheck, BadgeCheck, Timer, MessageCircleMore } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Reliable',
    desc: 'Zero disruption workforce delivery with verified, trained personnel.',
    stat: '100% adherence',
  },
  {
    icon: BadgeCheck,
    title: 'Compliant',
    desc: '100% statutory adherence — labour, PF, ESI and regulatory compliance.',
    stat: 'Compliance-first',
  },
  {
    icon: Timer,
    title: 'Scalable',
    desc: 'Grow as you grow — from 50+ workforce to multi-location operations.',
    stat: '48-hour deploy',
  },
  {
    icon: MessageCircleMore,
    title: 'Cost-Efficient',
    desc: '20-25% cost reduction via single vendor for all facility needs.',
    stat: 'Value driven',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="py-16 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[720px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] tracking-[0.16em] font-extrabold text-slate-600">WHY CHOOSE US</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[30px] lg:text-[42px] font-extrabold tracking-[-0.03em] text-[#0B1220] leading-[1.05]"
          >
            Why Businesses Choose <span className="text-[#B68A3C]">SHIKHA HR</span>
          </motion.h2>
          <p className="mt-4 text-[15px] text-slate-500 font-medium leading-relaxed">
            PhD-led leadership • Integrated multi-service model • Your Integrated Workforce Partner for corporates, institutions, industrial units & government projects.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white rounded-[24px] border border-slate-200 p-7 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:border-slate-300 hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0B1220] group-hover:bg-[#B68A3C] text-white flex items-center justify-center transition-colors duration-300">
                <f.icon size={22} />
              </div>
              <h3 className="mt-5 text-[16px] font-extrabold text-[#0B1220]">{f.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-500 font-medium">{f.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-[#B68A3C] bg-[#FFF7ED] border border-orange-100 px-3 py-1 rounded-full">
                ● {f.stat}
              </div>
            </motion.div>
          ))}
        </div>

        {/* bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-[#0B1220] rounded-[20px] p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-[#B68A3C] border-2 border-[#0B1220] flex items-center justify-center text-white font-bold text-xs">A+</div>
              <div className="w-10 h-10 rounded-full bg-white border-2 border-[#0B1220] flex items-center justify-center text-[#0B1220] font-bold text-[10px]">ISO</div>
            </div>
            <div>
              <div className="text-white font-bold">Single vendor for all facility needs — scalable & technology-enabled.</div>
              <div className="text-white/60 text-[13px] font-medium">Empowering businesses to focus on core operations while we manage non-core workforce needs.</div>
            </div>
          </div>
          <a href="#contact" className="shrink-0 bg-white text-[#0B1220] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#B68A3C] hover:text-white transition-colors">
            Partner With Us →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
