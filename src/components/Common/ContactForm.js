import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm({ option, isLoggedIn, closeForm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = {
      name,
      email,
      question,
    };
    console.log("Contact Us Submitted:", contactData);
    setIsSubmitted(true);
    setTimeout(() => {
      closeForm();
    }, 2000);
  };

  return (
    <div className="contact-form">
      {!isSubmitted ? (
        <>
          <div
            style={{
              padding: "4px 20px",
              border: "none",
              fontSize: "18px",
              marginBottom: 0,
            }}
          >
            Get in
            <span style={{ fontWeight: "bold" }}> Contact with us </span>
            for your queries!
            <div
              style={{
                padding: 0,
                margin: 0,
                position: "absolute",
                left: "15px",
                color: "rgb(223,223,223)",
              }}
            >
              ___________________________________
            </div>
          </div>
          <div
            style={{
              color: "black",
              marginTop: "15px",
              //   paddingTop: "10px",
              border: "none",
              textAlign: "left",
              fontSize: "16px",
            }}
          >
            Your Name <span style={{ color: "red" }}>*</span>
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          {!isLoggedIn && (
            <>
              <div
                style={{
                  color: "black",
                  //   marginTop: "15px",
                  //   paddingTop: "10px",
                  border: "none",
                  textAlign: "left",
                  fontSize: "16px",
                }}
              >
                Your Email <span style={{ color: "red" }}>*</span>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <div
                style={{
                  color: "black",
                  //   marginTop: "15px",
                  //   paddingTop: "10px",
                  border: "none",
                  textAlign: "left",
                  fontSize: "16px",
                }}
              >
                Your Mobile No.
              </div>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                required
              />
            </>
          )}
          <div
            style={{
              color: "black",
              //   marginTop: "15px",
              //   paddingTop: "10px",
              border: "none",
              textAlign: "left",
              fontSize: "16px",
            }}
          >
            What would you like to ask? <span style={{ color: "red" }}>*</span>
          </div>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Write here..."
            required
          />
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!question.trim()}
            className={question.trim() ? "enabled" : "disabled"}
          >
            Submit
          </button>
        </>
      ) : (
        <div className="thank-you-message">
          Thanks for reaching out to us! We will get back to you as soon as
          possible!
        </div>
      )}
    </div>
  );
}
