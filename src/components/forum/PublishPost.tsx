import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  message,
  Spin,
  Checkbox,
  Modal,
  Radio,
} from "antd";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import {
  createForumPost,
  NewPost,
} from "../../core/apiservices/forumPostsApiService";
import {
  fetchForumCategories,
  ForumCategory,
} from "../../core/apiservices/forumCategoriesApiService";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const PublishPost: React.FC = () => {
  const quillRef = useRef<Quill | null>(null); // Quill 實例
  const editorContainerRef = useRef<HTMLDivElement>(null); // 編輯器容器
  const [categories, setCategories] = useState<ForumCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const { currentUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageSize, setImageSize] = useState("medium"); // 預設圖片大小

  // 檢查登入狀態
  useEffect(() => {
    if (!isAuthenticated) {
      message.error("您必須登入才能發佈貼文！");
      navigate("/login");
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

  // 初始化 Quill 編輯器
  useEffect(() => {
    if (!editorContainerRef.current || quillRef.current) return; // 防止多次初始化

    // 初始化 Quill
    const quill = new Quill(editorContainerRef.current, {
      theme: "snow",
      modules: {
        toolbar: {
          container: [
            ["bold", "italic", "underline", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
          handlers: {
            image: () => setImageModalVisible(true), // 顯示圖片插入對話框
          },
        },
      },
      placeholder: "輸入貼文內容...",
    });

    quillRef.current = quill;
  }, []);

  // 確認插入圖片
  const handleInsertImage = () => {
    if (!imageUrl) {
      message.error("請輸入圖片網址！");
      return;
    }

    const quill = quillRef.current;
    if (quill) {
      const range = quill.getSelection();
      quill.insertEmbed(range?.index || 0, "image", imageUrl);

      // 延遲操作，設置圖片大小
      setTimeout(() => {
        const editor = quill.root;
        const imgs = editor.querySelectorAll("img");
        if (imgs.length > 0) {
          const img = imgs[imgs.length - 1] as HTMLImageElement;
          switch (imageSize) {
            case "large":
              img.style.width = "800px";
              img.style.height = "auto";
              break;
            case "medium":
              img.style.width = "500px";
              img.style.height = "auto";
              break;
            case "small":
              img.style.width = "300px";
              img.style.height = "auto";
              break;
            case "custom":
              const customWidth = prompt(
                "請輸入自定義寬度（例如 400px）：",
                "400px"
              );
              const customHeight = prompt(
                "請輸入自定義高度（例如 auto 或 300px）：",
                "auto"
              );
              if (customWidth) img.style.width = customWidth;
              if (customHeight) img.style.height = customHeight;
              break;
            default:
              break;
          }
        }
      }, 100);
    }

    setImageModalVisible(false); // 關閉對話框
    setImageUrl(""); // 清空圖片網址
  };

  // 表單提交處理
  const handleSubmit = async (values: { title: string; category: number }) => {
    const quill = quillRef.current;
    if (!quill) {
      message.error("編輯器未初始化");
      return;
    }

    const content = quill.root.innerHTML; // 獲取編輯器內容
    if (!quill.getText().trim()) {
      message.error("內容不能為空");
      return;
    }

    setLoading(true);

    const newPost: NewPost = {
      title: values.title,
      content,
      category_id: values.category,
      author_account: currentUser?.gameAccount || "anonymous",
      is_anonymous: isAnonymous,
    };

    try {
      await createForumPost(newPost);
      message.success("貼文發佈成功！");
      quill.root.innerHTML = ""; // 清空編輯器
      navigate("/forum");
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
            <div
              ref={editorContainerRef}
              style={{
                border: "1px solid #ddd",
                borderRadius: "4px",
                minHeight: "200px",
              }}
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

      {/* 插入圖片對話框 */}
      <Modal
        title="插入圖片"
        visible={imageModalVisible}
        onCancel={() => setImageModalVisible(false)}
        onOk={handleInsertImage}
      >
        <Form layout="vertical">
          <Form.Item label="圖片網址">
            <Input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="輸入圖片網址"
            />
          </Form.Item>

          <Form.Item label="圖片大小">
            <Radio.Group
              value={imageSize}
              onChange={(e) => setImageSize(e.target.value)}
            >
              <Radio value="large">大（800px）</Radio>
              <Radio value="medium">中（500px）</Radio>
              <Radio value="small">小（300px）</Radio>
              <Radio value="custom">自定義</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PublishPost;
