import React, { useState } from "react";
import { Form, Input, Button, Typography, Card, notification } from "antd";
import { registerApiService } from "../../core/apiservices/registerApiService";
import { useNavigate } from "react-router-dom"; // 引入 useNavigate

const { Title, Text } = Typography;

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // 初始化 useNavigate

  const handleRegister = async (values: any) => {
    setLoading(true);
    try {
      const result = await registerApiService({
        game_account: values.game_account,
        character_id: values.character_id,
        password: values.password,
      });

      notification.success({
        message: "註冊成功",
        description: result.message,
      });

      // 成功注册后跳转到登录页面
      navigate("/login");
    } catch (error: any) {
      notification.error({
        message: "註冊失敗",
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
          註冊帳戶
        </Title>
        <Text className="has-text-centered" type="secondary">
          請填寫以下資訊完成註冊
        </Text>
        <Form layout="vertical" onFinish={handleRegister} className="mt-4">
          <Form.Item
            label="遊戲帳號"
            name="game_account"
            rules={[{ required: true, message: "請輸入遊戲帳號！" }]}
          >
            <Input placeholder="輸入遊戲帳號" />
          </Form.Item>
          <Form.Item
            label="遊戲角色 ID"
            name="character_id"
            rules={[{ required: true, message: "請輸入遊戲角色 ID！" }]}
          >
            <Input placeholder="輸入遊戲角色 ID" />
          </Form.Item>
          <Form.Item
            label="密碼"
            name="password"
            rules={[
              { required: true, message: "請輸入密碼！" },
              { min: 6, message: "密碼至少需要6個字元！" },
            ]}
          >
            <Input.Password placeholder="輸入密碼" />
          </Form.Item>
          <Form.Item
            label="確認密碼"
            name="confirm_password"
            dependencies={["password"]}
            rules={[
              { required: true, message: "請再次輸入密碼！" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("兩次輸入的密碼不一致！"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="確認密碼" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            className="mt-2"
          >
            註冊
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
