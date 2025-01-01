import React from "react";
import { Table, Typography, Card, Row, Col } from "antd";

const { Title, Paragraph, Text } = Typography;

const ChristmasEvent: React.FC = () => {
  // 定義搜集道具的表格數據
  const questItems = [
    { key: "1", item: "聖誕襪", quantity: "3" },
    { key: "2", item: "聖誕拐杖", quantity: "3" },
    { key: "3", item: "聖誕帽", quantity: "3" },
  ];

  // 定義聖誕禮物盒內容物的表格數據
  const giftBoxContents = [
    { key: "1", item: "智力T恤 (防禦:-2 智力+1 安定值:0)" },
    { key: "2", item: "敏捷T恤 (防禦:-2 敏捷+1 安定值:0)" },
    { key: "3", item: "力量T恤 (防禦:-2 力量+1 安定值:0)" },
    { key: "4", item: "精神T恤 (防禦:-2 精神+1 安定值:0)" },
    { key: "5", item: "魅力T恤 (防禦:-2 魅力+1 安定值:0)" },
    { key: "6", item: "體力T恤 (防禦:-2 體力+1 安定值:0)" },
    { key: "7", item: "對盔甲施法的卷軸" },
    { key: "8", item: "對盔甲施法的卷軸(黃)" },
    { key: "9", item: "對盔甲施法的卷軸(紅)" },
  ];

  return (
    <div className="container p-4">
      {/* 活動標題 */}
      <Card bordered={false} className="mb-4">
        <Title level={2} className="has-text-centered">
          聖誕節活動
        </Title>
        <Paragraph className="has-text-centered">
          本活動由 NPC <Text strong>聖塔妮卡</Text>{" "}
          發佈，玩家需完成擊殺任務並搜集道具即可獲得豐厚的獎勵。
        </Paragraph>
      </Card>

      {/* 任務說明：圖片在左，表格在右 */}
      <Card bordered className=" mb-4">
        <Row gutter={[16, 16]} align="middle">
          {/* 左邊圖片 */}
          <Col xs={24} sm={8} className="has-text-centered ">
            <figure className="image is-256x256 is-inline-block mt-5">
              <img
                src="/images/santa-nika.png"
                alt="聖塔妮卡"
                style={{
                  borderRadius: "8px",
                  maxWidth: "100%",
                }}
              />
            </figure>
            <Paragraph className="mt-3">
              <Text strong>任務 NPC：</Text> 聖塔妮卡
            </Paragraph>
          </Col>

          {/* 右邊表格 */}
          <Col xs={24} sm={16}>
            <Paragraph>
              <Text strong>活動時間：</Text> 2024/12/20 ~ 2025/01/06
            </Paragraph>
            <Paragraph>
              <Text strong>擊殺怪物：</Text> 邪惡的聖誕老人
            </Paragraph>
            <Paragraph>
              <Text strong>怪物地點：</Text> 海賊島
            </Paragraph>
            <Paragraph>
              <Text strong>獎勵：</Text> 聖誕禮物盒
            </Paragraph>

            <Title level={4}>搜集道具：</Title>
            <Table
              columns={[
                {
                  title: "道具",
                  dataIndex: "item",
                  key: "item",
                },
                {
                  title: "數量",
                  dataIndex: "quantity",
                  key: "quantity",
                },
              ]}
              dataSource={questItems}
              pagination={false}
              bordered
            />
          </Col>
        </Row>

        {/* 聖誕禮物盒內容物 */}
        <Row gutter={[16, 16]} className="mt-5">
          {/* 左邊圖片 */}
          <Col xs={24} sm={8} className="has-text-centered">
            <figure className="image is-256x256 is-inline-block mt-5">
              <img
                src="/images/christmasEvent2.png"
                alt="邪惡的聖誕老人"
                style={{
                  borderRadius: "8px",
                  maxWidth: "100%",
                }}
              />
            </figure>
            <Paragraph className="mt-3">
              <Text strong>目標 NPC：</Text> 邪惡的聖誕老人
            </Paragraph>
          </Col>

          {/* 右邊表格 */}
          <Col xs={24} sm={16}>
            <Title level={4}>聖誕禮物盒內容物：</Title>
            <Table
              columns={[
                {
                  title: "內容物",
                  dataIndex: "item",
                  key: "item",
                },
              ]}
              dataSource={giftBoxContents}
              pagination={false}
              bordered
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ChristmasEvent;
