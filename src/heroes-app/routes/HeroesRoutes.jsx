import React from "react";
import { Navbar } from "../../ui";
import { MarvelPage, DcPage, SearchPage, HeroByIdPage } from "../../heroes-app";
import { Routes, Navigate, Route } from "react-router-dom";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="m-3">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroByIdPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
