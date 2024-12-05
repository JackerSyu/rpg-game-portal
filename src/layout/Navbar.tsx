import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  // State to track the menu toggle
  const [isActive, setIsActive] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar  transparent-navbar">
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
          <a className="navbar-item is-disabled">遊戲百科</a>
          <a className="navbar-item is-disabled">社群</a>
          <Link className="navbar-item" to="/contact">
            客服中心
          </Link>
          <Link className="navbar-item" to="/download">
            遊戲下載
          </Link>
        </div>

        <div className="navbar-end">
          {/* <div className="navbar-item">
            <a className="button is-warning" href="#play-now">
              <strong>立即遊玩</strong>
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
