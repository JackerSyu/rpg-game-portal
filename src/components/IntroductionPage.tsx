import React from "react";

const IntroductionPage: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">遊戲伺服器設定</h1>

        {/* 遊戲設定 */}
        <div className="box mt-5">
          <h2 className="title is-4">【遊戲設定】</h2>
          <table className="table is-fullwidth">
            <tbody>
              <tr>
                <td>經驗值</td>
                <td>500.0【倍】</td>
              </tr>
              <tr>
                <td>金幣掉落</td>
                <td>5.0【倍】</td>
              </tr>
              <tr>
                <td>正義值</td>
                <td>1.0【倍】</td>
              </tr>
              <tr>
                <td>友好度</td>
                <td>1.0【倍】</td>
              </tr>
              <tr>
                <td>物品掉落</td>
                <td>1.0【倍】</td>
              </tr>
              <tr>
                <td>衝武</td>
                <td>13 %</td>
              </tr>
              <tr>
                <td>衝防</td>
                <td>8 %</td>
              </tr>
              <tr>
                <td>萬能藥數量限制</td>
                <td>5</td>
              </tr>
              <tr>
                <td>能力值上限</td>
                <td>35</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 角色血魔上限 */}
        <div className="box mt-5">
          <h2 className="title is-4">【角色血魔上限】</h2>
          <table className="table is-fullwidth is-striped">
            <thead>
              <tr>
                <th>職業</th>
                <th>最大血量</th>
                <th>最大魔量</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>王族</td>
                <td>2300</td>
                <td>800</td>
              </tr>
              <tr>
                <td>騎士</td>
                <td>3000</td>
                <td>600</td>
              </tr>
              <tr>
                <td>妖精</td>
                <td>2200</td>
                <td>900</td>
              </tr>
              <tr>
                <td>法師</td>
                <td>1500</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>黑妖</td>
                <td>2200</td>
                <td>900</td>
              </tr>
              <tr>
                <td>龍騎士</td>
                <td>2700</td>
                <td>600</td>
              </tr>
              <tr>
                <td>幻術師</td>
                <td>1800</td>
                <td>1100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default IntroductionPage;
