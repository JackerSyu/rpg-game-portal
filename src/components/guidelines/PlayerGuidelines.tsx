import React from "react";
import { Typography, Card } from "antd";

const { Title, Paragraph, Text } = Typography;

const PlayerGuidelines: React.FC = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Card bordered={false}>
        {/* 頁面標題 */}
        <Title level={2} className="has-text-centered">
          玩家須知
        </Title>

        {/* 封鎖帳號標準 */}
        <Title level={4}>封鎖帳號（自動練功）標準</Title>
        <Paragraph>
          <Text>-</Text>{" "}
          不定時巡邏驗證，只要是在有怪物的地圖有「攻擊怪物」的動作，就會進行驗證。
        </Paragraph>
        <Paragraph>
          <Text>-</Text> 當 <Text strong>GM 驗證問答超過 1 分鐘未回應</Text>
          ，並且繼續攻擊怪物，即構成「掛機之疑慮」進行封鎖。
        </Paragraph>
        <Paragraph>
          <Text>-</Text> 任何形式的{" "}
          <Text strong>自動練功（定時施放技能:火風暴、反屏等）</Text>
          ，只要是驗證沒回應，即構成「掛機之疑慮」。
        </Paragraph>
        <Paragraph>
          <Text>-</Text> 不接受請小孩幫忙代練、不會回覆 GM
          問答、不會打字等奇葩理由。
        </Paragraph>

        {/* 總結 */}
        <Title level={4} className="mt-4">
          總結
        </Title>
        <Paragraph>
          GM 問話時請務必回答，只要角色能進行練功打怪，卻無答話回應，即構成
          <Text strong>「掛機之疑慮」</Text>，將會進行封鎖處分。
        </Paragraph>
        <Paragraph>
          一旦查證屬實將永久 <Text strong>【封鎖帳號】</Text>，連同資料{" "}
          <Text strong>【同 IP 底下相關帳號全數封鎖】</Text>。
        </Paragraph>
        <Paragraph>
          <Text type="danger">
            請各位玩家自重，絕不寬容，維護所有玩家遊戲公平，請各位務必遵守。
          </Text>
        </Paragraph>
      </Card>
    </div>
  );
};

export default PlayerGuidelines;
