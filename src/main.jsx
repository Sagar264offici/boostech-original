import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { MessageCircle } from "lucide-react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DigitalMarketing from "./pages/DigitalMarketing";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import { CONTACT, SITE_URL, servicePages, wa } from "./data/site";
import { ClickSpark } from "./components/effects";

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const scrollToTop = () => {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo({ top: 0, left: 0 });
  root.style.scrollBehavior = previous;
};

const normalize = (pathname) =>
  pathname !== "/" && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

const pageMeta = {
  "/": {
    title: "Digital Marketing & Web Development in Rishikesh | Boostech",
    description:
      "Boostech helps businesses in Rishikesh and Uttarakhand with website development, SEO, Google Business Profile, social media management, paid ads and creative services.",
  },
  "/contact": {
    title: "Contact Boostech | Web Development & Digital Marketing",
    description:
      "Talk to Boostech about a website, SEO, social media or digital marketing. Share your business and goals, and we will recommend a sensible next step.",
  },
  "/services/digital-marketing": {
    title: "Digital Marketing Services in Rishikesh | Boostech",
    description:
      "Social media management, SEO, Google Business Profile, paid campaigns and content production for businesses in Rishikesh and Uttarakhand. Clear scope, honest reporting.",
  },
  "/services/seo": {
    title: "SEO & Local Search in Rishikesh | Boostech",
    description:
      "Technical SEO, on-page structure, Google Business Profile optimisation and local search measurement for businesses in Rishikesh and Uttarakhand.",
  },
  "/services/social-media-marketing": {
    title: "Social Media Management in Rishikesh | Boostech",
    description:
      "Facebook and Instagram management, post design, reels, festival creatives and monthly content planning for local businesses.",
  },
  "/services/google-meta-ads": {
    title: "Google & Meta Ads Management | Boostech",
    description:
      "Facebook, Instagram and Google Ads campaign management with local targeting, WhatsApp enquiry campaigns and continuous optimisation.",
  },
  "/services/website-design": {
    title: "Website Design & Development in Rishikesh | Boostech",
    description:
      "Responsive business websites with WhatsApp integration, contact forms and SEO-friendly structure, built around your services and customers.",
  },
};

function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const key = normalize(pathname);
    const page = servicePages[pathname] || servicePages[`${key}/`];
    const meta = pageMeta[key] || {
      title: `${page?.title || "Digital Growth"} | Boostech`,
      description:
        page?.desc ||
        "Boostech is a digital growth studio in Rishikesh offering websites, SEO, social media and paid advertising.",
    };

    document.title = meta.title;

    const set = (selector, attribute, value) => {
      const node = document.querySelector(selector);
      if (node) node.setAttribute(attribute, value);
    };

    set('meta[name="description"]', "content", meta.description);
    set('meta[property="og:title"]', "content", meta.title);
    set('meta[property="og:description"]', "content", meta.description);
    set('meta[name="twitter:title"]', "content", meta.title);
    set('meta[name="twitter:description"]', "content", meta.description);

    const url = `${SITE_URL}${key === "/" ? "/" : `${key}/`}`;
    set('link[rel="canonical"]', "href", url);
    set('meta[property="og:url"]', "content", url);
  }, [pathname]);
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hash) {
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        const node = document.getElementById(id);
        if (node) {
          node.scrollIntoView({
            behavior: reduce ? "auto" : "smooth",
            block: "start",
          });
        }
      });
      return;
    }

    scrollToTop();
  }, [pathname, hash]);

  return null;
}

function App() {
  usePageMeta();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollManager />
      <ClickSpark />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/services/digital-marketing/"
            element={<DigitalMarketing />}
          />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketing />}
          />
          {Object.keys(servicePages)
            .filter((path) => path !== "/services/digital-marketing/")
            .map((path) => (
              <Route
                key={path}
                path={path}
                element={<ServicePage path={path} />}
              />
            ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <a
        className="float-wa"
        href={wa()}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat with Boostech on WhatsApp at ${CONTACT.phone}`}
      >
        <MessageCircle size={18} />
        <span>Let&apos;s chat</span>
      </a>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
