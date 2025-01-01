import config from "../../configs/apiConfig";

// 新貼文資料結構
export interface NewPost {
  title: string;
  content: string;
  category_id: number;
  author_account?: string;
  is_anonymous?: boolean;
  is_pinned?: boolean;
}

// 貼文結構
export interface ForumPost {
  id: number;
  title: string;
  content: string;
  author_character_id: string | null; // 作者的 character_id
  is_anonymous: boolean;
  is_pinned: boolean;
  replies_count: number;
  views: number;
  created_at: string;
  last_reply_at: string | null;
  category_name: string; // 新增分類名稱
}

// 貼文詳情接口
export interface ForumPostDetail {
  id: number;
  title: string;
  content: string;
  category_name: string;
  author_character_id: string | null;
  is_anonymous: boolean;
  created_at: string;
  replies_count: number;
  views: number;
}

// 發佈新貼文
export const createForumPost = async (post: NewPost): Promise<void> => {
  const response = await fetch(`${config.apiBaseUrl}/forum-posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw new Error("Failed to create forum post");
  }
};

// 獲取貼文列表
export const fetchForumPosts = async (
  categoryId: number
): Promise<ForumPost[]> => {
  const response = await fetch(
    `${config.apiBaseUrl}/forum-posts?category_id=${categoryId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch forum posts");
  }

  return await response.json();
};

// 獲取所有貼文
export const fetchAllForumPosts = async (): Promise<ForumPost[]> => {
  const response = await fetch(`${config.apiBaseUrl}/forum-posts`);

  if (!response.ok) {
    throw new Error("Failed to fetch forum posts");
  }

  return await response.json();
};

// 獲取貼文詳情
export const fetchForumPostDetail = async (
  postId: number
): Promise<ForumPostDetail> => {
  const response = await fetch(`${config.apiBaseUrl}/forum-posts/${postId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch post details");
  }

  return await response.json();
};
