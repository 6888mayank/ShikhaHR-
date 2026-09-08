export default function Footer() {
  return (
    <footer className="bg-[#070B16] border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="max-w-[380px]">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="SHS Pvt Ltd" className="h-9 w-auto bg-white rounded-lg p-1" />
              <div>
                <div className="font-extrabold tracking-tight text-white text-[13px]" style={{ fontFamily: 'Sora' }}>SHIKHA HR SERVICES PVT. LTD.</div>
                <div className="text-[9px] tracking-[0.12em] font-semibold text-white/50">Integrated Manpower & Facility Management Solutions</div>
              </div>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-white/50 font-medium">
              Your Integrated Workforce Partner — manpower, housekeeping, security, catering, waste management & horticulture across Uttar Pradesh & North India.
            </p>
            <div className="mt-4 text-[12px] leading-relaxed text-white/40">
              474A/151B Brahma Nagar, Near Kewal Baba Mandir,<br />Nirala Nagar, Lucknow - 226020
            </div>
          </div>

          <div className="flex flex-wrap gap-10">
            <div>
              <div className="text-[11px] tracking-[0.16em] font-bold text-white/40">NAVIGATION</div>
              <div className="mt-4 space-y-2.5">
                {['Home', 'About', 'Services', 'Why Us', 'Contact'].map((l) => (
                  <a key={l} href={`#${l.toLowerCase().replace(/\s+/g,'') === 'whyus' ? 'whyus' : l.toLowerCase().replace(/\s+/g,'')}`} className="block text-[13px] font-semibold text-white/70 hover:text-white transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.16em] font-bold text-white/40">SERVICES</div>
              <div className="mt-4 space-y-2.5 text-[13px] font-medium text-white/50">
                <div>Manpower Solutions</div>
                <div>Facility Management</div>
                <div>Security & Support</div>
                <div>Housekeeping • Catering</div>
                <div>Waste • Horticulture</div>
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.16em] font-bold text-white/40">GET IN TOUCH</div>
              <div className="mt-4 space-y-2 text-[13px] font-medium text-white/50">
                <div className="break-all">shikhahrservicespvt@gmail.com</div>
                <div>9454151491 | 6306841424</div>
                <div>Lucknow, Uttar Pradesh, India</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[12px] font-medium text-white/40">
            © 2026 SHIKHA HR SERVICES PVT. LTD. All Rights Reserved. • SHS Pvt. Ltd.
          </div>
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#B68A3C]">
            RELIABILITY • SCALABILITY • COMPLIANCE • EXCELLENCE
          </div>
        </div>
      </div>
    </footer>
  )
}
