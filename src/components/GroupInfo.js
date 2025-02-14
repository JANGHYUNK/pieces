import React from "react";
import "./GroupInfo.css";
import profileImage from "../assets/profile.png";
import likeButton from "../assets/like_button.png";

const GroupInfo = () => {
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

      {/* 오른쪽 섹션: 공감 버튼 */}
      <div className="group-right">
        <button className="like-button" onClick={handleLikeClick}>
          <img src={likeButton} alt="공감 보내기" />
        </button>
      </div>
    </div>
  );
};

export default GroupInfo;
