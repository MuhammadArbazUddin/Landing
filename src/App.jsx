import React from "react";
import {
  CardVerticleSlider,
  Footer,
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
      <StepsScroll />
      <ManOnScroll />
      <CardVerticleSlider />
      <ProjectDiscovery />
      <StatsLogosSlider />
      <Footer />
    </div>
  );
};

export default App;
