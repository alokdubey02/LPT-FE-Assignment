import React from "react";
import "./LandingPage.css";
import ToggleUserPage from "./ToggleUserPage";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page-content">
        <div>LandingPage</div>
        <ToggleUserPage />
      </div>
    </div>
  );
}
