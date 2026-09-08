import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.company.trim()) e.company = 'Required'
    if (!form.phone.trim()) e.phone = 'Required'
    else if (!/^[0-9+\-\s]{8,15}$/.test(form.phone)) e.phone = 'Invalid phone'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.service) e.service = 'Select a service'
    if (!form.message.trim()) e.message = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', company: '', phone: '', email: '', service: '', message: '' })
    setErrors({})
  }

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-2xl border bg-white text-[14px] font-medium placeholder:text-slate-400 outline-none transition-all ${
      errors[field]
        ? 'border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-50'
        : 'border-slate-200 focus:border-[#B68A3C] focus:ring-4 focus:ring-orange-50'
    }`

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FCFCF9]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B68A3C]" />
            <span className="text-[11px] tracking-[0.16em] font-extrabold text-slate-600">CONTACT</span>
          </div>
          <h2 className="mt-4 text-[30px] lg:text-[42px] font-extrabold tracking-[-0.03em] text-[#0B1220]">Let&apos;s Work Together</h2>
          <p className="mt-3 text-[15px] text-slate-500 font-medium">Tell us your requirement — we will respond within 24 hours.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-[#0B1220] rounded-[28px] p-8 text-white relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#B68A3C]/20 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <img src="/logo.svg" alt="SHS" className="h-10 w-auto bg-white rounded-lg p-1" />
                  <div>
                    <div className="font-extrabold tracking-tight text-[13px]">SHIKHA HR SERVICES PVT. LTD.</div>
                    <div className="text-[9px] tracking-[0.12em] font-semibold text-white/60">Integrated Manpower & Facility Management</div>
                  </div>
                </div>

                <p className="mt-6 text-[13px] leading-relaxed text-white/70 font-medium">
                  Premier manpower and integrated facility management provider — housekeeping, security, catering, waste management & horticulture.
                </p>

                <div className="mt-8 space-y-4">
                  <a href="tel:+919454151491" className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-[#B68A3C] transition-colors">
                      <Phone size={16} />
                    </span>
                    <div>
                      <div className="text-[11px] tracking-widest font-bold text-white/50">PHONE</div>
                      <div className="text-[13px] font-bold">9454151491 | 6306841424</div>
                    </div>
                  </a>
                  <a href="mailto:shikhahrservicespvt@gmail.com" className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-[#B68A3C] transition-colors">
                      <Mail size={16} />
                    </span>
                    <div>
                      <div className="text-[11px] tracking-widest font-bold text-white/50">EMAIL</div>
                      <div className="text-[13px] font-bold break-all">shikhahrservicespvt@gmail.com</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={16} />
                    </span>
                    <div>
                      <div className="text-[11px] tracking-widest font-bold text-white/50">ADDRESS</div>
                      <div className="text-[13px] font-medium leading-relaxed">474A/151B Brahma Nagar, Near Kewal Baba Mandir,<br />Nirala Nagar, Lucknow, Uttar Pradesh - 226020</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-[12px] font-bold tracking-widest text-[#FDBA74]">WORKING HOURS</div>
                  <div className="mt-1 text-[13px] font-medium text-white/80">Mon - Sat: 9:00 AM - 7:00 PM</div>
                  <div className="text-[13px] font-medium text-white/60">48-hour deployment • Dedicated account manager</div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-3">
              <CheckCircle2 size={18} className="text-emerald-600" />
              <span className="text-[12px] font-semibold text-slate-600">Average response: <span className="text-[#0B1220] font-bold">within 2 hours</span> on working days</span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-[28px] border border-slate-200 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-6 lg:p-8"
          >
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-2xl text-sm font-semibold"
              >
                <CheckCircle2 size={18} />
                Enquiry sent successfully! We will contact you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[12px] font-bold tracking-widest text-slate-600">FULL NAME *</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className={inputClass('name') + ' mt-1.5'}
                  />
                  {errors.name && <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
                </div>
                <div>
                  <label className="text-[12px] font-bold tracking-widest text-slate-600">COMPANY NAME *</label>
                  <input
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Company / Organisation"
                    className={inputClass('company') + ' mt-1.5'}
                  />
                  {errors.company && <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1"><AlertCircle size={12} />{errors.company}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[12px] font-bold tracking-widest text-slate-600">PHONE NUMBER *</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="9454151491"
                    className={inputClass('phone') + ' mt-1.5'}
                  />
                  {errors.phone && <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1"><AlertCircle size={12} />{errors.phone}</p>}
                </div>
                <div>
                  <label className="text-[12px] font-bold tracking-widest text-slate-600">EMAIL ADDRESS *</label>
                  <input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    type="email"
                    className={inputClass('email') + ' mt-1.5'}
                  />
                  {errors.email && <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="text-[12px] font-bold tracking-widest text-slate-600">SERVICE REQUIRED *</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={inputClass('service') + ' mt-1.5'}
                >
                  <option value="">Select a service</option>
                  <option>Manpower Solutions</option>
                  <option>Facility Management</option>
                  <option>Security Services</option>
                  <option>Housekeeping</option>
                  <option>Catering</option>
                  <option>Waste Management / Horticulture</option>
                  <option>Other</option>
                </select>
                {errors.service && <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1"><AlertCircle size={12} />{errors.service}</p>}
              </div>

              <div>
                <label className="text-[12px] font-bold tracking-widest text-slate-600">MESSAGE *</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your requirement — workforce count, services, location, timeline..."
                  rows={4}
                  className={inputClass('message') + ' mt-1.5 resize-none'}
                />
                {errors.message && <p className="mt-1.5 text-xs font-semibold text-red-600 flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1220] hover:bg-black text-white py-4 rounded-full font-bold text-[14px] tracking-wide transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Send Enquiry <ArrowRight size={18} />
              </button>

              <p className="text-center text-[11px] font-medium text-slate-400">
                By submitting you agree to our Terms & Privacy Policy. We respect your data.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
