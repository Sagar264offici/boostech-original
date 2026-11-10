import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Megaphone,
  PenTool,
  Search,
  Share2,
  Target,
} from "lucide-react";
import { wa } from "../../data/site";

const points = [
  { icon: Share2, label: "Social media management" },
  { icon: Search, label: "SEO & local visibility" },
  { icon: Target, label: "Google & Meta campaigns" },
  { icon: PenTool, label: "Content & creative production" },
  { icon: BarChart3, label: "Monthly reporting" },
  { icon: Megaphone, label: "One joined-up strategy" },
];

export default function MarketingFeature() {
  const reduce = useReducedMotion();

  return (
    <section className="marketing-band" id="marketing">
      <div className="container marketing-inner">
        <div>
          <span className="eyebrow">Digital marketing</span>
          <h2 className="marketing-title">
            Marketing that earns
            <br />
            attention — and <em>action.</em>
          </h2>
          <p className="marketing-copy">
            A clear plan across content, social, search and paid media, with
            honest measurement. Built for businesses that want to stay visible
            without publishing randomly and hoping.
          </p>

          <div className="marketing-points">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.label}>
                  <Icon size={15} strokeWidth={1.8} />
                  {point.label}
                </div>
              );
            })}
          </div>

          <div className="marketing-actions">
            <Link className="btn btn-lime" to="/services/digital-marketing/">
              Explore digital marketing
              <ArrowUpRight size={16} />
            </Link>
            <a
              className="btn btn-ghost-light"
              href={wa("Hi boostech, I'd like to talk about digital marketing.")}
              target="_blank"
              rel="noreferrer"
            >
              Talk to us
            </a>
          </div>
        </div>

        <div className="marketing-art" aria-hidden="true">
          <motion.div
            className="mg-ring alt"
            animate={reduce ? {} : { rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <div className="mg-ring" />
          <motion.div
            className="mg-disc"
            animate={reduce ? {} : { y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="mg-chip one">
            <Check size={11} /> Content calendar
          </div>
          <div className="mg-chip two">
            <Search size={11} /> Local search
          </div>
          <div className="mg-chip three">
            <BarChart3 size={11} /> Clear reporting
          </div>
        </div>
      </div>
    </section>
  );
}
