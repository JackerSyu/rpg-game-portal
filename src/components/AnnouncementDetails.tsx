import React from "react";
import { useParams, Link } from "react-router-dom";
import announcementsData from "../assets/announcements.json";
import { Announcements, Announcement } from "../core/models/announcements";

const AnnouncementDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const announcements: Announcements = announcementsData;

  // 合併所有類型的數據
  const allAnnouncements: Announcement[] = [
    ...announcements.latest,
    ...announcements.news,
    ...announcements.updates,
  ];

  // 查找符合的公告
  const announcement = allAnnouncements.find((item) => item.id === id);

  if (!announcement) {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">公告詳情</h1>
          <p>找不到對應的公告。</p>
          <Link to="/announcements" className="button is-link mt-4">
            返回公告
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        {/* 標題 */}
        <h1 className="title">{announcement.title}</h1>

        {/* 發佈時間 - 增加上方間距 */}
        <p className="subtitle is-size-7 has-text-grey mt-2">
          發佈時間：{announcement.add_date} | 發佈者：{announcement.add_user}
        </p>

        <hr />

        {/* 公告內容 */}
        <div className="content">
          <p>{announcement.content}</p>
        </div>

        <hr />

        {/* 返回按鈕 */}
        <div className="mt-5">
          <Link to="/announcements" className="button is-link">
            返回公告
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementDetails;
