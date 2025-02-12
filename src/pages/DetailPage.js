import React from "react";
import dummyData from "../data/dummyData";
import MemoryCard from "../components/MemoryCard";

const DetailPage = () => {
  return (
    <div>
      {dummyData.map((memory) => (
        <MemoryCard key={memory.id} memory={memory} />
      ))}
    </div>
  );
};

export default DetailPage;
