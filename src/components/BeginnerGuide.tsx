import React from "react";
import { Typography, Card } from "antd";
import { Link } from "react-router-dom";
const { Title, Paragraph, Text } = Typography;

const BeginnerGuide: React.FC = () => {
  return (
    <div className="container p-4">
      <Card bordered={false}>
        <Title level={2} className="has-text-centered">
          新手教學
        </Title>

        <Paragraph>
          <Text strong>米克斯新手該如何起步？</Text>
          <br />
          各角色都有一定優缺點，像多數遊戲，【妖精】【法師】總是比其他角色好入手。
          <br />
          新手練功地圖融入性比其他角色快。
        </Paragraph>

        <Paragraph>
          <Text strong>※ 角色出生搭配：</Text>
          【象牙塔裝備】、【名譽貨幣 * 20】、【英雄變身卡 * 3天】。
          <br />
          可找 GM 領取【回憶蠟燭禮包】：
        </Paragraph>
        <ul>
          <li>
            『回憶蠟燭禮包』開啟後獲得：『回憶蠟燭』 * 1、『洗血藥水』 *
            1、『英雄變身卡』 * 1
          </li>
          <li>使用『回憶蠟燭』等級不會改變，使用『重生藥水』才會（變 1 等）</li>
          <li>
            回憶蠟燭注意：以【目前等級的點數】重置。如果人物 80
            等自殺洗血，結果練回到 60
            等點數錯誤，使用回憶蠟燭時，只有『10』的等級點數可以分配，剩下的點數需要升級後才會再出現。
          </li>
        </ul>

        <Paragraph>
          <Text strong>※ 進入遊戲後：</Text>
          按「HOME」鍵啟動簡易喝水程式「LinHelperZ」，按兩下 HOME
          叫出輔助設定，越上面就是執行度優先權越高。
        </Paragraph>

        <Paragraph>
          <Text strong>※ 角色等級滿足 LV13：</Text>
          會傳送出新手村，開始角色的練功路。
        </Paragraph>

        <Paragraph>
          <Text strong>※ 村莊搭配：</Text>
          【強化魔法師】提供短期因應魔法。村莊傳送師，可依照初期角色到對應自己的【練功地圖】及【村莊】。
        </Paragraph>

        <Paragraph>
          <Text strong>※ 官方試煉流程參考：</Text>{" "}
          <a
            href="https://tw.beanfun.com/lineage/smelting_1.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            官方試煉流程
          </a>
        </Paragraph>

        <Paragraph>
          <Text strong>※ 各職業空身血量上限：</Text>{" "}
          <Link to="/intro">血魔上限</Link>
        </Paragraph>

        {/* <Paragraph>
          <Text strong>※ 寵物資訊：</Text> ????
        </Paragraph> */}

        <Paragraph>
          <Text strong>※ 相關物品掉落：</Text>
        </Paragraph>
        <ul>
          <li>
            可由官網查詢系統查看：
            <Link to="/wiki/drop-search">掉落查詢</Link>
          </li>
          <li>
            隨身怪物掉落查詢：騎村水店（梅林）。如使用出現 modroplist0-c html
            檔案未找到， <a href="/patch/update_20241215.rar">請下載補丁</a>。
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default BeginnerGuide;
