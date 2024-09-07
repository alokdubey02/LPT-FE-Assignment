import React, { useState } from "react";
import "./SuggestionForm.css";

export default function SuggestionForm({ option, isLoggedIn, closeForm }) {
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const sections = [
    "Homepage",
    "Feature Request",
    "Profile Page",
    "User Experience",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const suggestionData = {
      option: option.label,
      suggestion: inputValue,
      email: isLoggedIn ? "user@example.com" : email,
    };
    console.log("Suggestion Submitted:", suggestionData);
    setIsSubmitted(true);
    setTimeout(() => {
      closeForm();
    }, 2000);
  };

  return (
    <div className="suggestion-form">
      {!isSubmitted ? (
        <>
          <div
            style={{ padding: "4px 20px", fontSize: "18px", marginBottom: 0 }}
          >
            Share your
            <span style={{ fontWeight: "bold" }}> Suggestion </span> with us for
            a chance to earn rewards!
            <div
              style={{
                padding: 0,
                margin: 0,
                position: "absolute",
                left: "15px",
              }}
            >
              ____________________________________
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
              // marginTop: "15px",
              paddingTop: "10px",
              border: "none",
              textAlign: "left",
              fontSize: "16px",
            }}
          >
            Describe your suggestion in detail{" "}
            <span style={{ color: "red" }}>*</span>
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
                Enter your email to receive an update
                <span style={{ color: "brown" }}>*</span>{" "}
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
          Thanks for your valuable Suggestion!
        </div>
      )}
    </div>
  );
}
