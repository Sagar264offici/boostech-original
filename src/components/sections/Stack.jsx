import React from "react";
import { Code2 } from "lucide-react";
import { skills } from "../../data/site";
import { Reveal } from "../ui";

export default function Stack() {
  return (
    <section className="stack" id="skills">
      <div className="container stack-layout">
        <Reveal>
          <span className="eyebrow">The development toolkit</span>
          <h2 className="stack-title">
            Good ideas need
            <br />
            solid execution.
          </h2>
          <p className="stack-copy">
            From interface structure to responsive behaviour and launch basics,
            the work is grounded in a practical modern web stack — not a
            page-builder template.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="stack-flow">
            {skills.map((skill) => (
              <span className="stack-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
          <div className="stack-foot">
            <Code2 size={15} />
            Clean structure
            <span>•</span>
            Responsive first
            <span>•</span>
            Performance aware
            <span>•</span>
            SEO foundations
          </div>
        </Reveal>
      </div>
    </section>
  );
}
