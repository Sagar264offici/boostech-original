import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import { CONTACT, wa } from "../data/site";
import Faq from "../components/sections/Faq";
import { faqs } from "../data/site";
import { Reveal } from "../components/ui";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="page-hero-bg" aria-hidden="true" />

        <div className="container">
          <div className="page-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={11} />
            <span>Contact</span>
          </div>

          <div className="contact-grid">
            <div>
              <span className="eyebrow">Let&apos;s talk</span>
              <h1 className="page-title" style={{ marginTop: 22 }}>
                Tell us what
                <br />
                you want to <em>build.</em>
              </h1>
              <p className="page-lead">
                Share your business, current challenge and timeline. We will
                recommend a suitable service or package after understanding the
                scope — not before.
              </p>

              <div className="page-actions">
                <a
                  className="btn btn-primary"
                  href={wa("Hi boostech, I want to discuss a project.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Message on WhatsApp
                  <ArrowUpRight size={16} />
                </a>
                <a className="btn btn-outline" href={`mailto:${CONTACT.email}`}>
                  <Mail size={16} />
                  Send an email
                </a>
              </div>

              <div className="contact-side" style={{ marginTop: 40 }}>
                <Reveal>
                  <div className="contact-side-block">
                    <span className="eyebrow">What happens next</span>
                    <h3>Simple, no pressure.</h3>
                    <div className="contact-steps">
                      <div>
                        <span>01</span>
                        <p>
                          You share the business, the goal and the current
                          online presence.
                        </p>
                      </div>
                      <div>
                        <span>02</span>
                        <p>
                          We reply with an honest view of what is worth doing
                          first.
                        </p>
                      </div>
                      <div>
                        <span>03</span>
                        <p>
                          If it fits, we confirm the scope, timeline and next
                          steps.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="contact-card">
                <span className="eyebrow">Direct contact</span>
                <b>Talk to the studio.</b>

                <a
                  className="contact-row"
                  href={wa("Hi boostech, I want to discuss a project.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <MessageCircle size={17} />
                  </i>
                  <span>
                    <b>WhatsApp</b>
                    <small>Usually the fastest way to reach us</small>
                  </span>
                  <ArrowUpRight size={15} style={{ marginLeft: "auto" }} />
                </a>

                <a className="contact-row" href={`mailto:${CONTACT.email}`}>
                  <i>
                    <Mail size={17} />
                  </i>
                  <span>
                    <b>{CONTACT.email}</b>
                    <small>For briefs, documents and introductions</small>
                  </span>
                  <ArrowUpRight size={15} style={{ marginLeft: "auto" }} />
                </a>

                <a className="contact-row" href={`tel:${CONTACT.phoneHref}`}>
                  <i>
                    <Phone size={17} />
                  </i>
                  <span>
                    <b>{CONTACT.phone}</b>
                    <small>Call during business hours</small>
                  </span>
                  <ArrowUpRight size={15} style={{ marginLeft: "auto" }} />
                </a>

                <div className="contact-row">
                  <i>
                    <MapPin size={17} />
                  </i>
                  <span>
                    <b>{CONTACT.address}</b>
                    <small>Rishikesh, Uttarakhand, India</small>
                  </span>
                </div>

                <a
                  className="contact-row"
                  href={CONTACT.reviewUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <Star size={17} />
                  </i>
                  <span>
                    <b>Google review page</b>
                    <small>Worked with us? Share an honest review</small>
                  </span>
                  <ArrowUpRight size={15} style={{ marginLeft: "auto" }} />
                </a>

                <div className="contact-actions">
                  <span className="page-trust" style={{ marginTop: 0 }}>
                    <span>
                      <Check size={12} /> Based in Rishikesh
                    </span>
                    <span>
                      <Check size={12} /> Working across Uttarakhand
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Faq
        items={faqs}
        eyebrow="Before you write"
        copy="The answers most businesses ask for before starting a conversation."
      />

      <section className="page-section paper">
        <div className="container" style={{ textAlign: "center", maxWidth: 760 }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Prefer to look around first?
          </span>
          <h2 className="section-title" style={{ margin: "18px 0 22px" }}>
            See the work, then decide.
          </h2>
          <div
            className="page-actions"
            style={{ justifyContent: "center", marginTop: 12 }}
          >
            <Link className="btn btn-primary" to="/#work">
              Explore live projects
              <ArrowUpRight size={16} />
            </Link>
            <Link className="btn btn-outline" to="/services/digital-marketing/">
              Digital marketing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
