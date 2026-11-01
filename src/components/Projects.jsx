import { projects, socialLinks } from '../data/portfolioData'

// Small GitHub inline SVG icon
function GitHubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

// Small External Link inline SVG icon
function ExternalLinkIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={`${className} fill-none stroke-current`}
      viewBox="0 0 24 24"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )
}

function ProjectCard({ project, aosDelay }) {
  const isFlagship = project.isFlagship

  // 1px gradient border logic
  const borderClasses = isFlagship
    ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:via-white/20 hover:to-red-500/60 shadow-[0_0_30px_rgba(255,42,42,0.1)]'
    : 'bg-white/10 hover:bg-white/20'

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl transition-all duration-300 ${borderClasses}`}
    >
      {/* Inner dark panel */}
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 flex flex-col justify-between h-full">
        <div>
          {/* Optional badge */}
          {project.badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-mono uppercase tracking-widest mb-4">
              {project.badge}
            </span>
          )}

          {/* Title and faint serif-italic number */}
          <div className="flex items-baseline gap-4 mb-3">
            <span className="text-5xl font-black text-white/10 font-serif italic select-none">
              {project.number}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech tags list */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-bold transition-colors hover:bg-red-600/20 hover:text-white hover:border-red-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/5">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-white text-sm font-semibold hover:bg-white/15 transition-all"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          )}

          {project.links?.demo && project.links.demo.trim() !== '' ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-sm font-semibold hover:bg-red-600 transition-colors shadow-md"
            >
              <ExternalLinkIcon />
              <span>Live Demo</span>
            </a>
          ) : (
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-sm font-semibold cursor-not-allowed select-none"
            >
              <span>Demo Coming Soon</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-mono uppercase tracking-widest mb-3">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Work that speaks for itself
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto mt-4">
            A selection of analytics projects, dashboards, and exploratory data solutions.
          </p>
        </div>

        {/* Project Cards stack */}
        <div className="flex flex-col gap-6 md:gap-8 mt-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id || project.number}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* Centred Explore All button */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold hover:bg-[#ff2a2a] hover:border-transparent transition-all duration-300 shadow-lg group"
          >
            <GitHubIcon className="w-5 h-5" />
            <span>Explore All My Repositories</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
