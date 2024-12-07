declare global {
  interface Window {
    _env_?: {
      REACT_APP_API_BASE_URL?: string;
    };
  }
}

export {}; // 防止這個文件被視為模塊
