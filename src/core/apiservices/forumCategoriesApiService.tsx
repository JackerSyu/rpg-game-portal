import config from "../../configs/apiConfig";

// 分類資料結構
export interface ForumCategory {
  id: number;
  name: string;
  description: string;
}

// 獲取所有分類
export const fetchForumCategories = async (): Promise<ForumCategory[]> => {
  const response = await fetch(`${config.apiBaseUrl}/forum-categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch forum categories");
  }

  return await response.json();
};
