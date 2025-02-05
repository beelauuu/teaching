import React from "react";
import "../style/App.css";
import TypingEffect from "./TypingEffect";

function Content({ isNightMode }) {
  const handleButtonClick = (url) => {
    // Open the specified URL in a new tab
    window.open(url, "_blank");
  };

  const discussions = [
    { 
      title: "Discussion 1", 
      slidesUrl: "https://beelauuu.github.io/slides/docs/12725", 
      codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/2025/DiscussionOne.zip" 
    },
    { 
      title: "Discussion 2", 
      slidesUrl: "https://beelauuu.github.io/slides/docs/12925" 
    },
    {
      title: "Discussion 3",
      slidesUrl: "https://beelauuu.github.io/slides/docs/20325",
      codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/2025/DiscussionThree.zip"
    },
    {
      title: "Discussion 4",
      slidesUrl: "https://beelauuu.github.io/slides/docs/20525",
    }
  ];

  return (
    <div
      className={`col-lg-8 content ${isNightMode ? "night-mode" : "day-mode"}`}
    >
      <h1
        className={`mb-3 text-center ${isNightMode ? "night-mode-text" : "day-mode-text"}`}
      >
        <TypingEffect text="Weekly Materials" />
      </h1>

      <div className="container text-center">
        <div className="wrapper-grid">
          {discussions.map((discussion) => (
            <div key={discussion.id} className="wrapper mt-1">
              <p style={{ display: 'inline' }} >{discussion.title}:</p>
              
              <button
                type="button"
                onClick={() => handleButtonClick(discussion.slidesUrl)}
                style={{ marginLeft: "10px" }}
                className={`btn ${isNightMode ? "btn-light" : "btn-dark"}`}
              >
                Slides
              </button>
              
              {discussion.codeUrl && (
                <button
                  type="button"
                  onClick={() => handleButtonClick(discussion.codeUrl)}
                  style={{ marginLeft: "10px" }}
                  className={`btn ${isNightMode ? "btn-light" : "btn-dark"}`}
                >
                  Code
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
