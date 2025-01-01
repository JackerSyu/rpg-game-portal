import React, { useState } from "react";
import { Form, Input, Button, Typography, Card, App } from "antd";
import { loginApiService } from "../../core/apiservices/loginApiService";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { notification } = App.useApp();

  const handleLogin = async (values: any) => {
    setLoading(true);
    try {
      const result = await loginApiService({
        character_id: values.character_id,
        password: values.password,
      });

      notification.success({
        message: "登入成功",
        description: result.message,
      });
      // 設定 token 過期時間 (2 小時後過期)
      const tokenExpiry = Date.now() + 2 * 60 * 60 * 1000;

      // 保存登入資訊到 AuthContext
      login({
        characterId: values.character_id,
        gameAccount: result.game_account, // 設定遊戲帳號
        token: result.token,
        tokenExpiry,
      });

      navigate("/");
    } catch (error: any) {
      notification.error({
        message: "登入失敗",
        description: error.message || "伺服器錯誤",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container is-flex is-justify-content-center is-align-items-center mt-6">
      <Card style={{ width: 400, padding: "20px" }}>
        <Title level={3} className="has-text-centered">
          登入
        </Title>
        <Text className="has-text-centered" type="secondary">
          請輸入角色 ID 和密碼
        </Text>
        <Form layout="vertical" onFinish={handleLogin} className="mt-4">
          <Form.Item
            label="角色 ID"
            name="character_id"
            rules={[{ required: true, message: "請輸入角色 ID！" }]}
          >
            <Input placeholder="輸入角色 ID" />
          </Form.Item>
          <Form.Item
            label="密碼"
            name="password"
            rules={[{ required: true, message: "請輸入密碼！" }]}
          >
            <Input.Password placeholder="輸入密碼" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            className="mt-2"
          >
            登入
          </Button>
        </Form>

        {/* 新增註冊與忘記密碼連結 */}
        <div className="has-text-centered mt-4">
          <Text
            type="secondary"
            style={{ fontSize: "0.9rem" }}
            className="mr-4"
          >
            <Link to="/register">註冊會員</Link>
          </Text>
          <Text type="secondary" style={{ fontSize: "0.9rem" }}>
            <Link to="/forgot-password">忘記密碼</Link>
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default Login;
