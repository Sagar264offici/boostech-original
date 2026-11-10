import React from "react";
import Hero from "../components/Hero";
import Ticker from "../components/sections/Ticker";
import Intro from "../components/sections/Intro";
import Services from "../components/sections/Services";
import MarketingFeature from "../components/sections/MarketingFeature";
import Process from "../components/sections/Process";
import Founder from "../components/sections/Founder";
import Work from "../components/sections/Work";
import Packages from "../components/sections/Packages";
import Stack from "../components/sections/Stack";
import Faq from "../components/sections/Faq";
import ContactCTA from "../components/sections/ContactCTA";
import { faqs } from "../data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Intro />
      <Services />
      <MarketingFeature />
      <Process />
      <Founder />
      <Work />
      <Packages />
      <Stack />
      <Faq items={faqs} />
      <ContactCTA />
    </>
  );
}
