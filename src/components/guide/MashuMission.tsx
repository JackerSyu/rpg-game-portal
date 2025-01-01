import React from "react";
import { Table, Typography, Card, Button } from "antd";

const { Title, Text, Paragraph } = Typography;

const MashuMission: React.FC = () => {
  // 任務獎勵表格數據
  const rewards = [
    { key: "1", item: "名譽貨幣" },
    { key: "2", item: "魔法蛋糕盒" },
    { key: "3", item: "金幣(200000)" },
    { key: "4", item: "經驗藥水130% (2)" },
    { key: "5", item: "經驗藥水150% (2)" },
  ];

  return (
    <div className="container" style={{ padding: "20px", maxWidth: "1200px" }}>
      <Card bordered={false}>
        <Title level={2}>【亞丁大陸任務 - GM的特別委託】</Title>
        <Paragraph>
          <Text strong>說明：</Text> GM
          在亞丁大陸遛狗時，因疏忽大意讓心愛的寵物走失，請玩家協助尋找失蹤的寵物並將其安全帶回。
        </Paragraph>
        <Paragraph>
          <Text strong>任務指引：</Text>{" "}
          「麻糬」隨機出現於亞丁大陸，一旦有人完成任務，會隨機瞬移到不同位置。(維修後騎村周邊為第一個起始地點)
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

        {/* 左右佈局 */}
        <div className="columns is-vcentered" style={{ marginBottom: "20px" }}>
          {/* 左側圖片 */}
          <div
            className="column is-one-third is-flex is-justify-content-center is-align-items-center"
            style={{ textAlign: "center" }}
          >
            <figure className="image is-256x256">
              <img
                src="/images/mashu.png"
                alt="麻糬"
                style={{
                  borderRadius: "8px", // 圓角樣式
                  objectFit: "contain", // 確保圖片自適應
                }}
              />
            </figure>
          </div>

          {/* 右側表格 */}
          <div className="column">
            <Title level={4}>任務獎勵：</Title>
            <Table
              columns={[
                {
                  title: "麻糬的袋子",
                  dataIndex: "item",
                  key: "item",
                },
              ]}
              dataSource={rewards}
              pagination={false}
              bordered
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MashuMission;
