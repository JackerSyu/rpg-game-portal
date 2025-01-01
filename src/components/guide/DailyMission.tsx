import React from "react";
import { Table, Typography, Card } from "antd";

const { Title, Text, Paragraph } = Typography;

const DailyMission: React.FC = () => {
  // 每日任務禮盒內容物表格數據
  const dailyBoxItems = [
    { key: "1", item: "骷髏聖盃" },
    { key: "2", item: "勝利的徽章" },
    { key: "3", item: "經驗藥水130% (2)" },
    { key: "4", item: "精靈餅乾 (20)" },
    { key: "5", item: "勇敢藥水 (20)" },
    { key: "6", item: "藍色藥水 (20)" },
    { key: "7", item: "濃縮終極體力恢復劑 (20)" },
    { key: "8", item: "古代終極體力恢復劑 (20)" },
    { key: "9", item: "對武器施法的卷軸 (白/祝福/受詛咒)" },
    { key: "10", item: "對盔甲施法的卷軸 (白/祝福/受詛咒)" },
  ];

  // 搜集道具表格數據
  const dailyRewardBox = [
    { key: "1", item: "金幣 (100000)" },
    { key: "2", item: "每日任務禮盒 (1)" },
  ];

  // 搜集道具表格數據
  const collectionItems = [
    { key: "1", item: "燃燒的獸皮", quantity: "10" },
    { key: "2", item: "熾熱的盔甲碎片", quantity: "20" },
    { key: "3", item: "熔岩核心", quantity: "20" },
  ];

  return (
    <div className="container" style={{ padding: "20px", maxWidth: "1200px" }}>
      <Card bordered={false}>
        <Title level={3}>每日任務-焚燒的威脅</Title>
        <Paragraph>
          <Text strong>任務接取方式：</Text> 到威頓村莊找 NPC - 卡爾
        </Paragraph>

        {/* 左右佈局 */}
        <div className="columns is-vcentered" style={{ marginBottom: "20px" }}>
          {/* 左側圖片 */}
          <div
            className="column is-one-third is-flex is-justify-content-center is-align-items-center"
            style={{ textAlign: "center" }}
          >
            <figure className="image is-256x256">
              <img
                src="/images/daily1.png"
                alt="NPC 卡爾"
                style={{
                  borderRadius: "8px",
                  objectFit: "contain",
                }}
              />
            </figure>
          </div>

          {/* 右側任務目標 */}
          <div className="column">
            <Title level={4}>任務目標：獵殺火龍窟怪物</Title>
            <Paragraph>在火龍窟中獵殺怪物並搜集以下道具：</Paragraph>
            <Table
              columns={[
                {
                  title: "道具名稱",
                  dataIndex: "item",
                  key: "item",
                },
                {
                  title: "需求數量",
                  dataIndex: "quantity",
                  key: "quantity",
                },
              ]}
              dataSource={collectionItems}
              pagination={false}
              bordered
              style={{ marginBottom: "20px" }}
            />
          </div>
        </div>

        {/* 獎勵部分 */}
        <Title level={3}>獎勵</Title>
        <Table
          columns={[
            {
              title: "",
              dataIndex: "item",
              key: "item",
            },
          ]}
          dataSource={dailyRewardBox}
          pagination={false}
          bordered
          style={{ marginBottom: "20px" }}
        />

        {/* 獎勵部分 */}
        <Title level={3}>每日任務禮盒</Title>
        <Table
          columns={[
            {
              title: "機率獲得以下",
              dataIndex: "item",
              key: "item",
            },
          ]}
          dataSource={dailyBoxItems}
          pagination={false}
          bordered
        />
      </Card>
    </div>
  );
};

export default DailyMission;
