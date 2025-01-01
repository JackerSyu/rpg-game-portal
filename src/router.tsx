import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Announcements from "./components/announcement/AnnouncementsSection";
import AnnouncementDetails from "./components/announcement/AnnouncementDetails";
import DownloadPage from "./components/download/DownloadPage";
import IntroductionPage from "./components/game_intro/IntroductionPage";
import ContactPage from "./components/contact/ContactPage";
import DropSearch from "./components/wiki/DropSearch";
import MagicDolls from "./components/wiki/MagicDolls";
import ManaMission from "./components/guide/ManaMission";
import MashuMission from "./components/guide/MashuMission";
import DailyMission from "./components/guide/DailyMission";
import AdvertisingReward from "./components/guide/AdvertisingReward";
import Disclaimer from "./components/disclaim/Disclaimer";
import ChristmasEvent from "./components/guide/ChristmasEvent";
import PlayerGuidelines from "./components/guidelines/PlayerGuidelines";
import BeginnerGuide from "./components/guide/BeginnerGuide";
import Register from "./components/account/Register";
import Login from "./components/account/Login";
import ForgotPassword from "./components/account/ForgotPassword";
import ChangePassword from "./components/account/ChangePassword";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* 定義主頁路由 */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/change-password" element={<ChangePassword />} />
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
      <Route path="/guide/beginner" element={<BeginnerGuide />} />;
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/event/christmas" element={<ChristmasEvent />} />
      <Route path="/player-guidelines" element={<PlayerGuidelines />} />
      {/* 定義 404 頁面 */}
      <Route path="*" element={<div>404 - 找不到頁面</div>} />
    </Routes>
  );
};

export default AppRouter;
