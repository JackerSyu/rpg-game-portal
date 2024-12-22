import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd"; // 匯入 theme 用於設定暗色主題
import App from "./App";
import "bulma/css/bulma.min.css"; // 引入 Bulma 的全局樣式
import "./styles/global.css"; // 加載自定義全局樣式
import "antd/dist/reset.css"; // 重置基本樣式

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
