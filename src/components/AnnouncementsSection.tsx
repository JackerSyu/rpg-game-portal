import React, { useState, useEffect } from "react";
import { fetchAnnouncements } from "../core/apiservices/announcementsApiService"; // 引入 API 方法
import { Announcements, Announcement } from "../core/models/announcements"; // 導入接口
import { Link } from "react-router-dom";
import moment from "moment";
import Pagination from "../components/Pagination"; // 引入抽象化 Pagination 組件

const AnnouncementsSection: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcements>({
    latest: [],
    news: [],
    updates: [],
  }); // 初始化為空數據
  const [activeTab, setActiveTab] = useState<keyof Announcements>("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 從後端獲取數據
  useEffect(() => {
    const loadAnnouncements = async () => {
      try {
        const data: Announcement[] = await fetchAnnouncements();

        // 分組數據
        const groupedData: Announcements = data.reduce(
          (acc: Announcements, item) => {
            if (item.type in acc) {
              acc[item.type as keyof Announcements].push(item); // 類型斷言
            }
            return acc;
          },
          { latest: [], news: [], updates: [] }
        );

        // 最新消息（按時間排序，最新 100 條）
        groupedData.latest = [...groupedData.news, ...groupedData.updates]
          .sort(
            (a, b) =>
              new Date(b.add_date).getTime() - new Date(a.add_date).getTime()
          )
          .slice(0, 100);

        setAnnouncements(groupedData);
      } catch (error) {
        console.error("Error loading announcements:", error);
      }
    };

    loadAnnouncements();
  }, []);

  // 計算當前選中類型的數據
  const filteredData: Announcement[] = announcements[activeTab];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const formatDate = (dateString: string): string => {
    return moment(dateString).format("YYYY-MM-DD");
  };

  // 檢查是否為近三天的公告
  const isNew = (dateString: string): boolean => {
    const date = moment(dateString);
    return moment().diff(date, "days") <= 3; // 檢查差距是否小於等於3天
  };

  return (
    <section
      id="announcements"
      className="hero is-medium has-background-dark"
      style={{
        backgroundImage: 'url("/images/bg_2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title has-text-light">公告</h2>
          <p className="subtitle has-text-light">
            獲取最新的遊戲公告，保持與遊戲的最新動態同步。
          </p>

          {/* Tabs */}
          <div className="tabs is-centered is-boxed is-medium">
            <ul>
              {["latest", "news", "updates"].map((tab) => (
                <li
                  key={tab}
                  className={`tab-item ${
                    activeTab === tab ? "is-warning" : ""
                  }`}
                  onClick={() => {
                    setActiveTab(tab as keyof Announcements);
                    setCurrentPage(1); // 切換標籤時重置頁碼
                  }}
                >
                  <a>
                    {tab === "latest"
                      ? "最新消息"
                      : tab === "news"
                      ? "公告"
                      : "更新"}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content with Pagination */}
          <div className="box has-background-dark has-text-light mt-4">
            <table className="table is-fullwidth is-hoverable custom-table">
              <thead>
                <tr>
                  <th className="has-text-warning">標題</th>
                  <th className="has-text-warning">日期</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item) => (
                  <tr key={item.id}>
                    <td className="has-text-left">
                      <Link
                        to={`/announcements/${item.id}`}
                        className="has-text-white"
                      >
                        [{item.type === "updates" ? "更新" : "公告"}]{" "}
                        {item.title}{" "}
                        {isNew(item.add_date) && (
                          <span className="tag is-warning ml-2">NEW</span>
                        )}
                      </Link>
                    </td>
                    <td className="has-text-left">
                      {formatDate(item.add_date)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 使用抽象化 Pagination 組件 */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
