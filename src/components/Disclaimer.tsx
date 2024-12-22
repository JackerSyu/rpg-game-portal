import React from "react";
import { Card, Typography, List } from "antd";

const { Title, Paragraph, Text } = Typography;

const Disclaimer: React.FC = () => {
  const disclaimerItems = [
    "本伺服的遊戲主程式和服務器端程序均來自網路發佈。所有程序皆為日本開發團隊研發，所有遊戲內容模組與某公司代理之'天堂'完全不同，絕沒有侵權或惡意抄襲，篡改其他遊戲內容問題，若有雷同純屬巧合。",
    "服務器不進行商業行為，所有贊助款項皆為玩家自願性贊助，玩家所贊助的經費，全數用於伺服器的平衡開支與人員研究技術費用，一旦贊助匯款後就代表同意了我們的聲明，不會有任何退費的服務機制。",
    "本服為研究 SQL 資料庫與修改 JAVA 語法使用，完全屬於版本測試與自行修改 JAVA 內容分享，如有認為有任何不適或影響貴公司營運請告知我們，我們將第一時間關閉。規勸所有對遊戲有興趣者請【支持正版】並且【尊重智慧財產權】。",
    "伺服器只作為 SQL 資料庫與 JAVA 語法研究好者交流所用，伺服器不收取任何費用，不做任何形式營利。",
    "本伺服玩家須遵守規定，並承諾不得使用（包括僅嘗試使用）外掛程式，不得嘗試尋找或使用漏洞進行破壞遊戲或破壞遊戲平衡性。對於使用外掛程式或者利用程式漏洞進行破壞遊戲或者破壞遊戲平衡者，本伺服器完全有權利採取包括封停帳號、屏蔽 IP 等處罰措施並不需要違規者同意。",
    "對於非可抗拒原因引起服務器關閉，回檔，數據錯誤等事件，本伺服器不負有任何責任。玩家對於此類事件不可以任何理由要求本伺服進行賠償。但是我們承諾會盡心盡力做到服務器的穩定運行。",
    "對於玩家的物品、裝備、虛擬寶物，被另外玩家騙取或者盜號，本伺服器不負任何責任，玩家對於此類事件不可以任何理由要求進行求償。",
    "伺服器為終身免費，不進行非法營運。服務器端程序永不傳播和外洩。",
    "伺服擁有對以上聲明的最終解釋權，如果您發現本伺服出現侵權或者觸及法律條文的內容，可及時向管理員提出，本伺服將會對此進行核實查證。",
    "若有不法及侵權，請立即通知管理團隊！",
  ];

  return (
    <div className="container p-4">
      <Card bordered={false} className="box">
        <Title level={2} className="has-text-centered">
          免責聲明
        </Title>
        <Paragraph className="mb-4 has-text-centered">
          在此伺服器參與遊戲測試的玩家皆視為同意以下規定，禁止未滿{" "}
          <Text strong>18 歲</Text> 的玩家參與遊戲測試。
        </Paragraph>
        {/* 聲明內容列表 */}
        <List
          bordered
          dataSource={disclaimerItems}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <Paragraph
          className="has-text-centered mt-4"
          style={{ fontWeight: "bold" }}
        >
          若您不同意以上聲明，請立即停止使用本伺服器。
        </Paragraph>
      </Card>
    </div>
  );
};

export default Disclaimer;
