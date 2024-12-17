import React from "react";
import {
  About,
  CardVerticleSlider,
  Contact,
  Footer,
  Hero,
  ManOnScroll,
  Navbar,
  ProjectDiscovery,
  StatsLogosSlider,
  StepsScroll,
} from "./components/components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ManOnScroll />
      <About />
      <Contact />
      <CardVerticleSlider />
      <StepsScroll />
      <ProjectDiscovery />
      <StatsLogosSlider />
      <Footer />
    </div>
  );
};

export default App;
