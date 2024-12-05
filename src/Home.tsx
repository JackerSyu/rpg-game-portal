import React from "react";
import HeroSection from "./components/HeroSection";
import AnnouncementsSection from "./components/AnnouncementsSection";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AnnouncementsSection />
    </div>
  );
};

export default Home;
