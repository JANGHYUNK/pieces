import axios from "axios";

const api = axios.create({
  baseURL: "https://codeit-zogakzip-backend.onrender.com", // API의 기본 URL
  headers: {
    "Content-Type": "application/json",
  },
});

// src/api/api.js

export const fetchMemory = async (postId) => {
  try {
    const response = await fetch(
      `https://codeit-zogakzip-backend.onrender.com/api/posts/${postId}`
    );
    if (!response.ok)
      throw new Error("메모리 데이터를 불러오는 데 실패했습니다.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchComments = async (postId) => {
  try {
    const response = await fetch(
      `https://codeit-zogakzip-backend.onrender.com/api/posts/${postId}/comments`
    );
    if (!response.ok)
      throw new Error("댓글 데이터를 불러오는 데 실패했습니다.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const likeMemory = async (postId) => {
  try {
    const response = await fetch(
      `https://codeit-zogakzip-backend.onrender.com/api/posts/${postId}/like`,
      {
        method: "POST",
      }
    );

    if (!response.ok) throw new Error("추억 공감에 실패했습니다.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const postMemory = async (groupId = 13, memoryData) => {
  try {
    const response = await fetch(
      `https://codeit-zogakzip-backend.onrender.com/api/groups/${groupId}/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(memoryData),
      }
    );

    if (!response.ok) throw new Error("게시글 등록에 실패했습니다.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateMemory = async (postId, memoryData) => {
  try {
    const response = await fetch(
      `https://codeit-zogakzip-backend.onrender.com/api/posts/${postId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(memoryData),
      }
    );

    if (!response.ok) throw new Error("게시글 수정에 실패했습니다.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteMemory = async (postId, memoryData) => {
  try {
    const response = await fetch(
      `https://codeit-zogakzip-backend.onrender.com/api/posts/${postId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(memoryData),
      }
    );

    if (!response.ok) throw new Error("게시글 삭제에 실패했습니다.");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const postComment = async (postId, commentData) => {
  try {
    const response = await fetch(
      `https://codeit-zogakzip-backend.onrender.com/api/posts/${postId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      }
    );

    if (!response.ok) throw new Error("댓글 등록에 실패했습니다.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateComment = async (commentId, commentData) => {
  try {
    const response = await fetch(
      `https://codeit-zogakzip-backend.onrender.com/api/comments/${commentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      }
    );

    if (!response.ok) throw new Error("댓글 수정에 실패했습니다.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteComment = async (commentId, commentData) => {
  try {
    const response = await fetch(
      `https://codeit-zogakzip-backend.onrender.com/api/comments/${commentId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      }
    );

    if (!response.ok) throw new Error("댓글 삭제에 실패했습니다.");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const imageToUrl = async (image) => {
  try {
    const response = await fetch(
      `https://codeit-zogakzip-backend.onrender.com/api/image`,
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify(image),
      }
    );

    if (!response.ok) throw new Error("이미지 변환에 실패했습니다.");
    return await response.json().imageToUrl;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const privateMemoryAccess = async (postId, password) => {
  try {
    const response = await fetch(
      `https://codeit-zogakzip-backend.onrender.com/api/posts/${postId}/verify-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(password),
      }
    );

    if (!response.ok) throw new Error("게시글 조회에 실패했습니다.");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default api;
