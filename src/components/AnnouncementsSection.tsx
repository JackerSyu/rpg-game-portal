import React, { useState } from "react";
import announcementsData from "../assets/announcements.json"; // 導入 JSON 數據
import { Announcements, Announcement } from "../core/models/announcements"; // 導入接口
import { Link } from "react-router-dom";

const AnnouncementsSection: React.FC = () => {
  const announcements: Announcements = announcementsData;
  const [activeTab, setActiveTab] = useState<keyof Announcements>("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // 計算當前選中類型的數據
  const filteredData: Announcement[] =
    activeTab === "latest"
      ? [...announcements.news, ...announcements.updates].sort(
          (a, b) =>
            new Date(b.add_date).getTime() - new Date(a.add_date).getTime()
        )
      : announcements[activeTab];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

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
            <table className="table is-fullwidth is-hoverable">
              <thead>
                <tr>
                  <th>標題</th>
                  <th>日期</th>
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
                        {item.title}
                      </Link>
                    </td>
                    <td className="has-text-left">{item.add_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <nav
              className="pagination is-centered mt-4"
              role="navigation"
              aria-label="pagination"
            >
              <button
                className="pagination-previous"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                上一頁
              </button>
              <button
                className="pagination-next"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                下一頁
              </button>
              <ul className="pagination-list">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <li key={page}>
                      <button
                        className={`pagination-link ${
                          page === currentPage ? "is-current" : ""
                        }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
