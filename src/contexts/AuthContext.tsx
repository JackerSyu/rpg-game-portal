import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// 用户类型定义
interface CurrentUser {
  characterId: string; // 用户角色 ID
  gameAccount: string; // 遊戲帳號
  token: string; // 用户的认证 Token
  tokenExpiry: number; // Token 过期时间（Unix 时间戳，毫秒）
}

// AuthContext 的接口定义
interface AuthContextProps {
  currentUser: CurrentUser | null; // 当前登录用户
  isAuthenticated: boolean; // 是否已登录
  login: (user: CurrentUser) => void; // 登录函数
  logout: () => void; // 登出函数
}

// 创建上下文
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Provider 组件
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(() => {
    const storedUser = localStorage.getItem("currentUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const isAuthenticated = !!currentUser;

  // 登录函数
  const login = (user: CurrentUser) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  // 登出函数
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    // window.location.reload(); // 刷新页面，确保状态清除
  };

  // 检查 Token 是否过期
  useEffect(() => {
    if (currentUser?.tokenExpiry) {
      const now = Date.now();
      const timeUntilExpiry = currentUser.tokenExpiry - now;

      if (timeUntilExpiry <= 0) {
        logout();
      } else {
        const timeoutId = setTimeout(logout, timeUntilExpiry);
        return () => clearTimeout(timeoutId); // 清理计时器
      }
    }
  }, [currentUser]);

  // 监控用户是否闲置
  useEffect(() => {
    const idleTimeout = 30 * 60 * 1000; // 30 分钟的闲置时间
    let timeoutId: NodeJS.Timeout;

    const resetIdleTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(logout, idleTimeout);
    };

    window.addEventListener("mousemove", resetIdleTimer);
    window.addEventListener("keydown", resetIdleTimer);

    resetIdleTimer(); // 初始化计时器

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", resetIdleTimer);
      window.removeEventListener("keydown", resetIdleTimer);
    };
  }, [logout]);

  return (
    <AuthContext.Provider
      value={{ currentUser, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 自定义 Hook 用于消费上下文
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth 必须在 AuthProvider 中使用");
  }
  return context;
};
