import React from "react";
import {
  About,
  CardVerticleSlider,
  Contact,
  Footer,
  Hero,
  ManOnScroll,
  ProjectDiscovery,
  StatsLogosSlider,
  StepsScroll,
} from "./components/components";

const Pages = () => {
  return (
    <div>
      <Hero />
      <About />
      <ManOnScroll />
      <ProjectDiscovery />
      <CardVerticleSlider />
      {/* <StepsScroll /> */}
      <Contact />
      <StatsLogosSlider />
      <Footer />
    </div>
  );
};

export default Pages;
