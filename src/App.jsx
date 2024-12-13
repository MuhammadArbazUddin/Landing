import React from "react";
import {
  CardVerticleSlider,
  Footer,
  ManOnScroll,
  Navbar,
  StatsLogosSlider,
} from "./components/components";

const App = () => {
  return (
    <div>
      <Navbar />
      <ManOnScroll />
      <CardVerticleSlider />
      <StatsLogosSlider />
      <Footer />
    </div>
  );
};

export default App;
