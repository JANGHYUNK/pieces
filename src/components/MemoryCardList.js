import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";
import "./MemoryList.css";
import dummyData from "../data/dummyData";
import moreImage from "../assets/more.png"; // 이미지 import 추가

const MemoryCardList = ({ filter, searchQuery, sortOrder }) => {
  const [memories, setMemories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(16);

  useEffect(() => {
    setMemories(dummyData); // 더미 데이터 할당
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const filteredMemories = memories
    .filter((memory) =>
      filter === "public" ? memory.isPublic : !memory.isPublic
    )
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
    <div>
      <div className="memory-grid">
        {filteredMemories.slice(0, visibleCount).map((memory) => (
          <MemoryCard key={memory.id} memory={memory} />
        ))}
      </div>

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

export default MemoryCardList;
