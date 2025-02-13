import React from "react";

const GroupModify = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2>그룹 정보 수정</h2>

        <label>그룹명</label>
        <input type="text" defaultValue="달봉이네 가족" />

        <label>대표 이미지</label>
        <div className="file-upload">
          <input type="text" defaultValue="dalbong.jpg" disabled />
          <button>파일 선택</button>
        </div>

        <label>그룹 소개</label>
        <textarea placeholder="그룹을 소개해 주세요"></textarea>

        <label>그룹 공개 선택</label>
        <div className="toggle">
          <span>공개</span>
          <input type="checkbox" />
        </div>

        <label>수정 권한 인증</label>
        <input type="password" placeholder="비밀번호를 입력해 주세요" />

        <button className="submit-button">수정하기</button>
      </div>
    </div>
  );
};

export default GroupModify;
