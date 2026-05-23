/**
 * Home — Tam Jian Xin Portfolio
 * ─────────────────────────────────────────────────────────────────────────────
 * Design: Contemporary Editorial / Dark-Accent Minimal
 * Layout: Sticky top nav + full-width hero + single-column content sections
 *         (NO sidebar — deliberately different from lwk20.com)
 * Colors: Deep navy bg (#0F1624), warm off-white text, amber accent (#F5A623)
 * Font:   Helvetica Now stack → Nunito Sans fallback
 * Motion: Framer Motion scroll-triggered fade-up per section
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  ExternalLink,
  ChevronUp,
  Bike,
  CircleDot,
  BookOpen,
  Gamepad2,
  TrendingUp,
  Dumbbell,
  Download,
} from "lucide-react";

// ─── Constants ───────────────────────────────────────────────────────────────

const AMBER = "#F5A623";
const NAVY_CARD = "oklch(0.19 0.025 255)";
const NAVY_CARD2 = "oklch(0.22 0.025 255)";

// ─── Data ────────────────────────────────────────────────────────────────────

const profile = {
  name: "Tam Jian Xin",
  title: "Software Engineer",
  location: "Taman Gaya, 81800 Ulu Tiram, Johor, Malaysia",
  phone_my: "(+60) 11-2166 1195",
  phone_sg: "(+65) 9279 1235",
  email: "jiaxi0431@gmail.com",
  linkedin: "https://www.linkedin.com/in/tam-jian-xin-0890tjx/",
  github: "https://github.com/jianxin21",
  bio: "Hi, I’m Tam Jian Xin, a Computer Science (Hons) graduate from Multimedia University (MMU) Cyberjaya, specialising in Data Science. I’m passionate about building data-driven solutions and using technology to solve real-world problems. Fluent in Mandarin, English, and Malay, I enjoy learning new technologies, tackling complex challenges, and turning ideas into practical outcomes.",
};

const experiences = [
    {
    period: "Aug 2025 – Present",
    role: "Business Data Analyst",
    company: "Biosensors Interventional Technologies Pte Ltd",
    type: "Full-time",
    location: "Singapore",
    color: AMBER,
    points: [
      "Designed and implemented business application solutions aligned with organizational and business process requirements.",
      "Managed full Software Development Life Cycle (SDLC), including development, testing, deployment, and support.",
      "Collaborated with clients to collect and format content for accurate and timely publicationDeveloped and maintained SQL queries and stored procedures for system functionality and data processing.",
      "Collaborated with cross-functional teams, business users, and ERP/non-ERP stakeholders on project requirements.",
      "Provided post-implementation support and troubleshooting to ensure smooth system operations.",
      "Evaluated and enhanced system performance, reliability, usability, and overall functionality through continuous improvements.",
    ],
  },
  {
    period: "Jun 2024 – Jul 2025",
    role: "Software Engineer",
    company: "WPG (South Asia) Pte Ltd",
    type: "Full-time",
    location: "Singapore",
    color: "#4FC3F7",
    points: [
      "Collaborated with development teams to design, build, and maintain company systems including Oracle ERP, internal applications, and BI reports.",
      "Prepared and conducted User Acceptance Testing to ensure systems meet user expectations before deployment.",
      "Participated in QA process of Oracle system upgrade to ensure testing and quality standards were met.",
      "Provided timely and effective technical support to address user issues.",
    ],
  },
  {
    period: "Sept 2023 – Jun 2024",
    role: "IT Engineer",
    company: "Kaifa Technology (Senai) Sdn. Bhd.",
    type: "Full-time",
    location: "Johor Bahru, Malaysia",
    color: "#81C784",
    points: [
      "Collaborated with the Production team to develop and maintain Power BI reports to monitor productivity and efficiency of the production line.",
      "Automated HR data reports by migrating from Excel to Power BI, reducing manual effort by 50%.",
      "Troubleshot, debugged, and enhanced the existing In-House MES system to improve overall performance.",
      "Provided timely and effective technical support to address user issues.",
    ],
  },
];

const education = [
  {
    period: "Apr 2019 – Jul 2023",
    degree: "Bachelor of Computer Science (Hons.) — Data Science",
    institution: "Multimedia University, Cyberjaya, Malaysia",
    result: "First-Class Honours",
    badge: "Bachelor's",
    badgeColor: AMBER,
  },
  {
    period: "Apr 2018 – Mar 2019",
    degree: "Foundation in Science and Information Technology",
    institution: "Multimedia University, Malacca, Malaysia",
    result: "",
    badge: "Foundation",
    badgeColor: "#81C784",
  },
];

const skills = [
  { category: "Programming Languages", items: ["Python", "C++", "Java", ".NET", "HTML", "CSS", "MySQL"], color: "#4FC3F7" },
  { category: "Reporting & BI Tools", items: ["Power BI", "Tableau", "SSRS"], color: AMBER },
  { category: "Platforms & Tools", items: ["Oracle ERP", "WordPress", "Microsoft 365", "Git"], color: "#81C784" },
];

const languages = [
  { name: "Mandarin", level: 10, color: "#4FC3F7" },
  { name: "English", level: 7, color: AMBER },
  { name: "Malay", level: 7, color: "#81C784" },
];

const activities = [
  { name: "Badminton", icon: CircleDot },
  { name: "Basketball", icon: CircleDot },
  { name: "Cycling", icon: Bike },
  { name: "Running", icon: Dumbbell },
];

const interests = [
  { name: "Investment", icon: TrendingUp },
  { name: "Marathon Events", icon: Dumbbell },
  { name: "Reading Books", icon: BookOpen },
  { name: "Video Games", icon: Gamepad2 },
];

const projects = [
  {
    title: "Customer Purchase Recommender System",
    type: "Final Year Project",
    description: "A machine learning-based recommender system that analyses customer purchase history to generate personalised product recommendations, improving conversion rates and user experience.",
    tags: ["Python", "Machine Learning", "Data Science"],
    color: AMBER,
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Activities", href: "#activities" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedBar({ level, color }: { level: number; color: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} className="h-1.5 rounded-full overflow-hidden" style={{ background: "oklch(0.28 0.025 255)" }}>
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${(level / 10) * 100}%` } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
      />
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold tracking-tight" style={{ color: "oklch(0.94 0.01 80)" }}>
        {children}
      </h2>
      <div className="section-rule mt-3" />
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowTop(window.scrollY > 400);
      const ids = ["about", "experience", "education", "skills", "projects", "activities"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.14 0.02 255)" }}>

      {/* ── Sticky Nav ─────────────────────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "oklch(0.12 0.02 255 / 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid oklch(0.28 0.025 255)" : "1px solid transparent",
        }}
      >
        <div className="container flex items-center justify-between py-4">
          <span className="font-bold text-sm tracking-widest uppercase" style={{ color: AMBER }}>
            TJX
          </span>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ label, href }) => {
              const id = href.replace("#", "");
              const active = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  className="text-xs font-semibold uppercase tracking-widest transition-colors duration-150"
                  style={{ color: active ? AMBER : "oklch(0.65 0.01 80)" }}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          <a
            href={`mailto:${profile.email}`}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full transition-opacity hover:opacity-80"
            style={{ background: AMBER, color: "oklch(0.12 0.02 255)" }}
          >
            <Mail size={12} /> Hire Me
          </a>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section id="about" className="pt-32 pb-24 relative overflow-hidden">
        {/* Subtle grid bg */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: "linear-gradient(oklch(0.78 0.16 75) 1px, transparent 1px), linear-gradient(90deg, oklch(0.78 0.16 75) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container relative flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: AMBER }}>
              Business Data Analyst · Data Science
            </p>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight mb-6" style={{ color: "oklch(0.94 0.01 80)" }}>
              Tam<br />
              <span style={{ color: AMBER }}>Jian Xin</span>
            </h1>

            {/* Bio */}
            <p className="text-base leading-relaxed max-w-xl mb-8" style={{ color: "oklch(0.65 0.01 80)" }}>
              {profile.bio}
            </p>

            {/* Contact row */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: MapPin, text: "Johor, Malaysia / Singapore" },
                { icon: Phone, text: profile.phone_sg },
                { icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href ?? undefined}
                  className="flex items-center gap-2 text-sm transition-colors hover:opacity-80"
                  style={{ color: "oklch(0.65 0.01 80)" }}
                >
                  <Icon size={14} style={{ color: AMBER }} />
                  {text}
                </a>
              ))}
            </div>

            {/* Social buttons */}
            <div className="flex gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ background: AMBER, color: "oklch(0.12 0.02 255)" }}
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors hover:border-amber-400"
                style={{ borderColor: "oklch(0.28 0.025 255)", color: "oklch(0.80 0.01 80)" }}
              >
                <Github size={15} /> GitHub
              </a>
              {/* New Resume Download Button */}
              <a
                href="/resume/Resume_2026.pdf" // 1. Path to your PDF file
                target="_blank"
                rel="noreferrer"
                /*download="Tam_Jian_Xin_Resume.pdf" // 2. Forces download and sets the downloaded file's name*/
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors hover:border-amber-400"
                style={{ borderColor: "oklch(0.28 0.025 255)", color: "oklch(0.80 0.01 80)" }}
              >
                <Download size={15} /> Resume
              </a>
            </div>
          </motion.div>
          {/* Right Column: Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div 
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden border"
              style={{ borderColor: "oklch(0.28 0.025 255)" }}
            >
              <img
                src="/pic/profile_pic.jpeg" // Replace with your image file path or URL
                alt="Tam Jian Xin"
                className="w-full h-full object-cover"
              />
              {/* Optional decorative overlay glow matching your amber theme */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen"
                style={{ background: `radial-gradient(circle at center, ${AMBER}, transparent)` }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────────────────────── */}
      <section id="experience" className="py-20" style={{ background: "oklch(0.16 0.022 255)" }}>
        <div className="container">
          <FadeUp>
            <SectionHeading>Experience</SectionHeading>
          </FadeUp>
          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-6 border transition-all duration-200 hover:border-opacity-60"
                  style={{ background: NAVY_CARD, borderColor: "oklch(0.28 0.025 255)", borderLeftWidth: "3px", borderLeftColor: exp.color }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: "oklch(0.94 0.01 80)" }}>{exp.role}</h3>
                      <p className="text-sm font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-mono font-medium" style={{ color: "oklch(0.58 0.01 80)" }}>{exp.period}</p>
                      <div className="flex items-center gap-1 justify-end mt-1">
                        <MapPin size={11} style={{ color: "oklch(0.50 0.01 80)" }} />
                        <span className="text-xs" style={{ color: "oklch(0.50 0.01 80)" }}>{exp.location}</span>
                        <span
                          className="ml-2 text-xs px-2 py-0.5 rounded-full font-semibold"
                          style={{ background: `${exp.color}22`, color: exp.color }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mt-3">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-sm leading-relaxed" style={{ color: "oklch(0.65 0.01 80)" }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: exp.color }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ──────────────────────────────────────────────────── */}
      <section id="education" className="py-20">
        <div className="container">
          <FadeUp>
            <SectionHeading>Education</SectionHeading>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.map((edu, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6 h-full border"
                  style={{ background: NAVY_CARD, borderColor: "oklch(0.28 0.025 255)" }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: `${edu.badgeColor}22`, color: edu.badgeColor }}
                    >
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono" style={{ color: "oklch(0.50 0.01 80)" }}>{edu.period}</span>
                  </div>
                  <h3 className="text-base font-bold leading-snug mb-1" style={{ color: "oklch(0.94 0.01 80)" }}>{edu.degree}</h3>
                  <p className="text-sm mb-2" style={{ color: "oklch(0.58 0.01 80)" }}>{edu.institution}</p>
                  {edu.result && (
                    <p className="text-sm font-semibold" style={{ color: edu.badgeColor }}>{edu.result}</p>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ─────────────────────────────────────────────────────── */}
      <section id="skills" className="py-20" style={{ background: "oklch(0.16 0.022 255)" }}>
        <div className="container">
          <FadeUp>
            <SectionHeading>Skills &amp; Abilities</SectionHeading>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {skills.map((group, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6 border h-full"
                  style={{ background: NAVY_CARD, borderColor: "oklch(0.28 0.025 255)", borderTopWidth: "3px", borderTopColor: group.color }}
                >
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: group.color }}>
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1.5 rounded-full font-medium"
                        style={{ background: `${group.color}18`, color: group.color, border: `1px solid ${group.color}33` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Languages */}
          <FadeUp className="mt-10">
            <div
              className="rounded-2xl p-6 border"
              style={{ background: NAVY_CARD, borderColor: "oklch(0.28 0.025 255)" }}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: "oklch(0.65 0.01 80)" }}>
                Languages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold" style={{ color: "oklch(0.85 0.01 80)" }}>{lang.name}</span>
                      <span className="text-xs font-mono font-bold" style={{ color: lang.color }}>{lang.level}/10</span>
                    </div>
                    <AnimatedBar level={lang.level} color={lang.color} />
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────────────────── */}
      <section id="projects" className="py-20">
        <div className="container">
          <FadeUp>
            <SectionHeading>Projects</SectionHeading>
          </FadeUp>
          <div className="grid grid-cols-1 gap-5">
            {projects.map((proj, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6 border"
                  style={{ background: NAVY_CARD, borderColor: "oklch(0.28 0.025 255)" }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: proj.color }}
                      >
                        {proj.type}
                      </span>
                      <h3 className="text-lg font-bold mt-1" style={{ color: "oklch(0.94 0.01 80)" }}>{proj.title}</h3>
                    </div>
                    <ExternalLink size={16} style={{ color: "oklch(0.45 0.01 80)" }} className="shrink-0 mt-1" />
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "oklch(0.65 0.01 80)" }}>{proj.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{ background: `${proj.color}18`, color: proj.color, border: `1px solid ${proj.color}33` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activities & Interests ─────────────────────────────────────── */}
      <section id="activities" className="py-20" style={{ background: "oklch(0.16 0.022 255)" }}>
        <div className="container">
          <FadeUp>
            <SectionHeading>Activities &amp; Interests</SectionHeading>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Activities */}
            <FadeUp>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: "#4FC3F7" }}>
                Activities
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {activities.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                    style={{ background: NAVY_CARD, borderColor: "oklch(0.28 0.025 255)" }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#4FC3F722" }}>
                      <Icon size={16} style={{ color: "#4FC3F7" }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "oklch(0.80 0.01 80)" }}>{name}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Interests */}
            <FadeUp delay={0.1}>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: AMBER }}>
                Interests
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 border"
                    style={{ background: NAVY_CARD, borderColor: "oklch(0.28 0.025 255)" }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${AMBER}22` }}>
                      <Icon size={16} style={{ color: AMBER }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "oklch(0.80 0.01 80)" }}>{name}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="py-10 border-t" style={{ borderColor: "oklch(0.22 0.025 255)" }}>
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "oklch(0.45 0.01 80)" }}>
            © {new Date().getFullYear()} Tam Jian Xin. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="transition-colors hover:opacity-70" style={{ color: "oklch(0.55 0.01 80)" }}>
              <Linkedin size={18} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="transition-colors hover:opacity-70" style={{ color: "oklch(0.55 0.01 80)" }}>
              <Github size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email"
              className="transition-colors hover:opacity-70" style={{ color: "oklch(0.55 0.01 80)" }}>
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* ── Scroll-to-top ──────────────────────────────────────────────── */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-opacity hover:opacity-80 z-50"
          style={{ background: AMBER, color: "oklch(0.12 0.02 255)" }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </motion.button>
      )}
    </div>
  );
}
