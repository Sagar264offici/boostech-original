import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Monitor,
  Star,
  X,
} from "lucide-react";
import { CONTACT, projects } from "../../data/site";
import { SectionHead } from "../ui";

const tones = ["lime", "sand", "mint", "sky", "clay", "stone"];

function hostnameOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function LiveThumb({ project }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="project-stage" aria-hidden="true" ref={ref}>
      <div className="project-shot">
        {visible && (
          <iframe
            title={`${project.name} landing page`}
            src={project.url}
            loading="lazy"
            tabIndex={-1}
            scrolling="no"
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        )}
      </div>
      <span className="project-live">
        <i /> Live landing page
      </span>
    </div>
  );
}

function PreviewModal({ project, onClose }) {
  const [status, setStatus] = useState("loading");
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-label={`Live preview of ${project.name}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        className="modal-panel"
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 16 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="modal-bar">
          <span className="modal-title">
            {project.name} <span>Live preview</span>
          </span>
          <div className="modal-actions">
            <a
              className="modal-open"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>Open site</span>
              <ArrowUpRight size={14} />
            </a>
            <button
              type="button"
              className="modal-close"
              onClick={onClose}
              aria-label="Close preview"
              ref={closeRef}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="modal-frame">
          {status === "loading" && (
            <div className="modal-loading">
              <div className="modal-spinner" />
              <span>Loading {hostnameOf(project.url)}</span>
              <span style={{ maxWidth: 320 }}>
                If the site does not appear, it may block embedding. Use “Open
                site” above.
              </span>
            </div>
          )}
          <iframe
            title={`${project.name} live preview`}
            src={project.url}
            onLoad={() => setStatus("ready")}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function Work() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [preview, setPreview] = useState(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((item) => item.category)))],
    []
  );

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((item) => item.category === filter),
    [filter]
  );

  const visible = showAll ? filtered : filtered.slice(0, 6);

  const chooseFilter = (category) => {
    setFilter(category);
    setShowAll(false);
  };

  const trackGlare = (event) => {
    const node = event.currentTarget;
    const rect = node.getBoundingClientRect();
    node.style.setProperty(
      "--gx",
      `${(((event.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`
    );
    node.style.setProperty(
      "--gy",
      `${(((event.clientY - rect.top) / rect.height) * 100).toFixed(1)}%`
    );
  };

  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="work-head">
          <SectionHead
            eyebrow="Selected web projects"
            title={
              <>
                Different businesses.
                <br />
                Different digital experiences.
              </>
            }
            copy="Real websites built for hospitality, education, fitness, creative services and business — each one shaped around the customer it needs to serve."
          />
          <a
            className="work-review"
            href={CONTACT.reviewUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="g" aria-hidden="true">
              G
            </span>
            <span>
              <b>Review boostech</b>
              <small>Open the Google review page</small>
            </span>
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="filters" role="group" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter${filter === category ? " active" : ""}`}
              aria-pressed={filter === category}
              onClick={() => chooseFilter(category)}
            >
              {category}
              {category === "All" && <i>{projects.length}</i>}
            </button>
          ))}
        </div>

        <motion.div layout className="projects">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => {
              const index = projects.indexOf(project);
              return (
                <motion.article
                  layout
                  key={project.name}
                  className="project"
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05, margin: "0px 0px -30px 0px" }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className="project-visual"
                    data-tone={tones[index % tones.length]}
                    onPointerMove={trackGlare}
                  >
                    <div className="project-browser" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                      <span className="project-url">{hostnameOf(project.url)}</span>
                    </div>

                    <LiveThumb project={project} />
                    <span className="project-glare" aria-hidden="true" />

                    <div className="project-hover">
                      <button
                        type="button"
                        className="project-preview-btn"
                        onClick={() => setPreview(project)}
                      >
                        <Monitor size={12} />
                        Open live preview
                      </button>
                      <a
                        className="project-visit-btn"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${project.name} live site`}
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="project-info">
                    <div>
                      <span className="project-cat">
                        {String(index + 1).padStart(2, "0")} · {project.category}
                      </span>
                      <h3 className="project-title">{project.name}</h3>
                      <p className="project-type">{project.type}</p>
                    </div>
                    <a
                      className="project-arrow"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name}`}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="work-foot">
          <span>
            {visible.length} / {filtered.length} projects shown
          </span>
          {!showAll && filtered.length > 6 ? (
            <button
              type="button"
              className="link-arrow"
              onClick={() => setShowAll(true)}
            >
              View all {filtered.length} projects
              <ArrowUpRight size={14} />
            </button>
          ) : (
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              <Star size={12} /> Every link opens the real live website
            </span>
          )}
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <PreviewModal project={preview} onClose={() => setPreview(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
