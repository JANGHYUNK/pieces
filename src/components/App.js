import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";
import dummyData from "../data/dummyData";
import profile1 from "../assets/profile1.png"; // 이미지 import

const App = () => {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    // 이미지 경로를 변경하여 적용
    const updatedMemories = dummyData.map((memory) => ({
      ...memory,
      imageUrl: profile1, // 직접 import한 이미지 사용
    }));
    setMemories(updatedMemories);
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {memories.map((memory) => (
        <MemoryCard key={memory.id} memory={memory} />
      ))}
    </div>
  );
};

export default App;
