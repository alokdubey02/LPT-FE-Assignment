import React, { useState } from "react";
import ContactUsIcon from "../assets/ContactUsIcon";
import GiveSuggIcon from "../assets/GiveSuggIcon";
import ReportIcon from "../assets/ReportIcon";
import ShareFeedbackIcon from "../assets/ShareFeedbackIcon";
import Fab from "../components/FAB/Fab";
import "./ToggleUserPage.css";

export default function ToggleUserPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const fabOptions = [
    { label: "Report an issue", component: <ReportIcon />, type: "report" },
    {
      label: "Share Feedback",
      component: <ShareFeedbackIcon />,
      type: "share",
    },
    {
      label: "Give Suggestion",
      component: <GiveSuggIcon />,
      type: "suggestion",
    },
    { label: "Contact Us", component: <ContactUsIcon />, type: "contact" },
  ];

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="toggle-user-page">
      <>
        <h1>{isLoggedIn ? "Click to Log Out👇" : "Click to Log In👇"}</h1>
        <button
          onClick={toggleLoginStatus}
          style={{ border: "2px solid white", padding: "5px" }}
          className="toggle-button"
        >
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </>
      <Fab options={fabOptions} isLoggedIn={isLoggedIn} />
    </div>
  );
}
