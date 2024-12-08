import { DropData } from "../models/dropData";
import config from "../../configs/apiConfig";

// 定義查詢服務
export const dropSearchApiService = async (
  searchQuery: string
): Promise<DropData[]> => {
  const response = await fetch(
    `${config.apiBaseUrl}/dropSearch?search=${encodeURIComponent(searchQuery)}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch dropSearch data");
  }
  return await response.json();
};
