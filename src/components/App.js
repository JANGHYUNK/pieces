import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";
import dummyData from "../data/dummyData";
import profile1 from "../assets/profile1.png";
import "./App.css";
import moreImage from "../assets/more.png"; // 더보기 이미지

const App = () => {
  const [memories, setMemories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(16);

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

  return (
    <div className="app-container">
      <div className="memory-grid">
        {memories.slice(0, visibleCount).map((memory) => (
          <MemoryCard key={memory.id} memory={memory} />
        ))}
      </div>

      {visibleCount < memories.length && (
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
