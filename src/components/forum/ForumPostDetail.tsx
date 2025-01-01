import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Spin, message, Button, Card, Typography } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import moment from "moment";
import { fetchForumPostDetail } from "../../core/apiservices/forumPostsApiService";

const { Text, Title } = Typography;

interface PostDetail {
  id: number;
  title: string;
  content: string;
  category_name: string;
  author_character_id: string | null;
  is_anonymous: boolean;
  created_at: string;
  replies_count: number;
  views: number;
}

// 時間格式化工具
const formatDate = (dateString: string): string => {
  return moment(dateString).format("YYYY/MM/DD HH:mm");
};

const ForumPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [replyContent, setReplyContent] = useState<string>("");

  // 加載貼文詳情
  useEffect(() => {
    setLoading(true);
    fetchForumPostDetail(Number(id))
      .then((data) => setPost(data))
      .catch(() => message.error("無法加載貼文詳情"))
      .finally(() => setLoading(false));
  }, [id]);

  // 提交回覆
  const handleReplySubmit = () => {
    if (!replyContent.trim()) {
      message.error("回覆內容不能為空");
      return;
    }
    console.log("回覆內容:", replyContent);
    message.success("回覆成功！");
    setReplyContent("");
  };

  if (loading) return <Spin spinning={true} />;

  if (!post) return <div>貼文不存在</div>;

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      <Title level={3} style={{ color: "#fff" }}>
        {post.title}
      </Title>
      <Text type="secondary">
        [{post.category_name}] 發表於 {formatDate(post.created_at)} |{" "}
        {post.views} 次查看
      </Text>
      <div style={{ margin: "20px 0" }} />

      {/* 貼文內容區塊 */}
      <Card
        style={{
          backgroundColor: "#1a1a1a",
          borderRadius: "8px",
          color: "#fff",
          marginBottom: "20px",
        }}
        bodyStyle={{ display: "flex", padding: "20px" }}
      >
        {/* 左側 作者區塊 */}
        <div
          style={{
            flex: "0 0 30%",
            backgroundColor: "#242424",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <img
            src={`https://via.placeholder.com/128?text=${
              post.is_anonymous
                ? "匿名"
                : post.author_character_id?.charAt(0).toUpperCase() || "U"
            }`}
            alt="作者頭像"
            style={{
              width: "128px",
              height: "128px",
              borderRadius: "50%",
              marginBottom: "10px",
            }}
          />
          <br />
          <Text style={{ color: "#fff", fontSize: "16px" }}>
            {post.is_anonymous
              ? "匿名"
              : post.author_character_id || "未知用戶"}
          </Text>
          <div style={{ marginTop: "10px" }}>
            <Text type="secondary" style={{ fontSize: "12px" }}>
              發表於 {formatDate(post.created_at)}
            </Text>
          </div>
        </div>

        {/* 右側 貼文內容區塊 */}
        <div style={{ flex: "1", padding: "20px", color: "#ccc" }}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Card>

      {/* 回覆區塊 */}
      <Card
        style={{
          backgroundColor: "#1a1a1a",
          borderRadius: "8px",
          color: "#fff",
        }}
      >
        <Title level={5} style={{ color: "#fff" }}>
          回覆此貼文
        </Title>
        <ReactQuill
          theme="snow"
          value={replyContent}
          onChange={setReplyContent}
          placeholder="輸入回覆內容..."
        />
        <Button
          type="primary"
          onClick={handleReplySubmit}
          style={{ marginTop: "20px" }}
        >
          提交回覆
        </Button>
      </Card>

      <div style={{ marginTop: "20px" }}>
        <Link to="/forum">
          <Button type="link" style={{ color: "#1890ff" }}>
            返回論壇
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ForumPostDetail;
