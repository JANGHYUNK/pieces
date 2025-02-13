import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";
import dummyData from "../data/dummyData";
import profile1 from "../assets/profile1.png";
import moreImage from "../assets/more.png";
import "./App.css";
import "./Header";
import Header from "./Header";

const App = () => {
  const [memories, setMemories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(16);
  const [filter, setFilter] = useState("public");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");

  useEffect(() => {
    const updatedMemories = dummyData.map((memory) => ({
      ...memory,
      imageUrl: profile1,
    }));
    setMemories(updatedMemories);
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const addMemory = (newMemory) => {
    setMemories((prevMemories) => [newMemory, ...prevMemories]);
  };

  // 🔥 공개/비공개 필터 및 검색 적용
  const filteredMemories = memories
    .filter((memory) => (filter === "public" ? memory.isPublic : true)) // 공개일 경우 공개된 것만 필터링
    .filter(
      (memory) =>
        memory.title.includes(searchQuery) ||
        memory.tags.some((tag) => tag.includes(searchQuery))
    )
    .sort((a, b) =>
      sortOrder === "latest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : b.likeCount - a.likeCount
    );

  return (
    <div className="app-container">
      <Header />
      <h1 className="title">추억 목록</h1>
      {/* 공개/비공개 버튼 및 검색 입력 */}
      <div className="controls">
        <button
          onClick={() => setFilter("public")}
          className={filter === "public" ? "active" : ""}
        >
          공개
        </button>
        <button
          onClick={() => setFilter("private")}
          className={filter === "private" ? "active" : ""}
        >
          비공개
        </button>
        <div className="search-container">
          <input
            type="text"
            placeholder="태그 혹은 제목을 입력해주세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="latest">최신순</option>
          <option value="likes">공감순</option>
        </select>
        <button onClick={() => addMemory(dummyData[0])}>추억 올리기</button>
      </div>
      {/* 추억 카드 리스트 */}
      <div className="memory-grid">
        {filteredMemories.slice(0, visibleCount).map((memory) => (
          <MemoryCard
            key={memory.id}
            memory={{ ...memory, hideImage: filter === "private" }}
          />
        ))}
      </div>
      {/* 더보기 버튼 */}
      {visibleCount < filteredMemories.length && (
        <div className="load-more-container">
          <button onClick={loadMore} className="load-more-btn">
            <img src={moreImage} alt="더보기" className="load-more-image" />
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
