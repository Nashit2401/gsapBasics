import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dots from "./pages/Dots";
import AnimatedButton from "./pages/AnimatedButton";
import ImageRev from "./pages/ImageRev";
const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dots" element={<Dots />} />
        <Route path="/imageRev" element={<ImageRev />} />
        <Route path="/button" element={<AnimatedButton />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
