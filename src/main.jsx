import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight, BarChart3, Check, ChevronDown, Code2, Globe2,
  Instagram, Layers, Mail, MapPin, Menu, Monitor, Phone, Rocket,
  Search, Send, ShieldCheck, Sparkles, Star, Target, TrendingUp,
  X, Zap, Palette, Facebook, Linkedin
} from "lucide-react";
import "./index.css";

const EMAIL = "singhvikas2000a@gmail.com";
const PHONE = "+91 91930 98235";
const WHATSAPP = "918755903705";
const REVIEW_URL = "https://g.page/r/CTduq35iFXocEBI/review";
const wa = (message = "Hi boostech, I want to discuss a project.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const services = [
  { icon: Monitor, no: "01", title: "Website Design & Development", copy: "Professional, responsive websites that explain your offer and make enquiries easier.", tags: ["Business websites", "Landing pages", "WhatsApp integration", "SEO-friendly structure"], path: "/services/website-design/" },
  { icon: Search, no: "02", title: "SEO & Google Business Profile", copy: "Help nearby customers discover your business through useful pages and accurate local information.", tags: ["Technical SEO", "Local SEO", "Google Maps", "Profile optimisation"], path: "/services/seo/" },
  { icon: TrendingUp, no: "03", title: "Digital Marketing", copy: "A joined-up plan for content, campaigns and measurement—not random activity.", tags: ["Strategy", "Campaign planning", "Content", "Reporting"], path: "/services/digital-marketing/" },
  { icon: Target, no: "04", title: "Paid Advertising", copy: "Facebook, Instagram and Google campaign management built around real business goals.", tags: ["Lead generation", "WhatsApp enquiries", "Local targeting", "Optimisation"], path: "/services/google-meta-ads/" },
  { icon: Instagram, no: "05", title: "Social Media Management", copy: "Keep your brand active, recognisable and consistent across the right social platforms.", tags: ["Facebook", "Instagram", "Posts & reels", "Captions & hashtags"], path: "/services/social-media-marketing/" },
  { icon: Palette, no: "06", title: "Photo & Video Marketing", copy: "Visual content that makes your products, services, people and place easier to understand.", tags: ["Business photography", "Promotional videos", "Product videos", "Reels editing"], path: "/services/digital-marketing/" }
];

const packages = [
  {
    id: "basic", no: "01", name: "Basic", label: "Build your online presence",
    intro: "A practical starting point for businesses that need consistent social media activity and a more complete Google presence.",
    posts: "8 designed posts", reels: "2 reels",
    social: "Facebook & Instagram page management",
    google: "Google Business Profile basic setup / optimisation",
    extra: ["Captions and hashtags", "Festival and occasion creatives", "Business details and contact information", "Basic monthly content plan"],
    suitable: "New businesses and local shops starting their digital journey."
  },
  {
    id: "growth", no: "02", name: "Growth", label: "Stay visible and generate interest",
    intro: "A stronger monthly presence with regular content, Google profile management and paid campaign support.",
    posts: "12 designed posts", reels: "4 reels",
    social: "Facebook & Instagram page management",
    google: "Google Business Profile management",
    extra: ["Captions, hashtags and content planning", "Festival creatives", "Business photos and profile updates", "Customer review response support", "Paid campaign management", "Local audience and WhatsApp enquiry campaigns"],
    suitable: "Growing businesses that want consistent content and structured promotion."
  },
  {
    id: "premium", no: "03", name: "Premium", label: "A complete marketing engine",
    intro: "Higher-volume content, stronger profile management and paid campaign execution with clear monthly reporting.",
    posts: "20 designed posts", reels: "8 reels",
    social: "Full Facebook & Instagram management",
    google: "Ongoing Google Business Profile management",
    extra: ["Captions, hashtags and monthly calendar", "Festival and promotional creatives", "Lead generation and WhatsApp campaigns", "Facebook / Instagram ad management", "Local audience targeting", "Monthly performance report", "Promotional / product video editing"],
    suitable: "Established businesses ready for a more active marketing system."
  },
  {
    id: "maha", no: "04", name: "Maha Package", label: "Your complete digital presence",
    intro: "The all-in-one combination: everything in Premium, plus a professional business website built around your products or services.",
    posts: "20 designed posts", reels: "8 reels",
    social: "Full Facebook & Instagram management",
    google: "Ongoing Google Business Profile management",
    extra: ["Everything included in Premium", "Professional responsive website", "Products / services information pages", "WhatsApp integration", "Contact and enquiry form", "SEO-friendly website structure", "Basic on-page SEO and launch setup", "Website aligned with your brand and campaigns"],
    suitable: "Businesses that want marketing, visibility and their own website under one plan.",
    featured: true
  }
];

const projects = [
  { name: "Anna’s Mess", url: "https://annas-mess.vercel.app/", category: "Food & hospitality", type: "Restaurant website", mark: "AM" },
  { name: "Photo Shoot Sample", url: "https://photoshootsample.vercel.app/", category: "Creative", type: "Photography showcase", mark: "PS" },
  { name: "Vicky Mehandi Tattoo", url: "https://vicky-mehandi-tattoo.vercel.app/", category: "Creative", type: "Artist business website", mark: "VM" },
  { name: "Saraswati Institution", url: "https://saraswati-institution.vercel.app/", category: "Education", type: "Institution website", mark: "SI" },
  { name: "Bulls Gym", url: "https://bulls-gym-azure.vercel.app/", category: "Fitness", type: "Fitness website", mark: "BG" },
  { name: "Fi-ca", url: "https://fi-ca.vercel.app/", category: "Business", type: "Business website", mark: "FC" },
  { name: "Cozy Chapters Stays", url: "https://cozychapterstays.vercel.app/", category: "Food & hospitality", type: "Stay & hospitality website", mark: "CC" },
  { name: "Vikas Institute", url: "https://vikas-institute.vercel.app/", category: "Education", type: "Institute website", mark: "VI" },
  { name: "TRIOFIT", url: "https://triofit-gold.vercel.app/", category: "Fitness", type: "Fitness & wellness website", mark: "TF" },
  { name: "Rishikesh Greens Cafe", url: "https://rishikesh-greens-cafe.vercel.app/", category: "Food & hospitality", type: "Cafe website", mark: "RG" },
  { name: "Kaafe Rishikesh", url: "https://kaafe-rishikesh.vercel.app/", category: "Food & hospitality", type: "Cafe website", mark: "KR" }
];

const skills = ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Framer Motion", "Responsive UI", "Vite", "SEO foundations", "Web performance", "React Native / Expo", "Supabase"];
const faqs = [
  { q: "What is included in each package?", a: "Each package lists the regular deliverables and management scope. We first understand your business, goals and current online presence, then confirm the exact working scope before starting." },
  { q: "Are advertising costs included?", a: "No. The advertising budget paid to Google or Meta is separate from campaign management. We agree on the budget and targeting before campaigns go live." },
  { q: "Is website development included in every package?", a: "Website development is included in the Maha Package. The other packages focus on social media, Google Business Profile and digital promotion. A separate website project can also be discussed." },
  { q: "Are photography, video shoots and travel included?", a: "On-location shoots, additional production, travel, domain registration and website hosting are scoped separately according to what the business needs." },
  { q: "Can a package be customised?", a: "Yes. The package is a starting structure. After understanding your business, audience, competition and monthly goals, we can confirm the right combination of deliverables." },
  { q: "Do you guarantee Google first-page rankings or a fixed number of leads?", a: "No responsible agency can guarantee a specific Google position or fixed leads. We work on sound optimisation, relevant content, campaign management and transparent measurement." }
];

const servicePages = {
  "/services/digital-marketing/": { title: "Digital Marketing", eyebrow: "PLAN WITH PURPOSE", desc: "Digital marketing for brands that need a clearer message, consistent execution and better measurement.", bullets: ["Audience and competitor research", "Positioning, offers and messaging", "Content and campaign planning", "Performance tracking and reporting"] },
  "/services/seo/": { title: "SEO & Local Search", eyebrow: "BE VISIBLE WHEN PEOPLE SEARCH", desc: "Build a durable search foundation with useful pages, technical hygiene and local relevance.", bullets: ["Technical SEO and crawlability", "On-page structure and useful content", "Google Business Profile optimisation", "Local search measurement"] },
  "/services/social-media-marketing/": { title: "Social Media Management", eyebrow: "STAY RECOGNISABLE", desc: "A consistent content system for social platforms, with a clear voice and a reason for every post.", bullets: ["Facebook and Instagram management", "Post design, reels and festival creatives", "Captions, hashtags and content planning", "Monthly performance review"] },
  "/services/google-meta-ads/": { title: "Google & Meta Ads", eyebrow: "CAMPAIGNS WITH A CLEAR JOB", desc: "Paid campaigns planned around business objectives, clean tracking and continuous optimisation.", bullets: ["Facebook and Instagram ad campaigns", "Google Ads campaign management", "Lead and WhatsApp enquiry campaigns", "Local audience targeting and optimisation"] },
  "/services/website-design/": { title: "Website Design & Development", eyebrow: "TURN VISITORS INTO ENQUIRIES", desc: "Responsive websites that communicate clearly, load efficiently and make the next action obvious.", bullets: ["Professional business websites", "Product and service information", "WhatsApp integration and contact forms", "Responsive and SEO-friendly structure"] }
};

const rise = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: .6, ease: [.22, 1, .36, 1] } } };
const group = { hidden: {}, visible: { transition: { staggerChildren: .08 } } };

function usePageMeta() {
  const loc = useLocation();
  useEffect(() => {
    const page = servicePages[loc.pathname];
    document.title = loc.pathname === "/contact/" ? "Contact boostech | Digital Marketing & Web Development" : page ? `${page.title} | boostech` : "Digital Marketing & Web Development in Rishikesh | boostech";
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = page?.desc || "boostech helps businesses in Rishikesh and Uttarakhand with website development, SEO, social media management, paid ads and creative services.";
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = "https://business-flow-studio.vercel.app" + loc.pathname;
  }, [loc.pathname]);
}

function Reveal({ children, className = "" }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} variants={rise} initial={reduce ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: .12 }}>{children}</motion.div>;
}
function Button({ children, href, to, kind = "primary" }) {
  const className = `btn btn-${kind}`;
  return to ? <Link className={className} to={to}>{children}<ArrowUpRight size={16} /></Link> : <a className={className} href={href}>{children}<ArrowUpRight size={16} /></a>;
}
function Heading({ eyebrow, title, copy }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header"><div className="header-inner">
    <Link to="/" className="brand" onClick={close}><span className="brand-symbol">b.</span><span>boostech<span className="brand-dot">.</span></span></Link>
    <nav className={`nav-links ${open ? "nav-open" : ""}`}>
      <a href="/#services" onClick={close}>Services</a><a href="/#packages" onClick={close}>Packages</a><a href="/#work" onClick={close}>Our work</a><a href="/#skills" onClick={close}>Skills</a><Link to="/contact/" onClick={close}>Contact</Link>
      <a className="nav-mobile-cta" href={wa("Hi boostech, I want to know about your packages.")} onClick={close}>Discuss a package <ArrowUpRight size={15} /></a>
    </nav>
    <div className="header-actions"><a className="nav-cta" href={wa()}>Let's talk <ArrowUpRight size={16} /></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button></div>
  </div></header>;
}

function Hero() {
  const reduce = useReducedMotion();
  return <section className="hero"><div className="hero-bg-grid" /><div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" /><div className="container hero-layout">
    <div className="hero-copy">
      <motion.div className="hero-pill" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}><span className="pulse-dot" /> DIGITAL GROWTH STUDIO <span className="pill-location">RISHIKESH, INDIA</span></motion.div>
      <motion.h1 initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .1 }}>Make your brand<br /><span className="hero-highlight">impossible to miss.</span></motion.h1>
      <motion.p className="hero-lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>Websites, social media and digital campaigns built to turn attention into action. One focused team for your next stage of growth.</motion.p>
      <motion.div className="hero-buttons" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5 }}><Button href="/#packages">Explore packages</Button><Button href="/#work" kind="ghost-light">See our projects</Button></motion.div>
      <div className="hero-proof"><div className="proof-avatars"><span>B</span><span>W</span><span>+</span></div><div><strong>Built for real businesses</strong><small>Web • Search • Social • Performance</small></div></div>
    </div>
    <div className="hero-art">
      <motion.div className="hero-orbit" animate={reduce ? {} : { rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
      <motion.div className="hero-dashboard" initial={{ opacity: 0, scale: .92, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .75, delay: .2 }}>
        <div className="dashboard-top"><div className="browser-dots"><i /><i /><i /></div><span>YOUR DIGITAL PRESENCE</span><span className="dash-status"><i /> CONNECTED</span></div>
        <div className="dashboard-title"><span>One brand. Connected channels.</span><small>boostech / growth dashboard</small></div>
        <div className="dashboard-grid">
          <div className="dash-card"><span className="dash-icon"><Monitor size={17} /></span><b>Website</b><small>Built around your business</small><div className="dash-line dash-line-long" /><div className="dash-line dash-line-mid" /><div className="dash-line dash-line-short" /></div>
          <div className="dash-card"><span className="dash-icon"><Instagram size={17} /></span><b>Social media</b><small>Content that stays consistent</small><div className="social-mini"><i /><i /><i /></div></div>
          <div className="dash-card"><span className="dash-icon"><MapPin size={17} /></span><b>Google profile</b><small>Accurate local information</small><div className="map-mini"><span /><i /><b /></div></div>
          <div className="dash-card"><span className="dash-icon"><Target size={17} /></span><b>Campaigns</b><small>Planned with a clear goal</small><div className="campaign-bars"><i /><i /><i /><i /><i /><i /></div></div>
        </div>
        <div className="dashboard-foot"><span><ShieldCheck size={14} /> Clear scope. Practical execution.</span><span>BOOSTECH / 01</span></div>
      </motion.div>
      <motion.div className="hero-float float-one" animate={reduce ? {} : { y: [0, -10, 0], rotate: [0, -3, 0] }} transition={{ duration: 5, repeat: Infinity }}><Sparkles size={17} /> Design with purpose</motion.div>
      <motion.div className="hero-float float-two" animate={reduce ? {} : { y: [0, 10, 0], rotate: [0, 3, 0] }} transition={{ duration: 6, repeat: Infinity }}><TrendingUp size={18} /><span><b>Built for growth</b><small>Web + marketing</small></span></motion.div>
    </div>
  </div><div className="container hero-bottom"><span>BUILT FOR THE NEXT CLICK</span><div /><span>STRATEGY <b>•</b> DESIGN <b>•</b> DEVELOPMENT <b>•</b> GROWTH</span></div></section>;
}

function TrustStrip() {
  return <div className="trust-strip"><div className="container trust-inner">{["WEBSITE DEVELOPMENT", "SOCIAL MEDIA", "GOOGLE BUSINESS PROFILE", "PAID ADVERTISING", "PHOTO & VIDEO"].map((item, i) => <span key={item}><i>{String(i + 1).padStart(2, "0")}</i>{item}</span>)}</div></div>;
}

function Services() {
  return <section className="section section-paper" id="services"><div className="container"><Heading eyebrow="WHAT WE DO" title={<>One team for your<br /><em>entire digital presence.</em></>} copy="From a professional website to ongoing promotion, bring the parts of your digital presence together under one practical plan." />
    <motion.div className="services-grid" variants={group} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .1 }}>
      {services.map((s) => { const Icon = s.icon; return <motion.article className="service-card" key={s.no} variants={rise} whileHover={{ y: -6 }}><div className="service-card-top"><span className="service-number">{s.no}</span><span className="service-icon"><Icon size={22} /></span></div><h3>{s.title}</h3><p>{s.copy}</p><div className="service-tags">{s.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Link to={s.path} className="text-link">Explore service <ArrowUpRight size={15} /></Link></motion.article>; })}
    </motion.div>
  </div></section>;
}

function Packages() {
  return <section className="section packages-section" id="packages"><div className="container">
    <div className="packages-intro"><Heading eyebrow="SIMPLE SERVICE PACKAGES" title={<>Choose the support<br /><em>your business needs.</em></>} copy="Clear deliverables, no hidden rate cards. First we understand your business, then we confirm the right scope together." /><div className="package-note"><ShieldCheck size={19} /><span><b>No rates published.</b><small>Every proposal is scoped after a business discussion.</small></span></div></div>
    <div className="packages-grid">{packages.map((p, i) => <motion.article key={p.id} className={`package-card ${p.featured ? "package-featured" : ""}`} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ delay: i * .07 }}>
      {p.featured && <div className="package-ribbon"><Sparkles size={13} /> COMPLETE DIGITAL PRESENCE</div>}
      <div className="package-card-head"><span className="package-number">{p.no} / PACKAGE</span>{p.featured && <span className="package-badge">ALL-IN-ONE</span>}</div>
      <div className="package-title-row"><div><h3>{p.name}</h3><span className="package-label">{p.label}</span></div><div className="package-mark">{p.featured ? <Globe2 size={22} /> : p.id === "premium" ? <Zap size={22} /> : p.id === "growth" ? <TrendingUp size={22} /> : <Layers size={22} />}</div></div>
      <p className="package-intro">{p.intro}</p>
      <div className="package-core"><div><span>POST DESIGN</span><b>{p.posts}</b></div><div><span>REELS</span><b>{p.reels}</b></div></div>
      <div className="package-includes"><div className="include-line"><Check size={15} /><span>{p.social}</span></div><div className="include-line"><Check size={15} /><span>{p.google}</span></div>{p.extra.map((item) => <div className="include-line" key={item}><Check size={15} /><span>{item}</span></div>)}</div>
      {p.featured && <div className="maha-website-callout"><Monitor size={19} /><div><b>Website development included</b><small>Responsive business website with service / product details, WhatsApp integration and contact form.</small></div></div>}
      <div className="package-suitable"><b>BEST FOR</b><span>{p.suitable}</span></div>
      <a href={wa(`Hi boostech, I want to discuss the ${p.name}. Please help me understand the scope for my business.`)} className="package-cta">{p.id === "maha" ? "Discuss Maha Package" : "Discuss this package"} <ArrowUpRight size={16} /></a>
    </motion.article>)}</div>
    <div className="package-footnotes"><div><b>Important scope notes</b><span>Google / Meta advertising budget is separate from campaign management.</span><span>Domain, website hosting, on-location photography / video shoots and travel are scoped separately where required.</span><span>Exact website pages, campaign scope and shoot requirements are confirmed after understanding your business.</span></div><a href={wa("Hi boostech, I would like a package recommendation for my business.")}>Not sure which package fits? Talk to us <ArrowUpRight size={15} /></a></div>
  </div></section>;
}

const colors = ["peach", "violet", "rose", "blue", "lime", "cyan", "sand", "blue", "gold", "green", "coffee"];
function ProjectCard({ project, index }) {
  const [preview, setPreview] = useState(false);
  const reduce = useReducedMotion();
  return <motion.article className="project-card" layout initial={{ opacity: 0, y: 26, scale: .97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} whileHover={reduce ? {} : { y: -7 }} exit={{ opacity: 0, scale: .96 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .5, delay: (index % 3) * .06, ease: [.22, 1, .36, 1] }}>
    <div className={`project-preview preview-${colors[index % colors.length]}`}>
      <div className="project-browser"><span /><span /><span /><i>{new URL(project.url).hostname}</i></div>
      <div className="project-preview-stage">
        {preview ? <iframe title={`${project.name} live preview`} src={project.url} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" /> : <div className="preview-placeholder"><span>{project.mark}</span><small>{project.type}</small><button onClick={() => setPreview(true)}><Monitor size={13} /> Load preview</button></div>}
        <div className="preview-overlay"><span>{String(index + 1).padStart(2, "0")} · {project.category}</span></div>
        <motion.a className="preview-visit" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`} initial={false} whileHover={reduce ? {} : { scale: 1.04 }}>Visit live site <ArrowUpRight size={14} /></motion.a>
        <span className="preview-live"><i /> LIVE</span>
      </div>
    </div>
    <div className="project-details"><div><span className="project-type">{project.type}</span><h3>{project.name}</h3></div><a className="project-open" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight size={18} /></a></div>
  </motion.article>;
}

function Portfolio() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Food & hospitality", "Education", "Fitness", "Creative", "Business"];
  const filtered = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.category === filter), [filter]);
  return <section className="section section-paper portfolio-section" id="work"><div className="container"><div className="portfolio-top"><Heading eyebrow="SELECTED WEB PROJECTS" title={<>Different businesses.<br /><em>Different digital experiences.</em></>} copy="Explore websites built across hospitality, education, fitness, creative services and business." /><a className="review-link" href={REVIEW_URL} target="_blank" rel="noreferrer"><span className="google-g">G</span><span><b>Review boostech</b><small>Open Google review page</small></span><ArrowUpRight size={17} /></a></div>
    <div className="project-filters">{categories.map((category) => <button key={category} className={filter === category ? "filter-active" : ""} onClick={() => setFilter(category)}>{category}{category === "All" && <span className="filter-count">{projects.length}</span>}</button>)}</div>
    <motion.div layout className="projects-grid"><AnimatePresence mode="popLayout">{filtered.map((project, i) => <ProjectCard key={project.name} project={project} index={i} />)}</AnimatePresence></motion.div>
    <div className="portfolio-foot"><span>{filtered.length} / {projects.length} PROJECTS</span><span>Load a preview or open the live website <ArrowUpRight size={14} /></span></div>
  </div></section>;
}

function Skills() {
  return <section className="section skills-section" id="skills"><div className="container skills-layout"><Reveal className="skills-copy"><span className="eyebrow eyebrow-blue">THE DEVELOPMENT TOOLKIT</span><h2>Good ideas need<br /><em>solid execution.</em></h2><p>From interface structure to motion, responsive behaviour and launch basics, the work is grounded in a practical modern web stack.</p><Button href="/#work" kind="outline">Explore live projects</Button></Reveal>
    <motion.div className="skills-board" variants={group} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }}><div className="skills-board-head"><span>TECHNOLOGY & SKILLS</span><span className="stack-status"><i /> IN PRACTICE</span></div><div className="skills-grid">{skills.map((skill, i) => <motion.div className="skill-chip" key={skill} variants={rise} whileHover={{ y: -4 }}><span>{String(i + 1).padStart(2, "0")}</span><b>{skill}</b></motion.div>)}</div><div className="skills-board-foot"><Code2 size={16} /> Clean structure <span>•</span> Responsive first <span>•</span> Performance aware</div></motion.div>
  </div></section>;
}

function Process() {
  const steps = [
    ["01", "Understand", "Learn about your business, audience, current online presence and goals.", Search],
    ["02", "Plan & design", "Choose the right package and map the message, content and user journey.", Palette],
    ["03", "Build & manage", "Create the website and content, manage profiles and run agreed campaigns.", Code2],
    ["04", "Review & improve", "Share performance, discuss enquiries and improve the next cycle.", BarChart3]
  ];
  return <section className="section section-paper process-section" id="process"><div className="container"><Heading eyebrow="HOW WE WORK" title={<>First understand the business.<br /><em>Then build the right plan.</em></>} copy="We do not begin by pushing a rate card. We start with your business and recommend the work that makes sense." /><div className="process-grid">{steps.map(([number, title, copy, Icon]) => <Reveal key={number}><article className="process-card"><div className="process-card-top"><span>{number}</span><Icon size={23} /></div><h3>{title}</h3><p>{copy}</p></article></Reveal>)}</div></div></section>;
}

function ReviewBand() {
  return <section className="review-band"><div className="container review-band-inner"><div className="review-icon"><Star fill="currentColor" /></div><div><span className="eyebrow">HAD A PROJECT WITH US?</span><h2>Your feedback helps the next business choose well.</h2><p>Share an honest review on our Google review page.</p></div><a href={REVIEW_URL} target="_blank" rel="noreferrer" className="review-button">Write a Google review <ArrowUpRight size={16} /></a></div></section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="section faq-section"><div className="container faq-layout"><Heading eyebrow="GOOD QUESTIONS" title={<>Before we<br /><em>get to work.</em></>} copy="A few quick answers about packages, services and what to expect." /><div className="faq-list">{faqs.map((faq, i) => <div className={`faq-item ${open === i ? "faq-open" : ""}`} key={faq.q}><button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{faq.q}</span><ChevronDown size={18} /></button><AnimatePresence initial={false}>{open === i && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{faq.a}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>;
}

function ContactCTA() {
  return <section className="contact-cta" id="contact"><div className="contact-cta-pattern" /><div className="container contact-cta-inner"><Reveal><span className="eyebrow eyebrow-light">LET'S DISCUSS YOUR BUSINESS</span><h2>Let's make your<br /><em>next move count.</em></h2><p>Tell us what you do, where you want to grow and what support you need. We'll help you choose a sensible package.</p><div className="cta-actions"><a className="btn btn-orange" href={wa("Hi boostech, I want a package recommendation for my business.")}>Discuss on WhatsApp <ArrowUpRight size={16} /></a><a className="btn btn-ghost-light" href={`mailto:${EMAIL}`}>Email the team <Mail size={16} /></a></div></Reveal><motion.div className="cta-art" animate={{ rotate: [-4, 4, -4], y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}><div className="cta-art-ring" /><div className="cta-art-card"><Sparkles size={27} /><b>Build something<br />worth finding.</b><span>BOOSTECH / RISHIKESH</span></div><div className="cta-art-mini"><TrendingUp size={20} /></div></motion.div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-main">
    <div className="footer-brand"><Link to="/" className="brand brand-footer"><span className="brand-symbol">b.</span><span>boostech<span className="brand-dot">.</span></span></Link><p>Digital marketing and web development for businesses ready to be seen, understood and chosen.</p><div className="footer-social"><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram /></a><a href="https://www.facebook.com/" aria-label="Facebook"><Facebook /></a><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin /></a></div></div>
    <div className="footer-column"><b>EXPLORE</b><a href="/#services">Services</a><a href="/#packages">Packages</a><a href="/#work">Projects</a><a href="/#skills">Skills</a></div>
    <div className="footer-column"><b>SERVICES</b><Link to="/services/website-design/">Web development</Link><Link to="/services/seo/">SEO & local SEO</Link><Link to="/services/google-meta-ads/">Paid advertising</Link><Link to="/services/social-media-marketing/">Social media</Link></div>
    <div className="footer-column footer-contact"><b>CONTACT</b><a href={`mailto:${EMAIL}`}><Mail size={15} />{EMAIL}</a><a href={`tel:${PHONE.replace(/\s/g, "")}`}><Phone size={15} />{PHONE}</a><span><MapPin size={15} />Shyampur, Rishikesh, Uttarakhand</span><a href={REVIEW_URL} target="_blank" rel="noreferrer"><Star size={15} />Google review page</a></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} boostech. All rights reserved.</span><span>Made for businesses with ambition. <b>✦</b></span></div></div></footer>;
}

function Home() {
  return <><Hero /><TrustStrip /><Services /><Packages /><Portfolio /><Skills /><Process /><ReviewBand /><FAQ /><ContactCTA /></>;
}
function ServicePage({ path }) {
  const page = servicePages[path] || servicePages["/services/digital-marketing/"];
  return <><section className="subhero"><div className="container subhero-inner"><div><span className="eyebrow eyebrow-blue">{page.eyebrow}</span><h1>{page.title}<br /><em>for real businesses.</em></h1><p>{page.desc}</p><div className="subhero-actions"><Button href={wa(`Hi boostech, I want to enquire about ${page.title}.`)}>Discuss this service</Button><Button to="/" kind="outline">Back to home</Button></div></div><div className="subhero-visual"><div className="subhero-visual-icon"><Sparkles size={45} /></div><div className="subhero-visual-sticker">STRATEGY<br />→ DESIGN<br />→ GROWTH</div><div className="subhero-visual-orbit" /></div></div></section>
    <section className="section section-paper"><div className="container service-detail-layout"><div><span className="eyebrow eyebrow-blue">WHAT'S INCLUDED</span><h2>A practical plan,<br /><em>built around the goal.</em></h2><p className="service-detail-copy">We shape the scope around your current digital presence, your target customers and the work required to move forward. No guaranteed rankings or fixed lead promises.</p></div><div className="service-bullet-grid">{page.bullets.map((bullet, i) => <Reveal key={bullet}><div className="service-bullet"><span>{String(i + 1).padStart(2, "0")}</span><b>{bullet}</b><Check size={17} /></div></Reveal>)}</div></div></section><Packages /><Portfolio /><ContactCTA /></>;
}
function ContactPage() {
  return <><section className="subhero contact-subhero"><div className="container subhero-inner"><div><span className="eyebrow eyebrow-blue">LET'S TALK</span><h1>Tell us what<br /><em>you want to build.</em></h1><p>Share your business, current challenge and timeline. We’ll recommend a suitable service or package after understanding the scope.</p><div className="subhero-actions"><a className="btn btn-primary" href={wa("Hi boostech, I want to discuss a project.")}>Message on WhatsApp <ArrowUpRight size={16} /></a><a className="btn btn-outline" href={`mailto:${EMAIL}`}>Send an email <Mail size={16} /></a></div></div><div className="contact-card"><span className="eyebrow eyebrow-blue">DIRECT CONTACT</span><a href={`mailto:${EMAIL}`}><Mail />{EMAIL}</a><a href={`tel:${PHONE.replace(/\s/g, "")}`}><Phone />{PHONE}</a><span><MapPin />Shyampur, Rishikesh, Uttarakhand</span><a href={REVIEW_URL} target="_blank" rel="noreferrer"><Star />Google review page</a></div></div></section><Packages /><FAQ /><ContactCTA /></>;
}
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }));
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);
  return null;
}
function App() {
  usePageMeta();
  return <><ScrollManager /><Header /><main><Routes><Route path="/" element={<Home />} /><Route path="/contact/" element={<ContactPage />} />{Object.keys(servicePages).map((path) => <Route key={path} path={path} element={<ServicePage path={path} />} />)}<Route path="*" element={<Home />} /></Routes></main><Footer /><a className="floating-whatsapp" href={wa()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><Send size={19} /><span>Let's chat</span></a></>;
}
createRoot(document.getElementById("root")).render(<React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>);
