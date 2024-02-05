import { Routes, Route } from "react-router-dom";
import { Top } from "../pages/Top/top";
import { Write } from "../pages/Write/write";
import { Search } from "../pages/Search/search";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/write" element={<Write />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};
