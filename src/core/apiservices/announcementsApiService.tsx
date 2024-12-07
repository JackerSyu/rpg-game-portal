import { Announcement } from "../models/announcements";
import config from "../../configs/apiConfig";
// 獲取所有公告
export const fetchAnnouncements = async (): Promise<Announcement[]> => {
  const response = await fetch(`${config.apiBaseUrl}/announcements`);

  if (!response.ok) {
    throw new Error("Failed to fetch announcements");
  }

  return await response.json();
};
