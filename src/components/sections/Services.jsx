import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Instagram,
  Monitor,
  Palette,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";
import { services } from "../../data/site";
import { SectionHead } from "../ui";

const icons = {
  monitor: Monitor,
  search: Search,
  trending: TrendingUp,
  target: Target,
  camera: Instagram,
  palette: Palette,
};

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHead
          eyebrow="What we do"
          title={
            <>
              One studio for your
              <br />
              entire digital presence.
            </>
          }
          copy="Six capabilities, planned together. Start with the website, the profile or the campaigns — or connect the whole picture under one team."
        />

        <div className="service-list">
          {services.map((service) => {
            const Icon = icons[service.icon] || Monitor;
            return (
              <Link className="service-row" to={service.path} key={service.no}>
                <span className="service-index">{service.no}</span>

                <div className="service-main">
                  <h3 className="service-title">
                    <Icon size={20} strokeWidth={1.6} />
                    {service.title}
                    {service.featured && (
                      <span className="service-tag-featured">Core focus</span>
                    )}
                  </h3>
                  <p className="service-copy">{service.copy}</p>
                </div>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <span className="service-arrow" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
