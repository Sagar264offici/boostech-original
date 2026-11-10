import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Sparkles } from "lucide-react";
import { CONTACT, wa } from "../../data/site";
import { StarBorder } from "../effects";

export default function ContactCTA({
  title,
  copy,
  eyebrow = "Let's discuss your business",
  message = "Hi boostech, I want a package recommendation for my business.",
}) {
  const reduce = useReducedMotion();

  return (
    <section className="cta" id="contact">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="cta-title">
            Let&apos;s make your
            <br />
            next move <em>count.</em>
          </h2>
          <p className="cta-copy">
            {copy ||
              "Tell us what you do, where you want to grow and what support you need. We will help you choose a sensible package — or tell you what to fix first."}
          </p>

          <div className="cta-actions">
            <StarBorder
              light
              className="btn btn-lime"
              href={wa(message)}
              target="_blank"
              rel="noreferrer"
            >
              Discuss on WhatsApp
              <ArrowUpRight size={16} />
            </StarBorder>
            <a className="btn btn-ghost-light" href={`mailto:${CONTACT.email}`}>
              <Mail size={16} />
              Email the studio
            </a>
          </div>

          <div className="cta-direct">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={`tel:${CONTACT.phoneHref}`}>
              <Phone size={11} style={{ display: "inline", marginRight: 5 }} />
              {CONTACT.phone}
            </a>
            <span>{CONTACT.locality}</span>
          </div>
        </div>

        <div className="cta-art" aria-hidden="true">
          <motion.div
            className="cta-art-ring alt"
            animate={reduce ? {} : { rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          />
          <div className="cta-art-ring" />
          <motion.div
            className="cta-art-disc"
            animate={reduce ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="cta-art-label">
            <Sparkles size={11} /> Rishikesh, India
          </span>
        </div>
      </div>
    </section>
  );
}
