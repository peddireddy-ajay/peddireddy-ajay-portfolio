import { internshipsList } from '../data/portfolioData'

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top row: Duration and Internship badge */}
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-white/40 text-xs uppercase tracking-wider">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-white/80 text-[10px] uppercase tracking-widest font-mono font-semibold">
            Internship
          </span>
        </div>

        {/* Role and Organization */}
        <h3 className="text-2xl font-black text-white mt-4 tracking-tight">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 text-sm font-bold tracking-wider mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained list */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="mb-6">
            <p className="text-white/80 text-xs font-mono uppercase tracking-wider mb-2 font-bold">
              Skills Gained:
            </p>
            <ul className="space-y-1.5 text-white/90 text-sm">
              {intern.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies row at bottom */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="border-t border-white/10 pt-4 mt-4">
          <p className="text-white/60 text-xs font-mono uppercase tracking-wider mb-2">
            Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((t, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-white/10 text-white font-mono text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function Internships() {
  if (!internshipsList || internshipsList.length === 0) return null

  return (
    <section
      id="experience"
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Torn-paper SVG divider along the top edge to transition from previous dark section */}
      <svg
        className="rotate-180 -translate-y-[1px] absolute top-0 left-0 w-full h-12 md:h-20 fill-[#0a0a0a] pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      {/* Decorative pulsing black star bottom-left */}
      <svg
        className="absolute bottom-8 left-8 w-12 h-12 text-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centred Header */}
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
            Work Experience
          </h2>
          <p className="text-red-100 text-sm md:text-base max-w-xl mx-auto mt-3">
            Hands-on industry training and internship experience applying analytical skills to real problems.
          </p>
        </div>

        {/* Grid of Internship Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={`${intern.organization}-${index}`}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Internships
