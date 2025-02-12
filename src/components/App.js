import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";
import dummyData from "../data/dummyData";
import profile1 from "../assets/profile1.png"; // 이미지 import

const App = () => {
  const [memories, setMemories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(16); // 초기 표시할 카드 개수

  useEffect(() => {
    const updatedMemories = dummyData.map((memory) => ({
      ...memory,
      imageUrl: profile1, // 이미지 경로 업데이트
    }));
    setMemories(updatedMemories);
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // 4개씩 더 보기
  };

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {memories.slice(0, visibleCount).map((memory) => (
        <MemoryCard key={memory.id} memory={memory} />
      ))}
      {visibleCount < memories.length && (
        <button onClick={loadMore} className="load-more-btn">
          더보기
        </button>
      )}
    </div>
  );
};

export default App;
