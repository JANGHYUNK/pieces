import React from "react";
import profileImage from "../assets/profile.png";

const GroupInfo = () => {
  return (
    <div className="group-info">
      <div className="group-image">
        <img src={profileImage} alt="대표 이미지" />
      </div>
      <div className="group-details">
        <p className="group-days">D+265 | 공개</p>
        <h1 className="group-title">달봉이네 가족</h1>
        <p className="group-stats">추억 8 | 그룹 공감 1.5K</p>
        <p className="group-desc">
          서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.
        </p>
        <div className="group-badges">
          <span className="badge">🍇 7일 연속 게시글 등록</span>
          <span className="badge">🌻 그룹 공감 1만 개 이상 받기</span>
          <span className="badge">💖 추억 공감 1만 개 이상 받기</span>
        </div>
      </div>
    </div>
  );
};

export default GroupInfo;
