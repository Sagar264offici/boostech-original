import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Mail, MapPin, Phone, Star } from "lucide-react";
import { CONTACT, services } from "../data/site";
import { Brand, HashLink } from "./ui";

export default function Footer() {
  const reduce = useReducedMotion();

  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15, margin: "0px 0px -30px 0px" },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <motion.div className="footer-brand" {...rise(0)}>
            <Brand />
            <p>
              Digital marketing and web development for businesses ready to be
              seen, understood and chosen.
            </p>
            <a
              className="link-arrow"
              href={CONTACT.reviewUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Star size={13} />
              Google review page
            </a>
          </motion.div>

          <motion.div className="footer-col" {...rise(0.06)}>
            <b>Explore</b>
            <HashLink to="/#services">Services</HashLink>
            <HashLink to="/#work">Work</HashLink>
            <HashLink to="/#process">Process</HashLink>
            <HashLink to="/#packages">Packages</HashLink>
            <a href="/contact/">Contact</a>
          </motion.div>

          <motion.div className="footer-col" {...rise(0.12)}>
            <b>Services</b>
            {services.slice(0, 5).map((service, index) => (
              <motion.a
                key={service.no}
                href={service.path}
                initial={reduce ? false : { opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                {service.title}
              </motion.a>
            ))}
          </motion.div>

          <motion.div className="footer-col" {...rise(0.18)}>
            <b>Studio</b>
            <a href={`mailto:${CONTACT.email}`}>
              <Mail size={14} />
              {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phoneHref}`}>
              <Phone size={14} />
              {CONTACT.phone}
            </a>
            <span>
              <MapPin size={14} />
              {CONTACT.address}
            </span>
            <HashLink to="/#contact">Start a project</HashLink>
          </motion.div>
        </div>

        <motion.div className="footer-bottom" {...rise(0.24)}>
          <span>© {new Date().getFullYear()} boostech. All rights reserved.</span>
          <span>
            Built in Rishikesh <b>✳</b> Ready for the next click
          </span>
          <a className="footer-top-link" href="#top">
            Back to top <ArrowUp size={12} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
