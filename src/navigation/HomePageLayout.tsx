import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HomePageLayout() {
  return (
    <>
      <Navbar />
      <Outlet />

      <Footer />
    </>
  );
}
