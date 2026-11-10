import React from "react";
import { processSteps } from "../../data/site";
import { Reveal } from "../ui";

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container process-layout">
        <div className="process-intro">
          <Reveal>
            <span className="eyebrow">How we work</span>
            <h2 className="section-title">
              First understand
              <br />
              the business.
              <br />
              Then build.
            </h2>
            <p className="section-copy" style={{ marginTop: 24, justifySelf: "start" }}>
              We do not begin by pushing a rate card. We start with your business,
              your customers and where the gap actually is.
            </p>
          </Reveal>
        </div>

        <div className="process-steps">
          {processSteps.map((step) => (
            <Reveal key={step.no}>
              <div className="step">
                <span className="step-no">{step.no}</span>
                <div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-copy">{step.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
