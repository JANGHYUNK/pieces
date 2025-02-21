import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MemoryHeader from "./MemoryListHeader";
import MemoryCardList from "./MemoryCardList";
import "./MemoryList.css";

const MemoryList = ({ groupId }) => {
  const [filter, setFilter] = useState("public");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);
  const navigate = useNavigate();

  const addMemory = () => {
    navigate("/groups/posts/create");
  };

  // Debouncing the search query to avoid unnecessary API calls
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500); // 500ms delay before updating the debounced search query

    return () => clearTimeout(timeoutId); // Cleanup on component unmount or searchQuery change
  }, [searchQuery]);

  return (
    <div className="memory-list-container">
      <MemoryHeader
        filter={filter}
        setFilter={setFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSortOrder={setSortOrder}
        addMemory={addMemory}
      />
      <MemoryCardList
        groupId={groupId}
        filter={filter}
        searchQuery={debouncedSearchQuery} // Using the debounced value
        sortOrder={sortOrder}
      />
    </div>
  );
};

export default MemoryList;
