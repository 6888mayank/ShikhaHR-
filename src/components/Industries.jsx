import { motion } from 'framer-motion'
import { Factory, Monitor, HeartPulse, School, Landmark, Building2 } from 'lucide-react'

const industries = [
  { title: 'Manufacturing & Industrial Units', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop', icon: Factory },
  { title: 'IT / ITES & Commercial Offices', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop', icon: Monitor },
  { title: 'Healthcare & Hospitals', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop', icon: HeartPulse },
  { title: 'Educational Institutions', img: '/education.svg', icon: School },
  { title: 'Government & PSU Contracts', img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=600&auto=format&fit=crop', icon: Landmark },
  { title: 'Commercial Real Estate & Retail', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop', icon: Building2 },
]

export default function Industries() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFF7ED] border border-orange-100 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B68A3C]" />
              <span className="text-[11px] tracking-[0.16em] font-extrabold text-[#92400E]">TARGET MARKET — STP</span>
            </div>
            <h2 className="mt-4 text-[28px] lg:text-[40px] font-extrabold tracking-[-0.03em] text-[#0B1220] leading-none">
              Serving Diverse <span className="text-[#B68A3C]">Sectors</span>
            </h2>
          </div>
          <p className="max-w-[440px] text-[14px] text-slate-500 font-medium leading-relaxed">
            From manufacturing units needing 50+ workforce to IT parks, hospitals, schools, PSU tenders & retail malls — tailored, compliant, scalable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative h-[240px] rounded-[24px] overflow-hidden cursor-pointer ${card.img.endsWith('.svg') ? 'bg-white border border-slate-200' : ''}`}
            >
              <img
                src={card.img}
                alt={card.title}
                className={`absolute inset-0 w-full h-full ${card.img.endsWith('.svg') ? 'object-contain bg-white p-6' : 'object-cover'} group-hover:scale-110 transition-transform duration-700`}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop' }}
              />
              <div className={`absolute inset-0 ${card.img.endsWith('.svg') ? 'bg-gradient-to-t from-[#0B1220]/80 via-[#0B1220]/20 to-transparent' : 'bg-gradient-to-t from-[#0B1220]/90 via-[#0B1220]/40 to-transparent group-hover:from-[#0B1220]/95'} transition-colors`} />
              <div className="absolute top-5 left-5 w-8 h-[3px] bg-[#B68A3C] rounded-full" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center">
                    <card.icon size={16} className="text-white" />
                  </span>
                  <span className="text-[11px] tracking-widest font-bold text-white/70">SECTOR 0{i + 1}</span>
                </div>
                <h3 className="text-[18px] font-extrabold text-white leading-tight group-hover:-translate-y-1 transition-transform">
                  {card.title}
                </h3>
                <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[12px] font-bold text-[#FDBA74]">Explore →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
