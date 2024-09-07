import React, { useState } from "react";
import "./ShareFeedbackForm.css";

export default function ShareFeedbackForm({ option, isLoggedIn, closeForm }) {
  const [inputValue, setInputValue] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [email, setEmail] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackData = {
      option: option.label,
      feedback: inputValue,
      email: isLoggedIn && !anonymous ? "user@example.com" : email,
    };
    console.log("Feedback Submitted:", feedbackData);
    setIsSubmitted(true);
    setTimeout(() => {
      closeForm();
    }, 2000);
  };

  return (
    <div className="share-feedback-form">
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
            Let us know your
            <span style={{ fontWeight: "bold" }}> Feedback </span>
            about us!
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

          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Write here..."
            required
          />
          {isLoggedIn ? (
            <label>
              <input
                type="checkbox"
                checked={anonymous}
                onChange={() => setAnonymous(!anonymous)}
              />
              Send feedback anonymously
            </label>
          ) : (
            <>
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
          Thanks for your valuable feedback!
        </div>
      )}
    </div>
  );
}
