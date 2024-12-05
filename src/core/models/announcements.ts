// 定義單個公告的結構
export interface Announcement {
  id: string;
  type: string;
  title: string;
  content: string;
  add_date: string;
  add_user: string;
}

// 定義不同類型公告的集合
export interface Announcements {
  latest: Announcement[];
  news: Announcement[];
  updates: Announcement[];
}
