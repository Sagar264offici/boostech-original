import React from "react";
import { ArrowUpRight, Award, MapPin, Sparkles } from "lucide-react";
import { founder, wa } from "../../data/site";
import { Reveal } from "../ui";
import { BlurText, StarBorder, TiltCard } from "../effects";

export default function Founder() {
  return (
    <section className="section founder" id="subodh">
      <div className="founder-glow" aria-hidden="true" />

      <div className="container founder-layout">
        <Reveal className="founder-media">
          <TiltCard className="founder-tilt">
            <figure className="founder-frame">
              <div className="founder-photo">
                <img
                  src={founder.image}
                  alt={founder.imageAlt}
                  width="825"
                  height="1100"
                  loading="lazy"
                />
                <span className="founder-badge">
                  <Award size={13} /> Guiding force
                </span>
              </div>
              <figcaption>
                <MapPin size={12} />
                {founder.caption}
              </figcaption>
            </figure>
          </TiltCard>

          <div className="founder-note">
            <Sparkles size={15} />
            <span>{founder.note}</span>
          </div>
        </Reveal>

        <div className="founder-copy">
          <span className="eyebrow">{founder.eyebrow}</span>
          <h2 className="founder-title">
            <BlurText text={founder.headline} />
          </h2>

          <div className="founder-bio">
            {founder.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <dl className="founder-work">
            {founder.work.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="founder-actions">
            <StarBorder
              className="btn btn-primary"
              href={wa(
                "Hi boostech, I read about Subodh Ji on your website and would like to discuss a project."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Talk to the studio
              <ArrowUpRight size={16} />
            </StarBorder>
            <a className="btn btn-outline" href="#work">
              See the work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
