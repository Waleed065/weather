import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OverLay from "../components/OverLay";
import Snackbar from "../components/Snackbar";

export default function HomePageLayout() {
  return (
    <>
      <OverLay />

      <Navbar />
      <Outlet />

      <Footer />
      <Snackbar />
    </>
  );
}
