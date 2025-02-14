import React, { useState } from "react";
import "./GroupInfo.css";
import profileImage from "../assets/profile.png";
import flowerImage from "../assets/flower.png";
import likeButton from "../assets/like_button.png";
import GroupModify from "../modal/GroupModify"; // 그룹 수정 모달
import GroupDelete from "../modal/GroupDelete"; // 그룹 삭제 모달

const GroupActions = ({ onEdit, onDelete }) => {
  return (
    <div className="group-actions">
      <button className="edit-button" onClick={onEdit}>
        수정
      </button>
      <button className="delete-button" onClick={onDelete}>
        삭제
      </button>
    </div>
  );
};

const GroupInfo = () => {
  const [isModifyOpen, setIsModifyOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleLikeClick = () => {
    alert("공감을 보냈습니다!");
  };

  return (
    <div className="group-container">
      {/* 왼쪽 섹션: 대표 이미지 및 그룹 정보 */}
      <div className="group-left">
        <img src={profileImage} alt="대표 이미지" className="profile-img" />
        <div className="group-info">
          <h2>달봉이네 가족</h2>
          <p className="group-meta">D+265 | 공개</p>
          <p className="group-stats">추억 8 | 그룹 공감 1.5K</p>
          <p className="group-description">
            서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.
          </p>

          {/* 획득 배지 */}
          <div className="badges">
            <span className="badge">🌿 7일 연속 게시글 등록</span>
            <span className="badge">🌻 그룹 공감 1만 개 이상 받기</span>
            <span className="badge">💖 추억 공감 1만 개 이상 받기</span>
          </div>
        </div>
      </div>

      {/* 오른쪽 섹션: 공감 버튼 및 수정/삭제 */}
      <div className="group-right">
        <GroupActions
          onEdit={() => setIsModifyOpen(true)}
          onDelete={() => setIsDeleteOpen(true)}
        />
        <div className="empathy-btn">
          <img src={flowerImage} alt="공감" />
          <button className="like-button" onClick={handleLikeClick}>
            <img src={likeButton} alt="공감 보내기" />
          </button>
        </div>
      </div>

      {/* 수정 모달 */}
      {isModifyOpen && <GroupModify onClose={() => setIsModifyOpen(false)} />}

      {/* 삭제 모달 */}
      {isDeleteOpen && <GroupDelete onClose={() => setIsDeleteOpen(false)} />}
    </div>
  );
};

export default GroupInfo;
