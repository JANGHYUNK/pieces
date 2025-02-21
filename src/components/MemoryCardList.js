import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MemoryCard from "./MemoryCard";
import "./MemoryList.css";
import api from "../api/api"; // axios API 파일 불러오기
import moreImage from "../assets/more.png";
import blockImage from "../assets/block.png";

const MemoryCardList = ({ groupId, filter, searchQuery, sortOrder }) => {
  const [memories, setMemories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(16);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMemories = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/api/groups/${groupId}/posts`);

        // 수정된 부분: response.data.data로 추억 데이터를 가져옴
        setMemories(response.data.data);
      } catch (error) {
        console.error("추억 데이터를 불러오는 데 실패했습니다.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMemories();
  }, [groupId]); // groupId가 바뀔 때마다 실행

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;
  };

  // `memories`가 배열인지 확인한 후 필터링 및 정렬을 수행
  const filteredMemories = Array.isArray(memories)
    ? memories
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
        )
    : [];

  if (loading) {
    return <div>로딩 중...</div>; // 로딩 상태
  }

  return (
    <div>
      {filteredMemories.length === 0 ? (
        <div className="empty-memory">
          <img src={blockImage} alt="게시된 추억 없음" className="block-img" />
          <p className="empty-text">게시된 추억이 없습니다.</p>
          <p className="empty-subtext">첫 번째 추억을 올려보세요!</p>
        </div>
      ) : (
        <>
          <div className="memory-grid">
            {filteredMemories.slice(0, visibleCount).map((memory) => (
              <div
                key={memory.id}
                onClick={() => navigate(`/groups/posts/${memory.id}`)} // 백틱 사용하여 수정
                style={{ cursor: "pointer" }}
              >
                <MemoryCard
                  memory={{
                    ...memory,
                    createdAt: formatDate(memory.createdAt),
                  }}
                />
              </div>
            ))}
          </div>

          {visibleCount < filteredMemories.length && (
            <div className="load-more-container">
              <button onClick={loadMore} className="load-more-btn">
                <img src={moreImage} alt="더보기" className="load-more-image" />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MemoryCardList;
