import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { servicePages, wa } from "../data/site";
import Packages from "../components/sections/Packages";
import ContactCTA from "../components/sections/ContactCTA";
import Faq from "../components/sections/Faq";
import Process from "../components/sections/Process";
import { Reveal } from "../components/ui";

export default function ServicePage({ path }) {
  const page = servicePages[path];
  const reduce = useReducedMotion();

  if (!page) return null;

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" aria-hidden="true" />

        <div className="container">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={11} />
            <span>Services</span>
            <ChevronRight size={11} />
            <span>{page.title}</span>
          </div>

          <div className="page-inner">
            <div>
              <span className="eyebrow">{page.eyebrow}</span>
              <h1 className="page-title" style={{ marginTop: 22 }}>
                {page.lead}
              </h1>
              <p className="page-lead">{page.desc}</p>

              <div className="page-actions">
                <a
                  className="btn btn-primary"
                  href={wa(`Hi boostech, I want to enquire about ${page.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Discuss this service
                  <ArrowUpRight size={16} />
                </a>
                <Link className="btn btn-outline" to="/#packages">
                  See packages
                </Link>
              </div>

              <div className="page-trust">
                <span>
                  <Check size={12} /> Rishikesh based
                </span>
                <span>
                  <Check size={12} /> Clear scope
                </span>
                <span>
                  <Check size={12} /> No guaranteed rankings
                </span>
              </div>
            </div>

            <motion.div
              className="page-visual"
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            >
              <div className="page-visual-glow" />
              <motion.div
                className="page-ring"
                animate={reduce ? {} : { rotate: 360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
              >
                <div className="page-disc" />
              </motion.div>
              <div className="page-ring alt" />
              <span className="page-chip a">
                <Sparkles size={11} /> Built around the goal
              </span>
              <span className="page-chip b">Strategy → design → growth</span>
              <span className="page-chip c">One team, one plan</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="page-section paper">
        <div className="container included-layout">
          <Reveal>
            <span className="eyebrow">What&apos;s included</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              A practical plan,
              <br />
              built around the goal.
            </h2>
            <p>
              We shape the scope around your current digital presence, your
              target customers and the work required to move forward. No
              guaranteed rankings or fixed lead promises.
            </p>
          </Reveal>

          <div className="included-grid">
            {page.bullets.map((bullet, index) => (
              <Reveal key={bullet}>
                <div className="included-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{bullet}</b>
                  <Check size={14} className="included-check" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Packages />
      <Faq items={serviceFaqs(page)} eyebrow="About this service" />
      <ContactCTA
        eyebrow={`Enquire about ${page.title}`}
        copy="Share your business, current challenge and timeline. We will recommend a sensible scope after understanding what you actually need."
        message={`Hi boostech, I want to talk about ${page.title}.`}
      />
    </>
  );
}

function serviceFaqs(page) {
  return [
    {
      q: `How do we start a ${page.title.toLowerCase()} project?`,
      a: "Share your business, current online presence and what you want to improve. We will discuss the scope and recommend a package or a custom combination — no obligation.",
    },
    {
      q: "Will you guarantee rankings, leads or revenue?",
      a: "No. No responsible partner can guarantee a specific Google position, a fixed lead count or revenue. We work on sound fundamentals, relevant content and transparent measurement.",
    },
    {
      q: "Can this work alongside the other services?",
      a: "Yes. The website, search presence, social content and campaigns are designed to work together. Many businesses start with one area, then connect the rest once the foundation is in place.",
    },
    {
      q: "What is scoped separately?",
      a: "Advertising budget, domain and hosting, on-location photography or video shoots and travel are scoped separately where required. Exact deliverables are confirmed before work begins.",
    },
  ];
}
