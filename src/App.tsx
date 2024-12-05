import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import AppRouter from "./router";

const App: React.FC = () => {
  return (
    <div>
      {/* 導航欄 */}
      <Navbar />
      {/* 路由配置 */}
      <AppRouter />
      {/* 頁腳 */}
      <Footer />
    </div>
  );
};

export default App;
