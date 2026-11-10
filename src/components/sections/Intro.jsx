import React from "react";
import { Reveal } from "../ui";
import { BlurText, CountUp } from "../effects";

const facts = [
  { value: 11, suffix: "", label: "Live websites built" },
  { value: 6, suffix: "", label: "Service areas" },
  { value: 1, suffix: "", label: "Connected team" },
];

export default function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="container intro-grid">
        <div className="intro-left">
          <Reveal>
            <span className="eyebrow">The studio</span>
            <div className="intro-note">
              <b>No rate cards. No guarantee theatre.</b>
              <span>
                Every scope is agreed after we understand the business — not
                before.
              </span>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="intro-statement">
              <BlurText text="Websites, search and marketing usually get treated as separate projects." />{" "}
              <span className="dim">
                <BlurText text="We bring them together, because a customer experiences one brand — not four channels." />
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="intro-copy">
              <p>
                Boostech is a digital growth studio based in Rishikesh. We work
                with restaurants, institutes, gyms, stays and service businesses
                across Uttarakhand.
              </p>
              <p>
                From the first page to the campaign running next month, the work
                is planned around one thing: making it easier for the right
                customer to find you, understand you and enquire.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="fact-row">
              {facts.map((fact) => (
                <div className="fact" key={fact.label}>
                  <b>
                    <CountUp to={fact.value} suffix={fact.suffix} />
                  </b>
                  <span>{fact.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
