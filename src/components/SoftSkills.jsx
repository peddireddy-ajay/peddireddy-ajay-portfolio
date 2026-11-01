import { softSkillsList } from '../data/portfolioData'

function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] text-center flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.03] hover:border-red-500/30 hover:shadow-[0_10px_30px_rgba(255,42,42,0.12)]"
    >
      {/* Emoji icon in rounded square */}
      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:bg-red-50 group-hover:border-red-200 group-hover:scale-110 shadow-sm select-none">
        {skill.icon}
      </div>

      {/* Uppercase Name */}
      <h3 className="text-gray-900 font-black text-base uppercase tracking-wider mb-2">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
        {skill.desc}
      </p>
    </div>
  )
}

function SoftSkills() {
  return (
    <section
      id="soft-skills"
      className="bg-white text-gray-900 pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      {/* Torn-paper divider at the top edge to transition from previous dark section */}
      <svg
        className="rotate-180 -translate-y-[1px] absolute top-0 left-0 w-full h-12 md:h-20 fill-[#0a0a0a] pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centred Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-mono uppercase tracking-widest mb-3 font-semibold">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900">
            Professional Soft Skills
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mt-3">
            Essential interpersonal and analytical mindsets that empower effective problem-solving and collaboration.
          </p>
        </div>

        {/* Soft Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills
