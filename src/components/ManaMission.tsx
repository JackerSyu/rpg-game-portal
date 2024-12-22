import React from "react";
import { Table, Typography, Card, Button, Row, Col } from "antd";

const { Title, Text, Paragraph } = Typography;

const ManaMission: React.FC = () => {
  // 蒐集道具的表格數據
  const questItems = [
    {
      key: "1",
      item: "損壞魔杖 * 1",
      monster: "拜耶查爾",
      location: "冒險洞窟1F",
    },
    {
      key: "2",
      item: "蛇麟 * 1",
      monster: "艾琳達蛇身",
      location: "海音-霧月島",
    },
    {
      key: "3",
      item: "艾琳達水晶球 * 1",
      monster: "艾琳達的追蹤者",
      location: "眠龍洞穴1F",
    },
  ];

  // 合成條件的表格數據
  const synthesisConditions = [
    {
      key: "1",
      condition: "智慧之書(魔法能量之書)* 1",
    },
    {
      key: "2",
      condition: "艾琳達魔杖 * 1",
    },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Card bordered={false}>
        <Title level={2}>【法師Lv24延伸任務-拉絲蒂安的煩惱】</Title>
        <Paragraph>
          <Text strong>任務接取方式：</Text> 法師等級達到
          Lv24，到說話之島找賢者-拉絲蒂安
        </Paragraph>
        <Paragraph>
          【若無對話檔, 請{" "}
          <Button
            type="link"
            href="/patch/update_all_20241208.rar"
            download="update_all_20241208.rar"
          >
            下載補丁
          </Button>{" "}
          】(防毒軟體可能會誤判, 若無法下載請關掉防毒)
        </Paragraph>

        {/* 圖片和表格佈局 */}
        <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
          {/* 左邊圖片 */}
          <Col xs={24} sm={8} style={{ textAlign: "center" }}>
            <img
              src="/images/rastian_npc.png"
              alt="拉絲蒂安"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <Text>說話之島賢者-拉絲蒂安</Text>
          </Col>

          {/* 右邊表格 */}
          <Col xs={24} sm={16}>
            <Title level={4}>蒐集任務道具：</Title>
            <Table
              columns={[
                {
                  title: "任務道具",
                  dataIndex: "item",
                  key: "item",
                },
                {
                  title: "擊殺怪物",
                  dataIndex: "monster",
                  key: "monster",
                },
                {
                  title: "地點",
                  dataIndex: "location",
                  key: "location",
                },
              ]}
              dataSource={questItems}
              pagination={false}
              bordered
            />
          </Col>
        </Row>

        <Paragraph>
          <Text strong>完成蒐集後：</Text>
          與說話之島賢者對話，繳交任務道具可獲得：<Text mark> 艾琳達魔杖</Text>
        </Paragraph>

        {/* 圖片和合成條件表格 */}
        <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
          {/* 左邊圖片 */}
          <Col xs={24} sm={8} style={{ textAlign: "center" }}>
            <img
              src="/images/sorcerer.png"
              alt="sorcerer"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <Text>艾琳達魔杖</Text>
          </Col>

          {/* 右邊表格 */}
          <Col xs={24} sm={16}>
            <Title level={4}>合成瑪那魔杖(刻印)：</Title>
            <Paragraph>至象牙塔3F與索西爾合成瑪那魔杖(刻印)</Paragraph>
            <Table
              columns={[
                {
                  title: "合成條件",
                  dataIndex: "condition",
                  key: "condition",
                },
              ]}
              dataSource={synthesisConditions}
              pagination={false}
              bordered
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ManaMission;
