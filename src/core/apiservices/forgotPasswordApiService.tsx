import config from "../../configs/apiConfig";

export const forgotPasswordApiService = async (data: any) => {
  const response = await fetch(`${config.apiBaseUrl}/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "伺服器錯誤");
  }

  return await response.json();
};
