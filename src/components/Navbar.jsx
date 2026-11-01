import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Listen for scroll events to adjust navbar padding and background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`

  // Background and padding logic based on mobile menu and scroll position
  const navStyle = isOpen
    ? 'bg-[#ff2a2a] py-4'
    : isScrolled
      ? 'bg-transparent backdrop-blur-md py-4'
      : 'bg-transparent py-6'

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navStyle}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left: Brand logo */}
        <a href="#" className="text-white text-2xl font-black tracking-tight">
          {personalInfo.brandName}
          <span className="text-[#ff2a2a]">.</span>
        </a>

        {/* Centre: Desktop navigation links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-white/80 hover:text-white font-medium transition-colors"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right: Hire Me CTA button */}
        <div className="hidden md:block">
          <a
            href={hireMeMailto}
            className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile: Hamburger toggle button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="md:hidden text-white focus:outline-none p-1 cursor-pointer"
        >
          {isOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#ff2a2a] shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white font-bold text-lg border-b border-white/20 pb-2 hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href={hireMeMailto}
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 mt-2 rounded-full bg-white text-[#ff2a2a] font-bold text-lg shadow hover:bg-white/90 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
