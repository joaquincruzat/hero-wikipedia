import { Routes, Route } from "react-router-dom";

import { LoginPage } from "../auth";

import { HeroesRoutes } from "../heroes-app";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
