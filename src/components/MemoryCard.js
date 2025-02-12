import React from "react";
import "./MemoryCard.css";

const MemoryCard = ({ memory }) => {
  return (
    <div className="memory-card">
      {/* 이미지 */}
      <img src={memory.imageUrl} alt={memory.title} className="memory-image" />

      {/* 카드 내용 */}
      <div className="memory-content">
        <div className="memory-header">
          <span className="nickname">{memory.name}</span>
          <span className="divider">|</span>
          <span className="visibility">
            {memory.isPublic ? "공개" : "비공개"}
          </span>
        </div>

        {/* 게시글 제목 */}
        <h2 className="memory-title">{memory.title}</h2>

        {/* 해시태그 */}
        <div className="memory-tags">
          {memory.tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))}
        </div>

        {/* 하단 정보 (위치, 날짜, 좋아요, 댓글) */}
        <div className="memory-footer">
          <span className="location">{memory.location}</span>
          <span className="date">{memory.createdAt}</span>
          <div className="stats">
            <span className="icon">❤️ {memory.likeCount}</span>
            <span className="icon">💬 {memory.commentCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
