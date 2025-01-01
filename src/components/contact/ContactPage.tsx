import React from "react";
import { Link } from "react-router-dom";

const ContactPage: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">聯絡我們</h1>
        <p className="subtitle has-text-centered">
          如果您有任何疑問或需要幫助，請透過以下方式與我們聯繫！
        </p>

        {/* 聯絡方式 */}
        <div className="box mt-5">
          <h2 className="title is-4">【聯絡方式】</h2>
          <ul className="mt-3">
            <li className="mb-4">
              <strong>LINE：</strong>
              <a
                href="https://lin.ee/mQtkq0P"
                target="_blank"
                rel="noopener noreferrer"
                className="has-text-link"
              >
                點擊這裡添加我們的 LINE
              </a>
            </li>
            <li className="mb-4">
              <strong>Facebook：</strong>
              <a
                href="https://www.facebook.com/profile.php?id=61563704583003"
                target="_blank"
                rel="noopener noreferrer"
                className="has-text-link"
              >
                前往我們的 Facebook 粉絲專頁
              </a>
            </li>
          </ul>
        </div>

        {/* 客服時間 */}
        <div className="box mt-5">
          <h2 className="title is-4">【客服時間】</h2>
          <p>週一至週五：09:00 - 18:00</p>
          <p>週六及國定假日：休息</p>
        </div>

        {/* 常見問題連結 */}
        <div className="box mt-5">
          <h2 className="title is-4">【常見問題】</h2>
          <p>
            在聯絡我們之前，您可以先瀏覽
            <Link to="/download#faq" className="has-text-link">
              常見問題
            </Link>
            頁面，了解更多資訊。
          </p>
        </div>

        {/* 返回首頁 */}
        <div className="has-text-centered mt-5">
          <a href="/" className="button is-warning">
            返回首頁
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
