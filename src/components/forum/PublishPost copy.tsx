import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, message, Spin, Checkbox } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  createForumPost,
  NewPost,
} from "../../core/apiservices/forumPostsApiService";
import {
  fetchForumCategories,
  ForumCategory,
} from "../../core/apiservices/forumCategoriesApiService";
import { useAuth } from "../../contexts/AuthContext"; // AuthContext
import { useNavigate } from "react-router-dom"; // 用於重定向

const { Option } = Select;

const PublishPost: React.FC = () => {
  const [categories, setCategories] = useState<ForumCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<string>(""); // 富文本內容
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false); // 匿名選項

  const { currentUser, isAuthenticated } = useAuth(); // 獲取當前用戶及登入狀態
  const navigate = useNavigate(); // 用於導航

  // 檢查登入狀態
  useEffect(() => {
    if (!isAuthenticated) {
      message.error("您必須登入才能發佈貼文！");
      navigate("/login"); // 重定向到登入頁面
    }
  }, [isAuthenticated, navigate]);

  // 加載分類數據
  useEffect(() => {
    setLoading(true);
    fetchForumCategories()
      .then((data) => setCategories(data))
      .catch(() => message.error("無法加載分類列表"))
      .finally(() => setLoading(false));
  }, []);

  // 表單提交處理
  const handleSubmit = async (values: { title: string; category: number }) => {
    if (!content.trim()) {
      message.error("內容不能為空");
      return;
    }
    setLoading(true);

    const newPost: NewPost = {
      title: values.title,
      content,
      category_id: values.category,
      author_account: currentUser?.gameAccount || "anonymous", // 默認為匿名
      is_anonymous: isAnonymous,
    };

    try {
      await createForumPost(newPost);
      message.success("貼文發佈成功！");
      setContent(""); // 清空富文本編輯器
      navigate("/forum"); // 發佈成功後跳轉到論壇主頁
    } catch (error) {
      message.error("貼文發佈失敗，請稍後再試！");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h2>發佈貼文</h2>
      <Spin spinning={loading}>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="標題"
            name="title"
            rules={[{ required: true, message: "請輸入貼文標題" }]}
          >
            <Input placeholder="輸入貼文標題" />
          </Form.Item>

          <Form.Item
            label="分類"
            name="category"
            rules={[{ required: true, message: "請選擇一個分類" }]}
          >
            <Select placeholder="選擇分類">
              {categories.map((cat) => (
                <Option key={cat.id} value={cat.id}>
                  {cat.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="內容">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder="輸入貼文內容..."
            />
          </Form.Item>

          <Form.Item>
            <Checkbox
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
            >
              匿名發佈
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              發佈
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};

export default PublishPost;
