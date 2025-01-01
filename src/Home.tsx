import React from "react";
import HeroSection from "./components/home/HeroSection";
import AnnouncementsSection from "./components/announcement/AnnouncementsSection";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AnnouncementsSection />
    </div>
  );
};

export default Home;
