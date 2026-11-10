import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const rise = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.075 } },
};

const headStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.02 } },
};

const headItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={rise}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -40px 0px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ eyebrow, title, copy, actions }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="section-head"
      variants={headStagger}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
    >
      <motion.div variants={headItem}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
        {actions}
      </motion.div>
      {copy && (
        <motion.p className="section-copy" variants={headItem}>
          {copy}
        </motion.p>
      )}
    </motion.div>
  );
}

export function Brand({ light = false, onClick }) {
  return (
    <Link to="/" className="brand" onClick={onClick} aria-label="Boostech home">
      <span className="brand-logo-wrap" aria-hidden="true">
        <img
          className="brand-logo"
          src="/logo.png"
          alt=""
          width="42"
          height="42"
          loading="eager"
        />
      </span>
      <span className="brand-word" style={light ? { color: "#fffefb" } : undefined}>
        boostech<em>.</em>
      </span>
    </Link>
  );
}

export function HashLink({ to, children, className = "", onClick, ...rest }) {
  const { pathname } = useLocation();
  const [path, hash] = to.split("#");

  const handleClick = (event) => {
    if (onClick) onClick(event);
    if (pathname === "/" && hash) {
      event.preventDefault();
      const node = document.getElementById(hash);
      if (node) {
        node.scrollIntoView({ behavior: "smooth", block: "start" });
        // keep the address clean so a reload never re-anchors to this section
        window.history.replaceState(null, "", pathname);
      }
    }
  };

  return (
    <Link to={to} className={className} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}

export function ArrowLink({ href, children, className = "link-arrow" }) {
  return (
    <a className={className} href={href}>
      {children}
      <ArrowUpRight size={15} />
    </a>
  );
}
