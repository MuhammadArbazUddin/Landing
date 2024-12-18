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
  VideosGallery,
} from "./components/components";

const Pages = () => {
  return (
    <div>
      <Hero />
      <About />
      <StatsLogosSlider />
      <ManOnScroll />
      <ProjectDiscovery />
      <CardVerticleSlider />
      <VideosGallery />
      {/* <StepsScroll /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Pages;
