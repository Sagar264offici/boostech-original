import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Globe2,
  Layers,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { packages, wa } from "../../data/site";
import { SectionHead } from "../ui";
import { useSpotlight } from "../effects";

const marks = {
  basic: Layers,
  growth: TrendingUp,
  premium: Zap,
  maha: Globe2,
};

export default function Packages() {
  const reduce = useReducedMotion();
  const spotlight = useSpotlight();

  return (
    <section className="section packages" id="packages">
      <div className="container">
        <div className="packages-head">
          <SectionHead
            eyebrow="Service packages"
            title={
              <>
                Choose the support
                <br />
                your business needs.
              </>
            }
            copy="Clear deliverables, no mystery line items. First we understand your business, then we confirm the right scope together."
          />
          <div className="package-note">
            <ShieldCheck size={18} />
            <span>
              <b>No rates published.</b>
              <small>
                Every proposal is scoped after a conversation about your
                business, goals and current presence.
              </small>
            </span>
          </div>
        </div>

        <div className="package-grid">
          {packages.map((pack, index) => {
            const Mark = marks[pack.id] || Layers;
            return (
              <motion.article
                key={pack.id}
                className={`package${pack.featured ? " featured" : ""}`}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.06, margin: "0px 0px -30px 0px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                onPointerMove={spotlight.onPointerMove}
              >
                {pack.featured && (
                  <span className="package-ribbon">
                    <Sparkles size={11} /> Complete digital presence
                  </span>
                )}
                <div className="package-top">
                  <span className="package-no">{pack.no} / Package</span>
                  <Mark size={19} strokeWidth={1.5} />
                </div>
                <h3 className="package-name">{pack.name}</h3>
                <span className="package-label">{pack.label}</span>
                <p className="package-intro">{pack.intro}</p>

                <div className="package-counts">
                  <div>
                    <span>Post design</span>
                    <b>{pack.posts}</b>
                  </div>
                  <div>
                    <span>Reels</span>
                    <b>{pack.reels}</b>
                  </div>
                </div>

                <ul className="package-list">
                  <li>
                    <Check size={13} />
                    <span>{pack.social}</span>
                  </li>
                  <li>
                    <Check size={13} />
                    <span>{pack.google}</span>
                  </li>
                  {pack.extra.map((item) => (
                    <li key={item}>
                      <Check size={13} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="package-best">
                  <b>Best for</b>
                  <span>{pack.suitable}</span>
                </div>

                <a
                  className="package-cta"
                  href={wa(
                    `Hi boostech, I want to discuss the ${pack.name}. Please help me understand the scope for my business.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {pack.featured ? "Discuss Maha Package" : "Discuss this package"}
                  <ArrowUpRight size={15} />
                </a>
              </motion.article>
            );
          })}
        </div>

        <div className="package-footnotes">
          <div>
            <b>Important scope notes</b>
            <ul>
              <li>
                Google / Meta advertising budget is separate from campaign
                management.
              </li>
              <li>
                Domain, website hosting, on-location photography / video shoots
                and travel are scoped separately where required.
              </li>
              <li>
                Exact website pages, campaign scope and shoot requirements are
                confirmed after understanding your business.
              </li>
            </ul>
          </div>
          <a
            className="link-arrow"
            href={wa("Hi boostech, I would like a package recommendation for my business.")}
            target="_blank"
            rel="noreferrer"
          >
            Not sure which package fits? Talk to us
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
