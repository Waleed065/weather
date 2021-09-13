import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Overlay from "../components/OverLay";
import Snackbar from "../components/Snackbar";
import { home } from "../constants/routesConst";
import HomeRoute from "../routes";
import HomePageLayout from "./HomePageLayout";

export default function index() {
  return (
    <>
      <Routes>
        <Route path={home} element={<HomePageLayout />}>
          <Route path={home} element={<HomeRoute />} />

          <Route path={"*"} element={<Navigate to={home} />} />
        </Route>
      </Routes>
      <Overlay />
      <Snackbar />
    </>
  );
}
