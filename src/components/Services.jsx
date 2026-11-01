import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

function TagCard({
  number,
  title,
  text,
  className = '',
  aosDelay = 100,
  aosType = 'fade-up',
  pathLength,
  containerRef,
}) {
  const [isActive, setIsActive] = useState(false)
  const cardRef = useRef(null)

  // Track scroll-linked path tip against card position relative to container
  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const cardRect = cardRef.current.getBoundingClientRect()
    const cardTopRelativeToContainer = cardRect.top - containerRect.top
    const containerHeight = containerRect.height
    const lineTip = latest * containerHeight
    setIsActive(lineTip >= cardTopRelativeToContainer + 50)
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 md:absolute transition-all duration-700 ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_10px_35px_rgba(255,42,42,0.4)]'
          : 'bg-white shadow-lg'
      } ${className}`}
    >
      {/* Small punched hole circle at the top */}
      <div
        className={`w-4 h-4 rounded-full mx-auto mt-2 border-2 transition-colors duration-700 ${
          isActive ? 'bg-[#ff2a2a] border-white/50' : 'bg-gray-100 border-gray-300'
        }`}
      />

      {/* Inner panel */}
      <div
        className={`mt-8 p-8 min-h-[220px] rounded-[1.5rem] transition-colors duration-700 flex flex-col justify-between ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-800'
        }`}
      >
        <div>
          <span
            className={`text-4xl font-black font-serif italic select-none ${
              isActive ? 'text-white/40' : 'text-gray-400'
            }`}
          >
            {number}
          </span>
          <h4 className="text-2xl font-black mt-2 mb-2 tracking-tight">
            {title}
          </h4>
        </div>
        <p
          className={`text-sm leading-relaxed ${
            isActive ? 'text-white/90' : 'text-gray-600'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

function Services() {
  const containerRef = useRef(null)

  // Scroll tracking from start center to end center of the process container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  const cardPositions = [
    {
      className:
        'md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className:
        'md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className:
        'md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className:
        'md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  const desktopD =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white text-gray-900 pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Desktop 3-layer animated curved path */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Layer 1: Faint guide path */}
          <path
            d={desktopD}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* Layer 2: Mask animated via pathLength */}
          <defs>
            <mask id="path-mask">
              <motion.path
                d={desktopD}
                fill="none"
                stroke="white"
                strokeWidth="20"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Layer 3: Solid active dashed path revealing through mask */}
          <path
            d={desktopD}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile 3-layer vertical animated path */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth="20"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            {skillsContent.badge}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 relative">
            {skillsContent.heading}
            <svg
              className="inline-block ml-2 w-7 h-7 stroke-red-500 fill-none stroke-[2.5]"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-4 leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, index) => (
            <TagCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              className={cardPositions[index]?.className}
              aosType={cardPositions[index]?.aosType}
              aosDelay={cardPositions[index]?.aosDelay}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}
        </div>

        {/* Handwritten end note */}
        {skillsContent.endText && (
          <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none z-10">
            {skillsContent.endText}
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
