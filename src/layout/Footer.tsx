import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer has-background-dark has-text-light">
      <div className="content has-text-centered">
        {/* 版權聲明 */}
        <p>&copy; {currentYear} 米克斯天堂. 保留所有權利。</p>

        {/* 社交媒體連結 */}
        <div className="social-links">
          <a
            className="has-text-light has-text-weight-bold is-hoverable"
            href="https://line.me/ti/p/your-official-line-id" // 替換為你的官方 LINE 連結
            target="_blank"
            rel="noopener noreferrer"
          >
            官方 LINE
          </a>
          <a
            className="has-text-light has-text-weight-bold ml-4 is-hoverable"
            href="https://facebook.com/your-official-facebook-page" // 替換為你的 Facebook 粉絲團連結
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook 粉絲團
          </a>
        </div>

        {/* 免責聲明 */}
        <div className="disclaimer mt-4">
          <p className="is-size-7">
            ※ 本服為研究 SQL 資料庫與修改 JAVA
            語法使用，非盈利為目的。詳情請參考免責聲明。
          </p>
          <p className="is-size-7 mt-2">
            ※
            此網站的圖像，動畫與其他素材皆來源網絡，不以營利為目的。如有侵權，請聯繫我們，我們將第一時間下架所有相關內容。詳情請參考免責聲明。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
