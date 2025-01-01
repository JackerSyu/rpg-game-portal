import React from "react";
import { Table, Typography, Card, List, Collapse } from "antd";
const { Panel } = Collapse;
const { Title, Paragraph, Text } = Typography;

const AdvertisingReward: React.FC = () => {
  // 活動獎勵表格數據
  const rewards = [
    { key: "1", item: "經驗藥水130%*2" },
    { key: "2", item: "經驗藥水150%*2" },
    { key: "3", item: "經驗藥水170%*1" },
    { key: "4", item: "經驗藥水200%*1" },
    { key: "5", item: "金幣(100000)" },
    { key: "6", item: "對武器施法的卷軸*1" },
    { key: "7", item: "對盔甲施法的卷軸*1" },
    { key: "8", item: "名譽貨幣*1" },
    { key: "9", item: "巧克力蛋糕*1" },
    {
      key: "10",
      item: (
        <span>
          強化保護卷軸*1 (強化失敗裝備不消失，有機率強化-1)
          <br />
          (未滿+10需要一張、+10以上需要二張、+15以上需要三張)
          <br />
          (衝裝精煉時帶在身上，失敗時自動觸發扣除數量)
        </span>
      ),
    },
  ];

  const facebookGroups = [
    "https://www.facebook.com/groups/1594627014123604/",
    "https://www.facebook.com/groups/318668358570584/",
    "https://www.facebook.com/groups/861847617297945/",
    "https://www.facebook.com/groups/309459169547599/",
    "https://www.facebook.com/groups/1113108818729722/",
    "https://www.facebook.com/groups/327982584298070/",
    "https://www.facebook.com/groups/617070635113809/",
    "https://www.facebook.com/groups/162326847259633/",
    "https://www.facebook.com/groups/1479500612362554/",
    "https://www.facebook.com/groups/1919200335026830/",
    "https://www.facebook.com/groups/1993631524206941/",
    "https://www.facebook.com/groups/507872739558494/",
    "https://www.facebook.com/groups/856159834763164/",
    "https://www.facebook.com/groups/130169707762184/",
    "https://www.facebook.com/groups/1112721765531562/",
    "https://www.facebook.com/groups/1773612669330796/",
    "https://www.facebook.com/groups/1586846998099737/",
    "https://www.facebook.com/groups/1465547223761495/",
    "https://www.facebook.com/groups/1697243327244454/",
    "https://www.facebook.com/groups/836933653371108/",
    "https://www.facebook.com/groups/634944343307482/",
    "https://www.facebook.com/groups/2125274234154748/",
    "https://www.facebook.com/groups/1188985277901979/",
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <Card bordered={false}>
        <Title level={2}>推文獎勵</Title>
        <Paragraph>
          鼓勵玩家幫忙宣傳伺服器，擬定宣傳活動規則。每天推廣伺服器活動，即可申請領取獎勵，以午夜過後算隔天。
        </Paragraph>
        <Paragraph>
          每人每天最多申請一次，需要發到 5 個不同的私服社團，算是完成一次推文。
        </Paragraph>
        <Paragraph>請以 LINE 官方回報推文網址。</Paragraph>

        <Title level={3}>活動獎勵</Title>
        <Paragraph>
          （一天申請一次，隨機取得一項，審核可能沒有天天發放）
        </Paragraph>
        <div style={{ marginBottom: "20px" }}>
          <Table
            columns={[
              {
                title: "獎勵內容",
                dataIndex: "item",
                key: "item",
              },
            ]}
            dataSource={rewards}
            pagination={false}
            bordered
          />
        </div>

        <Title level={2}>推文教學</Title>
        <Paragraph>
          <Text strong>注意：</Text>
          <ol>
            <li>
              請發到 Facebook 私服社團（請到指定社團 →
              <a href="#sharelist">清單</a>）
            </li>
            <li>需要發到 5 個不同的私服社團</li>
            <li>需註明遊戲 ID 及當天日期</li>
            <li>請複製以下範本（自行修改 ID 及日期）：</li>
          </ol>
        </Paragraph>
        <div style={{ marginBottom: "20px" }}>
          <Collapse bordered defaultActiveKey={[]}>
            <Panel header="點擊查看推文範本" key="1">
              <Paragraph>
                遊戲 ID: XXX
                <br />
                推文日期: 2025/01/01
                <br />
                🔥米克斯天堂🔥
                <br />
                ⭐=====遊戲介紹=====⭐
                <br />
                3.51C 全仿正, 無自創系統武器
                <br />
                👍現在加入送英雄變身體驗卡
                <br />
                ❌ 無私自販賣武器裝備
                <br />
                ❌無親友
                <br />
                ❌無 AT 獎勵
                <br />
                ❌無鎖寶
                <br />
                ❌無內掛
                <br />
                ⭐金幣服
                <br />
                ⭐不干涉遊戲
                <br />
                ⭐嚴抓掛機
                <br />
                ⭐持續更新中...
                <br />
                ⭐=====遊戲設定=====⭐
                <br />
                「經驗值」: 500.0【倍】
                <br />
                「金幣掉落」: 5.0【倍】
                <br />
                「正義值」: 1.0【倍】
                <br />
                「友好度」: 1.0【倍】
                <br />
                「物品掉落」: 1.0【倍】
                <br />
                「衝武」: 13 %
                <br />
                「衝防」: 8 %
                <br />
                「萬能藥數量限制」: 5
                <br />
                「能力值上限」: 35
                <br />
                ⭐====== 官方 ======⭐
                <br />
                Facebook :
                <a
                  href="https://www.facebook.com/profile.php?id=61563704583003"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  官方Facebook
                </a>
                <br />
                官網:
                <a
                  href="https://webserver.l1jlineage.cc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  官方網站
                </a>
                <br />
                官方LINE:
                <a
                  href="https://lin.ee/mQtkq0P"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  官方LINE
                </a>
              </Paragraph>
            </Panel>
          </Collapse>
        </div>
        <Paragraph>
          5. 推文完請複製推文網址私訊 LINE 官方：
          <Text code>@189dndcr</Text>（需要搜集 5 個網址）
        </Paragraph>
        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <img
            src="/images/推文1.png"
            alt="推文步驟1"
            style={{ width: "500px", marginBottom: "10px" }}
          />
          <br />
          <img
            src="/images/推文2.png"
            alt="推文步驟2"
            style={{ width: "500px" }}
          />
        </div>

        <Title level={2} id="sharelist">
          特定 FB 社團
        </Title>
        <Paragraph>
          ※ 請在以下特定 FB 社團進行推文，如果有沒在列表中的社團請在 FB 或 LINE
          私訊給我方便審核：
        </Paragraph>

        {/* 折疊組件 */}
        <Collapse bordered={true} defaultActiveKey={[]}>
          <Panel header="點擊查看特定 FB 社團列表" key="1">
            <List
              dataSource={facebookGroups}
              renderItem={(link) => (
                <List.Item>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </List.Item>
              )}
              bordered
            />
          </Panel>
        </Collapse>
      </Card>
    </div>
  );
};

export default AdvertisingReward;
