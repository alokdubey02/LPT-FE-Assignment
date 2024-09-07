import React, { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import "./Fab.css";
import CloseIcon from "../../assets/CloseIcon";
import EditIcon from "../../assets/EditIcon";

export default function Fab({ options, isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [fabOpen, setFabOpen] = useState(true);

  const toggleFab = () => {
    setFabOpen(false);
    setIsOpen(!isOpen);
    if (isOpen) {
      setSelectedOption(null);
    }
  };

  const handleOptionClick = (option) => {
    setFabOpen(true);
    setSelectedOption(option);
  };

  return (
    <>
      <div className="fab-container">
        {isOpen && (
          <div className={`fab-options ${fabOpen === true ? "open" : "close"}`}>
            {options.map((option) => (
              <div key={option.label} onClick={() => handleOptionClick(option)}>
                {fabOpen === false ? (
                  <div
                    style={{
                      display: "flex",
                      gap: 15,
                      height: "10vh",
                    }}
                  >
                    <div className="fab-option-label">{option.label}</div>
                    <div className="fab-selected-component">
                      {option.component}
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      gap: 15,
                    }}
                  >
                    {option.component}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        <div style={{ marginTop: "0px" }} onClick={toggleFab}>
          {isOpen ? <CloseIcon /> : <EditIcon />}
        </div>
      </div>
      {selectedOption && (
        <FeedbackForm
          option={selectedOption}
          closeForm={() => {
            setSelectedOption(null);
            setFabOpen(true);
          }}
          isLoggedIn={isLoggedIn}
        />
      )}
    </>
  );
}
