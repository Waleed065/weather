import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Overlay from "../components/Overlay";
import Snackbar from "../components/Snackbar";

export default function HomePageLayout() {
  return (
    <>
      <Navbar />
      <Outlet />

      <Footer />
      <Snackbar />
      <Overlay />
    </>
  );
}
