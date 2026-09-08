import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, PackageCheck, Clock3 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#0B1220]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
          alt="Construction workforce"
          className="w-full h-full object-cover scale-[1.03]"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/80 via-[#0B1220]/75 to-[#0B1220]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/70 via-transparent to-[#0B1220]/40" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        {/* accent glow */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#F59E0B]/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      {/* Floating decorative lines */}
      <div className="absolute top-32 right-[8%] hidden lg:block opacity-30">
        <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-y-16 translate-x-16" />
        <div className="w-2 h-2 rounded-full bg-[#F59E0B] -translate-y-[66px] translate-x-[126px] shadow-[0_0_12px_#F59E0B]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 w-full pt-28 lg:pt-20 pb-12">
        <div className="max-w-[760px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-[11px] tracking-[0.18em] font-bold text-white/90">SHIKHA HR SERVICES PVT. LTD. • LUCKNOW</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="text-[36px] sm:text-[48px] lg:text-[64px] font-extrabold leading-[0.95] tracking-[-0.04em] text-white"
          >
            Integrated Manpower
            <span className="block text-white/90">& Facility Management</span>
            <span className="block bg-gradient-to-r from-[#B68A3C] to-[#FDBA74] bg-clip-text text-transparent">
              Solutions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-white/75 max-w-[620px] font-medium"
          >
            <span className="text-white font-semibold">Your Integrated Workforce Partner</span> — delivering skilled & unskilled workforce, housekeeping, security, catering, waste management & horticulture with reliability and cost-efficiency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#EA580C] text-white px-8 py-4 rounded-full font-bold text-[14px] tracking-wide transition-all shadow-[0_8px_24px_rgba(245,158,11,0.35)] hover:shadow-[0_12px_32px_rgba(245,158,11,0.45)] hover:-translate-y-[2px]"
            >
              Get a Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 hover:bg-white hover:text-[#0B1220] text-white px-8 py-4 rounded-full font-bold text-[14px] tracking-wide transition-all"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4 lg:gap-6"
          >
            {[
              { icon: ShieldCheck, text: 'Reliability • Scalability' },
              { icon: PackageCheck, text: 'Compliance • Excellence' },
              { icon: Clock3, text: '48-Hour Deployment' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-white/90">
                <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                  <item.icon size={14} className="text-[#FDBA74]" />
                </div>
                <span className="text-[13px] font-semibold tracking-wide">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>


      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
