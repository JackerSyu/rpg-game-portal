import React, { useEffect, useState } from "react";
import { Table, Spin, message } from "antd";
import { Link } from "react-router-dom";
import {
  fetchAllForumPosts,
  ForumPost,
} from "../../core/apiservices/forumPostsApiService";
import moment from "moment";

// 時間格式化工具
const formatDate = (dateString: string | null): string => {
  if (!dateString) return "無";
  return moment(dateString).format("YYYY/MM/DD HH:mm");
};

const ForumPostList: React.FC = () => {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAllForumPosts()
      .then((data) => {
        setPosts(data);
        console.log("data:", data);
      })
      .catch(() => message.error("無法加載貼文列表"))
      .finally(() => setLoading(false));
  }, []);

  // 表格列定義
  const columns = [
    {
      title: "標題",
      dataIndex: "title",
      key: "title",
      render: (text: string, record: ForumPost) => (
        <Link to={`/forum-posts/${record.id}`}>
          {record.is_pinned ? (
            <span style={{ color: "red", marginRight: 8 }}>置頂</span>
          ) : null}
          {record.category_name && (
            <span style={{ marginRight: 8 }}>[{record.category_name}]</span>
          )}
          {text}
        </Link>
      ),
      width: "64%", // 標題佔比 64%
    },
    {
      title: "作者",
      key: "author",
      render: (record: ForumPost) => (
        <div style={{ fontSize: "12px", lineHeight: "1.5" }}>
          <div>
            {record.is_anonymous
              ? "匿名"
              : record.author_character_id || "未知用戶"}
          </div>
          <div>{formatDate(record.created_at)}</div>
        </div>
      ),
      width: "13%", // 作者與發文時間佔比 13%
    },
    {
      title: "回覆/查看",
      key: "replies_views",
      render: (record: ForumPost) => (
        <div style={{ fontSize: "12px", lineHeight: "1.5" }}>
          <div>{record.replies_count}</div>
          <div>{record.views}</div>
        </div>
      ),
      width: "10%", // 回覆數與查看數佔比 10%
    },
    {
      title: "最後發表",
      key: "last_reply",
      render: (record: ForumPost) => (
        <div style={{ fontSize: "12px", lineHeight: "1.5" }}>
          <div>{record.last_reply_at ? "未知" : "無"}</div>
          <div>
            {record.last_reply_at ? formatDate(record.last_reply_at) : "無"}
          </div>
        </div>
      ),
      width: "13%", // 最新回覆者與時間佔比 13%
    },
  ];

  return (
    <Spin spinning={loading}>
      <Table
        dataSource={posts}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />
    </Spin>
  );
};

export default ForumPostList;
