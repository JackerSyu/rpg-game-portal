import React from "react";
import ForumPostList from "./ForumPostList";

const ForumHome: React.FC = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      <h2>論壇主頁</h2>
      <ForumPostList />
    </div>
  );
};

export default ForumHome;
