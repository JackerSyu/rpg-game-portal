import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchAnnouncements } from "../../core/apiservices/announcementsApiService"; // 引入 API 方法
import { Announcement } from "../../core/models/announcements";
import moment from "moment";

const AnnouncementDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const formatDate = (dateString: string): string => {
    return moment(dateString).format("YYYY-MM-DD");
  };
  useEffect(() => {
    const loadAnnouncement = async () => {
      try {
        const data = await fetchAnnouncements(); // 獲取所有公告
        const allAnnouncements = [...data]; // API 返回的數據
        const foundAnnouncement = allAnnouncements.find(
          (item) => item.id === id
        );

        if (foundAnnouncement) {
          setAnnouncement(foundAnnouncement);
        } else {
          setError("找不到對應的公告。");
        }
      } catch (err) {
        console.error(err);
        setError("無法加載公告，請稍後再試。");
      } finally {
        setIsLoading(false);
      }
    };

    loadAnnouncement();
  }, [id]);

  if (isLoading) {
    return (
      <section className="section">
        <div className="container">
          <p>加載中...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">公告詳情</h1>
          <p>{error}</p>
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
        <h1 className="title">{announcement?.title}</h1>

        {/* 發佈時間 - 增加上方間距 */}
        <p className="subtitle is-size-7 has-text-grey mt-2">
          發佈時間：{formatDate(announcement?.add_date!)} | 發佈者：
          {announcement?.add_user}
        </p>

        <hr />

        {/* 公告內容 */}
        <div className="content">
          <p>{announcement?.content}</p>
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
