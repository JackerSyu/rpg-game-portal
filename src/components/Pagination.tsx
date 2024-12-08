import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  maxVisiblePages?: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  maxVisiblePages = 5,
  onPageChange,
}) => {
  // 動態計算可見頁碼
  const calculateVisiblePages = (): number[] => {
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // 調整頁碼範圍
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const visiblePages = calculateVisiblePages();

  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        {/* 左跳躍按鈕 */}
        {totalPages > 1 && (
          <li>
            <button
              className="pagination-link"
              onClick={() => onPageChange(Math.max(currentPage - 5, 1))}
              disabled={currentPage === 1}
            >
              &lt; {/* 跳回 5 頁 */}
            </button>
          </li>
        )}

        {/* 動態頁碼按鈕 */}
        {visiblePages.map((page) => (
          <li key={page}>
            <button
              className={`pagination-link ${
                page === currentPage ? "is-current" : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        {/* 右跳躍按鈕 */}
        {totalPages > 1 && (
          <li>
            <button
              className="pagination-link"
              onClick={() =>
                onPageChange(Math.min(currentPage + 5, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              &gt; {/* 跳到 5 頁後 */}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
