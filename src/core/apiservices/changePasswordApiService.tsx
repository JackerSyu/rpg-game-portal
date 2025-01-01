import config from "../../configs/apiConfig";

export const changePasswordApiService = async (data: any) => {
  const response = await fetch(`${config.apiBaseUrl}/change-info`, {
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
