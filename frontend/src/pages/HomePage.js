import React from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyMeSection from "../components/WhyMeSection";
import AboutSection from "../components/AboutSection";
import ChallengesSection from "../components/ChallengesSection";
import SolutionSection from "../components/SolutionSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <WhyMeSection />
        <AboutSection />
        <ChallengesSection />
        <SolutionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;