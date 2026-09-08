import { motion } from 'framer-motion'
import { Search, ClipboardList, Truck, Headset } from 'lucide-react'

const steps = [
  {
    n: '01',
    icon: Search,
    title: 'Understand',
    desc: 'We understand your workforce, supply or project requirements.',
  },
  {
    n: '02',
    icon: ClipboardList,
    title: 'Plan',
    desc: 'We prepare the right resources, materials and execution plan.',
  },
  {
    n: '03',
    icon: Truck,
    title: 'Deliver',
    desc: 'Our team coordinates and delivers according to requirements.',
  },
  {
    n: '04',
    icon: Headset,
    title: 'Support',
    desc: 'We maintain communication and provide ongoing support.',
  },
]

export default function Workflow() {
  return (
    <section className="relative py-16 lg:py-24 bg-[#0B1220] overflow-hidden">
      {/* grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute w-[600px] h-[600px] bg-[#F59E0B]/10 rounded-full blur-[100px] -top-48 -right-48" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span className="text-[11px] tracking-[0.16em] font-bold text-white/80">HOW WE WORK</span>
            </div>
            <h2 className="mt-4 text-[30px] lg:text-[44px] font-extrabold tracking-[-0.03em] text-white leading-none">
              Structured. Coordinated. <span className="text-[#F59E0B]">Reliable.</span>
            </h2>
          </div>
          <p className="max-w-[420px] text-[14px] leading-relaxed text-white/60 font-medium">
            A simple, transparent workflow that keeps your project on track — from first discussion to final handover and beyond.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* horizontal line desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-[1px] bg-gradient-to-r from-white/10 via-[#F59E0B]/50 to-white/10" />

          <div className="grid lg:grid-cols-4 gap-6 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative group"
              >
                {/* connector dot */}
                <div className="hidden lg:flex absolute top-[44px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0B1220] border-2 border-[#F59E0B] items-center justify-center z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                </div>

                <div className="bg-white/[0.06] backdrop-blur border border-white/10 rounded-[24px] p-6 lg:p-7 hover:bg-white/[0.08] hover:border-white/20 transition-colors h-full">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#0B1220] flex items-center justify-center">
                      <s.icon size={20} />
                    </div>
                    <span className="text-[40px] font-black leading-none text-white/10 group-hover:text-[#F59E0B]/20 transition-colors">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[18px] font-extrabold text-white tracking-[-0.02em]">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60 font-medium">{s.desc}</p>
                  <div className="mt-5 h-[2px] w-8 bg-[#F59E0B] rounded-full group-hover:w-14 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* bottom note */}
        <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
          <span className="text-[12px] font-semibold text-white/50">Average response time</span>
          <span className="text-[12px] font-bold text-white bg-white/10 border border-white/15 px-3 py-1 rounded-full">Within 24 Hours</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="text-[12px] font-semibold text-white/50">Dedicated coordination for every project</span>
        </div>
      </div>
    </section>
  )
}
