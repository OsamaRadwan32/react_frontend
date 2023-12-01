import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "../pages/sigin";
import TableData from "../pages/tableData";
import Upload from "../pages/upload";

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/data" element={<TableData />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}
