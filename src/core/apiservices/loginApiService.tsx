import config from "../../configs/apiConfig";

interface LoginRequest {
  character_id: string;
  password: string;
}

export const loginApiService = async (data: LoginRequest): Promise<any> => {
  const response = await fetch(`${config.apiBaseUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "登入失敗，伺服器錯誤。");
  }

  return result;
};
