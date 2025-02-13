import React, { useState } from "react";
import Modify from "../modal/GroupModify";
import GroupDelete from "../modal/GroupDelete";

const GroupActions = () => {
  const [showModifyModal, setShowModifyModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="group-actions">
      <button onClick={() => setShowModifyModal(true)}>
        그룹 정보 수정하기
      </button>
      <button onClick={() => setShowDeleteModal(true)}>그룹 삭제하기</button>

      {showModifyModal && <Modify onClose={() => setShowModifyModal(false)} />}
      {showDeleteModal && (
        <GroupDelete onClose={() => setShowDeleteModal(false)} />
      )}
    </div>
  );
};

export default GroupActions;
