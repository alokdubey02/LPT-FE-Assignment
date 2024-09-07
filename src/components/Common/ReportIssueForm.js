import React, { useState } from "react";
import "./ReportIssueForm.css";

export default function ReportIssueForm({ option, closeForm, isLoggedIn }) {
  const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sections = [
    "Homepage",
    "Interview Question",
    "Profile Page",
    "Concept Card",
    "Other",
  ];
  console.log("loggin status " + isLoggedIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackData = {
      option: option.label,
      feedback: inputValue,
    };
    console.log("Report Issue Submitted:", feedbackData);
    setIsSubmitted(true);
    setTimeout(() => {
      closeForm();
    }, 2000);
  };

  return (
    <div className="report-issue-form">
      {!isSubmitted ? (
        <>
          <div
            style={{
              padding: "4px 20px",
              border: "none",
              fontSize: "20px",
              marginBottom: 0,
            }}
          >
            Let us know about the
            <span style={{ fontWeight: "bold" }}> Issue </span>
            you are facing right now!
            <div
              style={{
                padding: 0,
                margin: 0,
                position: "absolute",
                left: "15px",
              }}
            >
              ________________________________
            </div>
          </div>
          <div
            style={{
              color: "black",
              marginTop: "15px",
              paddingTop: "10px",
              border: "none",
              textAlign: "left",
              fontSize: "16px",
            }}
          >
            Choose a section
          </div>

          <select defaultValue={sections[0]}>
            {sections.map((section, index) => (
              <option key={index} value={section}>
                {section}
              </option>
            ))}
          </select>
          <div
            style={{
              color: "black",
              height: "auto",
              padding: 0,
              border: "none",
              textAlign: "left",
              fontSize: "16px",
            }}
          >
            Describe the issue in detail <span style={{ color: "red" }}>*</span>
          </div>

          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Write here..."
            required
          />
          {!isLoggedIn && (
            <>
              <div
                style={{
                  color: "black",
                  // marginTop: "15px",
                  // paddingTop: "10px",
                  border: "none",
                  textAlign: "left",
                  fontSize: "16px",
                }}
              >
                Enter your email to receive an update{" "}
                <span style={{ color: "red" }}>*</span>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </>
          )}
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!inputValue.trim()}
            className={inputValue.trim() ? "enabled" : "disabled"}
          >
            Submit
          </button>
        </>
      ) : (
        <div className="thank-you-message">
          Thanks for bringing the issue to our attention. We'll review it
          shortly and provide an update soon!
        </div>
      )}
    </div>
  );
}
