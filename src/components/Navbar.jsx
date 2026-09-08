import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#whyus' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-b border-slate-200/60'
            : 'bg-transparent border-b border-white/10'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-[72px] lg:h-[80px] flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.svg" alt="SHIKHA HR SERVICES PVT LTD" className="h-9 lg:h-10 w-auto object-contain bg-white rounded-lg px-1.5 py-1 shadow-sm" />
            <div className="hidden sm:block">
              <div className={`font-extrabold tracking-[-0.02em] leading-none text-[15px] lg:text-[16px] ${scrolled ? 'text-[#0B1220]' : 'text-white'}`} style={{ fontFamily: 'Sora' }}>
                SHIKHA HR
              </div>
              <div className={`text-[8px] lg:text-[9px] tracking-[0.12em] font-bold leading-tight max-w-[260px] ${scrolled ? 'text-slate-500' : 'text-white/70'}`}>
                Integrated Manpower & Facility Management Solutions
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`text-[13px] font-semibold tracking-wide transition-colors relative group ${scrolled ? 'text-slate-700 hover:text-[#0B1220]' : 'text-white/85 hover:text-white'}`}
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F59E0B] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-[11px] rounded-full text-[13px] font-bold tracking-wide transition-all hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-[1px] active:translate-y-0"
            >
              Get a Quote <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center border ${scrolled ? 'border-slate-200 text-slate-800 bg-white' : 'border-white/20 text-white bg-white/10 backdrop-blur'}`}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden pt-[72px]"
          >
            <div className="absolute inset-0 bg-[#0B1220]/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <div className="relative bg-white mx-4 rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="p-2">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-5 py-4 rounded-xl hover:bg-slate-50 text-[15px] font-semibold text-slate-800"
                  >
                    {l.label} <span className="text-slate-300">↗</span>
                  </a>
                ))}
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#0B1220] text-white py-4 rounded-full font-bold"
                >
                  Get a Quote <ArrowRight size={16} />
                </a>
                <p className="text-center text-[10px] tracking-widest font-semibold text-slate-400 mt-3">Integrated Manpower & Facility Management</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
