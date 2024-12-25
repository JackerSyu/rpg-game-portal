import React from "react";
import { Menu, Dropdown, Button, Grid } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;

const Navbar: React.FC = () => {
  const screens = useBreakpoint();

  const menuItems = [
    { key: "intro", label: <Link to="/intro">遊戲介紹</Link> },
    { key: "announcements", label: <Link to="/announcements">公告</Link> },
    {
      key: "guide",
      label: "遊戲指引",
      children: [
        {
          key: "guide-beginner",
          label: <Link to="/guide/beginner">新手教學</Link>,
        },
        {
          key: "guide-advertising",
          label: <Link to="/guide/advertising">推文獎勵</Link>,
        },
        {
          key: "guide-missions",
          label: "特殊任務",
          children: [
            {
              key: "guide-missions-mana",
              label: <Link to="/guide/missions/mana">拉絲蒂安的煩惱</Link>,
            },
            {
              key: "guide-missions-mashu",
              label: <Link to="/guide/missions/mashu">GM的特別委託</Link>,
            },
            {
              key: "guide-missions-daily",
              label: (
                <Link to="/guide/missions/daily">每日任務 - 焚燒的威脅</Link>
              ),
            },
          ],
        },
        {
          key: "guide-events",
          label: "活動",
          children: [
            {
              key: "guide-events-christmas",
              label: <Link to="/event/christmas">聖誕節活動</Link>,
            },
            // 可以在此新增其他活動
          ],
        },
      ],
    },
    {
      key: "wiki",
      label: "遊戲百科",
      children: [
        {
          key: "drop-search",
          label: <Link to="/wiki/drop-search">掉落查詢</Link>,
        },
        {
          key: "magic-dolls",
          label: <Link to="/wiki/magic-dolls">魔法娃娃</Link>,
        },
      ],
    },
    { key: "community", label: "社群", disabled: true },
    { key: "contact", label: <Link to="/contact">客服中心</Link> },
    { key: "download", label: <Link to="/download">遊戲下載</Link> },
    {
      key: "player-guidelines",
      label: <Link to="/player-guidelines">玩家須知</Link>,
    },
    { key: "disclaimer", label: <Link to="/disclaimer">免責聲明</Link> },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <strong>米克斯天堂</strong>
        </Link>
      </div>

      {/* 使用 Ant Design 的響應式 API */}
      {screens.md ? (
        <div className="navbar-menu">
          <Menu mode="horizontal" theme="light" items={menuItems} />
        </div>
      ) : (
        <div className="navbar-dropdown">
          <Dropdown overlay={<Menu items={menuItems} />} trigger={["click"]}>
            <Button icon={<MenuOutlined />} type="text" />
          </Dropdown>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
