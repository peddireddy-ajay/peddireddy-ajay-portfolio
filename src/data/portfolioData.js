// ============================================================
// portfolioData.js — Peddireddy Ajay Portfolio Data
// This file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "Peddireddy Ajay",
  firstName: "Peddireddy Ajay",
  brandName: "Peddireddy Ajay", // shown in the preloader, navbar and footer
  title: "Data Analyst",
  location: "Kakinada, India",
  phone: "+919494052276",
  emails: {
    primary: "peddireddyajay21@gmail.com",
    secondary: "",
  },
  summary: "Aspiring Data Analyst skilled in Python, SQL, and data visualization tools, passionate about extracting actionable insights from data.",
  resumeUrl: "/Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/PeddireddyAjay",
  linkedin: "https://www.linkedin.com/in/peddireddy-ajay-55a221257",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Peddireddy Ajay",
  titleHighlight: "Data Analyst",
  subtitle: "Transforming raw data into meaningful business insights through analytics, visualization, and data-driven storytelling.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:peddireddyajay21@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML)
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Peddireddy Ajay</span>, a passionate Data Analyst based in Kakinada, India. With a strong foundation in Computer Science from Prathyusha Engineering College, I specialize in transforming raw data into actionable insights using Python, SQL, and modern business intelligence tools, sharpening my skills through the placement training program at TAP Academy.`,
  techStack: ["Python", "MySQL", "Pandas", "Power BI", "Tableau"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A data-driven methodology from raw data collection to actionable decision-making dashboards.",
  cards: [
    { number: "01", title: "Research", text: "Understand business questions, define data requirements, and identify reliable data sources." },
    { number: "02", title: "Design", text: "Formulate analytical metrics, plan data schemas, and design intuitive dashboard wireframes." },
    { number: "03", title: "Develop", text: "Clean datasets, write SQL queries, perform exploratory analysis, and engineer features." },
    { number: "04", title: "Deploy", text: "Publish interactive dashboards, communicate key findings, and monitor ongoing metrics." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Python" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }],
    },
    {
      title: "External Libraries",
      skills: [{ name: "NumPy" }, { name: "Pandas" }],
    },
    {
      title: "Data Visualization",
      skills: [{ name: "Matplotlib" }, { name: "Power BI" }, { name: "Tableau" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "Data Analytics & Tech Club",
    description: "Organized analytical workshops, peer coding sessions, and data challenges for computer science students.",
    role: "Student Coordinator",
    badge: "Leadership",
  },
  {
    title: "College Technical Symposium",
    description: "Coordinated technical events, project showcases, and student participant registrations at Prathyusha Engineering College.",
    role: "Event Organizer",
    badge: "Engagement",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Data Analyst Intern",
    duration: "2026",
    skills: ["Data Cleaning", "Data Visualization", "SQL Querying", "Exploratory Data Analysis"],
    tech: ["Python", "MySQL", "Pandas", "Power BI"],
  },
];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating cross-functionally to translate business needs into data solutions." },
  { name: "Analytical Thinking", icon: "📈", desc: "Dissecting complex datasets to uncover patterns, anomalies, and actionable trends." },
  { name: "Adaptability", icon: "🔄", desc: "Quickly learning new analytics frameworks, database schemas, and BI tools." },
  { name: "Time Management", icon: "⏱️", desc: "Prioritizing analytical workflows to deliver timely reporting and insights." },
];

export const projects = [
  {
    id: "project-one",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Customer Churn Analysis & Dashboard",
    description: "Conducted exploratory data analysis on customer behavior to identify churn drivers and built an interactive dashboard.",
    techTags: ["Python", "Pandas", "Power BI", "MySQL"],
    links: { github: "https://github.com/PeddireddyAjay", demo: "" },
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "Sales Performance & Trends Analysis",
    description: "Analyzed multi-region transactional sales data to discover revenue trends and optimize product inventory decisions.",
    techTags: ["Python", "Matplotlib", "Tableau", "MySQL"],
    links: { github: "https://github.com/PeddireddyAjay", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/peddireddy-ajay-55a221257",
};

export const education = {
  degree: "B.E Computer Science",
  institution: "Prathyusha Engineering College",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "DATA ANALYST",
    "PYTHON · MYSQL · POWER BI · TABLEAU",
    "TRANSFORMING DATA INTO DECISIONS",
  ],
  credential: "B.E COMPUTER SCIENCE",
  copyright: `© 2026 PEDDIREDDY AJAY | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
