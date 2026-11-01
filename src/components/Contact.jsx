import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax animation for the background giant text
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    if (!form) return

    const firstName = form.firstName?.value.trim() || ''
    const lastName = form.lastName?.value.trim() || ''
    const email = form.email?.value.trim() || ''
    const message = form.message?.value.trim() || ''

    // Basic required field validation
    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    // Verify whether real EmailJS credentials have been supplied
    const isConfigured =
      Boolean(
        emailjsConfig.serviceId &&
          emailjsConfig.templateId &&
          emailjsConfig.publicKey,
      ) &&
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      // Fallback: Mailto client redirect
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
      )}`
      window.open(mailtoUrl, '_blank')
      setStatus('success')
      form.reset()
      setTimeout(() => setStatus('idle'), 3000)
    } else {
      // Production path: send via EmailJS library
      try {
        const emailjs = await import('@emailjs/browser')
        await emailjs.sendForm(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          formRef.current,
          emailjsConfig.publicKey,
        )
        setStatus('success')
        form.reset()
      } catch (err) {
        console.error(err)
        setStatus('error')
      } finally {
        setTimeout(() => setStatus('idle'), 4000)
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Behind: Parallax background word */}
      <div className="absolute top-12 left-0 w-full overflow-hidden pointer-events-none z-0">
        <motion.div style={{ y }} className="w-full text-center">
          <div
            style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
            className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
          >
            CONTACT
          </div>
        </motion.div>
      </div>

      {/* In front: Red contact card aligned to the right */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 rounded-tl-3xl md:rounded-tl-[3rem] ml-auto relative z-10 text-white shadow-2xl"
      >
        {/* Card Header row */}
        <div className="flex items-center justify-between pb-8 border-b border-white/20">
          <span className="text-white/80 font-mono text-xs uppercase tracking-[0.2em] font-semibold">
            Reach Me
          </span>
          <a
            href={socialLinks.instagram || 'https://instagram.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold hover:bg-white/30 transition-all"
          >
            DM on Instagram
          </a>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 mt-8"
        >
          {/* Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: First Name, Last Name, Email */}
            <div className="flex flex-col space-y-8">
              <input
                id="firstName"
                name="first_name"
                type="text"
                required
                placeholder="First Name *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:outline-none focus:border-white text-white transition-colors"
              />
              <input
                id="lastName"
                name="last_name"
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:outline-none focus:border-white text-white transition-colors"
              />
              <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="Email Address *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:outline-none focus:border-white text-white transition-colors"
              />
            </div>

            {/* Right Column: Message textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:outline-none focus:border-white text-white resize-none min-h-[140px] md:min-h-full transition-colors w-full"
              />
            </div>
          </div>

          {/* Bottom Area: Checkbox, Note, Urgent link & Submit button */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-4 border-t border-white/20">
            {/* Left: Consent & Response timeline */}
            <div className="space-y-2 max-w-lg">
              <div className="flex items-center gap-3 text-white/90 text-sm">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="accent-black w-4 h-4 cursor-pointer"
                />
                <label htmlFor="consent" className="cursor-pointer select-none">
                  I agree to send this message and be contacted back.
                </label>
              </div>
              <p className="text-white/75 text-xs">
                Your message will be sent directly to my inbox. I typically
                respond within 24-48 hours.
              </p>
              <p className="text-white/75 text-xs">
                Urgent inquiry? Email directly at{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline font-bold text-white hover:text-black transition-colors"
                >
                  {personalInfo.emails.primary}
                </a>
              </p>
            </div>

            {/* Right: State-driven Submit Button */}
            <div className="w-full lg:w-auto">
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="w-full lg:w-auto px-8 py-4 rounded-full border border-white/30 bg-white/20 text-white/60 font-bold text-base flex items-center justify-center gap-2 cursor-wait"
                >
                  <svg
                    className="animate-spin w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="w-full lg:w-auto px-8 py-4 rounded-full border border-emerald-500 bg-emerald-600 text-white font-bold text-base flex items-center justify-center gap-2 shadow"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="submit"
                  className="w-full lg:w-auto px-8 py-4 rounded-full border border-red-800 bg-red-950 text-red-200 font-bold text-base flex items-center justify-center gap-2"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group w-full lg:w-auto px-8 py-4 rounded-full border border-white text-white font-bold text-base hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 stroke-current fill-none stroke-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
