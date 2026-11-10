import React, { Suspense, lazy, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { wa } from "../data/site";
import { HashLink } from "./ui";
import { ShinyText } from "./effects";

const HeroScene = lazy(() => import("./hero/HeroScene"));

const line = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 0.95, delay: 0.12 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const reduce = useReducedMotion();
  const [canRender3D, setCanRender3D] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const check = () => {
      if (!media.matches) return setCanRender3D(false);
      try {
        const canvas = document.createElement("canvas");
        const supported = Boolean(
          canvas.getContext("webgl2") || canvas.getContext("webgl")
        );
        setCanRender3D(supported);
      } catch {
        setCanRender3D(false);
      }
    };
    check();
    media.addEventListener("change", check);
    return () => media.removeEventListener("change", check);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <motion.span
              className="eyebrow hero-eyebrow"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Digital growth studio — Rishikesh, India
            </motion.span>

            <h1 className="hero-title">
              <span className="line">
                <motion.span
                  custom={0}
                  variants={line}
                  initial={reduce ? false : "hidden"}
                  animate="visible"
                >
                  Make your
                </motion.span>
              </span>
              <span className="line">
                <motion.span
                  custom={1}
                  variants={line}
                  initial={reduce ? false : "hidden"}
                  animate="visible"
                >
                  brand{" "}
                  <span className="soft">
                    <ShinyText text="hard" />
                  </span>
                </motion.span>
              </span>
              <span className="line">
                <motion.span
                  custom={2}
                  variants={line}
                  initial={reduce ? false : "hidden"}
                  animate="visible"
                >
                  to <span className="mark">ignore.</span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              className="hero-sub"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Websites, search, social and campaigns built as one connected
              system — so attention turns into real enquiries, not just likes.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62 }}
            >
              <a
                className="btn btn-primary"
                href={wa("Hi boostech, I'd like to start a project.")}
                target="_blank"
                rel="noreferrer"
              >
                Start a project
                <ArrowUpRight size={16} />
              </a>
              <HashLink to="/#work" className="btn btn-outline">
                Explore our work
              </HashLink>
            </motion.div>

            <motion.div
              className="hero-meta"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span>Strategy</span>
              <span>Design</span>
              <span>Development</span>
              <span>Growth</span>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-halo" aria-hidden="true" />
            <div className="hero-orbit-ring" aria-hidden="true" />
            <div className="hero-orbit-ring inner" aria-hidden="true" />

            {canRender3D ? (
              <div className="hero-canvas-wrap">
                <Suspense fallback={null}>
                  <HeroScene reduced={Boolean(reduce)} />
                </Suspense>
              </div>
            ) : (
              <div className="hero-fallback" aria-hidden="true">
                <div className="hero-fallback-art" />
              </div>
            )}

            <span className="hero-chip chip-a">
              <i /> Web · Search · Social
            </span>
            <span className="hero-chip chip-b">
              <Sparkles size={11} /> Built for enquiries
            </span>
            <span className="hero-chip chip-c">
              <i /> One connected studio
            </span>
          </motion.div>
        </div>

        <div className="hero-foot">
          <a className="hero-scroll" href="#intro">
            <i aria-hidden="true">
              <ArrowDown size={14} />
            </i>
            Scroll to explore
          </a>
          <span className="hero-foot-note">
            Websites / SEO / Social / Paid media
            <br />
            Rishikesh · Uttarakhand
          </span>
        </div>
      </div>
    </section>
  );
}
