import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/api"; // API 요청 파일
import "./GroupInfo.css";
import flowerImage from "../assets/flower.png";
import likeButton from "../assets/like_button.png";
import Modify from "../modal/GroupModify"; // 수정 모달
import GroupDelete from "../modal/GroupDelete"; // 삭제 모달
import MemoryList from "./MemoryList";
import logo from "../assets/logo.png";
import badge1 from "../assets/badge1.png";
import badge2 from "../assets/badge2.png";
import badge3 from "../assets/badge3.png";
import profile from "../assets/profile.png";

// 배지 이미지 매핑
const badgeMap = {
  "추억 수 20개 이상 등록": badge1,
  "그룹 공감 1만 개 이상 받기": badge2,
  "그룹 생성 후 1년 달성": badge3,
};

const GroupInfo = () => {
  const { groupId } = useParams(); // URL에서 groupId 가져오기
  const [groupData, setGroupData] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]); // 게시글 상태 추가

  // ✅ 그룹 정보 가져오기 (API 연동)
  const fetchGroupData = useCallback(async () => {
    try {
      const response = await api.get(`/api/groups/${groupId}`);
      setGroupData(response.data);
    } catch (error) {
      console.error("그룹 정보를 불러오는 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  }, [groupId]); // 의존성 배열에 groupId 추가

  // 게시글 목록 가져오기
  const fetchPosts = useCallback(async () => {
    try {
      const response = await api.get(`/api/groups/${groupId}/posts`);
      setPosts(response.data); // 게시글 목록을 상태에 저장
    } catch (error) {
      console.error("게시글 목록을 불러오는 중 오류 발생:", error);
    }
  }, [groupId]); // groupId 의존성 추가

  // 컴포넌트가 마운트될 때 그룹 정보와 게시글 목록을 가져옴
  useEffect(() => {
    fetchGroupData();
    fetchPosts(); // 게시글 목록도 함께 가져옴
  }, [fetchGroupData, fetchPosts]); // 의존성 배열에 fetchPosts 추가

  // ✅ 공감(좋아요) 버튼 클릭 시 API 요청
  const handleLike = async () => {
    try {
      await api.post(`/api/groups/${groupId}/like`);
      fetchGroupData(); // 최신 데이터 다시 불러오기
    } catch (error) {
      console.error("공감을 보내는 중 오류 발생:", error);
    }
  };

  if (loading) return <p>로딩 중...</p>;
  if (!groupData) return <p>그룹 정보를 불러오지 못했습니다.</p>;

  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="조각집 로고" className="logo" />
        </Link>
      </header>
      <div className="group-container">
        {/* 왼쪽 섹션: 대표 이미지 및 그룹 정보 */}
        <div className="group-left">
          <img
            //src={groupData.imageUrl || "/default-profile.png"}
            src={profile}
            alt="대표 이미지"
            className="profile-img"
          />
          <div className="group-info">
            <div className="group-title-container">
              <h2>{groupData.name}</h2>
              <p className="group-meta">
                D+
                {Math.floor(
                  (new Date() - new Date(groupData.createdAt)) /
                    (1000 * 60 * 60 * 24)
                )}{" "}
                | {groupData.isPublic ? "공개" : "비공개"}
              </p>
            </div>
            <p className="group-stats">
              추억 {groupData.postCount} | 그룹 공감 {groupData.likeCount}
            </p>
            <p className="group-description">{groupData.introduction}</p>

            {/* 🔹 획득 배지 */}
            <h5 className="badge-title">획득 배지</h5>
            <div className="badges">
              {groupData.badges.map((badge, index) => (
                <img
                  key={index}
                  src={badgeMap[badge] || "/default-badge.png"}
                  alt={badge}
                  className="badge-img"
                />
              ))}
            </div>
          </div>
        </div>

        {/* 오른쪽 섹션: 수정/삭제 버튼 + 꽃 이미지 + 공감 버튼 */}
        <div className="group-right">
          <div className="group-actions">
            <button
              className="edit-button"
              onClick={() => setIsEditModalOpen(true)}
            >
              그룹 정보 수정하기
            </button>
            <button
              className="delete-button"
              onClick={() => setIsDeleteModalOpen(true)}
            >
              그룹 삭제하기
            </button>
          </div>
          <div className="flower-container">
            <img src={flowerImage} alt="공감" className="flower-img" />
            <button className="like-button" onClick={handleLike}>
              <img src={likeButton} alt="공감 보내기" />
            </button>
          </div>
        </div>

        {/* 🔹 수정 모달 */}
        {isEditModalOpen && (
          <Modify
            onClose={() => setIsEditModalOpen(false)}
            groupData={groupData}
          />
        )}

        {/* 🔹 삭제 모달 */}
        {isDeleteModalOpen && (
          <GroupDelete
            onClose={() => setIsDeleteModalOpen(false)}
            groupId={groupId}
          />
        )}
      </div>
      <MemoryList posts={posts} /> {/* 게시글 목록을 MemoryList에 전달 */}
    </>
  );
};

export default GroupInfo;
