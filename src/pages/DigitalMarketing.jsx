import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Compass,
  Layers,
  Megaphone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import {
  CONTACT,
  marketingCapabilities,
  marketingDeliverables,
  marketingFaqs,
  marketingReasons,
  wa,
} from "../data/site";
import Process from "../components/sections/Process";
import Packages from "../components/sections/Packages";
import Faq from "../components/sections/Faq";
import ContactCTA from "../components/sections/ContactCTA";
import { Reveal, SectionHead } from "../components/ui";

const values = [
  {
    no: "01",
    title: "One message, everywhere",
    copy: "The website, the Google profile and the social feed should say the same thing in the same voice. We start by making that message clear.",
  },
  {
    no: "02",
    title: "Content people can use",
    copy: "Posts and campaigns built around what a customer needs to know before they enquire — not content made purely to fill a calendar.",
  },
  {
    no: "03",
    title: "Numbers that mean something",
    copy: "A monthly review of what ran, what it produced and what changes next. Enquiries matter more than impressions.",
  },
];

export default function DigitalMarketing() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="page-hero dm-hero">
        <div className="page-hero-bg" aria-hidden="true" />

        <div className="container">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={11} />
            <span>Services</span>
            <ChevronRight size={11} />
            <span>Digital Marketing</span>
          </div>

          <div className="page-inner">
            <div>
              <span className="eyebrow">Digital marketing</span>
              <h1 className="page-title" style={{ marginTop: 22 }}>
                Marketing that earns attention
                <br />
                — and <em>enquiries.</em>
              </h1>
              <p className="page-lead">
                A clear plan across content, social, search and paid media, with
                honest measurement. Built for businesses in Rishikesh and
                Uttarakhand that want to stay visible without publishing
                randomly and hoping.
              </p>

              <div className="page-actions">
                <a
                  className="btn btn-primary"
                  href={wa(
                    "Hi boostech, I'd like to discuss digital marketing for my business."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a marketing conversation
                  <ArrowUpRight size={16} />
                </a>
                <Link className="btn btn-outline" to="/#packages">
                  Compare packages
                </Link>
              </div>

              <div className="page-trust">
                <span>
                  <Check size={12} /> Social, search & paid media
                </span>
                <span>
                  <Check size={12} /> Content included
                </span>
                <span>
                  <Check size={12} /> Monthly reporting
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
                <Megaphone size={11} /> Content & campaigns
              </span>
              <span className="page-chip b">
                <Search size={11} /> Local visibility
              </span>
              <span className="page-chip c">Plan → publish → measure</span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="page-section paper" id="approach">
        <div className="container">
          <SectionHead
            eyebrow="The approach"
            title={
              <>
                A plan, not a
                <br />
                pile of posts.
              </>
            }
            copy="Digital marketing works when the message, the content and the campaign are pointed at the same goal. We build that structure first, then keep it running consistently."
          />

          <div className="value-grid">
            {values.map((value) => (
              <Reveal key={value.no}>
                <div className="value">
                  <b>{value.no} — Principle</b>
                  <h3>{value.title}</h3>
                  <p>{value.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div
              className="package-note"
              style={{ marginTop: 48, justifySelf: "start", maxWidth: 560 }}
            >
              <ShieldCheck size={18} />
              <span>
                <b>Honest by design</b>
                <small>
                  No guaranteed first-page rankings, fixed lead counts or revenue
                  promises. We work on sound optimisation, relevant content and
                  transparent measurement.
                </small>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section capabilities" id="capabilities">
        <div className="container">
          <SectionHead
            eyebrow="What we actually do"
            title={
              <>
                Six capabilities.
                <br />
                One marketing system.
              </>
            }
            copy="Use one, or connect the whole set. The right mix depends on where your customers already are and what your business needs next."
          />

          <div className="capability-grid">
            {marketingCapabilities.map((capability) => (
              <div className="capability" key={capability.no}>
                <span className="capability-no">
                  {capability.no}
                  <ArrowUpRight size={14} />
                </span>
                <h3>{capability.title}</h3>
                <p>{capability.copy}</p>
                <div className="capability-items">
                  {capability.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section deliverables" id="deliverables">
        <div className="container">
          <div className="deliverable-box">
            <div className="deliverable-left">
              <div>
                <span className="eyebrow">What you receive</span>
                <h3>
                  Deliverables you
                  <br />
                  can hold us to.
                </h3>
                <p>
                  The work is agreed up front and reviewed every month. No
                  vague retainers, no disappearing between invoices.
                </p>
              </div>
              <a
                className="btn btn-primary"
                href={wa(
                  "Hi boostech, I'd like the digital marketing deliverables for my business."
                )}
                target="_blank"
                rel="noreferrer"
              >
                Request a scope
                <ArrowUpRight size={15} />
              </a>
            </div>

            <ul className="deliverable-list">
              {marketingDeliverables.map((item) => (
                <li key={item}>
                  <Check size={16} />
                  <span>{item}</span>
                </li>
              ))}
              <li>
                <Check size={16} />
                <span>
                  A direct line for questions — email, phone or WhatsApp.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Process />

      <Packages />

      <section className="page-section reasons" id="why-boostech">
        <div className="container">
          <SectionHead
            eyebrow="Why Boostech"
            title={
              <>
                Local context.
                <br />
                Professional execution.
              </>
            }
            copy="We are a small, focused studio. That means the people planning the work are the people doing it."
          />

          <div className="reason-grid">
            {marketingReasons.map((reason, index) => {
              const icons = [Layers, Compass, Target];
              const Icon = icons[index] || Target;
              return (
                <Reveal key={reason.title}>
                  <div className="reason">
                    <Icon size={22} strokeWidth={1.5} />
                    <h3>{reason.title}</h3>
                    <p>{reason.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.12}>
            <div className="stack-foot" style={{ marginTop: 40 }}>
              <BarChart3 size={14} />
              <span>Social media</span>
              <span>·</span>
              <span>SEO & local search</span>
              <span>·</span>
              <span>Paid campaigns</span>
              <span>·</span>
              <span>Content & creative</span>
              <span>·</span>
              <span>Monthly review</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Faq
        items={marketingFaqs}
        eyebrow="Marketing questions"
        copy="Straight answers about scope, budgets and what marketing can realistically do."
      />

      <ContactCTA
        eyebrow="Plan your next campaign"
        copy="Tell us what the business does, where customers come from today and what you want to improve. We will suggest the most useful next step — even if it is not the biggest package."
        message="Hi boostech, I'd like to talk about digital marketing for my business."
      />
    </>
  );
}
