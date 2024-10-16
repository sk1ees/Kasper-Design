import React from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import TechSection from "./sections/TechSection";
import ProcessSection from "./sections/ProcessSection";
import OptInSection from "./sections/OptInSection";
import FooterSection from "./sections/FooterSection";
import "../public/stylesheets/App.css";
import { Container } from "@mui/material";
const App = () => {
  return (
    <div className="bg-[#302C42] overflow-hidden">
      <Container>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechSection />
        <ProcessSection />
        <OptInSection />
        <FooterSection />
      </Container>
    </div>
  );
};

export default App;
