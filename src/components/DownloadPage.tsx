import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DownloadPage: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // 去掉 # 獲取 ID
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // 平滑滾動
      }
    }
  }, [location]);

  return (
    <section className="section">
      <div className="container">
        {/* 標題與副標題 */}
        <h1 className="title has-text-centered is-warning">遊戲下載</h1>
        <p className="subtitle has-text-centered">
          快速下載並安裝米克斯天堂，進入冒險世界！
        </p>

        {/* 平台下載按鈕 */}
        <div className="columns is-multiline is-centered mt-5 ">
          <div className="column is-3 has-text-centered ">
            <a
              href="https://drive.google.com/file/d/1vW8vzesYPZ_hDaAuCEOQ6ViIWRiv0YdB/view?usp=drive_link"
              target="_blank"
              className="button is-warning is-large  "
            >
              下載 Windows 版本
            </a>
          </div>
        </div>

        {/* 補丁下載 */}
        <div className="box mt-5">
          <h2 className="title is-4">補丁下載</h2>
          <p>如果您需要更新遊戲版本，請下載以下補丁。</p>

          <table className="table is-fullwidth is-striped mt-3">
            <thead>
              <tr>
                <th className="has-text-warning">補丁名稱</th>
                <th className="has-text-warning">版本號</th>
                <th className="has-text-warning">發布日期</th>
                <th className="has-text-warning">下載</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T恤無法交易補丁_20241222</td>
                <td>1.0.16</td>
                <td>2024-12-22</td>
                <td>
                  <a
                    href="/patch/patch_20241222.rar"
                    className="button is-small is-warning"
                  >
                    下載
                  </a>
                </td>
              </tr>
              <tr>
                <td>米克斯補丁_20241215</td>
                <td>1.0.15</td>
                <td>2024-12-15</td>
                <td>
                  <a
                    href="/patch/update_20241215.rar"
                    className="button is-small is-warning"
                  >
                    下載
                  </a>
                </td>
              </tr>
              <tr>
                <td>米克斯補丁_20241109</td>
                <td>1.0.0</td>
                <td>2024-12-07</td>
                <td>
                  <a
                    href="/patch/update_all_20241208.rar"
                    className="button is-small is-warning"
                  >
                    下載
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 系統需求 */}
        <div className="box mt-5">
          <h2 className="title is-4">系統需求</h2>
          <div className="columns">
            <div className="column">
              <h3 className="subtitle is-5">Windows</h3>
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th className="has-text-warning">項目</th>
                    <th className="has-text-warning">需求配備</th>
                    <th className="has-text-warning">建議配備</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>操作系統</td>
                    <td>Window 9X/ Me/ 2000/XP/VISTA、Window NT4.0 SP3 </td>
                    <td>Windows XP/Vista/7</td>
                  </tr>
                  <tr>
                    <td>處理器</td>
                    <td>Pentium II 以上</td>
                    <td>Intel Core i3 或更高</td>
                  </tr>
                  <tr>
                    <td>記憶體</td>
                    <td>256 MB RAM</td>
                    <td>2 GB RAM</td>
                  </tr>
                  <tr>
                    <td>硬碟空間</td>
                    <td>4 GB</td>
                    <td>10 GB</td>
                  </tr>
                  <tr>
                    <td>顯示卡</td>
                    <td>NVIDIA GeForce 6 以上</td>
                    <td>NVIDIA GTX 660 或更高</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 安裝指南 */}
        <div className="box mt-5">
          <h2 className="title is-4">安裝指南</h2>
          <ol>
            <li className="ml-4">選擇並下載適合您設備的遊戲安裝包。</li>
            <li className="ml-4">運行下載的安裝程序，按照提示完成安裝。</li>
            <li className="ml-4">啟動遊戲並登入您的帳號，開始冒險！</li>
          </ol>
        </div>

        {/* 常見問題 */}
        <div className="box mt-5" id="faq">
          <h2 className="title is-4">常見問題</h2>

          {/* 無法開啟時該怎麼辦 */}
          <div className="mt-4">
            <h3 className="subtitle is-5 is-italic">
              Q: Windows 10 / 11 無法開啟時(閃退)該怎麼辦？
            </h3>
            <h3 className="subtitle is-5">
              A: 請修改 <strong>Login.exe</strong> 設定相容至 Windows 7：
              <ul className="mt-2 ml-4">
                <li>
                  - 右鍵點擊 <strong>Login.exe</strong>
                </li>
                <li> - 選擇「顯示其他選項」</li>
                <li> - 點擊「內容 &gt;&gt; 進階 &gt;&gt; 相容性」</li>
                <li>
                  - 設定為 <strong> Windows 7</strong>
                </li>
                <li>
                  - 點選同畫面中的變更高DIP設定，將程式DPI及高DPI縮放都打勾
                </li>
                <li>- 按確定之後再按套用</li>
              </ul>
            </h3>
          </div>

          {/* 安裝程序無法啟動 */}
          <div className="mt-4">
            <h3 className="subtitle is-5 is-italic">Q: 安裝程序無法啟動？</h3>
            <h3 className="subtitle is-5">
              A: 請確認您的操作系統是否符合最低需求，並嘗試以管理員模式運行。
            </h3>
          </div>

          {/* 如何更新遊戲版本 */}
          <div className="mt-4">
            <h3 className="subtitle is-5 is-italic">Q: 如何更新遊戲版本？</h3>
            <h3 className="subtitle is-5">
              A: 遊戲會自動檢查更新，您只需按照提示完成更新。
            </h3>
          </div>

          {/* 解決打字閃爍問題 */}
          <div className="mt-4">
            <h3 className="subtitle is-5 is-italic">
              Q: 如何解決打字閃爍問題？
            </h3>
            <h3 className="subtitle is-5">
              A: 請安裝 <strong>自然輸入法 V10 版本</strong>，參考安裝說明。
              自然輸入法官方下載點：
              <a
                href="https://example.com/input-method-v10"
                target="_blank"
                className="has-text-link"
              >
                官方下載點
              </a>
              。 或下載
              <a
                href="https://example.com/selection-fix"
                target="_blank"
                className="has-text-link"
              >
                選字修復程式
              </a>
              。
            </h3>
          </div>

          {/* 啟動遊戲自動喝水功能 */}
          <div className="mt-4">
            <h3 className="subtitle is-5 is-italic">
              Q: 如何啟動遊戲的自動喝水功能？
            </h3>
            <h3 className="subtitle is-5">
              A: 在遊戲中按 <strong>Home 鍵</strong>{" "}
              啟動自動喝水功能，並拖曳至遊戲畫面右邊。設定完成後可關閉。
            </h3>
          </div>

          {/* 全仿正 */}
          <div className="mt-4">
            <h3 className="subtitle is-5 is-italic">Q: 有無自創系統武器？</h3>
            <h3 className="subtitle is-5">A: 本遊戲全仿正，無自創系統武器。</h3>
          </div>

          {/* 無 AT 獎勵 */}
          <div className="mt-4">
            <h3 className="subtitle is-5 is-italic">Q: 是否有 AT 獎勵？</h3>
            <h3 className="subtitle is-5">A: 本遊戲無 AT 獎勵。</h3>
          </div>

          {/* 無私自販賣武器裝備 */}
          <div className="mt-4">
            <h3 className="subtitle is-5 is-italic">
              Q: 是否允許私自販賣武器裝備？
            </h3>
            <h3 className="subtitle is-5">A: 本遊戲禁止私自販賣武器裝備。</h3>
          </div>
        </div>

        {/* 返回按鈕 */}
        <div className="has-text-centered mt-5">
          <a href="/" className="button is-warning ">
            返回首頁
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadPage;
