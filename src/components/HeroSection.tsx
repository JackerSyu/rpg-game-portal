import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const HeroSection: React.FC = () => {
  const typedH1Ref = useRef<HTMLSpanElement>(null);
  const typedH2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // 打字效果：主標題
    const h1Typed = new Typed(typedH1Ref.current!, {
      strings: ["米克斯天堂"], // 標題文字
      typeSpeed: 150, // 打字速度
      backSpeed: 25, // 刪除速度
      loop: false, // 不循環
      onComplete: () => {
        const cursor = typedH1Ref.current?.nextElementSibling as HTMLElement;
        if (cursor) cursor.style.display = "none";
        // 主標題完成後啟動副標題
        new Typed(typedH2Ref.current!, {
          strings: ["一個回憶的起點，重現最初的感動..."],
          typeSpeed: 100, // 打字速度
          backSpeed: 25, // 刪除速度
          loop: false, // 循環播放
          onComplete: () => {
            // 隐藏副标题游标
            const cursor = typedH2Ref.current
              ?.nextElementSibling as HTMLElement;
            if (cursor) cursor.style.display = "none";
          },
        });
      },
    });

    // 清理副作用
    return () => h1Typed.destroy();
  }, []);

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
          <h1 className="title has-text-warning">
            <span ref={typedH1Ref}></span> {/* 主標題打字效果 */}
          </h1>
          <h2 className="subtitle has-text-light">
            <span ref={typedH2Ref}></span> {/* 副標題打字效果 */}
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
