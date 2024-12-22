import React from "react";
import { Table, Typography, Card } from "antd";

const { Title, Paragraph, Text } = Typography;
const MagicDolls: React.FC = () => {
  // 定義魔法娃娃的資料
  const dollsData = [
    {
      key: "1",
      image: "/images/magic_doll/wolf-baby.jpg",
      name: "野狼寶寶",
      crystalCost: "50",
      description: (
        <>
          效果時間：召喚 <Text strong>1800 秒</Text>
          <br />
          特殊效果：<Text strong>3% 機率攻擊力 +15</Text>
        </>
      ),
    },
    {
      key: "2",
      image: "/images/magic_doll/fatty.jpg",
      name: "肥肥",
      crystalCost: "50",
      description: (
        <>
          效果時間：召喚 <Text strong>1800 秒</Text>
          <br />
          特殊效果：<Text strong>增加負重 +500</Text>
        </>
      ),
    },
    {
      key: "3",
      image: "/images/magic_doll/yeti.jpg",
      name: "魔法娃娃：雪怪",
      crystalCost: "50",
      description: (
        <>
          效果時間：召喚 <Text strong>1800 秒</Text>
          <br />
          特殊效果：<Text strong>寒冰耐性 +7</Text>
          <br />
          {/* <Text type="secondary">
            韓國「吃辣牛肉泡麵，抽魔法娃娃：雪怪」的抽獎贈品
          </Text> */}
        </>
      ),
    },
    {
      key: "4",
      image: "/images/magic_doll/skelba.jpg",
      name: "小思克巴",
      crystalCost: "50",
      description: (
        <>
          效果時間：召喚 <Text strong>1800 秒</Text>
          <br />
          特殊效果：<Text strong>每 64 秒，魔力恢復 15</Text>
        </>
      ),
    },
    {
      key: "5",
      image: "/images/magic_doll/elder.jpg",
      name: "長老",
      crystalCost: "50",
      description: (
        <>
          效果時間：召喚 <Text strong>1800 秒</Text>
          <br />
          特殊效果：<Text strong>每 64 秒，魔力恢復 15</Text>
        </>
      ),
    },
    {
      key: "6",
      image: "/images/magic_doll//qustan.jpg",
      name: "奎斯坦修",
      crystalCost: "50",
      description: (
        <>
          效果時間：召喚 <Text strong>1800 秒</Text>
          <br />
          特殊效果：<Text strong>3% 機率攻擊力 +15</Text>
        </>
      ),
    },
    {
      key: "7",
      image: "/images/magic_doll/golem.jpg",
      name: "石頭高崙",
      crystalCost: "50",
      description: (
        <>
          效果時間：召喚 <Text strong>1800 秒</Text>
          <br />
          特殊效果：<Text strong>4%機率，怪物傷害減免+5</Text>
        </>
      ),
    },
    {
      key: "8",
      image: "/images/magic_doll/medusa.jpg",
      name: "蛇女",
      crystalCost: "50",
      description: (
        <>
          效果時間：召喚 <Text strong>1800 秒</Text>
          <br />
          特殊效果：<Text strong>每 64 秒，體力恢復 40</Text>
          <br />
          {/* <Text type="secondary">台灣活動及韓國活動特殊贈品</Text> */}
        </>
      ),
    },
    {
      key: "9",
      image: "/images/magic_doll/sparto.jpg",
      name: "史巴托",
      crystalCost: "50",
      description: (
        <>
          效果時間：召喚 <Text strong>1800 秒</Text>
          <br />
          特殊效果：<Text strong>額外攻擊點數 +2</Text>
        </>
      ),
    },
    {
      key: "10",
      image: "/images/magic_doll/arian.jpg",
      name: "亞力安",
      crystalCost: "50",
      description: (
        <>
          效果時間：召喚 <Text strong>1800 秒</Text>
          <br />
          特殊效果：<Text strong>遠距離攻擊 +1，遠距離命中 +1</Text>
        </>
      ),
    },
  ];

  // 定義表格的欄位
  const columns = [
    {
      title: "圖片",
      dataIndex: "image",
      key: "image",
      width: 48,
      render: (src: string) => (
        <figure className="image is-32x32 has-text-centered">
          <img
            src={src}
            alt=""
            style={{
              width: "45px",
              height: "45px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </figure>
      ),
    },
    {
      title: "名稱",
      dataIndex: "name",
      key: "name",
      align: "center" as const,
      className: "is-vcentered",
    },
    {
      title: "消耗魔法結晶體數量",
      dataIndex: "crystalCost",
      key: "crystalCost",
      align: "center" as const,
    },
    {
      title: "解釋/其他資訊",
      dataIndex: "description",
      key: "description",
      align: "center" as const,
    },
  ];

  return (
    <div className="container p-4">
      {/* 頁面標題 */}
      <Card bordered={false} className="mb-4">
        <Title level={2} className="has-text-centered">
          魔法娃娃介紹
        </Title>
        <Paragraph className="has-text-centered">
          本頁面提供各種魔法娃娃的相關資訊，包括消耗的魔法結晶體數量、效果時間及其他特殊效果。
        </Paragraph>
      </Card>

      {/* 魔法娃娃資料表格 */}
      <Card bordered>
        <Table
          columns={columns}
          dataSource={dollsData}
          pagination={false}
          bordered
          rowClassName="is-vcentered"
        />
      </Card>
    </div>
  );
};

export default MagicDolls;
