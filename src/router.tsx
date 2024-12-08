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
      {/* 定義 404 頁面 */}
      <Route path="*" element={<div>404 - 找不到頁面</div>} />
    </Routes>
  );
};

export default AppRouter;
