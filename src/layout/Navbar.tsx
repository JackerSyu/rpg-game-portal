import React from "react";
import { Menu, Dropdown, Button, Grid, Avatar, notification } from "antd";
import { ConfigProvider, theme } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useAuth } from "../contexts/AuthContext";

const { useBreakpoint } = Grid;

const Navbar: React.FC = () => {
  const screens = useBreakpoint();
  const { currentUser, isAuthenticated, logout } = useAuth(); // 取得 AuthContext 的值
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    notification.success({
      message: "登出成功",
      description: "您已成功登出。",
    });
    navigate("/"); // 登出後跳轉至首頁
  };

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

  const dropdownMenu = <Menu items={menuItems} />;

  const userMenu = {
    items: [
      {
        key: "profile",
        label: `角色 ID: ${currentUser?.characterId}`,
      },
      {
        key: "change-password",
        label: <Link to="/change-password">密碼變更</Link>, // 新增密碼變更選項
      },
      {
        key: "logout",
        label: "登出",
        onClick: handleLogout,
      },
    ],
  };

  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <strong>米克斯天堂</strong>
          </Link>
        </div>

        {screens.md ? (
          <div className="navbar-menu">
            <Menu mode="horizontal" theme="dark" items={menuItems} />
            {/* 顯示登入/登出區塊 */}
            {isAuthenticated ? (
              <div className="navbar-end is-flex is-align-items-center">
                <Dropdown menu={userMenu} className="ml-4">
                  <Avatar style={{ backgroundColor: "#87d068" }}>
                    {currentUser?.characterId[0].toUpperCase()}
                  </Avatar>
                </Dropdown>
              </div>
            ) : (
              <div className="navbar-end">
                <Link to="/login" className="button is-dark">
                  登入
                </Link>
                <Link to="/register" className="button is-dark ml-2">
                  註冊
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="navbar-dropdown">
            <Dropdown
              menu={{
                items: [
                  ...menuItems,
                  ...(!isAuthenticated
                    ? [
                        { key: "login", label: <Link to="/login">登入</Link> },
                        {
                          key: "register",
                          label: <Link to="/register">註冊</Link>,
                        },
                      ]
                    : [
                        {
                          key: "change-password",
                          label: <Link to="/change-password">密碼變更</Link>,
                        },
                        {
                          key: "logout",
                          label: "登出",
                          onClick: handleLogout,
                        },
                      ]),
                ],
              }}
              trigger={["click"]}
            >
              <Button icon={<MenuOutlined />} type="text" />
            </Dropdown>
          </div>
        )}
      </nav>
    </ConfigProvider>
  );
};

export default Navbar;
