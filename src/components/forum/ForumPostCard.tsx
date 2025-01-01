import React from "react";
import { Card } from "antd";
import { ForumPost } from "../../core/apiservices/forumPostsApiService";
import { Link } from "react-router-dom";

interface ForumPostCardProps {
  post: ForumPost;
}

const ForumPostCard: React.FC<ForumPostCardProps> = ({ post }) => {
  return (
    <Card
      title={<Link to={`/forum-posts/${post.id}`}>{post.title}</Link>}
      extra={post.is_pinned ? <span style={{ color: "red" }}>置頂</span> : null}
      style={{ marginBottom: "10px" }}
    >
      <p>{post.content.slice(0, 100)}...</p>
      <p>
        作者:{" "}
        {post.is_anonymous ? "匿名" : post.author_character_id || "未知用戶"}
      </p>
      <p>
        回覆數: {post.replies_count} | 查看數: {post.views}
      </p>
    </Card>
  );
};

export default ForumPostCard;
