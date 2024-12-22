import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Announcements from "./components/AnnouncementsSection";
import AnnouncementDetails from "./components/AnnouncementDetails";
import DownloadPage from "./components/DownloadPage";
import IntroductionPage from "./components/IntroductionPage";
import ContactPage from "./components/ContactPage";
import DropSearch from "./components/DropSearch";
import MagicDolls from "./components/MagicDolls";
import ManaMission from "./components/ManaMission";
import MashuMission from "./components/MashuMission";
import DailyMission from "./components/DailyMission";
import AdvertisingReward from "./components/AdvertisingReward";
import Disclaimer from "./components/Disclaimer";
import ChristmasEvent from "./components/ChristmasEvent";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* 定義主頁路由 */}
      <Route path="/" element={<Home />} />
      <Route path="/intro" element={<IntroductionPage />} />
      {/* 定義公告頁面的路由 */}
      <Route path="/announcements" element={<Announcements />} />
      {/* 動態路由 */}
      <Route path="/announcements/:id" element={<AnnouncementDetails />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/download" element={<DownloadPage />} />
      <Route path="/wiki/drop-search" element={<DropSearch />} />
      <Route path="/wiki/magic-dolls" element={<MagicDolls />} />
      <Route path="/guide/missions/mana" element={<ManaMission />} />
      <Route path="/guide/missions/mashu" element={<MashuMission />} />
      <Route path="/guide/missions/daily" element={<DailyMission />} />
      <Route path="/guide/advertising" element={<AdvertisingReward />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/event/christmas" element={<ChristmasEvent />} />
      {/* 定義 404 頁面 */}
      <Route path="*" element={<div>404 - 找不到頁面</div>} />
    </Routes>
  );
};

export default AppRouter;
