import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState(false); // 控制選單顯示的狀態
  const navbarRef = useRef<HTMLDivElement>(null); // 參考選單元素

  // 切換選單的顯示/隱藏狀態
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  // 點擊選單外部時關閉選單
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isActive && // 如果選單是開啟狀態
        navbarRef.current && // 確保參考到元素
        !navbarRef.current.contains(event.target as Node) // 點擊事件不在選單內
      ) {
        setIsActive(false); // 關閉選單
      }
    };

    document.addEventListener("click", handleOutsideClick); // 添加全局點擊事件
    return () => {
      document.removeEventListener("click", handleOutsideClick); // 清理事件
    };
  }, [isActive]);

  return (
    <nav className="navbar transparent-navbar" ref={navbarRef}>
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <strong>米克斯天堂</strong>
        </Link>
        <a
          role="button"
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isActive ? "true" : "false"}
          data-target="navbarMenu"
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarMenu"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <Link className="navbar-item" to="/intro">
            遊戲介紹
          </Link>
          <Link className="navbar-item" to="/announcements">
            公告
          </Link>
          <a className="navbar-item is-disabled">遊戲指引</a>
          {/* 遊戲百科下拉選單 */}
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless">遊戲百科</a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/wiki/drop-search">
                掉落查詢
              </Link>
              <Link className="navbar-item" to="/wiki/magic-dolls">
                魔法娃娃
              </Link>
            </div>
          </div>
          <a className="navbar-item is-disabled">社群</a>
          <Link className="navbar-item" to="/contact">
            客服中心
          </Link>
          <Link className="navbar-item" to="/download">
            遊戲下載
          </Link>
        </div>

        <div className="navbar-end">{/* 右側按鈕可選 */}</div>
      </div>
    </nav>
  );
};

export default Navbar;
