import React from "react";
import ContactForm from "../Common/ContactForm";
import ReportIssueForm from "../Common/ReportIssueForm";
import ShareFeedbackForm from "../Common/ShareFeedbackForm";
import SuggestionForm from "../Common/SuggestionForm";
import "./FeedbackForm.css";

export default function FeedbackForm({ isLoggedIn, closeForm, option }) {
  return (
    // <div className="feedback-container">

    <div className="feedback-form">
      {option.type === "report" && (
        <ReportIssueForm
          option={option}
          closeForm={closeForm}
          isLoggedIn={isLoggedIn}
        />
      )}
      {option.type === "share" && (
        <ShareFeedbackForm
          option={option}
          isLoggedIn={isLoggedIn}
          closeForm={closeForm}
        />
      )}
      {option.type === "suggestion" && (
        <SuggestionForm
          option={option}
          isLoggedIn={isLoggedIn}
          closeForm={closeForm}
        />
      )}
      {option.type === "contact" && (
        <ContactForm
          option={option}
          isLoggedIn={isLoggedIn}
          closeForm={closeForm}
        />
      )}
    </div>
    // </div>
  );
}
