import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, Menu, MessageCircle, X } from "lucide-react";
import { CONTACT, wa } from "../data/site";
import { Brand, HashLink } from "./ui";
import { StarBorder } from "./effects";

const navItems = [
  { label: "Services", to: "/#services" },
  { label: "Work", to: "/#work" },
  { label: "Process", to: "/#process" },
  { label: "Packages", to: "/#packages" },
  { label: "Digital Marketing", to: "/services/digital-marketing/" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (to) =>
    to.startsWith("/services") && pathname.startsWith("/services");

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <Brand onClick={() => setOpen(false)} />

          <nav className="nav-desktop" aria-label="Primary navigation">
            {navItems.map((item) =>
              item.to.includes("#") ? (
                <HashLink
                  key={item.label}
                  to={item.to}
                  className="nav-link"
                >
                  {item.label}
                </HashLink>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`nav-link${isActive(item.to) ? " active" : ""}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="header-actions">
            <StarBorder
              className="btn btn-primary header-cta"
              href={wa("Hi boostech, I'd like to start a project.")}
              target="_blank"
              rel="noreferrer"
            >
              Start a project
              <ArrowUpRight size={15} />
            </StarBorder>
            <button
              type="button"
              className="menu-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="nav-panel-head">
              <Brand light onClick={() => setOpen(false)} />
              <button
                type="button"
                className="nav-panel-close"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <nav className="nav-panel-links" aria-label="Mobile navigation">
              <HashLink className="nav-panel-link" to="/#services" onClick={() => setOpen(false)}>
                Services <span>01</span>
              </HashLink>
              <HashLink className="nav-panel-link" to="/#work" onClick={() => setOpen(false)}>
                Work <span>02</span>
              </HashLink>
              <HashLink className="nav-panel-link" to="/#process" onClick={() => setOpen(false)}>
                Process <span>03</span>
              </HashLink>
              <HashLink className="nav-panel-link" to="/#packages" onClick={() => setOpen(false)}>
                Packages <span>04</span>
              </HashLink>
              <Link
                className="nav-panel-link lime"
                to="/services/digital-marketing/"
                onClick={() => setOpen(false)}
              >
                Digital Marketing <span>05</span>
              </Link>
              <Link
                className="nav-panel-link"
                to="/contact/"
                onClick={() => setOpen(false)}
              >
                Contact <span>06</span>
              </Link>
            </nav>

            <div className="nav-panel-foot">
              <a
                className="btn btn-lime"
                href={wa("Hi boostech, I'd like to start a project.")}
                target="_blank"
                rel="noreferrer"
              >
                Start a project
                <ArrowUpRight size={16} />
              </a>
              <a
                className="btn btn-ghost-light"
                href={`mailto:${CONTACT.email}`}
              >
                <Mail size={16} />
                Email the studio
              </a>
              <div className="nav-panel-meta">
                <span>{CONTACT.locality}</span>
                <span>{CONTACT.phone}</span>
                <span>
                  <MessageCircle size={11} style={{ display: "inline", marginRight: 4 }} />
                  WhatsApp available
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
