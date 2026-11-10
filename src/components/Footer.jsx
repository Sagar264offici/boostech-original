import React from "react";
import { ArrowUp, Mail, MapPin, Phone, Star } from "lucide-react";
import { CONTACT, services } from "../data/site";
import { Brand, HashLink } from "./ui";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              Digital marketing and web development for businesses ready to be
              seen, understood and chosen.
            </p>
            <a
              className="link-arrow"
              href={CONTACT.reviewUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Star size={13} />
              Google review page
            </a>
          </div>

          <div className="footer-col">
            <b>Explore</b>
            <HashLink to="/#services">Services</HashLink>
            <HashLink to="/#work">Work</HashLink>
            <HashLink to="/#process">Process</HashLink>
            <HashLink to="/#packages">Packages</HashLink>
            <a href="/contact/">Contact</a>
          </div>

          <div className="footer-col">
            <b>Services</b>
            {services.slice(0, 5).map((service) => (
              <a key={service.no} href={service.path}>
                {service.title}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <b>Studio</b>
            <a href={`mailto:${CONTACT.email}`}>
              <Mail size={14} />
              {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phoneHref}`}>
              <Phone size={14} />
              {CONTACT.phone}
            </a>
            <span>
              <MapPin size={14} />
              {CONTACT.address}
            </span>
            <HashLink to="/#contact">Start a project</HashLink>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} boostech. All rights reserved.</span>
          <span>
            Built in Rishikesh <b>✳</b> Ready for the next click
          </span>
          <a className="footer-top-link" href="#top">
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
