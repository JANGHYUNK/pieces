import React from "react";
import { Route, Routes } from "react-router-dom";
import GroupInfo from "./GroupInfo";
import PostDetail from "./PostDetail";
import MemoryCreatePage from "../pages/CreateGroupPage";

const App = () => {
  return (
    <Routes>
      <Route path="/group/info" element={<GroupInfo />} />
      <Route path="/groups/posts/create" element={<MemoryCreatePage />} />
      {/*"/groups/:groupId/posts/create"*/}
      <Route path="/groups/posts/:id" element={<PostDetail />} />
    </Routes>
  );
};

export default App;
