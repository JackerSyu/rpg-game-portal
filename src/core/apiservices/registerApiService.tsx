import config from "../../configs/apiConfig";

interface RegisterRequest {
  game_account: string;
  character_id: string;
  password: string;
}

export const registerApiService = async (
  data: RegisterRequest
): Promise<any> => {
  const response = await fetch(`${config.apiBaseUrl}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "註冊失敗，伺服器錯誤。");
  }

  return result;
};
