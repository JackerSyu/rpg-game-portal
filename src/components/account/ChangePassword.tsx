import React, { useState } from "react";
import { Form, Input, Button, Typography, Card, App } from "antd";
import { useAuth } from "../../contexts/AuthContext";
import { changePasswordApiService } from "../../core/apiservices/changePasswordApiService";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const ChangePassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [locked, setLocked] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const { currentUser, logout } = useAuth();
  const { notification } = App.useApp();
  const navigate = useNavigate();

  const handleChangePassword = async (values: any) => {
    setLoading(true);
    try {
      const result = await changePasswordApiService({
        game_account: currentUser?.gameAccount,
        character_id: values.character_id,
        old_password: values.old_password,
        new_password: values.new_password,
      });

      notification.success({
        message: "密碼變更成功",
        description: "更改資料完成請重新登入",
      });

      // 鎖住輸入欄位並開始倒數
      setLocked(true);
      setCountdown(5);

      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setTimeout(() => {
              logout(); // 使用 setTimeout 避免 React 警告
              navigate("/login");
            }, 0);
            return null;
          }
          return prev! - 1;
        });
      }, 1000);
    } catch (error: any) {
      notification.error({
        message: "密碼變更失敗",
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
          密碼變更
        </Title>
        <Text className="has-text-centered" type="secondary">
          請輸入您的舊密碼並設定新密碼
        </Text>
        <br />
        {countdown !== null && (
          <Text className="has-text-centered" type="warning">
            系統將在 {countdown} 秒後登出...
          </Text>
        )}
        <Form
          layout="vertical"
          onFinish={handleChangePassword}
          className="mt-4"
        >
          <Form.Item label="遊戲帳號">
            <Input value={currentUser?.gameAccount} disabled />
          </Form.Item>

          <Form.Item
            label="會員 ID"
            name="character_id"
            initialValue={currentUser?.characterId}
            rules={[{ required: true, message: "請輸入會員 ID！" }]}
          >
            <Input placeholder="輸入會員 ID" disabled={locked} />
          </Form.Item>

          <Form.Item
            label="舊密碼"
            name="old_password"
            rules={[{ required: true, message: "請輸入舊密碼！" }]}
          >
            <Input.Password placeholder="輸入舊密碼" disabled={locked} />
          </Form.Item>

          <Form.Item
            label="新密碼"
            name="new_password"
            rules={[
              { required: true, message: "請輸入新密碼！" },
              { min: 6, message: "新密碼至少需要 6 個字元！" },
            ]}
          >
            <Input.Password placeholder="輸入新密碼" disabled={locked} />
          </Form.Item>

          <Form.Item
            label="確認新密碼"
            name="confirm_new_password"
            dependencies={["new_password"]}
            rules={[
              { required: true, message: "請再次輸入新密碼！" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("new_password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("兩次輸入的密碼不一致！"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="再次確認新密碼" disabled={locked} />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            className="mt-2"
            disabled={locked}
          >
            確認變更
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default ChangePassword;
