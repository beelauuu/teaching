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
    },
    {
      title: "Discussion 5",
      slidesUrl: "https://beelauuu.github.io/slides/docs/21025",
    },
    {
      title: "Discussion 6",
      slidesUrl: "https://beelauuu.github.io/slides/docs/21225",
      codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/2025/DiscussionSix.zip"
    },
    {
      title: "Discussion 7",
      slidesUrl: "https://beelauuu.github.io/slides/docs/21925",
    },
    {
      title: "Discussion 8",
      slidesUrl: "https://beelauuu.github.io/slides/docs/22425",
    },
    {
      title: "Discussion 9",
      slidesUrl: "https://beelauuu.github.io/slides/docs/22625",
    },
    {
      title: "Discussion 10",
      slidesUrl: "https://beelauuu.github.io/slides/docs/31025",
    },
    {
      title: "Discussion 11",
      slidesUrl: "https://beelauuu.github.io/slides/docs/31225",
      codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/2025/DiscussionEleven.pdf"
    },
    {
      title: "Discussion 12",
      slidesUrl: "https://beelauuu.github.io/slides/docs/32425",
    },
    {
      title: "Discussion 13",
      slidesUrl: "https://beelauuu.github.io/slides/docs/32625",
    },
    {
      title: "Discussion 14",
      slidesUrl: "https://beelauuu.github.io/slides/docs/33125",
    },
    {
      title: "Discussion 15",
      slidesUrl: "https://beelauuu.github.io/slides/docs/40225",
    },
    {
      title: "Discussion 16",
      slidesUrl: "https://beelauuu.github.io/slides/docs/40725",
      codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/2025/DiscussionSixteen.zip"
    },
    {
      title: "Discussion 17",
      slidesUrl: "https://beelauuu.github.io/slides/docs/40925",
    },
    {
      title: "Discussion 18",
      slidesUrl: "https://beelauuu.github.io/slides/docs/41425",
      codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/2025/DiscussionEighteen.zip"
    },
    {
      title: "Discussion 19",
      slidesUrl: "https://beelauuu.github.io/slides/docs/41625",
      codeUrl: "https://github.com/beelauuu/TASite/raw/main/public/discussion/2025/DiscussionNineteen.zip"
    },
    {
      title: "Discussion 20",
      slidesUrl: "https://beelauuu.github.io/slides/docs/42125",
    },
    // {
    //   title: "Discussion 20",
    //   slidesUrl: "https://beelauuu.github.io/slides/docs/42325",
    // },
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
