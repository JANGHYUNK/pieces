import React, { useState } from "react";
import EditGroupModal from "../components/EditGroupModal";
import MemoryCard from "../components/MemoryCard";
import dummyData from "../data/dummyData";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memories, setMemories] = useState(dummyData); // 초기값을 더미 데이터로 설정

  // 새로운 추억 추가 함수
  const addMemory = (newMemory) => {
    setMemories((prevMemories) => [newMemory, ...prevMemories]); // 최신순 정렬
  };

  // 모달 닫기 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>추억 목록</h2>

      {/* 추억 목록 표시 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
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
        <EditGroupModal onClose={closeModal} onAddMemory={addMemory} />
      )}
    </div>
  );
};

export default App;
