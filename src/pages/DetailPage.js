/* 현재 사용하지 않는페이지 나중에 컴포넌트를 모아서 DetailPage에 렌더링할것! */

import React, { useState, useEffect } from "react";
import EditGroupModal from "../components/EditGroupModal";
import MemoryCard from "../components/MemoryCard";
import profile1 from "../assets/profile1.png";
import dummyData from "../data/dummyData";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    setMemories(
      dummyData.map((memory) => ({
        ...memory,
        imageUrl: profile1, // 직접 import한 이미지 사용
      }))
    );
  }, []);

  // 새로운 추억 추가 함수
  const addMemory = (newMemory) => {
    setMemories((prevMemories) => [newMemory, ...prevMemories]); // 최신순 정렬
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* 추억 목록 표시 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {memories.length > 0 ? (
          memories.map((memory, index) => (
            <MemoryCard key={index} memory={memory} />
          ))
        ) : (
          <p>추억이 없습니다.</p>
        )}
      </div>

      <button onClick={() => setIsModalOpen(true)}>추억 올리기</button>

      {isModalOpen && (
        <EditGroupModal
          onClose={() => setIsModalOpen(false)}
          onAddMemory={addMemory}
        />
      )}
    </div>
  );
};

export default App;
