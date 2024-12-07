import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section
      id="game-intro"
      className="hero is-fullheight-with-navbar has-background-dark"
      style={{
        position: "relative", // 為背景層提供定位基準
        overflow: "hidden", // 防止背景圖片溢出
      }}
    >
      {/* 背景圖片層 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: 'url("/images/bg_10.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.35)", // 只對圖片應用亮度調整
          zIndex: 1, // 確保背景層在內容層後面
        }}
      ></div>

      {/* 內容層 */}
      <div
        className="hero-body"
        style={{
          position: "relative", // 確保內容不受背景層影響
          zIndex: 2, // 確保內容顯示在背景層之上
        }}
      >
        <div className="container has-text-centered">
          <h1 className="title has-text-warning">米克斯天堂</h1>
          <h2 className="subtitle has-text-light">
            進入一個充滿冒險與幻想的新世界！
          </h2>
          <div>
            <Link className="button is-warning is-large m-2" to="/download">
              立即遊玩
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
