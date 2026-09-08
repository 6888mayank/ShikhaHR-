import { motion } from 'framer-motion'
import { Check, ArrowRight, Award, Shield, Sparkles, ShieldCheck, UtensilsCrossed, Leaf } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FCFCF9]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[32px] overflow-hidden bg-white p-3 shadow-[0_16px_48px_rgba(0,0,0,0.08)]">
              <div className="rounded-[24px] overflow-hidden aspect-[4/3] relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                  alt="Integrated workforce - facility management team"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 flex items-center gap-3">
                  <img src="/logo.svg" alt="SHS" className="w-10 h-10 rounded-xl bg-white border border-slate-100 p-1 object-contain" />
                  <div>
                    <div className="text-[13px] font-bold text-[#0B1220]">SHIKHA HR SERVICES PVT. LTD.</div>
                    <div className="text-[11px] font-medium text-slate-500">Your Integrated Workforce Partner</div>
                  </div>
                  {/* SVG badge */}
                  <span className="ml-auto hidden sm:flex w-7 h-7 rounded-full bg-[#FFF7ED] border border-orange-100 items-center justify-center">
                    <Award size={14} className="text-[#B68A3C]" />
                  </span>
                </div>
              </div>
            </div>

            {/* Floating mini card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-2 lg:-right-6 bg-[#0B1220] rounded-2xl p-5 shadow-xl border border-white/10 w-[240px] hidden sm:block"
            >
              <div className="flex items-center gap-2 text-[#F59E0B] text-[11px] font-bold tracking-widest">
                <Award size={14} /> VISION
              </div>
              <div className="mt-2 text-white font-bold text-[13px] leading-snug">To become India&apos;s most trusted integrated workforce & facility management partner.</div>
              <div className="mt-3 flex gap-2">
                <span className="w-8 h-[3px] bg-[#F59E0B] rounded-full" />
                <span className="w-8 h-[3px] bg-white/20 rounded-full" />
              </div>
            </motion.div>

            <div className="absolute -z-10 top-6 -left-6 w-full h-full bg-[#B68A3C]/10 rounded-[32px] hidden lg:block" />
            {/* Decorative SVG swoosh - brand element */}
            <svg className="absolute -z-10 -bottom-4 -left-4 w-[120px] h-[40px] hidden lg:block opacity-20" viewBox="0 0 120 40" fill="none">
              <path d="M5 30 Q30 38 60 25 Q90 12 115 5" stroke="#B68A3C" strokeWidth="6" strokeLinecap="round" />
              <path d="M8 22 Q32 30 62 18 Q88 8 112 3" stroke="#0B1220" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#FFF7ED] border border-orange-100 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span className="text-[11px] tracking-[0.16em] font-extrabold text-[#92400E]">ABOUT SHIKHA HR SERVICES PVT. LTD.</span>
            </div>

            <h2 className="mt-5 text-[28px] lg:text-[36px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0B1220]">
              Premier Manpower & <br />
              <span className="text-[#B68A3C]">Integrated Facility</span> Management
            </h2>

            <p className="mt-5 text-[15px] leading-relaxed text-slate-600 font-medium">
              <span className="font-bold text-[#0B1220]">SHIKHA HR SERVICES PRIVATE LIMITED</span> is a premier manpower and integrated facility management service provider, delivering skilled and unskilled workforce solutions across diverse sectors.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-500">
              We specialize in end-to-end outsourcing including housekeeping, security, catering, waste management, and horticulture — tailored to client needs with reliability and cost-efficiency. We serve corporates, institutions, industrial units, and government projects.
            </p>

            <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-5 flex gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#FFF7ED] border border-orange-100 flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 300 140" className="w-6 h-auto"><g fontFamily="Sora" fontWeight="800" fontSize="92"><text x="12" y="95" fill="#0A1931">S</text><text x="78" y="95" fill="#B68A3C">H</text><text x="158" y="95" fill="#0A1931">S</text></g><path d="M8 118 Q40 140 110 120 Q180 100 255 28" fill="none" stroke="#B68A3C" strokeWidth="9" strokeLinecap="round"/><path d="M12 102 Q50 122 115 108 Q185 88 258 24" fill="none" stroke="#0A1931" strokeWidth="7" strokeLinecap="round"/></svg>
              </div>
              <div>
                <div className="text-[11px] tracking-[0.14em] font-extrabold text-[#B68A3C]">OUR MISSION</div>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-600 font-medium">
                  Deliver scalable, compliant, and technology-enabled manpower solutions that empower businesses to focus on their core operations while we manage their non-core workforce needs.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {['Reliability', 'Scalability', 'Compliance', 'Excellence'].map((v) => (
                <span key={v} className="px-3.5 py-1.5 bg-[#0B1220] text-white rounded-full text-[11px] font-bold tracking-widest">{v.toUpperCase()}</span>
              ))}
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                { label: 'Housekeeping & Cleaning', icon: Sparkles },
                { label: 'Security Services', icon: ShieldCheck },
                { label: 'Catering & Pantry', icon: UtensilsCrossed },
                { label: 'Waste & Horticulture', icon: Leaf },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-white border border-slate-100 rounded-full px-4 py-3 shadow-sm">
                  <span className="w-7 h-7 rounded-full bg-[#0B1220] flex items-center justify-center text-white shrink-0">
                    <item.icon size={14} />
                  </span>
                  <span className="text-[12px] font-bold text-[#0B1220]">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0B1220] hover:bg-black text-white px-7 py-3.5 rounded-full font-bold text-[13px] tracking-wide transition-colors"
              >
                Know More <ArrowRight size={16} />
              </a>
              <div className="flex items-center gap-3 pl-2">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=11" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="" />
                  <img src="https://i.pravatar.cc/100?img=32" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="" />
                  <img src="https://i.pravatar.cc/100?img=15" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="" />
                </div>
                <div className="text-[12px] leading-tight">
                  <div className="font-bold text-[#0B1220]">Serving corporates & institutions</div>
                  <div className="text-slate-500 font-medium">Lucknow • North India</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-slate-500">
                <Shield size={16} className="text-[#F59E0B]" />
                <span className="text-[12px] font-semibold">100% Statutory Compliant • Reliable • Scalable</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
