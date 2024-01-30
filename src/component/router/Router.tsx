import { Routes, Route } from "react-router-dom";
import { Top } from "../pages/Top/top";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
    </Routes>
  );
};
