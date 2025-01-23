import React from 'react';
import '../style/App.css';
import TypingEffect from './TypingEffect';

function Content({ isNightMode }) {
  const handleButtonClick = (url) => {
    // Open the specified URL in a new tab
    window.open(url, '_blank');
  };

  return (
    <div className={`col-lg-8 content ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <h1 className={`mb-3 text-center ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
        <TypingEffect text="Weekly Materials" />
      </h1>

      <div className="container text-center">
        <div className="wrapper-grid">
          <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 1:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/12725')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
          </div>
          {/* <div className={`wrapper mt-1 ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
            <p style={{ display: 'inline' }} className={`week ${isNightMode ? 'night-mode-text' : 'day-mode-text'}`}>
              Discussion 2:
            </p>
            <button
              type="button"
              onClick={() => handleButtonClick('https://beelauuu.github.io/slides/docs/12925')}
              style={{ marginLeft: '10px' }}
              className={`btn ${isNightMode ? 'btn-light' : 'btn-dark'}`}
            >
              Slides
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Content;
