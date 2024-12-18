import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pages from "./pages";
import { Navbar, PrivacyPolicy, ScrollToTop } from "./components/components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
};

export default App;
