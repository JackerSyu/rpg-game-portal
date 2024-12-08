import React, { useState } from "react";
import { dropSearchApiService } from "../core/apiservices/dropSearchApiService";
import { DropData } from "../core/models/dropData";
import Pagination from "../components/Pagination";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const DropSearch: React.FC = () => {
  const [query, setQuery] = useState(""); // 搜索關鍵字
  const [filterQuery, setFilterQuery] = useState(""); // 表格篩選關鍵字
  const [results, setResults] = useState<DropData[]>([]); // 搜索結果
  const [sortColumn, setSortColumn] = useState<string>(""); // 當前排序的列
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // 排序順序
  const [currentPage, setCurrentPage] = useState(1); // 當前頁
  const itemsPerPage = 20; // 每頁顯示數量

  // 主查詢 API
  const handleSearch = async () => {
    const data = await dropSearchApiService(query);
    setResults(data);
    setCurrentPage(1); // 重置頁碼
    setFilterQuery(""); // 清空篩選條件
  };

  // 表格篩選邏輯
  const filteredResults = results.filter((result) => {
    const normalizedFilter = filterQuery.trim().toLowerCase();
    return (
      result.npc_name.toLowerCase().includes(normalizedFilter) ||
      result.locationname.toLowerCase().includes(normalizedFilter) ||
      result.item.toLowerCase().includes(normalizedFilter)
    );
  });

  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);

  const handleSort = (column: keyof DropData) => {
    // 切換排序順序
    const order = column === sortColumn && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortOrder(order);

    // 排序結果
    const sortedResults = [...filteredResults].sort((a, b) => {
      if (a[column] < b[column]) return order === "asc" ? -1 : 1;
      if (a[column] > b[column]) return order === "asc" ? 1 : -1;
      return 0;
    });

    setResults(sortedResults);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">掉落查詢</h1>
        <label className="label has-text-warning">輸入物品名稱進行搜尋</label>

        {/* 主查詢輸入框 */}
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="輸入查詢內容"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="control">
            <button
              className="button is-warning"
              onClick={handleSearch}
              disabled={!query.trim()}
            >
              查詢
            </button>
          </div>
        </div>

        {/* 表格顯示篩選後的結果 */}
        <div className="box mt-5">
          {/* 篩選輸入框 */}
          <div className="field mb-4">
            <label className="label has-text-warning">關鍵字</label>
            <div className="control is-flex is-justify-content-flex-end">
              <input
                className="input is-one-third"
                type="text"
                placeholder="篩選怪物名稱、地點或物品"
                value={filterQuery}
                onChange={(e) => {
                  setFilterQuery(e.target.value);
                  setCurrentPage(1); // 篩選時回到第一頁
                }}
              />
            </div>
          </div>

          <table className="table is-fullwidth is-hoverable">
            <thead>
              <tr>
                <th
                  className="has-text-warning is-clickable"
                  onClick={() => handleSort("npc_name")}
                >
                  怪物名稱
                  {sortColumn === "npc_name" && (
                    <span style={{ verticalAlign: "middle" }}>
                      {sortOrder === "asc" ? (
                        <ArrowUpwardIcon fontSize="small" />
                      ) : (
                        <ArrowDownwardIcon fontSize="small" />
                      )}
                    </span>
                  )}
                </th>
                <th
                  className="has-text-warning is-clickable"
                  onClick={() => handleSort("locationname")}
                >
                  地點
                  {sortColumn === "locationname" && (
                    <span style={{ verticalAlign: "middle" }}>
                      {sortOrder === "asc" ? (
                        <ArrowUpwardIcon fontSize="small" />
                      ) : (
                        <ArrowDownwardIcon fontSize="small" />
                      )}
                    </span>
                  )}
                </th>
                <th
                  className="has-text-warning is-clickable"
                  onClick={() => handleSort("item")}
                >
                  物品
                  {sortColumn === "item" && (
                    <span style={{ verticalAlign: "middle" }}>
                      {sortOrder === "asc" ? (
                        <ArrowUpwardIcon fontSize="small" />
                      ) : (
                        <ArrowDownwardIcon fontSize="small" />
                      )}
                    </span>
                  )}
                </th>
                <th
                  className="has-text-warning is-clickable"
                  onClick={() => handleSort("chance")}
                >
                  機率 {""}
                  {sortColumn === "chance" && (
                    <span style={{ verticalAlign: "middle" }}>
                      {sortOrder === "asc" ? (
                        <ArrowUpwardIcon fontSize="small" />
                      ) : (
                        <ArrowDownwardIcon fontSize="small" />
                      )}
                    </span>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.map((result, index) => (
                <tr key={`${result.mobId}-${index}`}>
                  <td>{result.npc_name}</td>
                  <td>{result.locationname}</td>
                  <td>{result.item}</td>
                  <td>{result.chance}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 分頁按鈕 */}
        {filteredResults.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}

        {/* 無結果提示 */}
        {/* {results.length > 0 && filteredResults.length === 0 && (
          <p className="notification is-warning">沒有符合條件的結果。</p>
        )} */}
      </div>

      {/* 返回按鈕 */}
      <div className="has-text-centered mt-5">
        <a href="/" className="button is-warning ">
          返回首頁
        </a>
      </div>
    </section>
  );
};

export default DropSearch;
