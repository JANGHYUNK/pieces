import React from "react";
import flowerImage from "../assets/flower.png";
import profile from "../assets/profile.png";
import GroupActions from "./GroupActions"; // 버튼 컴포넌트 추가
import "./GroupInfo.css";

const GroupInfo = () => {
  return (
    <div className="group-container">
      {/* 왼쪽: 대표 이미지 + 그룹 설명 */}
      <div className="group-left">
        <img src={profile} alt="대표 이미지" />
        <div className="group-info">
          <p>D+265 | 공개</p>
          <h2>달봉이네 가족</h2>
          <p>추억 8 | 그룹 공감 1.5K</p>
          <p>서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.</p>

          {/* 획득 배지 */}
          <div className="badges">
            <span>🌿 7일 연속 게시글 등록</span>
            <span>🌻 그룹 공감 1만 개 이상 받기</span>
            <span>💖 추억 공감 1만 개 이상 받기</span>
          </div>
        </div>
      </div>

      {/* 오른쪽: 그룹 수정/삭제 버튼 + 공감 버튼 */}
      <div className="group-right">
        <GroupActions /> {/* ✅ 중복된 버튼 코드 제거하고 컴포넌트로 대체 */}
        <div className="empathy-btn">
          <img src={flowerImage} alt="공감" />
          <button>공감 보내기</button>
        </div>
      </div>
    </div>
  );
};

export default GroupInfo;
