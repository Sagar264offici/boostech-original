import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../ui";

export default function Faq({ items, eyebrow = "Good questions", copy }) {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="section faq" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="section-title">
              Before we
              <br />
              get to work.
            </h2>
            <p
              className="section-copy"
              style={{ marginTop: 24, justifySelf: "start" }}
            >
              {copy ||
                "A few quick answers about packages, services and what to expect."}
            </p>
          </Reveal>
        </div>

        <div className="faq-list">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                className={`faq-item${isOpen ? " open" : ""}`}
                key={item.q}
              >
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{item.q}</span>
                  <i aria-hidden="true">
                    <ChevronDown size={16} />
                  </i>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-a"
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
