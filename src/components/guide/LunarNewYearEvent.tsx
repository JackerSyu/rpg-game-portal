import React from "react";
import { Table, Typography, Card, Row, Col } from "antd";

const { Title, Paragraph, Text } = Typography;

const LunarNewYearEvent: React.FC = () => {
  // 定義活動獎勵內容
  const rankingRewards = [
    { key: "1", rank: "第 1 名", reward: "強化保護卷 * 20 張" },
    { key: "2", rank: "第 2 名", reward: "強化保護卷 * 10 張" },
    { key: "3", rank: "第 3 名", reward: "強化保護卷 * 5 張" },
    { key: "3", rank: "第 4 名", reward: "強化保護卷 * 3 張" },
    { key: "3", rank: "第 5 名", reward: "強化保護卷 * 3 張" },
  ];

  const bonusBoxes = [
    { key: "1", box: "Bouns 禮盒 (A)" },
    { key: "2", box: "Bouns 禮盒 (B)" },
    { key: "3", box: "Bouns 禮盒 (C)" },
  ];

  const multiplierEvents = [
    { key: "1", period: "1/24 21:00 ~ 1/28 21:00", multiplier: "600 倍" },
    {
      key: "2",
      period: "1/28 21:00 ~ 1/29 21:00 (除夕夜)",
      multiplier: "750 倍",
    },
    { key: "3", period: "1/29 21:00 ~ 1/31 21:00", multiplier: "550 倍" },
  ];

  return (
    <div className="container p-4">
      {/* 活動標題 */}
      <Card bordered={false} className="mb-4">
        <Title level={2} className="has-text-centered">
          農曆新年活動
        </Title>
        <Paragraph className="has-text-centered">
          ※ <Text strong>金蛇迎春，新年活動開跑！</Text>
        </Paragraph>
      </Card>

      {/* 活動說明 */}
      <Card bordered className="mb-4">
        <Row gutter={[16, 16]} align="middle">
          {/* 左側圖片 */}
          <Col xs={24} sm={8} className="has-text-centered">
            <figure className="image is-256x256 is-inline-block mt-5">
              <img
                src="/images/fudai.png"
                alt="金蛇迎春"
                style={{
                  borderRadius: "8px",
                  maxWidth: "100%",
                }}
              />
            </figure>
          </Col>

          {/* 右側內容 */}
          <Col xs={24} sm={16}>
            <Paragraph>
              <Text strong>活動時間：</Text> 1/24 21:00 ~ 1/31 21:00
            </Paragraph>
            <Paragraph>
              <Text strong>活動說明：</Text> 擊殺任意怪物隨機獲得
              <Text strong>「金幣福袋」</Text>，福袋無法轉移。
            </Paragraph>
            <Paragraph>
              <Text strong>金幣福袋：</Text> 最多可開出千萬好禮。
            </Paragraph>
            <Paragraph>
              <Text strong>福袋累積比一比：</Text> 活動結束 (1/31 21:00)
              統計角色福袋數量。
            </Paragraph>
            <Paragraph>
              <Text strong>※ 福袋累積注意事項：</Text>
              <br />
              a. 金幣福袋隨時開 - 隨機可獲得金幣{" "}
              <Text strong> (不列入累積機算) </Text>
              統計角色福袋數量。
              <br />
              b. 累積計算的金幣福袋, 再GM公告得主後, 仍可開啟獲得福袋內容
            </Paragraph>

            <Title level={4}>排名獎勵：</Title>
            <Table
              columns={[
                { title: "名次", dataIndex: "rank", key: "rank" },
                { title: "獎勵", dataIndex: "reward", key: "reward" },
              ]}
              dataSource={rankingRewards}
              pagination={false}
              bordered
            />

            <Title level={4} className="mt-4">
              前三名額外獎勵 (Bouns 禮盒)：
            </Title>
            <Table
              columns={[{ title: "禮盒", dataIndex: "box", key: "box" }]}
              dataSource={bonusBoxes}
              pagination={false}
              bordered
            />
          </Col>
        </Row>
      </Card>

      {/* 加倍活動 */}
      <Card bordered>
        <Title level={4} className="has-text-centered">
          新春期間加倍活動
        </Title>
        <Table
          columns={[
            { title: "時間段", dataIndex: "period", key: "period" },
            { title: "倍數", dataIndex: "multiplier", key: "multiplier" },
          ]}
          dataSource={multiplierEvents}
          pagination={false}
          bordered
        />
      </Card>
    </div>
  );
};

export default LunarNewYearEvent;
