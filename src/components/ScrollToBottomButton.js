import React from 'react';

const ScrollToBottomButton = ({ onClick }) => {
  return (
    <button className="scroll-to-bottom-button" onClick={onClick}>
      Scroll to Bottom
    </button>
  );
};

export default ScrollToBottomButton;
