import React from "react";
import { Reveal } from "../ui";
import { BlurText, CountUp } from "../effects";

/* Hand-drawn-in-code lightbulb of overlapping channel icons, drawn in the
   site palette so it reads as part of the design system, not stock art. */
function StudioGraphic() {
  return (
    <div
      className="studio-graphic"
      role="img"
      aria-label="A lightbulb made of overlapping website, SEO, social and advertising icons"
    >
      <svg viewBox="0 0 360 400" aria-hidden="true" focusable="false">
        <defs>
          <radialGradient id="sgGlow" cx="50%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#c9f24d" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#c9f24d" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#c9f24d" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sgGlass" x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0%" stopColor="#fffefb" />
            <stop offset="100%" stopColor="#eeece3" />
          </linearGradient>
        </defs>

        <circle className="sg-glow" cx="180" cy="186" r="170" fill="url(#sgGlow)" />

        <circle
          cx="180"
          cy="186"
          r="146"
          fill="none"
          stroke="#c8c4b4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="2 11"
        />
        <circle className="sg-dot" cx="326" cy="186" r="4.5" fill="#c9f24d" />
        <circle className="sg-dot sg-dot--b" cx="107" cy="313" r="3.5" fill="#4c6a00" />
        <circle className="sg-dot sg-dot--c" cx="107" cy="59" r="3" fill="#c9f24d" />

        {/* bulb glass */}
        <path
          d="M180 74 C 237 74 283 120 283 176 C 283 214 259 238 241 255 L 241 270 L 119 270 L 119 255 C 101 238 77 214 77 176 C 77 120 123 74 180 74 Z"
          fill="url(#sgGlass)"
          stroke="#0c0e0b"
          strokeWidth="2.2"
        />

        {/* soft channel bubbles behind the icons */}
        <g opacity="0.5">
          <circle cx="152" cy="188" r="62" fill="#c9f24d" opacity="0.28" />
          <circle cx="216" cy="212" r="46" fill="#4c6a00" opacity="0.1" />
          <circle cx="204" cy="124" r="52" fill="#c9f24d" opacity="0.22" />
        </g>

        {/* connective tissue */}
        <g stroke="#0c0e0b" strokeWidth="1.4" opacity="0.2">
          <path d="M140 140 L 214 130" />
          <path d="M214 130 L 236 196" />
          <path d="M236 196 L 206 240" />
          <path d="M206 240 L 168 206" />
          <path d="M168 206 L 140 140" />
          <path d="M140 140 L 118 198" />
          <path d="M118 198 L 168 206" />
        </g>

        {/* analytics */}
        <g className="sg-node" style={{ animationDelay: "0s" }}>
          <circle cx="140" cy="140" r="46" fill="#c9f24d" />
          <path
            d="M120 158 v-17 M140 158 v-32 M160 158 v-10"
            stroke="#0c0e0b"
            strokeWidth="4.4"
            strokeLinecap="round"
          />
        </g>

        {/* email */}
        <g className="sg-node" style={{ animationDelay: "0.7s" }}>
          <circle cx="214" cy="130" r="40" fill="#edf9cf" />
          <path
            d="M196 117 h36 v26 h-36 z"
            fill="none"
            stroke="#0c0e0b"
            strokeWidth="2.4"
          />
          <path
            d="M196 118 l18 15 18-15"
            fill="none"
            stroke="#0c0e0b"
            strokeWidth="2.4"
          />
        </g>

        {/* settings / automation */}
        <g className="sg-node" style={{ animationDelay: "1.4s" }}>
          <circle cx="236" cy="196" r="34" fill="#fffefb" stroke="#dcd9cc" />
          <g stroke="#0c0e0b" strokeWidth="2.6" strokeLinecap="round">
            <path d="M236 182 v-8" />
            <path d="M236 210 v8" />
            <path d="M222 196 h-8" />
            <path d="M250 196 h8" />
            <path d="M226 186 l-6-6" />
            <path d="M246 206 l6 6" />
            <path d="M246 186 l6-6" />
            <path d="M226 206 l-6 6" />
          </g>
          <circle cx="236" cy="196" r="8" fill="none" stroke="#0c0e0b" strokeWidth="2.6" />
        </g>

        {/* global reach */}
        <g className="sg-node" style={{ animationDelay: "2.1s" }}>
          <circle cx="168" cy="206" r="38" fill="#edf9cf" />
          <circle cx="168" cy="206" r="16" fill="none" stroke="#0c0e0b" strokeWidth="2.2" />
          <ellipse cx="168" cy="206" rx="7.5" ry="16" fill="none" stroke="#0c0e0b" strokeWidth="2" />
          <path d="M152 206 h32" stroke="#0c0e0b" strokeWidth="2" />
        </g>

        {/* search */}
        <g className="sg-node" style={{ animationDelay: "1s" }}>
          <circle cx="206" cy="240" r="26" fill="#dcff6d" />
          <circle cx="202" cy="235" r="8.5" fill="none" stroke="#0c0e0b" strokeWidth="2.4" />
          <path d="M209 243 l7 7" stroke="#0c0e0b" strokeWidth="2.6" strokeLinecap="round" />
        </g>

        {/* idea */}
        <g className="sg-node" style={{ animationDelay: "2.7s" }}>
          <circle cx="118" cy="198" r="30" fill="#fffefb" stroke="#dcd9cc" />
          <circle cx="118" cy="192" r="8" fill="none" stroke="#0c0e0b" strokeWidth="2.2" />
          <path
            d="M114 203 h8 M116 209 h4"
            stroke="#0c0e0b"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </g>

        {/* screw base */}
        <g fill="#0c0e0b">
          <rect x="136" y="274" width="88" height="13" rx="6.5" />
          <rect x="142" y="291" width="76" height="12" rx="6" />
          <rect x="148" y="307" width="64" height="11" rx="5.5" />
        </g>
        <g stroke="#0c0e0b" strokeWidth="4" strokeLinecap="round" opacity="0.85">
          <path d="M158 330 h44" />
          <path d="M163 338 h34" />
          <path d="M168 346 h24" />
        </g>

        <ellipse cx="180" cy="366" rx="62" ry="7" fill="#0c0e0b" opacity="0.07" />
      </svg>
    </div>
  );
}

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

          <Reveal delay={0.16}>
            <StudioGraphic />
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
