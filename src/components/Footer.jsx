import { personalInfo, socialLinks, footerContent, academy } from '../data/portfolioData'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="bg-[#111111] text-[#989898] pt-12 md:pt-16 pb-10 md:pb-12 px-6 md:px-16 font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[420px]">
      {/* Top row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Column 1: Taglines */}
        <div className="flex flex-col space-y-1.5 uppercase">
          {footerContent.taglines.map((tagline, index) => (
            <p key={index}>{tagline}</p>
          ))}
        </div>

        {/* Column 2: Credential & View Work */}
        <div className="flex flex-col md:items-center space-y-1.5 uppercase text-center">
          <p>{footerContent.credential}</p>
          <a
            href="#projects"
            className="underline underline-offset-4 hover:text-white transition-colors text-white/90 w-fit"
          >
            VIEW WORK
          </a>
        </div>

        {/* Column 3: Availability & Current Year */}
        <div className="flex flex-col md:items-end space-y-1.5 uppercase text-right">
          <p>AVAILABLE FOR OPPORTUNITIES</p>
          <p>{currentYear}</p>
        </div>
      </div>

      {/* Middle: Giant brand typography */}
      <div className="py-12 md:py-16 overflow-hidden text-center flex items-center justify-center">
        <h2 className="text-[9vw] md:text-[8vw] lg:text-[7.5vw] leading-none font-bold tracking-tighter lowercase select-none text-[#f4f4f4] whitespace-nowrap">
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>

      {/* Bottom row with horizontal divider line */}
      <div className="border-t border-white/10 pt-4 md:pt-5 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        {/* Column 1: Contact, copyright, and TAP Academy training credit */}
        <div className="flex flex-col space-y-3.5">
          <a
            href="#contact"
            className="hover:text-white transition-colors w-fit uppercase"
          >
            CONTACT
          </a>
          <p className="uppercase text-neutral-400 text-[9px] md:text-[10px]">
            {footerContent.copyright}
          </p>
          <p className="text-neutral-400 text-[9px] md:text-[10px]">
            Trained at{' '}
            <a
              href={academy.url}
              target="_blank"
              rel="noopener"
              className="underline underline-offset-4 hover:text-white transition-colors"
            >
              {academy.name}
            </a>
          </p>
        </div>

        {/* Column 2: Email and Social Icons */}
        <div className="flex flex-col md:items-center space-y-3 text-center">
          <a
            href={`mailto:${personalInfo.emails.primary}`}
            className="underline underline-offset-4 hover:text-white transition-colors text-white/90"
          >
            {personalInfo.emails.primary}
          </a>
          <div className="flex items-center justify-center space-x-3.5">
            {/* GitHub */}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white transition-colors text-white/80"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
            )}

            {/* LinkedIn */}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors text-white/80"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Column 3: GitHub Explore link */}
        <div className="flex flex-col md:items-end justify-end text-right">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-white transition-colors uppercase text-white/90"
          >
            EXPLORE MY GITHUB
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
