import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function HomePageLayout() {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
      </main>
      <footer style={footerStyle}>
        <h3>
          All rights reserved. Made By{" "}
          <a
            href="https://waleed-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            funkaarts
          </a>
        </h3>
      </footer>
    </>
  );
}

const footerStyle = {
  marginTop: 10,
  textAlign: "center" as any,
  height: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "var(--themeMain)",
  color: "#fff",
};
