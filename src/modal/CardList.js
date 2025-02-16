import React, { useState } from "react";
import "./CardList.css";
import profile1 from "../assets/profile1.png";

const CardList = ({ memories, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2 className="modal-title">추억 목록</h2>
        <div className="memory-grid">
          {memories.map((memory) => (
            <div key={memory.id} className="memory-card">
              {memory.isPublic ? (
                <img
                  src={memory.imageUrl || profile1}
                  alt={memory.title}
                  className="memory-image"
                />
              ) : (
                <div className="hidden-image">🔒 비공개</div>
              )}
              <div className="memory-content">
                <h2 className="memory-title">{memory.title}</h2>
                <div className="memory-footer">
                  <span className="location">{memory.location}</span>
                  <span className="date">{memory.createdAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
