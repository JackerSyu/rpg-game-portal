import React, { useState } from "react";
import { Form, Input, Button, Typography, Card, App } from "antd";
import { useNavigate } from "react-router-dom";
import { forgotPasswordApiService } from "../../core/apiservices/forgotPasswordApiService";

const { Title, Text } = Typography;

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { notification } = App.useApp();

  const handleForgotPassword = async (values: any) => {
    setLoading(true);
    try {
      const result = await forgotPasswordApiService(values);

      notification.success({
        message: "密碼重置成功",
        description: "您的密碼已重置為遊戲帳號，請使用新密碼登入。",
      });

      // 跳轉至登入頁面
      navigate("/login");
    } catch (error: any) {
      notification.error({
        message: "重置失敗",
        description: error.message || "伺服器錯誤，請稍後再試。",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container is-flex is-justify-content-center is-align-items-center mt-6">
      <Card style={{ width: 400, padding: "20px" }}>
        <Title level={3} className="has-text-centered">
          忘記密碼
        </Title>
        <Text className="has-text-centered" type="secondary">
          請填寫以下資訊來重置密碼
        </Text>
        <Form
          layout="vertical"
          onFinish={handleForgotPassword}
          className="mt-4"
        >
          <Form.Item
            label="遊戲帳號"
            name="game_account"
            rules={[{ required: true, message: "請輸入遊戲帳號！" }]}
          >
            <Input placeholder="輸入遊戲帳號" />
          </Form.Item>
          <Form.Item
            label="最高等級角色名稱"
            name="character_name"
            rules={[{ required: true, message: "請輸入最高等級角色名稱！" }]}
          >
            <Input placeholder="輸入最高等級角色名稱" />
          </Form.Item>
          <Form.Item
            label="最高角色等級"
            name="character_level"
            rules={[
              { required: true, message: "請輸入最高角色等級！" },
              { pattern: /^\d+$/, message: "等級必須為數字！" },
            ]}
          >
            <Input placeholder="輸入最高角色等級" />
          </Form.Item>
          <Form.Item
            label="帳號角色數量"
            name="character_count"
            rules={[
              { required: true, message: "請輸入帳號角色數量！" },
              { pattern: /^\d+$/, message: "角色數量必須為數字！" },
            ]}
          >
            <Input placeholder="輸入帳號角色數量" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            className="mt-2"
          >
            重置密碼
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default ForgotPassword;
